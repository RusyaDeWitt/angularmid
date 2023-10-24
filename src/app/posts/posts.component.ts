import { Component } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[] = [];

  constructor(private dataService: DataService) {
    const data = this.dataService.getPosts();
    this.posts = data.posts;
  }
}
