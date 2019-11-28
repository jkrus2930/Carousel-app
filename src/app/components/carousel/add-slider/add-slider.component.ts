import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-slider",
  templateUrl: "./add-slider.component.html",
  styleUrls: ["./add-slider.component.css"]
})
export class AddSliderComponent implements OnInit {
  @Output() addSlider = new EventEmitter();
  newSLiderForm: FormGroup;
  model: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // create the form in view
    this.createAddSliderForm();
  }

  // reference to the form
  get f() {
    return this.newSLiderForm.controls;
  }

  // crete form function
  createAddSliderForm() {
    this.newSLiderForm = this.fb.group({
      size: ["", Validators.required],
      radius: ["", Validators.required]
    });
  }

  loadSliderAfterAdd() {
    // TODO Validate form before submit
    // retunr if form is not valid
    // if (this.newSLiderForm.invalid) {
    //   return;
    // }

    // assing form values to model
    this.model = Object.assign(this.newSLiderForm.value);
    // emit add slider event to parent
    this.addSlider.emit(this.model);
  }
}
