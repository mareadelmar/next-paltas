import DB from "@database/db"
import { NextApiRequest, NextApiResponse } from "next";

const singleAvo = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB();
    const id = req.query.id;

    const entry = await db.getById(id as string);
    res.setHeader("Content-type", "application/json");
    //res.status(200).json(entry);

    res.statusCode = 200;
    res.end(JSON.stringify(entry));

}

export default singleAvo;