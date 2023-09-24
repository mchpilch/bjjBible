import {Component} from '@angular/core';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent {

  private IMG_PATH_POSITIONS: string = 'assets/image/';

  images = [
    {src: this.IMG_PATH_POSITIONS + 'position-back-control.png', link: 'https://example.com/back-control'},
    {src: this.IMG_PATH_POSITIONS + 'position-guard.png', link: 'http://localhost:4200/positions/back-control'},
    {src: this.IMG_PATH_POSITIONS + 'position-knee-on-belly.png', link: 'http://localhost:4200/positions/details?back-control'},
    {src: this.IMG_PATH_POSITIONS + 'position-mount.png', link: ''},
    {src: this.IMG_PATH_POSITIONS + 'position-side-control.png', link: ''},
    {src: this.IMG_PATH_POSITIONS + 'position-turtle.png', link: ''},
  ];
}
