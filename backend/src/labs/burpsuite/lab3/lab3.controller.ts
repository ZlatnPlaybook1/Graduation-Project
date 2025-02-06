import { Request, Response } from "express";
import prisma from "../../../utilities/db";

export const images = async (req: Request, res: Response) => {
  const images = await prisma.burPSuiteLab3.findMany({});
  if (!images) {
    return res.status(404).send("No images found");
  }
  return res.status(200).json({
    message: "Images fetched successfully",
    data: images,
  });
};


export const image = async (req: Request, res: Response) => {
  const { id } = req.params;
  const image = await prisma.burPSuiteLab3.findUnique({
    where: {
      id,
    },
  });
  if (!image) {
    return res.status(404).send("No image found");
  }
  return res.status(200).json({
    message: "Images fetched successfully",
    data: image,
  });
}
  