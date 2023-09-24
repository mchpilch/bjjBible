import {Component} from '@angular/core';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent {

  private IMG_PATH_POSITIONS: string = 'assets/image/';

  images = [
    {src: this.IMG_PATH_POSITIONS + 'position-back-control.png'},
    {src: this.IMG_PATH_POSITIONS + 'position-guard.png'},
    {src: this.IMG_PATH_POSITIONS + 'position-knee-on-belly.png'},
    {src: this.IMG_PATH_POSITIONS + 'position-mount.png'},
    {src: this.IMG_PATH_POSITIONS + 'position-side-control.png'},
    {src: this.IMG_PATH_POSITIONS + 'position-turtle.png'},
  ];
}
