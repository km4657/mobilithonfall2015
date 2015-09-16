# Angularjs Best Practices Seed project

**Git Repository for OCEUI Enhancements**
## To install (on linux you may need to sudo npm install -g
 1. run: `git clone https://ml5174@codecloud.web.att.com/scm/~ml5174/masterseed.git`
 2. run: `npm install -g gulp`
 3. run: `npm install -g karma`
 4. run: `npm install -g protractor`
 5. run: `webdriver-manager update`

## To build and run
 1. run: `npm install`
 2. run: `gulp build`
 3. run: `gulp start`

## To run continuous unit test
 run: `gulp test`

## To run protractor (end to end testing)
 run: `protractor protractor.conf.js`
 
## Reference John Papa's [Angularjs Style Guide](https://github.com/johnpapa/angular-styleguide "Angular Style Guide")

## Project config files structure
.
├──  README.md
├──  gulpfile.js
├──  gulpfiles
|── ├──  gulp.config.js
|── ├──  gulpfile_dist.js
|── ├──  index_deps.js
├──  package.json
├──  bower.json
├──  .bowerrc
├──  karma.conf.js
├──  protractor.conf.js
├──  .gitignore

## Source files structure
./src
├──  index.html
├──  scss
├──  css
├──  fonts
├──  lib
├──  app
├──  pages
├──  components
|   
