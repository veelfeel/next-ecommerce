import { IProductDetails } from "@/@types/ProductDetails";

export default async function getSingleProduct(
  id: string
): Promise<IProductDetails> {
  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    const { product } = await response.json();
    return product;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
