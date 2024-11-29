import { BasePage } from '../../basePage';
import { incidentReportEntry } from './newEntry/incidentReportEntry';
class IncidentReport_PO extends BasePage {
  // **** Retrieve Elements ****
  // Page Url
  getPageUrl() {
    return '/trouble-tickets-lists';
  }
  // Page Title
  getPageTitle() {
    return 'h1';
  }
  // Total Records
  getTotalRecords() {
    return 'span#total-records';
  }
  // Default View
  getDefaultView() {
    return "select[name='view_id']";
  }
  // Setting Icon
  getSettingIcon() {
    return 'button#ColumnSettingButton > .icon-cog';
  }
  // Search Icon
  getSearchIcon() {
    return "button[title='Advanced Search'] > .icon-search";
  }
  //*** */ Advance Search Elements ****
  getAdvanceSearchText() {
    return '.card-body .card-title';
  }
  getTicketID() {
    return 'input#src_ticket_id';
  }
  getSelectStatus() {
    return 'select#src_status';
  }
  getSelectTeams() {
    return 'select#src_department';
  }
  getAllBranch() {
    return 'select#src_branch';
  }
  getSelectPriority() {
    return 'select#src_priority';
  }
  getTickedOpened() {
    return 'input#src_ticket_opened';
  }
  getSubmittedBy() {
    return 'input#src_submitted_by';
  }
  getAssignedTo() {
    return 'input#src_assigned_to';
  }
  getTickedClosed() {
    return 'input#src_ticket_closed';
  }
  getSearchButton() {
    return '.card.card-body .btn.btn-primary';
  }
  getResetButton() {
    return '.btn.btn-fw.btn-inverse-secondary';
  }
  // Export Icon
  getExportIcon() {
    return "button[title='Export to Excel'] > .fa.fa-file-excel";
  }
  // Table Head
  getTableHead() {
    return '.sorting';
  }
  // Table Record Expanded
  getTableRecordExpanded() {
    return 'tr:nth-of-type(1) > .details-control';
  }
  // Add New Entry
  getAddEntry() {
    return '.btn.btn-icon-text.btn-primary';
  }

  // **** Perform Action on Elments ****

  // Page Url
  checkPageUrl() {
    this.assertPageUrlContains(this.getPageUrl());
    return this;
  }
  // Page Title
  checkVisibilityPageTitle() {
    this.isElementVisible(this.getPageTitle());
    return this;
  }
  checkPageTitle(expectedText) {
    this.assertElementText(this.getPageTitle(), expectedText);
    return this;
  }
  // Total Records
  checkVisibilityTotalRecords() {
    this.isElementVisible(this.getTotalRecords());
    return this;
  }
  checkTotalRecords(expectedText) {
    this.assertElementContainsText(this.getTotalRecords(), expectedText);
    return this;
  }
  // Default View
  checkVisibilityDefaultView() {
    this.isElementVisible(this.getDefaultView());
    return this;
  }
  // Search Icon
  checkVisibilitySearchIcon() {
    this.isElementVisible(this.getSearchIcon());
    return this;
  }
  clickSearchIcon() {
    this.clickElement(this.getSearchButton());
    return this;
  }
  checkTicketID() {
    this.clearTextField(this.getTicketID());
    this.assertElementAttribute(
      this.getTicketID(),
      attributeName,
      expectedValue
    );
    return this;
  }
  // ***********************
  checkSelectStatus() {}
  // ***********************
  // Perform Export
  performExport() {
    this.isElementVisible(this.getExportIcon());
    this.clickElement(this.getExportIcon());
    return this;
  }
  // Table Head
  checkTableHead(partialText) {
    this.isElementVisible(this.getTableHead());
    this.assertElementContainsText(this.getTableHead(), partialText, true);
    return this;
  }
  // Perform Table Record Expansion
  setTableRecordExpanded() {
    this.isElementVisible(this.getTableRecordExpanded());
    this.clickElement(this.getTableRecordExpanded());
    return this;
  }

  // Perform New Entry Action
  performAddEntry(expectedText) {
    this.isElementVisible(this.getAddEntry());
    this.assertElementText(this.getAddEntry(), expectedText);
    this.clickElement(this.getAddEntry());
    return incidentReportEntry;
  }
}

const incidentReport = new IncidentReport_PO();
export { incidentReport };
