

Vue.filter('marked', function (value) {
    return marked(value);
});

var content = new Vue({
  el: "#content",
  data: {
  }
});
