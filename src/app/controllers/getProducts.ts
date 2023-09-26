import { IProduct } from "@/@types/Product";

export default async function getProducts(): Promise<IProduct[]> {
  try {
    const response = await fetch("http://localhost:3000/api/products");
    const { products } = await response.json();
    return products;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
