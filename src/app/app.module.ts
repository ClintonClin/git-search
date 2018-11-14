import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { GitFormsComponent } from './git-forms/git-forms.component';
import { GitMainpageComponent } from './git-mainpage/git-mainpage.component';
import { GitRepositoryComponent } from './git-repository/git-repository.component';
import { HttpClientModule } from '@angular/common/http';
import { DevComponent } from './dev/dev.component';
import { RepoComponent } from './repo/repo.component';
@NgModule({
  declarations: [
    AppComponent,
    GitFormsComponent,
    GitMainpageComponent,
    GitRepositoryComponent
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
 