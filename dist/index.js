var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getAllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://fakestoreapi.com/products");
        let data = yield response.json();
        return data;
    });
}
const container = document.querySelector(".container");
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield getAllProducts();
    products.map((product) => {
        console.log(product);
        const card = document.createElement("div");
        const imgBx = document.createElement("div");
        const image = document.createElement("img");
        const contentBx = document.createElement("div");
        const h2 = document.createElement("h2");
        const size = document.createElement("div");
        const h3Price = document.createElement("h3");
        const price = document.createElement("p");
        const buy = document.createElement("a");
        image.src = product.image;
        h2.innerText = product.title.substring(0, 18);
        card.className = "card";
        imgBx.className = "imgBx";
        contentBx.className = "contentBx";
        buy.innerHTML = "Buy";
        h3Price.innerText = "Precio: ";
        price.innerHTML = `${product.price}`;
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
}));
export {};
