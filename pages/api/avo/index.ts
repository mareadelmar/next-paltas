import { IncomingMessage, ServerResponse } from "http";
import DB from "../../../database/db"

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {

    const db = new DB();
    // dos métodos: getAll() y getById();

    const allEntries = await db.getAll();
    const length = allEntries.length;
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json")

    res.end(JSON.stringify({data: allEntries, length: length}))
}

export default allAvos;