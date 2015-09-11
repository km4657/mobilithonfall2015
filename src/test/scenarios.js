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