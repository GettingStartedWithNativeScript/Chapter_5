/***********************************************************************************
 * (c) 2015, Nathanael Anderson
 * Licensed under the MIT license
 *
 * Version 0.0.1                                       Nathan@master-technology.com
 **********************************************************************************/
"use strict";
/* global require, exports */

var application = require("application");
application.mainModule = "main-page";
application.cssFile = "app.css";

if (application.ios) {
    var fontModule = require("ui/styling/font");
    fontModule.ios.registerFont("MaterialIcons-Regular.ttf");
}

application.start();
