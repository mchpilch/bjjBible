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
  displayedColumns: string[] = ['name', 'surname', 'nickname', 'team', 'weight', 'belt'];
  columnsWithRegularFilter: string[] = ['name', 'surname', 'nickname', 'team'];
  dataSource: MatTableDataSource<Competitor>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  filters: { [key: string]: FormControl } = {
    weight: new FormControl([50, 110]),
  };


  sliderValueCurMin: number = 50;
  sliderValueCurMax: number = 110;


  constructor(
    private generatorService: GeneratorService
  ) {
    this.competitor = generatorService.generateCompetitors(1000);
    this.dataSource = new MatTableDataSource(this.competitor);
  }

  ngOnInit() {
    this.customSortingBelts();
    this.dataSource.sort = this.sort;

    this.displayedColumns.forEach(column => {
      this.filters[column] = new FormControl('');
    });

    this.dataSource.filterPredicate = (data, filter): boolean => {

      if (this.filters['weight']) {
        const minValue = this.filters['weight'].value[0];
        const maxValue = this.filters['weight'].value[1];

        const weightValue = Number((data as any)['weight']);

        if (weightValue < minValue || weightValue > maxValue) {
          return false;
        }
      }

      const filters = JSON.parse(filter) as { [key: string]: string };
      for (const column of this.columnsWithRegularFilter) {
        const value = String((data as any)[column]).toLowerCase();
        if (filters[column] && value.indexOf(filters[column]) === -1) {
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

  customSortingBelts() {
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
    this.filters['weight'].setValue([this.sliderValueCurMin, this.sliderValueCurMax]);

    const filters: { [index: string]: any } = {};
    for (const column of this.displayedColumns) {
      filters[column] = this.filters[column].value;
    }
    this.dataSource.filter = JSON.stringify(filters);
  }
}
