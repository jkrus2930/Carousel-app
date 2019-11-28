import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  ContentChild,
  AfterViewInit
} from "@angular/core";
import { PhotosService } from "../../_services/index";
import { Photo } from "../../_models";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ViewChild("carousel", { static: false }) carousel: ElementRef<
    HTMLDivElement
  >;
  photos: Photo.PhotoObject[];
  newPhoto: Photo.PhotoObject;
  count: number;
  param = 5;
  items: any = [];
  size: any;
  borderRadius: number;

  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.queryParams.subscribe(param => {
    //   this.param = param.count;
    this.loadPhotos();
    // });
  }

  loadPhotos() {
    this.photosService.getPhotos(this.param).subscribe(
      (res: Photo.PhotoObject[]) => {
        this.photos = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit() {
    // console.log(this.carousel.nativeElement);
  }

  addSlider($event) {
    // assing form values to variables
    this.size = $event.size;
    this.borderRadius = $event.borderRadius;

    this.photosService.getPhotos().subscribe(
      (res: any) => {
        this.newPhoto = res;
        this.photos.unshift(this.newPhoto);

        // TODO apply style to last added element
        // setTimeout(() => {
        //   console.log(
        //     this.slidesContainer.nativeElement.lastElementChild.lastElementChild
        //       .lastChild
        //   );
        // });
      },
      error => {
        console.log(error);
      }
    );
  }
}
