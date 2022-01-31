// The below line is needed when you add routes for navigation.
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {path:'add-book', component : AddBookComponent},
  {path:'book-list', component : BookListComponent},
  {path:'edit-book', component : EditBookComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookListComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatRadioModule,
    AppRoutingModule,FormsModule,
    BrowserAnimationsModule, HttpClientModule,
    MatButtonModule,MatCardModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatListModule,RouterModule.forRoot(routes)
  ],
  providers: [ HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
