import { BasePage } from '../../../basePage';
class IncidentReportEntry_PO extends BasePage {
  // **** Retrieve Elements ****
  // Page Url
  getPageUrl() {
    return '/trouble-tickets-entry';
  }
  // First Name
  getFirstName() {
    return 'input#first_name';
  }
  // Last Name
  getLastName() {
    return 'input#last_name';
  }
  // Issue Title
  getIssueTitle() {
    return 'input#issue_title';
  }
  // Office Phone
  getOfficePhone() {
    return 'input#office_phone';
  }
  // Mobile
  getMobile() {
    return 'input#mobile';
  }
  // Fax
  getFax() {
    return 'input#fax';
  }
  // Teams Dropdown
  getTeams() {
    return 'select#deartment_id';
  }
  // Branch Dropdown
  getBranch() {
    return 'select#branch_id';
  }
  // Assigned To Intellisense
  getAssignedTo() {
    return 'input#assignedto_name';
  }
  // Prirotity Dropdown
  getPriority() {
    return 'select#priority';
  }
  // Status Dropdown
  getStatus() {
    return 'select#status';
  }
  // Severity Dropdown
  getSeverity() {
    return 'select#severity';
  }
  // Ticket Opened Calender Picker
  getTicketOpened() {
    return 'input#ticket_opened';
  }
  // Ticket Closed Calender Picker
  getTicketClosed() {
    return 'input#ticket_opened';
  }
  // Address/Location
  getAddressLocation() {
    return 'textarea#address';
  }
  // Issue Description
  getIssueDescription() {
    return 'textarea#issue_description';
  }
  // Comment
  getComment() {
    return 'textarea#comment';
  }
  // Submit Button
  getSubmitButton() {
    return 'button#btnAdd';
  }
  // Reset Button
  getResetButton() {
    return '.col-md-12.mt-4.text-right > button:nth-of-type(2)';
  }
  // Cancel Button
  getCancelButton() {
    return '.col-md-12.mt-4.text-right > button:nth-of-type(3)';
  }
  // **** Perform Action on Elements ****
  // Page Url
  checkPageUrl() {
    this.assertPageUrlContains(this.getPageUrl());
  }
  setFirstName(attributeName, expectedValue) {
    this.isElementVisible(this.getFirstName());
    this.assertElementAttribute(
      this.getFirstName(),
      attributeName,
      expectedValue
    );
    return this;
  }
  setLastName(attributeName, expectedValue) {
    this.isElementVisible(this.getLastName());
    this.assertElementAttribute(
      this.getLastName(),
      attributeName,
      expectedValue
    );
    return this;
  }
  setIssueTitle(textToEnter) {
    this.isElementVisible(this.getIssueTitle());
    this.clearTextField(this.getIssueTitle());
    this.fillText(this.getIssueTitle(), textToEnter);
    return this;
  }
  setOfficePhone(textToEnter) {
    this.isElementVisible(this.getOfficePhone());
    this.clearTextField(this.getOfficePhone());
    this.fillText(this.getOfficePhone(), textToEnter);
    return this;
  }
  setMobile(textToEnter) {
    this.isElementVisible(this.getMobile());
    this.clearTextField(this.getMobile());
    this.fillText(this.getMobile(), textToEnter);
    return this;
  }
  setFax(textToEnter) {
    this.isElementVisible(this.getFax());
    this.clearTextField(this.getFax());
    this.fillText(this.getFax(), textToEnter);
    return this;
  }
  //Selection
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setTeamsxDropdown() {
    const selector = this.getTeams(); // Get the dropdown selector
    cy.get(selector).then(($dropdown) => {
      const options = $dropdown.find('option'); // Get all dropdown options
      const randomIndex = this.getRandomInt(1, options.length - 1); // Generate random index (assuming the first option is a placeholder)
      const randomOption = options.eq(randomIndex); // Select a random option
      const value = randomOption.val(); // Get the value of the random option
      const text = randomOption.text(); // Get the text of the random option

      // Use the selectDropdownValue method to select and assert the option
      this.selectDropdownValue(selector, value, text);
    });
  }

  // Team Selection
  setTeamsDropdown(data) {
    const randomTeams =
      data.Teams[Math.floor(Math.random() * data.Teams.length)];
    this.selectDropdownValue(
      this.getTeams(),
      randomTeams.value,
      randomTeams.name
    );
    return this;
  }
  setBranchDropDown(data) {
    const randomBranch =
      data.Branch[Math.floor(Math.random() * data.Branch.length)];
    this.selectDropdownValue(
      this.getBranch(),
      randomBranch.value,
      randomBranch.name
    );
    return this;
  }
  // Intellisense Selection

  //

  setPriorityDropDown(data) {
    const randomPriority =
      data.Priority[Math.floor(Math.random() * data.Priority.length)];
    this.selectDropdownValue(
      this.getPriority(),
      randomPriority.value,
      randomPriority.name
    );
    return this;
  }
  setStatusDropDown(data) {
    const randomStatus =
      data.Status[Math.floor(Math.random() * data.Status.length)];
    this.selectDropdownValue(
      this.getStatus(),
      randomStatus.value,
      randomStatus.name
    );
    return this;
  }
  setSeverityDropDown(data) {
    const randomSeverity =
      data.Severity[Math.floor(Math.random() * data.Severity.length)];
    this.selectDropdownValue(
      this.getSeverity(),
      // Data are coming from JSON
      // It ought to come from webElements
      randomSeverity.value,
      randomSeverity.name
    );
    return this;
  }
  setTicketOpened() {}
  setTicketClosed(textToEnter) {}
  setAddressLocation() {
    this.isElementVisible(this.getAddressLocation());
    this.clearTextField(this.getAddressLocation());
    this.fillText(this.getAddressLocation(), textToEnter);
    return this;
  }
  setIssueDescription(textToEnter) {
    this.isElementVisible(this.getIssueDescription());
    this.clearTextField(this.getIssueDescription());
    this.fillText(this.getIssueDescription(), textToEnter);
    return this;
  }
  setComment(textToEnter) {
    this.isElementVisible(this.getComment());
    this.clearTextField(this.getComment());
    this.fillText(this.getComment(), textToEnter);
    return this;
  }
  setSubmitButton() {
    this.isElementVisible(this.getSubmitButton());
    this.clickElement(this.getSubmitButton());
    return this;
  }
  setResetButton() {
    this.isElementVisible(this.getResetButton());
    this.clickElement(this.getResetButton());
    return this;
  }

  setCancelButton() {
    this.isElementVisible(this.getCancelButton());
    this.clickElement(this.getCancelButton());
    return this;
  }
}

const incidentReportEntry = new IncidentReportEntry_PO();
export { incidentReportEntry };
