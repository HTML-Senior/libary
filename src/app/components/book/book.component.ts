import { Component, Input } from '@angular/core';
import { IBook } from 'src/app/interface/book';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book!: IBook;
}
