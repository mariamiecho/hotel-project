import { CustomersService } from './../customers.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any;

  constructor(private service: CustomersService) {
    this.service.GetPost().then(
      (data) => {
        this.posts = data;
      })

  }
}
