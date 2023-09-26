import { NextResponse } from "next/server";
import mongoDBConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  try {
    await mongoDBConnect();

    const products = await Product.find({});
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Не удалось получить товары", error },
      {
        status: 500,
      }
    );
  }
}
