import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule ,FormBuilder,Validators,FormArray} from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';
import { CommonModule, formatNumber } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  fname="";
}
