import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-git-forms',
  templateUrl: './git-forms.component.html',
  styleUrls: ['./git-forms.component.css']
})
export class GitFormsComponent implements OnInit {

  constructor(private http:Http){}
  userName="";
  githubData:any="";
  avatarUrl="./assets/avatar.png";

  userLookup(){
    this.http.get("https://api.github.com/users/ClintonClin?access_token="+environment.access_token)
    .subscribe(
      (response)=>{
        const userData=response;
        this.githubData=userData;
        this.avatarUrl=userData["avatar_url"];
        console.log(userData);
      }
    )
    console.log("userLookup executed");
    
    }
  ngOnInit() {
    
  }

}

