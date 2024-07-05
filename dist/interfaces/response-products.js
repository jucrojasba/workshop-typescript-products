export var Category;
(function (Category) {
    Category["Electronics"] = "electronics";
    Category["Jewelery"] = "jewelery";
    Category["MenSClothing"] = "men's clothing";
    Category["WomenSClothing"] = "women's clothing";
})(Category || (Category = {}));
// Converts JSON strings to/from your types
export class Convert {
    static toIResponseProduct(json) {
        return JSON.parse(json);
    }
    static iResponseProductToJson(value) {
        return JSON.stringify(value);
    }
}
