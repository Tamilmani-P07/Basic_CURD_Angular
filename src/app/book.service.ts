import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseURL ="http://localhost:8080/api/";

  constructor(private httpClient:HttpClient) { }

  getBookList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL+"getAllBooks"}`);
  }
  saveBook(book: Book):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"saveBook"}`,book,{ responseType: 'text' });
  }
  getBookById(id: number):Observable<any>{
    return this.httpClient.get(`${this.baseURL+"getBook"}/${id}`);
  }
  updateBook(id:number,book: Book):Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"book"}/${id}`,book);
  }
  deleteBook(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"book"}/${id}`,{ responseType: 'text' });
  }
}
