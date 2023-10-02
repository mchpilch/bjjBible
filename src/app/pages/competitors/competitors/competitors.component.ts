import {Component, ViewChild} from '@angular/core';
import {Competitor} from "../../../models/competitor";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

const competitor: Competitor[] = [
  {id: 1, name: 'Hydrogen', surname: 'Wasilewska', nickname: 'xaf', weight: 50, team: 'H', belt: 'black'},
  {id: 2, name: 'Helium', surname: 'Wieczorek', nickname: 'sdfsdf', weight: 50, team: 'He', belt: 'black'},
  {id: 3, name: 'Lithium', surname: 'Jabłońska', nickname: 'sdf', weight: 50, team: 'Li', belt: 'black'},
  {id: 4, name: 'Beryllium', surname: 'Wójcik', nickname: 'fghfg', weight: 50, team: 'Be', belt: 'black'},
  {id: 5, name: 'Boron', surname: 'Sikorski', nickname: 'fgh', weight: 50, team: 'B', belt: 'black'},
  {id: 6, name: 'Carbon', surname: 'Kwiatkowska', nickname: 'fgh', weight: 50, team: 'C', belt: 'black'},
  {id: 7, name: 'Nitrogen', surname: 'Włodarczyk', nickname: 'dfg', weight: 50, team: 'N', belt: 'black'},
  {id: 8, name: 'Oxygen', surname: 'Wilk', nickname: 'dfgdf', weight: 50, team: 'O', belt: 'black'},
  {id: 9, name: 'Fluorine', surname: 'Wieczorek', nickname: 'dfgdf', weight: 50, team: 'F', belt: 'black'},
  {id: 10, name: 'Edward', surname: 'Włodarczyk', nickname: 'dfgdf', weight: 50, team: 'Ne', belt: 'black'},
  {id: 11, name: 'Romeo', surname: 'Sikora', nickname: 'gdfg', weight: 50, team: 'Ne', belt: 'black'},
  {id: 12, name: 'Alastair', surname: 'Dudek', nickname: 'dfgdf', weight: 50, team: 'Ne', belt: 'black'},
  {id: 13, name: 'Kira', surname: 'Sikora', nickname: 'gdfg', weight: 50, team: 'Ne', belt: 'black'},
  {id: 14, name: 'Jamal', surname: 'Wróbel', nickname: 'gdf', weight: 50, team: 'Ne', belt: 'black'},
  {id: 15, name: 'Randy', surname: 'Kwiatkowski', nickname: '', weight: 50, team: 'Ne', belt: 'black'},
  {id: 16, name: 'Wilfred', surname: 'Kaźmierczak', nickname: 'dfg', weight: 50, team: 'Ne', belt: 'black'},
  {id: 17, name: 'Calvin', surname: 'Jakubowski', nickname: 'asdf', weight: 50, team: 'Ne', belt: 'black'},
  {id: 18, name: 'Mohamad', surname: 'Ziółkowski', nickname: 'bdf', weight: 50, team: 'Ne', belt: 'black'},
  {id: 19, name: 'Omari', surname: 'Kołodziej', nickname: 'dfv', weight: 50, team: 'Ne', belt: 'black'},
  {id: 20, name: 'Leo', surname: 'Wilk', nickname: '', weight: 50, team: 'Ne', belt: 'black'},
];

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.css']
})

export class CompetitorsComponent {
  displayedColumns: string[] = ['id', 'name', 'surname', 'nickname', 'weight', 'team' , 'belt']; //k
  dataSource: MatTableDataSource<Competitor>; //k
  @ViewChild(MatPaginator) paginator: MatPaginator; // k
  clickedRows = new Set<Competitor>();
  constructor() {
    this.dataSource = new MatTableDataSource(competitor);
  }
  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
  }
}

