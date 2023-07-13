import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book = new Book();
  constructor(private bookService :BookService,private router: Router) { }

  ngOnInit(): void {
  }
  saveBook(){
    this.bookService.saveBook(this.book).subscribe(data => {
      console.log(data);
      //alert(data)
      this.goToBookList();
    },
    error => {
      console.log(error);
      alert(error.error);
    });
    
    this.goToBookList();
  }
  goToBookList(){
    this.router.navigate(['getAllBooks']);
  }
  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }
}
