import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ContactDataService } from '../services/contact-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  personalForm: FormGroup;

  // person: {
  //   name: 'a';
  //   surname: 'b';
  //   address: 'c';
  //   mail: 'd';
  // };

  constructor(
    private formBuilder: FormBuilder,
    private contactDataService: ContactDataService
  ) {}

  ngOnInit(): void {
    this.personalForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ],
      ],
      surname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
        ],
      ],
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      mail: ['', [Validators.required, Validators.email]],
    });
  };

  // clearForm() {
  //   this.personalForm.reset()
  // };
 

  onSubmit() {
    // const person = [this.personalForm.value];
    // console.log(person);
    this.contactDataService.adData(this.personalForm.value);
    // this.clearForm()
    this.personalForm.reset()

  };

}

