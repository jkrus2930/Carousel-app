import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SliderComponent } from "./components/slider/slider.component";
import { PhotoListResolver } from './_resolvers/photo-list.resolver';

const routes: Routes = [
  { path: "", component: SliderComponent },
  {
    path: "slider",
    component: SliderComponent,
    resolve: { photos: PhotoListResolver }
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
