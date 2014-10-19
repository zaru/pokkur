var vue = new Vue({
    el: '#content',
    data: {
        message: "```php\n$test = 'piyo';\n```\n# hoge\ntest.test.test."
    },
    filters: {
        marked: marked
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
  console.log(jQuery('#content-input').val());
  var fileDialog = window.prompt("ファイル名を入力してください", "");
  if (fileDialog == '') {
    alert('ファイル名を入力してください');
  } else {
    client.writeFile(fileDialog, jQuery('#content-input').val(), function (error) {
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
