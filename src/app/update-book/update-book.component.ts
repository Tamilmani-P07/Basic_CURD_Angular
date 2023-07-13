import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { error } from 'console';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: Book;
  id: number;
  constructor(private bookService: BookService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.book =new Book();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.bookService.getBookById(this.id).subscribe( data => {
      console.log(data);
      this.book = data;
    },
    error=>console.log(error));
  }
  updateBook(){
   // console.log(this.id+"--"+this.book);
    this.bookService.updateBook(this.id,this.book).subscribe(data => {
      console.log(data);
      alert(data);
      this.goToBookList();

    },
    error=> console.log(error));
  }
  onSubmit(){
    console.log(this.book);
    this.updateBook();
  }
  goToBookList(){
    this.router.navigate(['getAllBooks']);
  }
}
