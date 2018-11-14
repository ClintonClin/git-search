import { Component, OnInit } from '@angular/core';
import { Dev } from '../dev';
import { DevRequestService } from './dev-request.service';
@Component({
  selector: 'app-git-mainpage',
  templateUrl: './git-mainpage.component.html',
  styleUrls: ['./git-mainpage.component.css']
})
export class GitMainpageComponent implements OnInit {

  dev: Dev;

  constructor(private devService: DevRequestService) { }
  search:string
  ngOnInit() {
    // this.devService.createUrl();
    this.devService.devRequest();
    this.dev = this.devService.dev;
  }
}