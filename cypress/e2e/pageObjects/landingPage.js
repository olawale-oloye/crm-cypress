import { BasePage } from '../basePage';
import { loginPage } from './loginPage';

class LandingPage_PO extends BasePage {
  // **** Retrieve Elements ****
  // Logo Title
  getLogoTitle() {
    return 'CRM Marshal';
  }
  // Supoort Text
  getSupportText() {
    return '.landing-link';
  }
  // Text Title
  getTitle() {
    return 'Hello, I am CRM Marshal';
  }
  // Register Member Button
  getRegMemberButton() {
    return "[href='https://crmdev.crmmarshal.com/register']";
  }
  // Register Volunteer Button
  getRegVolunteerButton() {
    return '.buttons > a:nth-of-type(3)';
  }
  // Register Alumni Button
  getRegAlumniButton() {
    return '.buttons > a:nth-of-type(4)';
  }
  // Login Button
  getLoginButton() {
    return '.buttons > a:nth-of-type(1)';
  }

  // **** Perform Action on Elments ****
  // Logo Title
  checkLogoTitle() {
    this.isElementVisible(this.getLogoTitle(), true);
    return this;
  }
  // Support Text
  checkSupportText() {
    this.isElementVisible(this.getSupportText());
    return this;
  }
  // Text Title
  checkTitle() {
    this.isElementVisible(this.getTitle(), true);
    return this;
  }
  // Reg Member Button
  checkRegMemberButton() {
    this.isElementVisible(this.getRegMemberButton());
    return this;
  }
  // Reg Volunteer Button
  checkRegVolunteerButton() {
    this.isElementVisible(this.getLoginButton());
    return this;
  }
  // Reg Alumni Button
  checkRegAlumniButton() {
    this.isElementVisible(this.getRegAlumniButton());
    return this;
  }
  // Login Page
  accessLoginPage() {
    this.isElementVisible(this.getLoginButton());
    this.clickElement(this.getLoginButton());
    return loginPage;
  }
}
const landingPage = new LandingPage_PO();
export { landingPage };
