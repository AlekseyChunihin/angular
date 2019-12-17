import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

    fG:FormGroup;
    flag=true;
  constructor(public bookService:BookService, private _route:Router) { }

  public addBook(){

    if(this.fG.valid){
    this.bookService.add(this.fG.value.nameControl,this.fG.value.authorControl,this.fG.value.yearControl);
    this._route.navigate(['books']);
  }
  else
  {
    this.flag=false;
  }
  }
  

  ngOnInit() {
    this.fG = new FormGroup({
    nameControl: new FormControl('', [Validators.pattern('[A-ZА-Я].*')]),
    authorControl: new FormControl('', [Validators.required]),
    yearControl: new FormControl('', [Validators.required])
  });
  }

}
