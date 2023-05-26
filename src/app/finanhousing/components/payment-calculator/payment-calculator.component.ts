import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {Loan} from "../../models/loan";
import {LoanService} from "../../services/loan.service";

@Component({
  selector: 'app-payment-calculator',
  templateUrl: './payment-calculator.component.html',
  styleUrls: ['./payment-calculator.component.css']
})
export class PaymentCalculatorComponent {
  loanData:Loan;
  @ViewChild('calculatorForm', { static: true })
  calculatorForm!: NgForm;
  constructor(private loanService: LoanService,private router: Router) {
    this.loanData = {} as Loan;
  }
  addPayment() {
    this.loanService.create(this.loanData).subscribe();
    this.resetForm();
  }
  navigateToHome(){
    this.resetForm();
    this.router.navigate(['/']);
  }
  resetForm(){
    this.calculatorForm.resetForm();
  }
  onSubmit() {
    if (this.calculatorForm.form.valid) {
      console.log(this.loanData);
      this.addPayment();
    }
  }
}
