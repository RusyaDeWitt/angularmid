import { Component } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[] = [];
  likes: number = 0;


  pressLike () {
    this.likes = this.likes + 1;
  }
  constructor(private dataService: DataService) {
    const data = this.dataService.getPosts();
    this.posts = data.posts;
  }
}
