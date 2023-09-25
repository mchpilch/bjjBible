import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent {

  private IMG_PATH_POSITIONS: string = 'assets/image/';

  positions: string[] = ['back-control','guard','knee-on-belly','mount','side-control','turtle'];

  images = [
    {name: 'back-control', src: this.IMG_PATH_POSITIONS + 'position-back-control.png', link: 'http://localhost:4200/positions/position-details?back-control'},
    {name: 'guard', src: this.IMG_PATH_POSITIONS + 'position-guard.png', link: 'http://localhost:4200/positions/position-details?guard'},
    {name: 'knee-on-belly', src: this.IMG_PATH_POSITIONS + 'position-knee-on-belly.png', link: 'http://localhost:4200/positions/position-details?knee-on-belly'},
    {name: 'mount', src: this.IMG_PATH_POSITIONS + 'position-mount.png', link: 'http://localhost:4200/positions/position-details?mount'},
    {name: 'side-control', src: this.IMG_PATH_POSITIONS + 'position-side-control.png', link: 'http://localhost:4200/positions/position-details?side-control'},
    {name: 'turtle', src: this.IMG_PATH_POSITIONS + 'position-turtle.png', link: 'http://localhost:4200/positions/position-details?turtle'},
  ];

  constructor(private router: Router) { }

  navigateToPositionDetails(position: string) {
    this.router.navigate(['/positions/position-details'], { queryParams: { position: position } });
  }
}
