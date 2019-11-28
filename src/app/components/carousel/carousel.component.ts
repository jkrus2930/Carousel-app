import {
  Component,
  AfterContentInit,
  ContentChildren,
  ViewChild,
  QueryList,
  ElementRef
} from "@angular/core";

import { CarouselItemDirective } from "../../_directives/carousel-item.directive";

@Component({
  selector: "app-carousel",
  // exportAs: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselItemDirective, { read: ElementRef })
  items: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChild("slides", { static: true }) slidesContainer: ElementRef<
    HTMLDivElement
  >;

  private slidesIndex = 0;

  // get current item
  get currentItem(): ElementRef<HTMLDivElement> {
    return this.items.find((item, index) => index === this.slidesIndex);
  }

  ngAfterContentInit() {}

  ngAfterViewInit() {}

  // previous
  onClickPrev() {
    this.slidesContainer.nativeElement.scrollLeft -= this.currentItem.nativeElement.offsetWidth;

    if (this.slidesIndex > 0) {
      this.slidesIndex--;
    }
  }

  // next
  onClickNext() {
    this.slidesContainer.nativeElement.scrollLeft += this.currentItem.nativeElement.offsetWidth;

    if (this.slidesIndex < this.items.length - 1) {
      this.slidesIndex++;
    }
  }
}
