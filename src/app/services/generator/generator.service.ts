import {Injectable} from '@angular/core';
import {Competitor} from "../../models/competitor";

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  NAMES: string[] = ['Miguel', 'Dwight', 'Olivia', 'Christopher', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'James', 'George', 'Luther', 'Arthur', 'Mia', 'Thomas', 'Elizabeth', 'Mike'];
  SURNAMES: string[] = ['Scott', 'Barnes', 'Leal', 'Braun', 'Jacks', 'Hill',
    'Legler', 'Sandoval', 'Isla', 'Morris', 'Joseph', 'Terry',
    'Wolf', 'Levis', 'Carter', 'Ahmed', 'Ewing', 'Gerhardt', 'Murphy', 'Schrute',];
  TEAMS: string[] = ['Gracie Academy', 'Alliance', 'ATOS', ' Arte Suave', 'Le Cercle', 'Unity Kraków', 'Unity New York', '10th Planet',];
  NICKNAMES: string[] = ['', 'Fire', 'Cold', 'Wind', 'Mountain', 'Underdog', 'Gamer', 'Sensei'];

  constructor() {
  }

  generateCompetitors(n: number): Competitor[] {
    const competitors: Competitor[] = [];

    const me: Competitor = {
      id: 1,
      name: 'Michał',
      surname: 'Pilch',
      nickname: 'Pilchu',
      weight: 72,
      team: 'Unity Kraków',
      belt: 'white ⚪',
    };

    competitors.push(me)
    for (let i = 2; i <= n; i++) {
      competitors.push(this.createNewCompetitor(i));
    }
    return competitors;
  }


  randomBelt(): string {
    var weights: number[] = [0.45, 0.2, 0.15, 0.1, 0.1];
    var results: string[] = ['white ⚪', 'blue 🔵', 'purple 🟣', 'brown 🟤', 'black ⚫'];  // ⚪🔵🟣🟤⚫

    var num: number = Math.random(),
      s: number = 0,
      lastIndex: number = weights.length - 1;

    for (var i = 0; i < lastIndex; ++i) {
      s += weights[i];
      if (num < s) {
        return results[i];
      }
    }
    return results[lastIndex];
  };

  randomWeight(): number {
    var num: number = 1;
    while (num < 50) {
      num = Math.round(Math.random() * (110));
    }
    return num;
  }

  createNewCompetitor(id: number): Competitor {
    return {
      id: id,
      name: this.NAMES[Math.round(Math.random() * (this.NAMES.length - 1))],
      surname: this.SURNAMES[Math.round(Math.random() * (this.SURNAMES.length - 1))],
      nickname: this.NICKNAMES[Math.round(Math.random() * (this.NICKNAMES.length - 1))],
      weight: this.randomWeight(),
      team: this.TEAMS[Math.round(Math.random() * (this.TEAMS.length - 1))],
      belt: this.randomBelt(),
    };
  }
}

