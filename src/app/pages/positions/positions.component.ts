import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {PositionService} from "../../services/position/position.service";
import {BasicPosition} from "../../models/basic-position";

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent {
  public positions: BasicPosition[] | undefined;

  constructor(private router: Router,
              private positionService: PositionService
  ) {
  }

  ngOnInit() {
    this.positionService.getPositions().subscribe((data: BasicPosition[]) => {
        this.positions = data;
      }
    )
  }

  navigateToPositionDetails(position: string) {
    this.router.navigate(['/positions/position-details'], {queryParams: {position: position}});
  }

}
