import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Photo } from "../_models/index";

@Injectable()
export class PhotosService {
  baseUrl = "https://api.unsplash.com/";

  constructor(private http: HttpClient) {}

  // Get photos
  getPhotos(count?): Observable<Photo.PhotoObject[]> {
    let params = new HttpParams();
    if (count != null) {
      params = params.append("count", count);
    }

    return this.http.get<Photo.PhotoObject[]>(this.baseUrl + "photos/random/", {
      params
    });
  }
}
