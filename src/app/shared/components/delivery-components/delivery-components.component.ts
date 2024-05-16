import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-components',
  templateUrl: './delivery-components.component.html',
  styleUrls: ['./delivery-components.component.css']
})
export class DeliveryComponentsComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre:['',Validators.required],
      email:['', [Validators.required,Validators.email]],
    })
   }

  ngOnInit(): void {
    
  }

}
