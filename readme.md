## framework-doc-generator

Use this app to generate the API documentation for a framework or track.  
[http://clinical-docs.meteor.com](http://clinical-docs.meteor.com)


[![Circle CI](https://circleci.com/gh/clinical-meteor/framework-doc-generator/tree/master.svg?style=svg)](https://circleci.com/gh/clinical-meteor/framework-doc-generator/tree/master)

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
````

==============================
#### Running Verification Tests across the Release Track

````bash
cd ../playerpiano

# fetch the latest packages we want to run QA tests on
starrynight fetch

# install dev dependencies
meteor npm install

## launch selenium
meteor npm run-script launch-chromedriver

## run tests on framework, and publish to continuous integration servers
meteor npm run-script package-verification-tests
````


====================================================
#### Adding New Packages to the Release Track

```bash
cd playerpiano/packages

# update the manifest of the packages that get pull into the local repository to do QA check on
nano git-packages.json

# fetch the packages
starrynight fetch

# fetch the packages
meteor add clinical:new-package

# and later, when ready to actually publish
nano clinical.meteor.json
```

==============================
#### Generating Documentation

````bash
cd playerpiano/packages

# build the docs
meteor-jsdoc init
meteor-jsdoc build
meteor-jsdoc start

# docs should now be available at http://localhost:3333

## deploy/publish the docs for a release
cd ../webapp
meteor deploy release-docs.meteor.com
````


=====================================
#### Continuous Integration Status

https://circleci.com/gh/clinical-meteor/framework-doc-generator

==============================
#### Licensing

MIT.  Use as you will.    
