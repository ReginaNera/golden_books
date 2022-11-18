import { Pipe, PipeTransform } from "@angular/core";
import { zip } from "rxjs";
import { Book } from "../models/book";
import { Category } from "../models/category";

@Pipe ({
    name: "filterBooks"
})
export class FilterPipe implements PipeTransform{
    transform(books: any[], filter: string[]) {
        console.log(filter)
        console.log(books.length)

        if(books.length === 0 || filter.length === 0){
            return books;
        }else 
        {
         
              var book =  books.filter((book) => {
              var cat = book.Categories.find((cat) => 
              {
                 return filter.find(x => x.toLowerCase() == cat.name.toLowerCase())
              })

              if(cat != null)
              {
                return book;
              }
           })

            if(book != null)
            {
                return book;
            }
            else 
            {
                return books;
            }
        
         }
                    

    }
}