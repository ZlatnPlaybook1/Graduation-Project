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
        message: `root❌0:0:root:/root:/bin/bash
        daemon❌1:1:daemon:/usr/sbin:/usr/sbin/nologin
        bin❌2:2:bin:/bin:/usr/sbin/nologin
        sys❌3:3:sys:/dev:/usr/sbin/nologin
        sync❌4:65534:sync:/bin:/bin/sync
        games❌5:60:games:/usr/games:/usr/sbin/nologin
        man❌6:12👨/var/cache/man:/usr/sbin/nologin
        lp❌7:7:lp:/var/spool/lpd:/usr/sbin/nologin
        mail❌8:8:mail:/var/mail:/usr/sbin/nologin
        news❌9:9:news:/var/spool/news:/usr/sbin/nologin
        uucp❌10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
        proxy❌13:13:proxy:/bin:/usr/sbin/nologin
        www-data❌33:33:www-data:/var/www:/usr/sbin/nologin
        backup❌34:34:backup:/var/backups:/usr/sbin/nologin
        list❌38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
        irc❌39:39:ircd:/var/run/ircd:/usr/sbin/nologin
        gnats❌41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
        nobody❌65534:65534:nobody:/nonexistent:/usr/sbin/nologin
        _apt❌100:65534::/nonexistent:/usr/sbin/nologin
        mysql❌101:102:MySQL Server,,,:/nonexistent:/bin/false`,
    });
} catch (error) {
    return res.status(404).send("No password found");
};
}

    