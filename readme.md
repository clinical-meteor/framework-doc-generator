## framework-doc-generator

Use this app to generate the API documentation for a framework or track.  
[http://clinical-docs.meteor.com](http://clinical-docs.meteor.com)

==============================
#### Installation

````bash

# clone the repo to your local workstation
git clone http://github.com/clinical-meteor/framework-doc-generator release-docs

# install the clinical-jsdoc
cd meteor-jsdoc
npm install -g .     # may need sudo

# initialize your submodules if needed
#git submodule foreach git pull origin master
#git submodule sync
#git submodule update --init --recursive # use submodules#

# fetch the latest packages we want to scrape documentation from
cd ../playerpiano
starrynight fetch


# build the docs
meteor-jsdoc init
meteor-jsdoc build
meteor-jsdoc start

# docs should now be available at http://localhost:3333

## deploy/publish the docs for a release
cd ../webapp
meteor deploy release-docs.meteor.com

## run tests on framework, and publish to continuous integration servers
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

https://circleci.com/gh/clinical-meteor/framework-doc-generator

==============================
#### Licensing

MIT.  Use as you will.    
