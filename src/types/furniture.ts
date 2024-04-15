export interface Furniture {
    _id: string;
    english_name: string;
    thai_name: string;
    description: string;
    brand: string;
    url: string;
    price: number;
    category: string;
    image: string;
}

export interface IResult {
    data: Furniture[];
    total: number;
}