var thing = new SpaceCat(),
    thingTwo = new SpaceCat(),
    thingThree = new SpaceCat(),
    root = 'http://jsonplaceholder.typicode.com',
    output = "Fail",
    postId = 1;
    thing.config = {
      url: root + "/posts/1",
      type: "GET",
      success: function(data,status){
        output = JSON.parse(data);
        document.getElementById('output').innerHTML = output.body;
      }
    },
    thingTwo.config = {
      url: root + "/posts/2",
      type: "GET",
      success: function(data,status){
        output = JSON.parse(data);
        document.getElementById('outputTwo').innerHTML = output.body;
      }
    },
    configThree = {
      url: root + "/posts",
      type: "POST",
      data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
        id: 500
      },
      success: function(data,status){
        alert(data); // this isn't happening, find out why
      }
    },
    thingThree.config = {
      url: root + "/posts/" + postId,
      type: "GET",
      success: function(data,status){
        output = JSON.parse(data);
        document.getElementById('outputTwo').innerHTML = output.body;
      }
    };
thing.ajax();
thingTwo.ajax();
thingThree.ajax();
