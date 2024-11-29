import { BasePage } from '../basePage';
export class LogoutPage_PO extends BasePage {
  // ****Get Elements on Page****
  // Profile
  getProfile() {
    return "a#profileDropdown > img[alt='profile']";
  }
  // Logout Button
  getLogoutButton() {
    return '.dropdown-menu.dropdown-menu-right.navbar-dropdown.show > a:nth-of-type(2)';
  }

  // ****Perform Actions on Elements****
  // Profile
  setProfile() {
    this.isElementVisible(this.getProfile());
    this.clickElement(this.getProfile());
  }
  // Logout Button
  setLogoutButton() {
    this.isElementVisible(this.getLogoutButton());
    this.clickElement(this.getLogoutButton());
  }
  // Perform Logout Action
  performLogout() {
    this.setProfile();
    this.setLogoutButton();
  }
}
