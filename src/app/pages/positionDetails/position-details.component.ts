import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PositionService} from "../../services/position/position.service";
import {BasicPosition} from "../../models/basic-position";

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css']
})
export class PositionDetailsComponent {
  position: string = '';

  private positions: BasicPosition[] | undefined;
  constructor(
    private route: ActivatedRoute,
    private positionService: PositionService
  ) {

  }

  ngOnInit(): void {
    console.log('nOI')
    const positionParam = this.route.snapshot.queryParamMap.get('position');

    if (positionParam !== null) {
      this.position = positionParam;
    }
    //
    // console.log("Position:", this.position);
    // console.log("Position ser:", this.positionService.getPositions().subscribe(x =>
    // console.log(x)));

    this.positionService.getPositions().subscribe((data: BasicPosition[]) => {
      this.positions = data;
      console.log('ngOnInit Positions:', this.positions);
    });
  }

  ngAfterViewInit(): void{
   console.log('nAVI')

    // console.log('nAVI' ,this.basicPosition)
    // console.log('nAVI2' ,this.positions)
  }
}

