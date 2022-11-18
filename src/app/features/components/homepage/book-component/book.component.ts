import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Book } from 'src/app/features/models/book';
@Component({
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.scss']
})
export class BookComponent {

   @Input() book : Book
  constructor() {
   }
   
}
