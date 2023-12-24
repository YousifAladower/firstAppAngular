import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule ,FormBuilder,Validators,FormArray} from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';
import { CommonModule, formatNumber } from '@angular/common';
import { SalePipe } from '../pipes/sale.pipe';
@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [


    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SalePipe

  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  mydate =new Date();
}
