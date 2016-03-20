# ZoomHover-JS
----------
Create a effect in image, without write gigant style. So easy, and fast.

## Installation

###### With Bower
```sh
$ bower install zoomHover-js
```

## Use

In head import the library

```javascript
<script src='../js/zoomHover.js'></script>
```

After

```javascript
<script>
var zoomHover = new zoomHover();
</script>
```

For default the class name is .zoomhover, so in body you need create a div with this class

```html
<div class="zoomhover">
<img src="http://www.chegadedor.com/wp-
content/uploads/2015/03/hipnose.png">
</div>
```

## Advanced

The object have two methods ,not mandatory . If you want change options , here follow the methods and type attribute.

```javascript
var zoomHover = zoomHover([options = array],[options = string])
```

*Attribute* | *Type* | *Default*
------------ | ------------- | -------------
Options *(optional)* | *object* | ***object***
Element *(optional)* | *String* | **'.zoomHover'**

### Options
---
**Transation:**
*Attribute* | *Type* | *Default* | Options
-|-|-|-
Duration | *float* | **0.8** | time in seconds
property | *string* | **'all'** | 'width','height'
delay | *float* | **0** | time in seconds
function | *string* | **'linear'** | In [w3scholl](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) have dresciption about all options
*Example:*
```javascript
var options = {
    'transition':{
        'duration':.5,
        'function':'ease'
        }
    }
var zommHover = new zoomHover(options)
```
---
**Effect:**
*Attribute* | *Type* | *Default*
------------ | ------------- | -------------
zoom *(optional)* | *object* | ***object***
rotate *(optional)* | *object* | ***object***

**Zoom:**
*Attribute* | *Type* | *Default* | Options
-|-|-|-
enable | *boolean* | **true** | ***true or false***
scale | *float* | 1.6 | ***float number***

**Rotate:**
*Attribute* | *Type* | *Default* | Options
-|-|-|-
enable | *boolean* | **true** | ***true or false***
degrees | *integer* | 30 | 0 ~ infinte

Example
```javascript
 var options = {
      'effect':{
          'zoom':{
              'enable':true
          },
          'rotate':{
              'enable':true,
              'degrees':30
          }
     }
var zommHover = new zoomHover(options)
```
---

**Lack Style Object**
