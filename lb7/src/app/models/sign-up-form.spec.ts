import { SignUpForm } from './sign-up-form';

describe('SignUpForm', () => {

  it('login should be required', () => {
    const form = new SignUpForm();
    expect(form.loginIsNotEmpty()).toBeFalse();
    form.login = 'Login';
    expect(form.loginIsNotEmpty()).toBeTruthy();
  });

  it('login can contain only latin letters, numbers and underscore', () => {
    const form = new SignUpForm();
    form.login = 'login';
    expect(form.validateLogin()).toBeTruthy();
    form.login = '%34$##@!$#@';
    expect(form.validateLogin()).toBeFalse();
  });

  it('email should be required', () => {
    const form = new SignUpForm();
    expect(form.emailIsNotEmpty()).toBeFalse();
    form.email = 'email@gmail.com';
    expect(form.emailIsNotEmpty()).toBeTruthy();
  });

  it('email should be valid email', () => {
    const form = new SignUpForm();
    expect(form.validateEmail()).toBeFalse();
    form.email = 'ghhfghgf';
    expect(form.validateEmail()).toBeFalse();
    form.email = 'gdfgdgg@';
    expect(form.validateEmail()).toBeFalse();
    form.email = '@fgdgdf@.com';
    expect(form.validateEmail()).toBeFalse();
    form.email = 'gdgd.com';
    expect(form.validateEmail()).toBeFalse();
    form.email = 'email@email.com';
    expect(form.validateEmail()).toBeTruthy();
  });

  it('password should be required', () => {
    const form = new SignUpForm();
    expect(form.passwordIsNotEmpty()).toBeFalse();
    form.password = '12345';
    expect(form.passwordIsNotEmpty()).toBeTruthy();
  });

  it('repeated password should be required', () => {
    const form = new SignUpForm();
    expect(form.repeatedPasswordIsNotEmpty()).toBeFalse();
    form.repeatedPassword = '12345';
    expect(form.repeatedPasswordIsNotEmpty()).toBeTruthy();
  });

  it('passwords should be valid only when password and repeated password are equal', () => {
    const form = new SignUpForm();
    expect(form.validatePassword()).toBeFalse();
    form.password = '12345';
    expect(form.validatePassword()).toBeFalse();
    form.repeatedPassword = '123';
    expect(form.validatePassword()).toBeFalse();
    form.repeatedPassword = '12345';
    expect(form.validatePassword()).toBeTruthy();
  });

  it('ICQ must be empty or valid (8 or 9 numbers)', () => {
    const form = new SignUpForm();
    expect(form.validatePhone()).toBeTruthy();
    form.ISQNumber = '12345678';
    expect(form.validatePhone()).toBeTruthy();
    form.ISQNumber = '123456789';
    expect(form.validatePhone()).toBeTruthy();
    form.ISQNumber = '345';
    expect(form.validatePhone()).toBeFalse();
    form.ISQNumber = '5435345353453';
    expect(form.validatePhone()).toBeFalse();
    form.ISQNumber = 'hfhelfdkg';
    expect(form.validatePhone()).toBeFalse();
  });

  it('full name me should be required', () => {
    const form = new SignUpForm();
    expect(form.fullNameIsNotEmpty()).toBeFalse();
    form.fullName = 'Oleksii';
    expect(form.fullNameIsNotEmpty()).toBeTruthy();
  });
});
