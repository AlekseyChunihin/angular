import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
	
  constructor(public bookService:BookService, private _route:Router ) { }

  public addBook(name,author,year){
  	this.bookService.add(name,author,year);
    this._route.navigate(['books']);

  }

  ngOnInit() {
  }

}
