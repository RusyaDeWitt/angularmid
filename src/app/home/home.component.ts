import { Component } from '@angular/core';
import {News} from "../types";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  news: News[] = [];

  description: string = '';

  addNews() {
    const res: News = {
      description: this.description,
    }
    this.news.push(res);
    this.description = '';
  }
}
