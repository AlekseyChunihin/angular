import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../services/book.service';
import { AgGridAngular } from 'ag-grid-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
  private rowSelection;

columnDefs = [
        {headerName: "Id",field: 'id' ,sortable: true},
        {headerName: "Название книги",field: 'name',sortable: true },
        {headerName: "Автор",field: 'author',sortable: true},
        {headerName: "Год издания",field: 'year',sortable: true}
    ];

  constructor( public bookService:BookService, private router: Router) { 
this.rowSelection = "single";
   }

	public goToDelete(id){
		this.bookService.delete(id);
	}
  ngOnInit() {
  }

  onSelectionChanged() {
    var selectedRows = this.agGrid.api.getSelectedRows();
    console.log(selectedRows[0].id);
    this.router.navigate(['books',selectedRows[0].id]);
  }

}
