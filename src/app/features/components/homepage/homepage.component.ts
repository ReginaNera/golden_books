import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BookService } from 'src/app/shared/services/books.service';
import { Book } from '../../models/book';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FilterPipe } from '../../pipes/filter.pipe';


@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  filter : string[] = [];
  books$ : Observable<Book[]>
  books: Book[];
  pageSlice : Book[] =[];
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [2, 4, 6];

  constructor(private bookService : BookService, 
              private route: ActivatedRoute, 
              private filterPipe: FilterPipe) {}

  ngOnInit(): void {
    
      this.getAllBooks()

      this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.filter=[];
      if(paramMap.get('category') != null)
      {
        this.getBooks();
        this.filter.push(paramMap.get('category'));
      }
   });
      
  }

  getAllBooks() {
      this.bookService.fetchBooks();
      this.books$=this.bookService.books();
      this.getBooks();

  }

  getBooks() {
    this.books$.subscribe(books =>
      {
        this.books=books;
        this.pageSlice = books.slice(0,3);

      });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
     if (endIndex > this.books.length) {
       endIndex = this.books.length;
     }
  
   this.pageSlice = this.books.slice(startIndex, endIndex);
  }

}
