import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  id: number;
  selectedBookId:number;
  books:Book[];
  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.getBookList();
    
  }
  private getBookList(){
    this.bookService.getBookList().subscribe(data => {
      this.books = data;
    });
  }
  updateBook(): void{
    console.log(this.selectedBookId);
    if(this.selectedBookId!=undefined)
      this.router.navigate(['updateBook',this.selectedBookId]);
    else
      alert("Please Select Book");
  }
  deleteBook(){
    if(this.selectedBookId!=undefined){
      this.bookService.deleteBook(this.selectedBookId).subscribe(data =>{
            console.log(data);
            this.getBookList();
          });
        }
    else
      alert("Please Select Book");      
  }
  selectedId(id:number){
    this.selectedBookId= id;    
  }


  // updateBook(id:number){
  //   this.router.navigate(['updateBook',id]);
  //   console.log(id);
  // }
  // deleteBook(id:number){
  //   this.bookService.deleteBook(id).subscribe(data =>{
  //     console.log(data);
  //     this.getBookList();
  //   });
  // }
}
