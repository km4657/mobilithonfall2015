/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('seed test', function () {

    it('this should automatically redirect to index.html when location hash/fragment is empty', function () {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch(""); 
    });

});

describe('application header', function () {
    
    it('It should have a header and match the value', function () {
          beforeEach(function() {
    // before function
    browser.get('index.html');
    
  });
      var appHeader =  element(by.className('title'));
        expect(appHeader.getText()).toMatch("Application header");
    });

});

describe('ion tab 1', function () {
    
     beforeEach(function() {
    // before function
    browser.get('index.html');
  });
    it('It should have two ion-item elements', function () {
        
       var tabList = element.all(by.css('ion-item'));
       
       expect(tabList.count()).toBe(2);
    });
    it('The value of the first item should be Playlist Menu', function () {
        
       var tabItem1 = element.all(by.css('ion-item')).first();
       
       expect(tabItem1.getText()).toMatch('Playlist Menu');
    });
     it('The value of the second item should This Page', function () {
        
       var lastTabItem = element.all(by.css('ion-item')).get(1);
       
       expect(lastTabItem.getText()).toMatch('This page');
    });

});
