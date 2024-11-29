/// <reference types = "cypress" />
import { landingPage } from '../../pageObjects/landingPage';
// import dataLogin from '../../../fixtures/arrays/dataLogin.json';
let dataL;
describe('', () => {
  beforeEach(function () {
    // cy.loginCRM();
    // let data;
    /*  cy.fixture('arrays/incidentReportData').then((dataBody) => {
      data = dataBody;
    }); */
    cy.fixture('arrays/dataLogin').then((el) => {
      dataL = el;
    });
    cy.fixture('arrays/incidentReportData').as('data');
    // expect(data).to.exist;
    // cy.log(data);
  });
  it('Verify user can add new Incident Entry', function () {
    cy.visit('/');
    landingPage
      .checkLogoTitle()
      .checkSupportText()
      .checkTitle()
      .checkRegMemberButton()
      .checkRegVolunteerButton()
      .checkRegAlumniButton()
      .accessLoginPage()
      .performUsername(dataL.Username)
      .performPassword(dataL.Password)
      .performRememberMe()
      // .performResetPassword()
      .performLoginButton();
    /* .checkTitleText()
      .checkGlobalDashboard()
      .checkUserLocalCRM()
      .checkCalender()
      .checkTeams()
      .checkDashboard()
      .checkmyCRMMarshal()
      .checkDocuments()
      .checkYearlyGoal()
      .accessProductRequisition()
      .accessProjectRequest()
      .accessTask()
      .accessIncidentReport()
      .checkVisibilityPageTitle()
      .checkVisibilityPageTitle()
      .checkPageTitle('Incident Report')
      .checkVisibilityTotalRecords()
      .checkTotalRecords('Total Records:')
      .checkVisibilityDefaultView()
      .checkVisibilitySearchIcon()
      .clickSearchIcon()
      // .checkTicketID()
      // .performExport()
      // .checkTableHead()
      // .setTableRecordExpanded()
      .performAddEntry('Add Entry')
      .setFirstName('readonly', this.data['First Name'])
      .setLastName('readonly', this.data['Last Name'])
      .setIssueTitle(this.data['Issue Title'])
      .setOfficePhone(this.data['Office Phone'])
      .setMobile(this.data.Mobile)
      .setFax(this.data.Fax)
      .setTeamsDropdown(this.data)
      .setBranchDropDown(this.data)
      .setPriorityDropDown(this.data)
      .setStatusDropDown(this.data)
      .setSeverityDropDown(this.data)
      .setIssueDescription(this.data['Issue Description'])
      .setComment(this.data.Comment)
      .setSubmitButton(); */
    // .setResetButton()
    // .setCancelButton();
  });
});
