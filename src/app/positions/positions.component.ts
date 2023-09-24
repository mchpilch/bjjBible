import {Component} from '@angular/core';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent {
  images = [
    {src: 'assets/image/position-back-control.png'},
    {src: 'assets/image/position-guard.png'},
    {src: 'assets/image/position-knee-on-belly.png'},
    {src: 'assets/image/position-mount.png'},
    {src: 'assets/image/position-side-control.png'},
    {src: 'assets/image/position-turtle.png'},
  ];
}
