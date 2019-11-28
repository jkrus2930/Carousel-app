import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-carousel-controls",
  templateUrl: "./carousel-controls.component.html",
  styleUrls: ["./carousel-controls.component.css"]
})
export class CarouselControlsComponent implements OnInit {
  @Output() nexItem = new EventEmitter();
  @Output() prevItem = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClickPrev() {
    this.prevItem.emit();
  }

  onClickNext() {
    this.nexItem.emit();
  }
}
