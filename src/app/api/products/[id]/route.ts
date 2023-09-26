import { NextResponse } from "next/server";
import mongoDBConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    await mongoDBConnect();

    const product = await Product.findOne({ _id: id });
    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Не удалось получить товар", error },
      {
        status: 500,
      }
    );
  }
}
