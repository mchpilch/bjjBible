import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {BasicPosition} from "../../models/basic-position";
import {User} from "../../models/user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class MockDataService implements InMemoryDbService {

  private IMG_PATH_POSITIONS: string = 'assets/image/';

  constructor() {
  }

  createDb() {
    const positions: BasicPosition[] = [
      {
        id: 1,
        title: 'back-control',
        description: 'Description back-control',
        image: this.IMG_PATH_POSITIONS + 'position-jt-back.png'
      },
      {id: 2, title: 'guard', description: 'Description guard', image: this.IMG_PATH_POSITIONS + 'position-jt-guard.png'},
      {
        id: 3,
        title: 'knee-on-belly',
        description: 'Description knee-on-belly',
        image: this.IMG_PATH_POSITIONS + 'position-jt-knee.png'
      },
      {
        id: 4, title: 'mount',
        description: 'The mount position in BJJ is when a practitioner is sitting on top of their opponent\'s chest, ' +
          'securing control over them. In IBJJF competitions, the mount position can earn the practitioner 4 points. ' +
          'From the mount position, the top practitioner has several submission opportunities, including armlocks (armbar), ' +
          'chokes, and collar strangles. The practitioner on the bottom is vulnerable to these attacks and must defend effectively. ' +
          'To maintain the mount in accordance with IBJJF rules, the top practitioner should focus on distributing their weight evenly, ' +
          'staying low, and preventing the opponent from bridging or escaping. They can also work on setting up submissions while maintaining control. ' +
          'The practitioner on the bottom should aim to bridge and escape or use defensive techniques to avoid getting submitted.'
        , image: this.IMG_PATH_POSITIONS + 'position-jt-mount.png'
      },
      {
        id: 5,
        title: 'side-control',
        description: 'Description side-control',
        image: this.IMG_PATH_POSITIONS + 'position-jt-side.png'
      },
      {
        id: 6,
        title: 'turtle',
        description: 'Description turtle',
        image: this.IMG_PATH_POSITIONS + 'position-jt-turtle.png'
      },
    ];
    const techniques = [
      {
        id: 1,
        title: 'Technique 1',
        stepData: [
          {name: 'Step 1', description: 'Description of Step 1'},
          {name: 'Step 2', description: 'Description of Step 2'},
        ]
      },
      {
        id: 2,
        title: 'Technique 2',
        stepData: [
          {name: 'Step 1', description: 'Description of Step 1'},
        ]
      },

    ];

    const users: User[] = [
      {
        id: 1,
        firstname: 'xxx',
        surname: 'xxx',
        email: 'xxx@xxx.xx',
        password: 'xxxxxx',
        belt: 'xxx',
        team: 'xxx',
        weight: 100
      },

    ];

    return {positions, techniques, users};
  }

  private users: User[] = [
    {id: 1, firstname: 'xxx', surname: 'xxx', email: 'x@x', password: '123456', belt: 'xxx', team: 'xxx', weight: 100},
  ];

  addUser(newUser: any): Observable<User> {
    const newUserId = this.generateNewId(this.users);

    const formValue = newUser.value;

    const default_belt = 'white';
    const default_team = '';
    const default_weight = 100;

    const user: User = new User(
      newUserId,
      formValue.firstname,
      formValue.surname,
      formValue.email,
      formValue.password,
      default_belt,
      default_team,
      default_weight
    );

    this.users.push(user);
    return of(user);
  }

  checkUserCredentials(userCredential: any): Observable<boolean> {
    const formValue = userCredential.value;
    const user: User | undefined = this.users.find((u) => u.email === formValue.email && u.password === formValue.password);
    if (user != null) return of(true);
    return of(false);
  }

  private generateNewId(collection: any[]): number {
    const maxId = Math.max(...collection.map((item: any) => item.id), 0);
    return maxId + 1;
  }

  getUsersAll(): User[] {
    return this.users;
  }
}
