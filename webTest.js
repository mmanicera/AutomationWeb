const path = require('path');
const CareerPage = require("./Selectors/careersPage.json");




describe('Formulario Apply now', function() {

  
    it('send form with all of required fields', function() {
      browser
        .navigateTo('https://decemberlabs.com/careers')
        .waitForElementPresent("xpath",CareerPage.buttonApplyNow)
        .click("xpath",CareerPage.buttonApplyNow)
        .waitForElementPresent(CareerPage.bodyFormJoinUsOpen)
        .setValue(CareerPage.fieldName, "Juan")
        .setValue(CareerPage.fieldEmail, "test@decemberlabs.com")
        .setValue(CareerPage.fieldLinkedin, "https://linkedin.com/in/CosmeFulanito")
        .setValue(CareerPage.fieldComments, "this is a comment")
        .click(CareerPage.buttonSend)
        .waitForElementVisible(CareerPage.modalSuccess)
        .click(CareerPage.buttonOk)
        .assert.domPropertyEquals(CareerPage.bodyFormJoinUs, 'classList', 'dl-modal,dl-joinus-modal,big,success')
        .end()
    
    });

    it('send form with all fields', function(browser) {
      browser
        .navigateTo('https://decemberlabs.com/careers')
        .waitForElementPresent("xpath",CareerPage.buttonApplyNow)
        .click("xpath",CareerPage.buttonApplyNow)
        .waitForElementPresent(CareerPage.bodyFormJoinUsOpen)
        .setValue(CareerPage.fieldName, "Juan")
        .setValue(CareerPage.fieldEmail, "test@decemberlabs.com")
        .setValue(CareerPage.fieldLinkedin, "https://linkedin.com/in/CosmeFulanito")
        .setValue('#wpforms-870-field_22', path.resolve(__dirname + './data/sample.pdf'))
        .setValue(CareerPage.fieldComments, "this is a comment")
        .click(CareerPage.buttonSend)
        .waitForElementVisible(CareerPage.modalSuccess)
        .click(CareerPage.buttonOk)
        .assert.domPropertyEquals(CareerPage.bodyFormJoinUs, 'classList', 'dl-modal,dl-joinus-modal,big,success')
        .end()
    
    });
  
   
  });
  