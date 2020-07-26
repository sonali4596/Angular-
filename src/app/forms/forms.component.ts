import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  forms=new FormGroup({
    crop_type: new FormControl(),
    state: new FormControl(),
    date: new FormControl(),
    soil_type: new FormControl(),
    land_area: new FormControl(),
    type_land: new FormControl(),
    climate: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit()
  {
  console.log(this.forms.value)
  }

}
