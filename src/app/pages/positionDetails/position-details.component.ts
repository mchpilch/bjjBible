import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PositionService} from "../../services/position/position.service";

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css']
})
export class PositionDetailsComponent {
  position: string = '';

  constructor(
    private route: ActivatedRoute,
    private positionService: PositionService
  ) {
  }

  ngOnInit(): void {
    const positionParam = this.route.snapshot.queryParamMap.get('position');

    if (positionParam !== null) {
      this.position = positionParam;
    }

    console.log("Position:", this.position);
    console.log("Position ser:", this.positionService.getPositions().subscribe(x =>
    console.log(x)));
  }
}

