var client = require('cheerio-httpcli');
var urlType = require('url');

var url = "http://jpub.tistory.com";
var param = {};

client.fetch(url, param, function(err,$,res){
  if(err) { console.log('Error:', err); return; }
  $('a').each(
    function(idx){
      var text = $(this).text();
      var href = $(this).attr('href');

      if(!href) return;

      // 상대경로를 절대 경로로 변환
      var href2 = urlType.resolve(url, href);
      console.log( text + ':' + href);
      console.log( '==>' + href2);
    }
  )
});