import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }

  title = 'hotel-project';

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange() {
    console.log("Favorite changed!");
  }

  isHomePage(): boolean {
    return this.router.url == '/' || this.router.url === '/home';
  }
  // customers = ["bole", "lolek"];
}
