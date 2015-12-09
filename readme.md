## framework-doc-generator

Use this app to generate the API documentation for a framework or track.  


==============================
#### Installation

````bash

# clone the repo to your local workstation
git clone http://github.com/clinical-meteor/framework-doc-generator release-docs

# install the clinical-jsdoc
cd clinical-jsdoc
npm install -g .  

# fetch the latest packages we want to scrape documentation from
cd ../factory
git submodule foreach git pull origin master

# build the docs
clinical-jsdoc init
clinical-jsdoc build
clinical-jsdoc start

# docs should now be available at http://localhost:3333

## deploy the docs for a release
cd ../webapp
meteor deploy release-docs.meteor.com
````

==============================
#### Demo

[http://clinical-docs.meteor.com](http://clinical-docs.meteor.com)


==============================
#### Licensing

MIT.  Use as you will.  
