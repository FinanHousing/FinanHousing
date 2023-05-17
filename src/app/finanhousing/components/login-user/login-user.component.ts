import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user";
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  userData: User;

  @ViewChild('loginForm', { static: true })
  loginForm!: NgForm;

  constructor(private userService: UserService, private router: Router) {
    this.userData = {} as User;
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.form.valid) {
      console.log('Login data:', this.userData);
      // Aquí puedes llamar a un método de servicio para autenticar al usuario
      // Ejemplo: this.userService.login(this.userData).subscribe(...)
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
