import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dev } from '../dev';
import { Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Repo } from '../repo';


@Injectable({
    providedIn: "root"
})
export class DevRequestService {

  dev: Dev;

  constructor(private http: HttpClient) {
  this.dev = new Dev('', '', '', '', 0, 0, 0, 0); }

    private search = "";

  devRequest() {
    interface ApiResponse {
      login: string;
      avatar_url: string;
      repo_url: any;
      bio: string,
      repos: number,
      followers: number,
      following: number,
      createdAt: number,
    }

  const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/ClintonClin?accessntoken=cb327c777eff937591311a292e4721e661dd2c7f').toPromise().then(response => {
      this.dev.name = response.login;
      this.dev.image = response.avatar_url;
      this.dev.repo_url = response.repo_url;
      this.dev.bio = response.bio;
      this.dev.repos = response.repos;
      this.dev.followers = response.followers;
      this.dev.following = response.following;
      this.dev.createdAt = response.createdAt;


      resolve();
    }),
    error => {
      this.dev.name = 'Experiencing some tech difficulties';

      reject(error);
    };
    return promise;
  });
};
//   userRepoRequest() {
//     interface RepoResponse {
//       repo_url: any;
//     }

//   const promise1 = new Promise((resolve, reject) => {
//     this.http.get<RepoResponse>(environment.repoApi).toPromise().then(response => {
//       this.dev.repo = response;
//       resolve();
//     },
//     error => {
//       this.dev.repo = 'Experiencing some tech difficulties';

//       reject(error);
//     });
//     });
//     return promise1;
//   }

}