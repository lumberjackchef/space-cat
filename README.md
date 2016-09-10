# SpaceCat
Javascript object for performing ajax POST and GET requests.



## Usage

```js
  var spaceCat = new SpaceCat();

spaceCat.config = {
  url: "http://jsonplaceholder.typicode.com/posts/1",
  type: "GET",
  data: {
    title: 'foo',
    body: 'bar',
    userId: 1
  },
  success: function(data){
    alert(data);
  }
};

spaceCat.ajax();

```

### Required Arguments

##### url:
```js
  url: 'Request Url'
```

##### type:
```js
  type: 'GET or POST'
```

### Optional Arguments

##### data:
```js
  data: {
  param1: value1,
  param2: {
    key1: value1,
    key2: value2
  },
  param3: "value3",
  param4: value4,
  foo2: ["bar2", "bar 3", "bar+4"]
}
```

##### success:
```js
  success: function(data){
  alert(data);
}
```

##### method:
```js
method: true
```
True for async, false for sync. Defaults to true.

##### debugLog:
```js
debugLog: false
```
Set to true to show debugging log. Defaults to false.

### Example with all arguments

```js
  var spaceCat = new SpaceCat();

spaceCat.config = {
  url: "http://jsonplaceholder.typicode.com/posts/1",
  type: "GET",
  data: {
    title: 'foo',
    body: 'bar',
    userId: 1
  },
  method: true,
  debugLog: true,
  success: function(data){
    alert(data);
  }
};

spaceCat.ajax();

```
## Let me know what you think!
Twitter: [@lumberjackchef](http://twitter.com/lumberjackchef)  
Website: [ryanpearson.net](http://ryanpearson.net)