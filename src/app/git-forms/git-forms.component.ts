import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DevRequestService } from '../git-mainpage/dev-request.service';
import { Repo } from '../repo';
import { Dev } from '../dev';
@Component({
  selector: 'app-git-forms',
  templateUrl: './git-forms.component.html',
  styleUrls: ['./git-forms.component.css']
})
export class GitFormsComponent implements OnInit {
  // const repo = new Repo();
  dev = new Dev('', '', '', '', 0, 0, 0, 0);
  constructor(private http: HttpClient) { }

  searcher(search: string) {
    const x = 'https://api.github.com/users/' + search;
    this.http.get(x).subscribe(answer => {
      // console.log(answer);
      this.dev.name = name;
    });
    // const y = 'https://api.github.com/users/' + search + '/repos';
    // this.http.get(y).subscribe(data => {
    //   this.dev.repos = data;
    // });
  }
  ngOnInit() {
  }
}







// export class GitFormsComponent implements OnInit {

//   constructor(private http:Http){}
//   username="";
//   githubData:any="";
//   avatarUrl="./assets/avatar.png";

//   userLookup(username){
//     this.http.get("https://api.github.com/users/?q" + username.value)
//     .subscribe(
//       (response)=>{
//         const userData=response;
//         this.githubData=userData;
//         this.avatarUrl=userData["avatar_url"];
//         console.log(userData);
//       }
//     )
//     console.log("userLookup executed");
    
//     }
//   ngOnInit() {
    
//   }

// }

