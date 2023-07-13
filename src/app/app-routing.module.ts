import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path: "getAllBooks", component: BookListComponent},
  {path: "createBook", component: CreateBookComponent},
  {path: "updateBook/:id", component: UpdateBookComponent},
 // {path: "createBook", component: CreateBookComponent},
  {path: "",redirectTo:"getAllBooks",pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
