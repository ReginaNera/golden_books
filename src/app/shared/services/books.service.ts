import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Book } from 'src/app/features/models/book';


const api = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksds$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  desctription : string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "

  constructor (private http: HttpClient) {}
 
  fetchBooks () {
    return this.http.get<Book[]>(api+"books").subscribe(res => this.booksds$.next(res));
  }

   books(): Observable<Book[]> {
    return this.booksds$.asObservable();
   }
  }
