import { BasePage } from '../basePage';
import { incidentReport } from './request/incidentReport';
class DashboardPage_PO extends BasePage {
  // ***Get all elemeents***
  getPageUrl() {
    return '/dashboard/index';
  }
  // Title Text
  getTitleText() {
    return '.font-weight-bold';
  }
  // Global Dashboard
  getGlobalDashboard() {
    return '.btn.btn-dribbble.btn-social-icon-text';
  }
  // Engineer Automate
  getUserLocalCRM() {
    return '.btn.btn-linkedin.btn-social-icon-text';
  }
  // Calender
  getCalender() {
    return 'Calendar';
  }
  // Teams
  getTeams() {
    return '.btn.btn-google.btn-social-icon-text.text-left';
  }
  //Dashboard
  getDashboard() {
    return 'nav#sidebar > ul > li:nth-of-type(1) > .nav-link';
  }
  // myCRM Marshal
  getmyCRMMarshal() {
    return "[class='col-md-4 grid-margin transparent pl-0'] [class='card card-dark-blue mb-2 stretch-card transparent'] [class='mb-4']";
  }
  // Documents
  getDocuments() {
    return "[class='col-md-4 grid-margin transparent pl-0'] [class='card card-light-danger mb-2 stretch-card transparent'] [class='mb-4']";
  }
  // Yearly Goal
  getyearlyGoal() {
    return '.card.card-light-blue.mb-2.stretch-card.transparent > .card-body > .mb-4';
  }
  // Quartely Goal
  getQuarterlyGoal() {
    return ".content-wrapper [class='form-group col-md-4']:nth-of-type(2) [class='mb-4']";
  }
  // Monthly Goal
  getMonthlyGoal() {
    return ".content-wrapper [class='form-group col-md-4']:nth-of-type(1) [class='mb-4']";
  }

  // Links for Request
  getRequest() {
    return 'li:nth-of-type(2) > .nav-link > .menu-title';
  }
  getProductRequisition() {
    return 'div#REQUEST > ul > li:nth-of-type(1) > .nav-link';
  }
  getIncidentReport() {
    return 'div#REQUEST > ul > li:nth-of-type(2) > .nav-link';
  }
  getProjectRequest() {
    return 'div#REQUEST > ul > li:nth-of-type(3) > .nav-link';
  }
  getTask() {
    return 'div#REQUEST > ul > li:nth-of-type(4) > .nav-link';
  }
  // Perform actions on Elements
  // Page Url
  checkPageUrl() {
    this.assertPageUrlContains(this.getPageUrl());
    return this;
  }
  // Title Text
  checkTitleText() {
    this.isElementVisible(this.getTitleText());
    return this;
  }
  // Global Dashboard
  checkGlobalDashboard() {
    this.isElementVisible(this.getGlobalDashboard());
    return this;
  }
  // User Local CRM
  checkUserLocalCRM() {
    this.assertElementContainsText(this.getUserLocalCRM(), 'Local CRM');
    return this;
  }
  // Calender
  checkCalender() {
    this.isElementVisible(this.getCalender());
    return this;
  }
  // Teams
  checkTeams() {
    this.isElementVisible(this.getTeams());
    return this;
  }
  // Dashboard
  checkDashboard() {
    this.isElementVisible(this.getDashboard());
    return this;
  }
  // myCRM Marshal
  checkmyCRMMarshal() {
    this.isElementVisible(this.getmyCRMMarshal());
    return this;
  }
  // Documents
  checkDocuments() {
    this.isElementVisible(this.getDocuments());
    return this;
  }
  // Yearly Goal
  checkYearlyGoal() {
    this.isElementVisible(this.getyearlyGoal());
    return this;
  }
  // Quarterly Goal
  checkQuarterlyGoal() {
    this.isElementVisible(this.getyearlyGoal());
    return this;
  }
  // Monthly Goal
  checkMonthlyGoal() {
    this.isElementVisible(this.getMonthlyGoal());
    return this;
  }
  accessRequest() {
    this.isElementVisible(this.getRequest());
    this.clickElement(this.getRequest());
  }
  accessProductRequisition() {
    // this.accessRequest();
    this.isElementVisible(this.getProductRequisition());
    // this.clickElement(this.getProductRequisition());
    return this;
  }

  accessIncidentReport() {
    this.accessRequest();
    this.isElementVisible(this.getIncidentReport());
    this.clickElement(this.getIncidentReport());
    return incidentReport;
  }

  accessProjectRequest() {
    // this.accessRequest();
    this.isElementVisible(this.getProjectRequest());
    // this.clickElement(this.getProjectRequest());
    return this;
  }

  accessTask() {
    // this.accessRequest();
    this.isElementVisible(this.getTask());
    // this.clickElement(this.getTask());
    return this;
  }
}

const dashboardPage = new DashboardPage_PO();
export { dashboardPage };
