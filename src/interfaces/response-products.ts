export interface IResponseProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    rating:      Rating;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toIResponseProduct(json: string): IResponseProduct[] {
        return JSON.parse(json);
    }

    public static iResponseProductToJson(value: IResponseProduct[]): string {
        return JSON.stringify(value);
    }
}

