import { Component, Input, OnInit } from '@angular/core';
import { SignUpForm } from '../../models/sign-up-form';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  public formModel: SignUpForm = new SignUpForm();

  constructor() { }

  ngOnInit(): void {
    this.formModel = new SignUpForm()
  }

  public getEmailError(): string {
    return !this.formModel.emailIsNotEmpty() ? 'email is required' : !this.formModel.validateEmail() ? 'invalid email' : '';
  }

  public getLoginError(): string {
    return !this.formModel.loginIsNotEmpty() ? 'login is required' : !this.formModel.validateLogin() ? 'login can contain only latin letters, numbers and underscore' : '';
  }

  public getPasswordError(): string {
    return !this.formModel.passwordIsNotEmpty() ? 'password is required' : '';
  }

  public getRepeatedPasswordError(): string {
    return !this.formModel.validatePassword() ? 'passwords are different' : '';
  }

  public getPhoneError(): string {
    return !this.formModel.validatePhone() ? 'invalid phone' : '';
  }

  public getHomePageError(): string {
    return !this.formModel.validateHomePage() ? 'invalid url' : '';
  }

  public getFullNameError(): string {
    return !this.formModel.fullNameIsNotEmpty() ? 'full name is required' : '';
  }

  public getSkypeError(): string {
    return !this.formModel.validateSkype() ? 'field skype can contain only latin letters, numbers and underscore' : '';
  }

  public handleSubmit() {
    alert(`${this.formModel.login} was successfully signed up!`);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
