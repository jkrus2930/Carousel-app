import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { PhotosService } from "../_services/index";
import { Photo } from "../_models/index";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class PhotoListResolver implements Resolve<Photo.PhotoObject[]> {
  constructor(private photosService: PhotosService, private router: Router) {}

  count = 5;

  resolve(route: ActivatedRouteSnapshot): Observable<Photo.PhotoObject[]> {
    return this.photosService.getPhotos(this.count).pipe(
      catchError(error => {
        this.router.navigate(["/slider"]);
        return of(null);
      })
    );
  }
}
