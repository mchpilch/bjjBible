import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicPosition} from "../../models/basic-position";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private positionsUrl = 'api/positions';

  constructor(private http: HttpClient) {}

  getPositions(): Observable<BasicPosition[]> {
    return this.http.get<BasicPosition[]>(this.positionsUrl);
  }


}
