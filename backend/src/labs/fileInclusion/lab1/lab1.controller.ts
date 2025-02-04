import { Request, Response } from 'express';
import prisma from '../../../utilities/db';

export async function getImage(req: Request, res: Response) {
    try {
        const image = await prisma.fileInclusionLab1.findUnique({
            where: {
                name: req.params.file
            },
            select: {
                id: true,
                path: true,}
            })
        res.status(200).json({
            message: 'Image retrieved successfully',
            pdf: image,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message || 'Error retrieving image.');
    }
}
