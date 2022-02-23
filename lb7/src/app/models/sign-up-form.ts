import { FormControl, FormGroup } from '@angular/forms';

export class SignUpForm {
  private loginRegex = /^[a-zA-Z0-9_]+$/;
  private emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  private icqRegex = /^([0-9]-?){7,8}[0-9]$/;
  private urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

  public login = '';
  public password = '';
  public repeatedPassword = '';
  public fullName = '';
  public email = '';
  public homePage = '';
  public ISQNumber = '';
  public skype = '';
  

  public loginIsNotEmpty() {
    return this.login.length > 0;
  }

  public validateLogin(): boolean {
    return this.loginRegex.test(this.login);
  }

  public fullNameIsNotEmpty() {
    return this.fullName.length > 0;
  }

  public emailIsNotEmpty() {
    return this.email.length > 0;
  }

  public validateEmail(): boolean {
    return this.emailRegex.test(this.email);
  }

  public passwordIsNotEmpty(): boolean {
    return this.password.length > 0;
  }

  public repeatedPasswordIsNotEmpty(): boolean {
    return this.repeatedPassword.length > 0;
  }

  public validatePassword(): boolean {
    return this.passwordIsNotEmpty() && this.repeatedPasswordIsNotEmpty() && this.password === this.repeatedPassword;
  }

  public validatePhone(): boolean {
    return this.ISQNumber.length == 0 || this.icqRegex.test(this.ISQNumber);
  }

  public validateHomePage(): boolean {
    return this.homePage.length == 0 || this.urlRegex.test(this.homePage);
  }

  public validateSkype(): boolean {
    return this.skype.length == 0 || this.loginRegex.test(this.skype);
  }

  public validate(): boolean {
    return this.loginIsNotEmpty()
      && this.validateLogin()
      && this.emailIsNotEmpty()
      && this.validateEmail()
      && this.validatePassword()
      && this.validatePhone()
      && this.validateHomePage();
  }

  // public getReactiveForm(): FormGroup {
  //   return new FormGroup({
  //     login: new FormControl(''),
  //     password: new FormControl(''),
  //     repeatPassword: new FormControl(),
  //     email: new FormControl(''),
  //   })
  // }
}

export class SignUpValidationResults {
  constructor(public login = '',
              public password = '',
              public repeatedPassword = '',
              public fullName = '',
              public email = '',
              public homePage = '',
              public ISQNumber = '',
              public skype = '') {
  }
}
