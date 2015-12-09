## framework-doc-generator

Use this app to generate the API documentation for a framework or track.  


==============================
#### Installation

````bash
npm install -g meteor-jsdoc

git clone http://github.com/clinical-meteor/framework-doc-generator release-docs
cd release-docs/factory

meteor-jsdoc init
meteor-jsdoc build
meteor-jsdoc start

cd ../webapp
meteor deploy release-docs.meteor.com

````

==============================
#### Demo

[http://clinical-docs.meteor.com](http://clinical-docs.meteor.com)


==============================
#### Licensing

MIT.  Use as you will.  
