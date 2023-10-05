import {Component, ViewChild} from '@angular/core';
import {Competitor} from "../../models/competitor";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormControl} from "@angular/forms";
import {GeneratorService} from "../../services/generator/generator.service";


@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.css']
})

export class CompetitorsComponent {
  competitor: Competitor[] = [];
  displayedColumns: string[] = ['id', 'name', 'surname', 'nickname', 'weight', 'team', 'belt'];
  dataSource: MatTableDataSource<Competitor>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // Create form controls for filtering
  filters: { [key: string]: FormControl } = {};

  constructor(
    private generatorService: GeneratorService
  ) {
    this.competitor = generatorService.generateCompetitors(150);
    this.dataSource = new MatTableDataSource(this.competitor);
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
        const value = String((data as any)[column]).toLowerCase();
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


