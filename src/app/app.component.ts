import { Component, OnInit } from '@angular/core';
import { BooksService } from './data/books.service';
import { IBook } from './interface/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'online-libary';
  books: IBook[] = []
  constructor(private _bookService: BooksService) { }
  ngOnInit(): void {
    this._bookService.getList().subscribe(response => {
      this.books = response.data
    })
  }
}
