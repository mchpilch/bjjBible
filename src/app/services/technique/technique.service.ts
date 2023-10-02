import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Technique} from "../../models/technique";

@Injectable({
  providedIn: 'root'
})
export class TechniqueService {

  private techniquesUrl = 'api/techniques';

  constructor(private http: HttpClient) {
  }

  getTechniques(): Observable<Technique[]> {
    return this.http.get<Technique[]>(this.techniquesUrl);
  }
}
