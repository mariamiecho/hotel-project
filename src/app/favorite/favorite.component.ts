import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isSelected: boolean = false;
  @Output() change = new EventEmitter();

  constructor() {

  }
  ngOnInit() {

  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ favorite: this.isSelected });

  }
}

