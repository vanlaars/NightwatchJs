var LOCATORS = {
  github :  '.btn.btn-primary.btn-lg.btn-github',
  twitter : '.btn.btn-primary.btn-lg.btn-twitter',   
}

var timeout = 10000;
var url = 'http://nightwatchjs.org/';

function NightWatchPage(browser) {
    this.browser = browser;
}

NightWatchPage.prototype = {
  waitForPageToLoad : function() {
    this.browser.waitForElementVisible(LOCATORS['github'], timeout)
  },

  assertUrl : function(){
    this.browser.useCss().waitForElementVisible(LOCATORS['github'], timeout)
    this.browser.assert.urlContains(url)
  },

  navigateToGithub : function(){
  	this.browser.useCss().click(LOCATORS['github'])    
  },

  navigateToTwitter : function(){
    this.browser.useCss().click(LOCATORS['twitter'])    
  },


}

module.exports = NightWatchPage

        
      
