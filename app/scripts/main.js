var vue = new Vue({
  el: '#content',
  data: {
      message: "```php\n$test = 'piyo';\n```\n# hoge\ntest. test. test.\n- list\n- list\n- list\n"
  },
  filters: {
      marked: marked
  },
  methods: {
    insert: function(e) {
      // タブ：専用のライブラリ入れたほうがいいかも…
      if (e.keyCode === 9) {
        if (e.shiftKey === false) {
          e.preventDefault();
          var elem = e.target;
          var val = elem.value;
          var pos = elem.selectionStart;
          elem.value = val.substr(0, pos) + '\t' + val.substr(pos, val.length);
          elem.setSelectionRange(pos + 1, pos + 1);
        } else {
          e.preventDefault();
          var elem = e.target;
          var val = elem.value;
          var pos = elem.selectionStart;
          var firstPart = val.substr(0, pos).split("\n");
          var cursorLine = firstPart.pop().replace(/^\t/, '');
          firstPart = firstPart.join("\n") + "\n" + cursorLine;
          elem.value = firstPart + val.substr(pos, val.length);
          elem.setSelectionRange(pos - 1, pos - 1);
        }
      }
    },
  }
});

var separate = new Vue({
    el: '#separate',
    p: {
      separateX: 0,
      previewWidth: 0
    },
    methods: {
      onDragStart: function(e) {
        this.separateX = e.x;
        this.previewWidth = parseInt($('#preview').css('width').replace('px', ''));
        console.log('p = ' + this.previewWidth);
      },
      dragEnd: function(e) {
        var diff = this.separateX - e.x + this.previewWidth;
        $('#preview').css('width', diff + 'px');
        $('#editor').css('width', e.x + 'px');
        $('#separate').css('left', e.x);
      },
      dragging: function(e) {
        var diff = this.separateX - e.x + this.previewWidth;
        $('#preview').css('width', diff + 'px');
        $('#editor').css('width', e.x + 'px');
        $('#separate').css('left', e.x);
      }
    }
});

// Highlight.jsの初期設定
hljs.configure({
  classPrefix: ''
});
hljs.initHighlighting();



/*
 * ローカル上ではまだ動かさない（SSL必須なので）
 *
// Dropboxの認証
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


function saveFile() {
  console.log(jQuery('#editor').val());
  var fileDialog = window.prompt("ファイル名を入力してください", "");
  if (fileDialog == '') {
    alert('ファイル名を入力してください');
  } else {
    client.writeFile(fileDialog, jQuery('#editor').val(), function (error) {
      if (error) {
        console.log('Error : ' + error);
      } else {
        console.log('saveFile success.');
      }
    });
  }
}

jQuery('#saveButton').click(function() {
  console.log('click');
  client.authenticate(function (error, client) {
    if (error) {
      console.log('Error : ' + error);
    } else {
      saveFile();
    }
  });
});
*/
