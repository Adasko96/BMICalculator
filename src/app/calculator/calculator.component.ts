import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  
  isUpdated = true
  height = 0
  weight = 0
  bmi = 0

  postForm(f: NgForm) {
    this.height = f.value.height
    this.weight = f.value.weight

    this.bmi = Math.round((this.weight/(this.height * this.height)*10000)*100) / 100
  }
}
