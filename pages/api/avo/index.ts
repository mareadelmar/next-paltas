import { IncomingMessage, ServerResponse } from "http";
import DB from "@database/db"

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {

    const db = new DB();
    // dos métodos: getAll() y getById();

    const allEntries = await db.getAll();
    const length = allEntries.length;
    res.setHeader("Content-type", "application/json")
    res.status(200).json({data: allEntries, length: length})
}

export default allAvos;