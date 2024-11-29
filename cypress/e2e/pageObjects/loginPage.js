import { BasePage } from '../basePage';
import { dashboardPage } from './dashboardPage';

class LoginPage_PO extends BasePage {
  // **** Get Elements ****

  // Title
  getPageUrl() {
    return '/login';
  }
  getTitleText() {
    return 'form#frmid > .title';
  }
  // Username
  getUsername() {
    return 'input#username';
  }
  // Password
  getPassword() {
    return 'input#password';
  }
  // Remember Me
  getRememberMe() {
    return 'input#remember';
  }
  // Reset Password
  getResetPassword() {
    return 'Reset Password?';
  }
  // login Button
  getLoginButton() {
    return "[type='submit']";
  }

  // **** Perform Action on Elments ****
  // Page Url
  checkPageUrl() {
    this.assertPageUrlContains(this.getPageUrl());
  }
  // Title Text
  checkTitleText() {
    this.isElementVisible(this.getTitleText());
  }
  // Username Field
  checkUsername() {
    this.isElementVisible(this.getUsername());
  }
  checkAttrUsername(attributeName, expectedValue) {
    this.assertElementAttribute(
      this.getUsername(),
      attributeName,
      expectedValue
    );
  }
  clearUsername() {
    this.clearTextField(this.getUsername());
  }
  setUsername(data) {
    this.fillText(this.getUsername(), data);
  }
  performUsername(data) {
    if (!data) {
      throw new Error('Username does not exist');
    }
    this.checkUsername();
    // this.checkAttrUsername();
    this.clearUsername();
    this.setUsername(data);
    return this;
  }

  // Password Field
  checkPassword() {
    this.isElementVisible(this.getPassword());
  }
  checkAttrPassword(attributeName, expectedValue) {
    this.assertElementAttribute(
      this.getPassword(),
      attributeName,
      expectedValue
    );
  }
  clearPassword() {
    this.clearTextField(this.getPassword());
  }
  setPassword(data) {
    this.fillText(this.getPassword(), data);
  }
  performPassword(data) {
    if (!data) {
      throw new Error('Password does not exist');
    }
    this.checkPassword();
    // this.checkAttrPassword();
    this.clearPassword();
    this.setPassword(data);
    return this;
  }

  // Remember Me
  unCheckRememberMe() {
    this.uncheckCheckbox(this.getRememberMe());
  }
  checkRememberMe() {
    this.checkCheckbox(this.getRememberMe());
  }
  setRememberMe() {
    this.assertCheckboxChecked(this.getRememberMe());
  }
  performRememberMe() {
    this.unCheckRememberMe();
    this.checkRememberMe();
    this.setRememberMe();
    return this;
  }

  // Reset Password

  performResetPassword(expectedText) {
    this.assertElementText(this.getResetPassword(), expectedText, true);
    this.isElementVisible(this.getResetPassword());
    return this;
  }

  // Login Button
  performLoginButton() {
    this.isElementVisible(this.getLoginButton());
    this.clickElement(this.getLoginButton());
    return dashboardPage;
  }
}
const loginPage = new LoginPage_PO();
export { loginPage };
