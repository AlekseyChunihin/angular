import { Injectable } from '@angular/core';
import {BookClass} from './book-class';



@Injectable({
  providedIn: 'root'
})
export class BookService {

books: BookClass[]=[
{id:3,name:'Книга1',author:'Автор Имя Отчество',year:'1990'},
{id:101,name:'Книга2',author:'Автор1 Имя Отчество',year:'1991'},
{id:103,name:'Книга3',author:'Автор2 Имя Отчество',year:'1992'},
{id:102,name:'Книга4',author:'Автор3 Имя Отчество',year:'1993'},
{id:105,name:'Очень большое название Книга5',author:'Автор4 Имя Отчество',year:'1994'}
];

  public get(id){
  		for(let i = 0; i < this.books.length; i++) {
  			if(this.books[i].id==id)return this.books[i];
  		}
  		return null;
  }

  public add(name,author,year){
    let id=0;
    let flag=false;
    while(!flag){
      id++;
      flag=true;
      for(let i = 0; i < this.books.length; i++) {
        if(this.books[i].id==id){flag=false; break;}
      }

    } 
    let book=new BookClass(id,name,author,year);
  	this.books.push(book);
  }

  public delete(id){
  	for(let i = 0; i < this.books.length; i++) {
        if(this.books[i].id==id){
        this.books.splice(i, 1);
        return true;}
      }
    return false;
  }
  constructor() { }
}
