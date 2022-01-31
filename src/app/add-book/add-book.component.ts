import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../shared/book';
import { RestApiService } from "../shared/rest-api.service";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  //id: number = 0;
  Title: string = '';
  Author: string = '';
  Description: string = '';
  //@Input() BookDetails = { Title: '', Author: '', Description: '' }


  constructor(
    public restApi: RestApiService, 
    public router: Router,
    public forms: FormsModule
  ) { }

  ngOnInit(): void {
  }  

  AddbookClick() {
    var BookDetails = new Book();
    BookDetails.title = this.Title;
    BookDetails.author = this.Author;
    BookDetails.description = this.Description;
    this.restApi.createBook(BookDetails).subscribe((data: {}) => {
      this.router.navigate(['/book-list'])
    })
  }

 


}
