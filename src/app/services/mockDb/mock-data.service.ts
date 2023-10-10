import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {BasicPosition} from "../../models/basic-position";
import {User} from "../../models/user";

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
      {id: 4, title: 'mount', description: 'Description mount', image: this.IMG_PATH_POSITIONS + 'position-mount.png'},
      {id: 5, title: 'side-control', description: 'Description side-control', image: this.IMG_PATH_POSITIONS + 'position-side-control.png'},
      {id: 6, title: 'turtle', description: 'Description turtle', image: this.IMG_PATH_POSITIONS + 'position-turtle.png'},
    ];
    const techniques = [
      {
        id: 1,
        title: 'Technique 1',
        stepData: [
          { name: 'Step 1', description: 'Description of Step 1' },
          { name: 'Step 2', description: 'Description of Step 2' },
        ]
      },
      {
        id: 2,
        title: 'Technique 2',
        stepData: [
          { name: 'Step 1', description: 'Description of Step 1' },
        ]
      },

    ];

    const users: User[] = [
      {id: 1, firstname: 'xxx', surname: 'xxx', email: 'xxx', password: 'xxx', belt: 'xxx', team: 'xxx', weight: 100},

    ];

    return { positions, techniques, users };
  }
}
