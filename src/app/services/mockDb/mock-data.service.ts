import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {BasicPosition} from "../../models/basic-position";
import {User} from "../../models/user";
import {map, Observable, of} from "rxjs";

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
      {id: 1, firstname: 'xxx', surname: 'xxx', email: 'xxx@xxx.xx', password: 'xxxxxx', belt: 'xxx', team: 'xxx', weight: 100},

    ];

    return { positions, techniques, users };
  }

  private users: User[] = [
    { id: 1, firstname: 'xxx', surname: 'xxx', email: 'xxx@xxx.xx', password: '123456', belt: 'xxx', team: 'xxx', weight: 100 },
  ];

  addUser(newUser: any): Observable<User> {
    const newUserId = this.generateNewId(this.users);
    const user: User = { ...newUser, id: newUserId };
    this.users.push(user);

    return of(user).pipe(
      map((user: User) => {
        return new User(
          user.id,
          user.firstname,
          user.surname,
          user.email,
          user.password,
          user.belt,
          user.team,
          user.weight
        );
      })
    );
  }

  checkUserCredentials(userCredential: any): Observable<boolean> {
    const user = this.users.find((u) => u.email === userCredential.email && u.password === userCredential.password);
    console.log('mockSer', user) //todo: userIsAlways authenticated wrr
    if (user) {
      return of(true); // successful authentication
    } else {
      return of(false); // failed authentication
    }
  }

  getUser(email: string, password: string): Observable<User | null> {
    const user = this.users.find((u) => u.email === email && u.password === password);
    return of(user || null);
  }

  private generateNewId(collection: any[]): number {
    const maxId = Math.max(...collection.map((item: any) => item.id), 0);
    return maxId + 1;
  }

  getUsersAll():User[] {
    return this.users;
  }
}
