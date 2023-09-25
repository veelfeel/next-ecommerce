import { NextRequest } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const data = await db;

    //    res.json(movies);
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

console.log(clientPromise);
