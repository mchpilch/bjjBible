import {Component, ViewChild} from '@angular/core';
import {Competitor} from "../../models/competitor";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormControl} from "@angular/forms";
import {GeneratorService} from "../../services/generator/generator.service";
import {MatSelectChange} from "@angular/material/select";


@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.css']
})

export class CompetitorsComponent {
  competitor: Competitor[] = [];
  displayedColumns: string[] = ['name', 'surname', 'nickname', 'team', 'weight', 'belt'];
  columnsWithRegularFilter: string[] = ['name', 'surname', 'nickname', 'team'];
  customBeltsOrder: string[] = ['', '⚫ black', '🟤 brown', '🟣 purple', '🔵 blue', '⚪ white'];
  sliderValueCurMin: number = 50;
  sliderValueCurMax: number = 150;

  dataSource: MatTableDataSource<Competitor>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectedBelt: string = '';

  filters: { [key: string]: FormControl } = {
    weight: new FormControl([this.sliderValueCurMin, this.sliderValueCurMax]),
    belt: new FormControl(this.selectedBelt),
  };

  constructor(
    private generatorService: GeneratorService
  ) {
    this.competitor = generatorService.generateCompetitors(200);
    this.dataSource = new MatTableDataSource(this.competitor);
  }

  ngOnInit(): void {
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

      const regularFilterPredicateColumns: string[] = ['name', 'surname', 'nickname', 'team', 'belt'];

      const filters = JSON.parse(filter) as { [key: string]: string };

      for (const column of regularFilterPredicateColumns) {
        const value = String((data as any)[column]).toLowerCase();
        if (filters[column] && value.indexOf(filters[column]) === -1) {
          return false;
        }
      }
      return true;
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  customSortingBelts(): void {
    //beltColors = ['⚪🔵🟣🟤⚫']; //todo: move to belt enum
    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property === 'belt') {
        return this.customBeltsOrder.indexOf(item.belt);
      }
      return item[property as keyof Competitor];
    };
  }

  applyFilters(): void {
    this.filters['weight'].setValue([this.sliderValueCurMin, this.sliderValueCurMax]);
    this.filters['belt'].setValue(this.selectedBelt);

    const filters: { [index: string]: any } = {};
    for (const column of this.displayedColumns) {
      filters[column] = this.filters[column].value;
    }
    this.dataSource.filter = JSON.stringify(filters);
  }

  beltChange(event: MatSelectChange): void {
    this.selectedBelt = event.value;
    this.applyFilters()
  }

  resetFilters(): void {
    this.selectedBelt = '';
    this.sliderValueCurMin = 50;
    this.sliderValueCurMax = 120;
    for (const controlName in this.filters) {
      this.filters[controlName].setValue('');
    }
    this.applyFilters();
  }
}
