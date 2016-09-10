/*
  SpaceCat
  Author: Ryan Pearson
  Version: 0.1
  Description: An object based pure js ajax request script
               based on minAjax.js by flouthoc:
               http://github.com/flouthoc/minAjax.js
*/

// Defines the SpaceCat constructor
var SpaceCat = function(){};

// Config
SpaceCat.prototype.config = {
  type: 'GET',
  method: true,
  debugLog: false
};

// adds ajax medthod to SpaceCat.prototype
SpaceCat.prototype.ajax = function(){

  // variable declarations (prevents mutiple calls to var definition)
  var xmlhttp, sendData, datum,
      config = this.config, // prevents users error issues with not including a config
      sendString = [],
      tmpArr = [];

  /*
    Config Structure:
      url:"reqesting URL"
      type:"GET or POST"
      method: "(OPTIONAL) True for async and False for Non-async | By default its Async"
      debugLog: "(OPTIONAL)To display Debug Logs | By default it is false"
      data: "(OPTIONAL) another Nested Object which should contains reqested Properties in form of Object Properties"
      success: "(OPTIONAL) Callback function to process after response | function(data,status)"
  */

  // User error handling
  config.url || config.debugLog == true && console.log("No Url!");

  // xmlhttp
  xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
      config.success && config.success(this.responseText, this.readyState);
      config.debugLog == true && console.log("SuccessResponse \nResponse Data:" + this.responseText);
    } else {
      config.debugLog == true && console.log("FailureResponse --> State:" + this.readyState + "Status:" + this.status);
    }
  }

  sendData = config.data;
  if( typeof sendData === "string" ){
    tmpArr = String.prototype.split.call(sendData,'&');
    for(var i = 0, j = tmpArr.length; i < j; i++){
      datum = tmpArr[i].split('=');
      sendString.push(encodeURIComponent(datum[0]) + "=" + encodeURIComponent(datum[1]));
    }
  } else if( typeof sendData === 'object' && !( sendData instanceof String || (FormData && sendData instanceof FormData) ) ){
    for (var k in sendData) {
      datum = sendData[k];
      if( Object.prototype.toString.call(datum) == "[object Array]" ){
        for(var i = 0, j = datum.length; i < j; i++) {
          sendString.push(encodeURIComponent(k) + "[]=" + encodeURIComponent(datum[i]));
        }
      } else {
        sendString.push(encodeURIComponent(k) + "=" + encodeURIComponent(datum));
      }
    }
  }
  sendString = sendString.join('&');

  if(config.type == "GET"){
    xmlhttp.open("GET", config.url + "?" + sendString, config.method);
    xmlhttp.send();

    config.debugLog == true && console.log("GET fired at:" + config.url + "?" + sendString);
  }
  if(config.type == "POST"){
    xmlhttp.open("POST", config.url, config.method);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(sendString);

    config.debugLog == true && console.log("POST fired at:" + config.url + " || Data:" + sendString);
  }
};
