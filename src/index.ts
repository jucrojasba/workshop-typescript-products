import { IResponseProduct } from "./interfaces/response-products";
async function getAllProducts():Promise<IResponseProduct[]> {
   const response = await fetch("https://api.escuelajs.co/api/v1/products");
   let data:IResponseProduct[] = await response.json();
   return data;

}
document.addEventListener("DOMContentLoaded", async()=>{
    const products = await getAllProducts();
    products.map((product:IResponseProduct)=>{
        console.log(product);
    });
});