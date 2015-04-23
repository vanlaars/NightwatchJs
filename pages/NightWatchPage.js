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

   navigateToNighWatchPage : function(){
    this.browser.maximizeWindow()
    this.browser.url(url)
    this.browser.waitForElementVisible('body', timeout)
    this.browser.saveScreenshot('../nightwatchjs/screenshot/Screenshot_NighWatch_Home_Page.png');
  },

  assertUrl : function(){
    this.browser.assert.urlContains(url)
  },

  navigateToGithub : function(){
    this.browser.waitForElementVisible(LOCATORS['github'], timeout)
  	this.browser.useCss().click(LOCATORS['github'])    
  },

  navigateToTwitter : function(){
      this.browser.waitForElementVisible(LOCATORS['twitter'], timeout)
      this.browser.useCss().click(LOCATORS['twitter'])
  }

}

module.exports = NightWatchPage

        
      
