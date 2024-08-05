import { Component,ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @ViewChild('templateRegister') form:NgForm;
  OnSubmit(){
    console.log(this.form);
    console.log(this.form.value.fname);
    console.log(this.form.value.city);
    
  }
}
