import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  download():void {
    let link = document.createElement("a");
    link.download = "Michal_Pilch_CV.pdf";
    link.href = "/assets/pdf/Michal_Pilch_CV.pdf";
    link.click();
  }
}
