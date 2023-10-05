import {Component, ViewChild} from '@angular/core';
import {Competitor} from "../../../models/competitor";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormControl} from "@angular/forms";

const competitor: Competitor[] = [
  {id: 1, name: 'aabbcc13', surname: 'aabbcc12', nickname: 'abc1', weight: 75, team: 'H', belt: 'brown'},
  {id: 2, name: 'Helium', surname: 'Wieczorek', nickname: 'sdfsdf', weight: 50, team: 'He', belt: 'brown'},
  {id: 3, name: 'Lithium', surname: 'Jabłońska', nickname: 'sdf', weight: 65, team: 'Li', belt: 'black'},
  {id: 4, name: 'Beryllium', surname: 'Wójcik', nickname: 'fghfg', weight: 45, team: 'Be', belt: 'brown'},
  {id: 5, name: 'Boron', surname: 'Sikorski', nickname: 'fgh', weight: 90, team: 'B', belt: 'purple'},
  {id: 6, name: 'Carbon', surname: 'Kwiatkowska', nickname: 'fgh', weight: 50, team: 'C', belt: 'purple'},
  {id: 7, name: 'Nitrogen', surname: 'Włodarczyk', nickname: 'dfg', weight: 78, team: 'N', belt: 'blue'},
  {id: 8, name: 'Oxygen', surname: 'Wilk', nickname: 'dfgdf', weight: 78, team: 'O', belt: 'white'},
  {id: 9, name: 'Fluorine', surname: 'Wieczorek', nickname: 'dfgdf', weight: 66, team: 'F', belt: 'blue'},
  {id: 10, name: 'Edward', surname: 'Włodarczyk', nickname: 'dfgdf', weight: 60, team: 'Ne', belt: 'blue'},
  {id: 11, name: 'Romeo', surname: 'Sikora', nickname: 'gdfg', weight: 70, team: 'Ne', belt: 'purple'},
  {id: 12, name: 'Alastair', surname: 'Dudek', nickname: 'dfgdf', weight: 90, team: 'Ne', belt: 'white'},
  {id: 13, name: 'Kira', surname: 'Sikora', nickname: 'gdfg', weight: 120, team: 'Ne', belt: 'black'},
  {id: 14, name: 'Jamal', surname: 'Wróbel', nickname: 'gdf', weight: 110, team: 'Ne', belt: 'purple'},
  {id: 15, name: 'Randy', surname: 'Kwiatkowski', nickname: '', weight: 100, team: 'Ne', belt: 'black'},
  {id: 16, name: 'Wilfred', surname: 'Kaźmierczak', nickname: 'dfg', weight: 88, team: 'Ne', belt: 'white'},
  {id: 17, name: 'Calvin', surname: 'Jakubowski', nickname: 'asdf', weight: 80, team: 'Ne', belt: 'white'},
  {id: 18, name: 'Mohamad', surname: 'Ziółkowski', nickname: 'bdf', weight: 66, team: 'Ne', belt: 'brown'},
  {id: 19, name: 'Omari', surname: 'Kołodziej', nickname: 'dfv', weight: 87, team: 'Ne', belt: 'purple'},
  {id: 20, name: 'Leo', surname: 'Wilk', nickname: '', weight: 54, team: 'Ne', belt: 'blue'},
];

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.css']
})

export class CompetitorsComponent {

  displayedColumns: string[] = ['id', 'name', 'surname', 'nickname', 'weight', 'team', 'belt'];
  dataSource: MatTableDataSource<Competitor>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // Create form controls for filtering
  filters: { [key: string]: FormControl } = {};

  constructor() {
    this.dataSource = new MatTableDataSource(competitor);
  }

  ngOnInit() {
    this.customSortingBelts();
    this.dataSource.sort = this.sort;

    this.displayedColumns.forEach(column => {
      this.filters[column] = new FormControl('');
    });

    this.dataSource.filterPredicate = (data, filter) => {
      const filters = JSON.parse(filter) as { [key: string]: string };
      for (const column of this.displayedColumns) {
        const value = String((data as any)[column]).toLowerCase(); // Convert to string
        if (filters[column] && value.indexOf(filters[column].toLowerCase()) === -1) {
          return false;
        }
      }
      return true;
    };
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  customSortingBelts(){
    const customBeltsOrder = ['black', 'brown', 'purple', 'blue', 'white'];
    //beltColors = ['⚪🔵🟣🟤⚫']; //todo: move to belt enum
    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property === 'belt') {
        return customBeltsOrder.indexOf(item.belt);
      }
      return item[property as keyof Competitor];
    };
  }

  applyFilters() {
    const filters: {[index: string]:any}  = {};
    for (const column of this.displayedColumns) {
      filters[column] = this.filters[column].value;
    }
    this.dataSource.filter = JSON.stringify(filters);
  }
}


