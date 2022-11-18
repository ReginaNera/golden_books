import { Category } from "./category";

export interface Book {
    id: number;
    ImageUrl : string;
    Title : string;
    Author : string;
    Year : Date;
    Categories : Category[];
    ISBN: string;
    Description: string;
}