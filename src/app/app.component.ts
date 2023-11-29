import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-project';

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange() {
    console.log("Favorite changed!");
  }
  // customers = ["bole", "lolek"];
}
