import { Component, OnInit } from '@angular/core';
import { Dev } from '../dev';
import { DevRequestService } from '../git-mainpage/dev-request.service';
@Component({
  selector: 'app-git-repository',
  templateUrl: './git-repository.component.html',
  styleUrls: ['./git-repository.component.css']
})
export class GitRepositoryComponent implements OnInit {

  dev: Dev;
  constructor(private devService: DevRequestService) { }

  ngOnInit() {
    // this.devService.userRepoRequest();
    // this.dev = this.devService.dev;
  }

}