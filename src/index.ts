import { IResponseProduct } from "./interfaces/response-products";
async function getAllProducts():Promise<IResponseProduct[]> {
   const response = await fetch("https://fakestoreapi.com/products");
   let data:IResponseProduct[] = await response.json();
   return data;
}
const container = document.querySelector(".container") as HTMLUListElement;

document.addEventListener("DOMContentLoaded", async()=>{
    const products = await getAllProducts();
    products.map((product:IResponseProduct)=>{
        console.log(product);
        const card = document.createElement("div") as HTMLDivElement;
        const imgBx = document.createElement("div") as HTMLDivElement;
        const image = document.createElement("img") as HTMLImageElement;
        const contentBx = document.createElement("div") as HTMLDivElement;
        const h2 = document.createElement("h2") as HTMLHeadElement
        const size = document.createElement("div") as HTMLDivElement;
        const h3Price = document.createElement("h3") as HTMLHeadElement
        const price = document.createElement("p") as HTMLParagraphElement;
        const buy = document.createElement("a") as HTMLAnchorElement;


        image.src=product.image;
        h2.innerText = product.title.substring(0,18);
        card.className="card";
        imgBx.className="imgBx";
        contentBx.className="contentBx";
        buy.innerHTML="Buy";
        h3Price.innerText="Precio: "
        price.innerHTML=`${product.price}`;

        //Estructura interna de las cartas
        imgBx.appendChild(image);

        contentBx.appendChild(h2);
        contentBx.appendChild(size);
        contentBx.appendChild(buy);

        size.appendChild(h3Price);
        size.appendChild(price);

        card.appendChild(imgBx);
        card.appendChild(contentBx);

        container.appendChild(card);

        




    });
});