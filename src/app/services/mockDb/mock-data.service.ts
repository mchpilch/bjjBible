import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {BasicPosition} from "../../models/basic-position";

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {

  private IMG_PATH_POSITIONS: string = 'assets/image/';
  constructor() {
  }

  createDb() {
    const positions: BasicPosition[] = [
      {id: 1, title: 'back-control', description: 'Description back-control', image: this.IMG_PATH_POSITIONS + 'position-back-control.png'},
      {id: 2, title: 'guard', description: 'Description guard', image: this.IMG_PATH_POSITIONS + 'position-guard.png'},
      {id: 3, title: 'knee-on-belly', description: 'Description knee-on-belly', image: this.IMG_PATH_POSITIONS + 'position-knee-on-belly.png'},
      {id: 4, title: 'mount', description: 'Description mount', image: this.IMG_PATH_POSITIONS + 'mount.png'},
      {id: 5, title: 'side-control', description: 'Description side-control', image: this.IMG_PATH_POSITIONS + 'position-mount.png'},
      {id: 6, title: 'turtle', description: 'Description turtle', image: this.IMG_PATH_POSITIONS + 'position-turtle.png'},
    ];

    return {positions};
  }
}
