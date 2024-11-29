/// <reference types="cypress" />

export class BasePage {
  // Common Methods

  // URL Navigation
  navigateTo(url) {
    cy.visit(url);
  }

  // Click an Element
  clickElement(locator, useContains = false) {
    if (useContains) {
      cy.contains(locator, useContains).click();
    } else {
      cy.get(locator).click({ force: true });
    }
  }

  // Fill Text
  fillText(locator, textToEnter, useContains = false) {
    if (useContains) {
      cy.contains(locator, useContains).type(textToEnter);
    } else {
      cy.get(locator).clear().type(textToEnter);
    }
  }

  // Get Text
  getTextElement(locator, textToGet, useContains = false) {
    if (useContains) {
      return cy.contains(locator, useContains).invoke(textToGet);
    } else {
      return cy.get(locator, useContains).invoke(textToGet);
    }
  }

  //common method to assert if an element to be visible
  isElementVisible(locator, useContains = false) {
    const element = useContains ? cy.contains(locator) : cy.get(locator);
    element.should('be.visible');
    return true;
  }

  // Wait for Element to be Visible
  waitForElementVisible(locator, useContains = false) {
    if (useContains) {
      cy.contains(locator).should('be.visible');
    } else {
      cy.get(locator).should('be.visible');
    }
  }

  // Check if Element is Not Visible
  elementNotVisible(locator, useContains = false) {
    if (useContains) {
      cy.contains(locator, useContains).should('not.be.visible');
    } else {
      cy.get(locator).should('not.be.visible');
    }
  }

  // Check Element Text
  assertElementText(locator, expectedText, useContains = false) {
    if (useContains) {
      cy.contains(locator, expectedText).should('have.text', expectedText);
    } else {
      cy.get(locator).should('have.text', expectedText);
    }
  }

  // Check Element Contains Text
  assertElementContainsText(locator, partialText, useContains = false) {
    if (useContains) {
      cy.contains(locator, expectedText).should('contain.text', partialText);
    } else {
      cy.get(locator).should('contain.text', partialText);
    }
  }

  // Select Dropdown Value
  selectDropdownValue(locator, value) {
    cy.get(locator).select(value);
  }

  // Check Element is Enabled
  assertElementEnabled(locator, useContains = false) {
    if (useContains) {
      cy.contains(locator, useContains).should('not.be.disabled');
    } else {
      cy.get(locator).should('not.be.disabled');
    }
  }

  // Check Element is Disabled
  assertElementDisabled(locator, useContains = false) {
    if (useContains) {
      cy.contains(locator, useContains).should('be.disabled');
    } else {
      cy.get(locator).should('be.disabled');
    }
  }

  // Wait for Element to Contain Specific Text
  waitForTextToBe(locator, expectedText, timeout = 10000) {
    cy.get(locator, { timeout }).should('contain.text', expectedText);
  }

  // Hover Over Element
  hoverOverElement(locator) {
    cy.get(locator).trigger('mouseover');
  }

  // Scroll to Element
  scrollToElement(locator) {
    cy.get(locator).scrollIntoView();
  }

  // Check Checkbox
  checkCheckbox(locator) {
    cy.get(locator).check();
  }

  // Uncheck Checkbox
  uncheckCheckbox(locator) {
    cy.get(locator).uncheck();
  }

  // Assert Checkbox is Checked
  assertCheckboxChecked(locator) {
    cy.get(locator).should('be.checked');
  }

  // Assert Checkbox is Unchecked
  assertCheckboxUnchecked(locator) {
    cy.get(locator).should('not.be.checked');
  }

  // Drag and Drop (requires `cypress-drag-drop` plugin)
  dragAndDrop(sourceLocator, targetLocator) {
    cy.get(sourceLocator).drag(targetLocator);
  }

  // Upload File
  uploadFile(locator, filePath) {
    cy.get(locator).attachFile(filePath);
  }

  // Wait for Element to Exist in DOM
  waitForElementExist(locator, timeout = 10000) {
    cy.get(locator, { timeout }).should('exist');
  }

  // Assert Element Contains Specific Attribute
  assertElementAttribute(locator, attributeName, expectedValue) {
    cy.get(locator).should('have.attr', attributeName, expectedValue);
  }

  // Clear Text Field
  clearTextField(locator) {
    cy.get(locator).clear();
  }

  // Take Screenshot
  takeScreenshot(fileName = 'screenshot') {
    cy.screenshot(fileName);
  }

  // Wait for Specific Time
  wait(milliseconds) {
    cy.wait(milliseconds);
  }

  // assertUrlContains
  assertPageUrlContains(pathSegment) {
    cy.url().should('include', pathSegment);
  }

  //Dynamic Dropdown
  selectDropdownValue(selector, value, expectedText) {
    cy.get(selector)
      .select(value)
      .should('have.value', value)
      .then(() => {
        cy.get(`${selector} option:selected`)
          .invoke('text')
          .should('equal', expectedText);
      });
  }
}

// export default BasePage;
