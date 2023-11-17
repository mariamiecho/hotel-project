import { Component } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  cities = [
    { id: 1, name: 'Poznań' },
    { id: 2, name: 'Antalya' },
    { id: 3, name: 'Dublin' },
  ]
  onAdd() {
    this.cities.push({ id: 4, name: 'Ankara' })
  }
  // onRemove(){
  //   let index = this.cities.indexOf(city);
  //   this.cities.splice(index, 1);
  // }

}
