import multer from 'multer';
import prisma from "../../../utilities/db";
import path from 'path';

export const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/'); // Directory where files will be stored
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
        },
    }),
    fileFilter: (req, file, cb) => {
        // Get the file extension
        const ext = path.extname(file.originalname).toLowerCase();
        
        // List of potentially dangerous file extensions to block
        const blockedExtensions = [
            '.php', '.php3', '.php4', '.php5', '.php7', 
            '.phtml', '.phpt', '.phar', 
            '.asp', '.aspx', 
            '.jsp', 
            '.exe', '.dll', '.bat', '.cmd', 
            '.sh', '.bash', '.zsh', 
            '.py', 
            '.pl', 
            '.cgi'
        ];

        // List of dangerous MIME types
        const blockedMimeTypes = [
            'application/x-httpd-php',
            'application/x-php',
            'text/x-php',
            'application/php',
            'application/x-executable',
            'application/x-msdownload'
        ];

        // Check if the file extension is blocked
        if (blockedExtensions.includes(ext)) {
            return cb(new Error(`Files with extension ${ext} are not allowed`), false);
        }

        // Check if the MIME type is blocked
        if (blockedMimeTypes.includes(file.mimetype)) {
            return cb(new Error(`Files with MIME type ${file.mimetype} are not allowed`), false);
        }

        // Additional checks for potentially dangerous files
        const dangerousFilePatterns = [
            /\.php/i,  // Catch variations like .php7, .php5, etc.
            /script/i, 
            /^#!/,    // Shebang lines
            /eval\(/i,
            /system\(/i
        ];

        // Check filename against dangerous patterns
        const isDangerous = dangerousFilePatterns.some(pattern => 
            pattern.test(file.originalname)
        );

        if (isDangerous) {
            return cb(new Error('Potentially dangerous file detected'), false);
        }

        // If all checks pass, allow the file
        cb(null, true);
    },
    // Optional: Limit file size
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB file size limit
    }
});

export async function saveFile(req, res)  {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    // Save file details to the database
    const savedFile = await prisma.file.create({
      data: {
        name: file.originalname,
        mimetype: file.mimetype,
        path: file.path,
        userId: req.params.id
      },
    });

    res.status(200).json({
      message: 'File uploaded successfully',
      file: savedFile,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading file.');
  }
}