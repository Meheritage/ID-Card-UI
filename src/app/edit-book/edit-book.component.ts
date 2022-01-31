import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id : number = 0 ;
  Title: string = '';
  Author: string = '';
  Description: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['prop'];     
    });    
    
    this.restApi.getBook(this.id.toString()).subscribe((data: Book) => { 
      this.Title = data.title;
      this.Author = data.author;
      this.Description = data.description;      
    })
  }

  updateBook() {
    if(window.confirm('Are you sure, you want to update?')){
    var BookDetails = new Book();
    BookDetails.id =  this.id;
    BookDetails.title = this.Title;
    BookDetails.author = this.Author;
    BookDetails.description = this.Description;
      this.restApi.updateBook(this.id.toString(), BookDetails).subscribe(data => {
        this.router.navigate(['/book-list'])
      })
    }
  }


}
