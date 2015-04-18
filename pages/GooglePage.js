var LOCATORS = {
  searchBox     : 'input[type=text]',
  search        : 'button[name=btnG]',  
  firstLinkCss  : 'ol#rso li:first-child', 
  firstLinkXpath: './/*[@id="rso"]/div[2]/li[1]/div/h3/a',
}

var timeout = 10000;
var url = 'http://www.google.co.uk';

function GooglePage(browser) {
    this.browser = browser;
}

GooglePage.prototype = {
  waitForPageToLoad : function() {
    this.browser.waitForElementVisible(LOCATORS['email'], timeout)
  },

  navigateToGoogle : function(){
    this.browser.maximizeWindow()
    this.browser.url(url)
    this.browser.waitForElementVisible('body', timeout)
  },

  searchFor : function(searchCriteria){
    this.browser.assert.visible(LOCATORS['searchBox'])
    this.browser.setValue(LOCATORS['searchBox'], searchCriteria)
    this.browser.waitForElementVisible(LOCATORS['search'], timeout)
    this.browser.click(LOCATORS['search'])
    this.browser.pause(1000)
    this.browser.waitForElementVisible(LOCATORS['firstLinkCss'], timeout)
    this.browser.useXpath().click(LOCATORS['firstLinkXpath'])
  },

}

module.exports = GooglePage

        
      
