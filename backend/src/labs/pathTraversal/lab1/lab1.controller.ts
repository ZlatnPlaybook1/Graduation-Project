import e, { Request, Response } from "express";
import prisma from "../../../utilities/db";

export const products = async (req: Request, res: Response) => {
  const products = await prisma.productToPathTraversalLab1.findMany();
  if (!products) {
    return res.status(404).send("there is no products");
  }
  return res.status(200).json({
    message: "products found",
    data: products,
  });
};

export const product = async (req: Request, res: Response) => {
  const product = await prisma.productToPathTraversalLab1.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  if (!product) {
    return res.status(404).send("No product found");
  }
  return res.status(200).json({
    message: "product found",
    data: product,
  });
};

export const password = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: `root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
_apt:x:100:65534::/nonexistent:/usr/sbin/nologin
mysql:x:101:102:MySQL Server,,,:/nonexistent:/bin/false`,
    });
  } catch (error) {
    return res.status(404).send("No password found");
  }
};
