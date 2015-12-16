## framework-doc-generator

Use this app to generate the API documentation for a framework or track.  
[http://clinical-docs.meteor.com](http://clinical-docs.meteor.com)


==============================
#### Installation

````bash

# clone the repo to your local workstation
git clone http://github.com/clinical-meteor/framework-doc-generator release-docs

# install the clinical-jsdoc
cd clinical-jsdoc
npm install -g .  

# fetch the latest packages we want to scrape documentation from
# (a spoolbox in the player piano patter reads packages and copies data)
cd ../spoolbox
git submodule foreach git pull origin master
git submodule sync
git submodule update --init --recursive # use submodules


# build the docs
clinical-jsdoc init
clinical-jsdoc build
clinical-jsdoc start

# docs should now be available at http://localhost:3333

## deploy/publish the docs for a release
cd ../webapp
meteor deploy release-docs.meteor.com

## run tests on framework, and publish to continuous integration servers
cd ../playerpiano
# git submodule foreach git pull origin master
starrynight fetch
starrynight run-tests --framework gagarin --webdriver http://localhost:9515 --path /packages/*/tests/gagarin/**/*.js
````

====================================================
#### Adding New Packages to the Release Track

```bash
cd playerpiano/packages
git submodule add http://github.com/clinical-meteor/my-new-package
cd ..
nano .meteor/repos
  http://github.com/clinical-meteor/my-new-package
starrynight fetch
```


=====================================
#### Continuous Integration Status

https://circleci.com/gh/clinical-meteor/framework-doc-generator/tree/master

==============================
#### Licensing

MIT.  Use as you will.    
