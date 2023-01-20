//const dCE = require('detect-character-encoding');
const iconv = require('iconv-lite') //인코딩을 변환 해주는 모듈, 필자는 iconv보다 iconv-lite를 선호한다.
const charset = require('charset') //해당 사이트의 charset값을 알 수 있게 해준다.

function download(url, savepath, callback)
{
  var http = require('http');
  var fs = require('fs');
  var outfile = fs.createWriteStream(savepath);

  

  var req = http.get(url, function(res){
    
    /*
    var resData='';
    res.on('data', function(chunk) {
      resData+=chunk;
    });

    const enc = 'euc-kr'; //charset(res.headers, resData) // 해당 사이트의 charset값을 획득
    const i_result = iconv.encode(resData, enc) // 획득한 charset값으로 body를 디코딩
    console.log( i_result );
    */
    
    res.pipe(outfile);
    res.on('end', function(){
      outfile.close();

      var content = fs.readFileSync(savepath);
      let euckrStr = iconv.encode(content, 'euc-kr');
      console.log(euckrStr.toString());
      

      callback();
    });
  });
}

download(
  'http://www.puts.ac.kr/js_fis/haksaryeok/haksaryeok_mon_print.total.asp?fordisplay=Y'
, '/home/sciwoong/node-study/haksaryeok.html'
, function(){
  console.log( 'download complete');
}
);