import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitFormsComponent } from './git-forms/git-forms.component';
import { GitMainpageComponent } from './git-mainpage/git-mainpage.component';
import { GitRepositoryComponent } from './git-repository/git-repository.component';

@NgModule({
  declarations: [
    AppComponent,
    GitFormsComponent,
    GitMainpageComponent,
    GitRepositoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
