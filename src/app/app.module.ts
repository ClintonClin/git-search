import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { GitFormsComponent } from './git-forms/git-forms.component';
import { GitMainpageComponent } from './git-mainpage/git-mainpage.component';
import { GitRepositoryComponent } from './git-repository/git-repository.component';
import { HttpClientModule } from '@angular/common/http';
import { DateCountPipe } from './date-count.pipe';
import { BoldDirective } from './bold.directive';
@NgModule({
  declarations: [
    AppComponent,
    GitFormsComponent,
    GitMainpageComponent,
    GitRepositoryComponent,
    DateCountPipe,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 