export const lab1Controller = async (req, res) => {
    try {
        const command = req.body.command; // Read from JSON body
        console.log("Received command:", command); // Debugging output

        const result = eval(command); // ⚠ Dangerous! Vulnerable to RCE
        return res.status(200).json({ result });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
