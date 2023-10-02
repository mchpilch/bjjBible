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

  basicPosition: BasicPosition = {
    id: 100,
    title: '',
    description: '',
    image: '',
  };

  private positions: BasicPosition[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private positionService: PositionService
  ) {

  }

  ngOnInit(): void {
    const positionFromLink = this.route.snapshot.queryParamMap.get('position');


    this.positionService.getPositions().subscribe((data: BasicPosition[]) => {
      this.positions = data;
      console.log('ngOnInit Positions:', this.positions);

      const positionWithTitle = this.positions.find(position => position.title === positionFromLink);

      if (positionWithTitle) {
        this.basicPosition.id = positionWithTitle.id;
        this.basicPosition.title = positionWithTitle.title;
        this.basicPosition.description = positionWithTitle.description;
        this.basicPosition.image = positionWithTitle.image;

        console.log('Match found: ', this.basicPosition);
      } else {
        console.log('No matching position found for the specified title.');
      }
    });
  }

  positionAsString(): string {
    return " id: " + this.basicPosition.id  + "\n" +
      "    title: " + this.basicPosition.title  + "\n" +
      "    description: " + this.basicPosition.description  + "\n" +
      "    image: " + this.basicPosition.image  + "\n"
  }
}

