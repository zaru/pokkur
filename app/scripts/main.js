

Vue.filter('marked', function (value) {
    return marked(value);
});

var content = new Vue({
  el: "#content",
  data: {
  }
});


var client = new Dropbox.Client({key: 'ox8biz2img8hvtr'});

// Try to finish OAuth authorization.
client.authenticate({interactive: false}, function (error) {
    if (error) {
        alert('Authentication error: ' + error);
    }
});

if (client.isAuthenticated()) {
    // Client is authenticated. Display UI.
    console.log('auth');
}

client.authenticate();
