import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookComponent } from './book/book.component';

import { BookService } from './services/book.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes=[
{path:'books/:id', component:BookComponent},
{path:'books', component:BooksComponent},
{path:'add', component:AddBookComponent},
{path:'', redirectTo:'books', pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBookComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AgGridModule.withComponents([])
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
