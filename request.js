const request = require('request')
const iconv = require('iconv-lite') //인코딩을 변환 해주는 모듈, 필자는 iconv보다 iconv-lite를 선호한다.
const charset = require('charset') //해당 사이트의 charset값을 알 수 있게 해준다.

request({
		url:'http://www.puts.ac.kr/js_fis/haksaryeok/haksaryeok_mon_print.total.asp?fordisplay=Y' // 원하는 url값을 입력
		,encoding: null //해당 값을 null로 해주어야 제대로 iconv가 제대로 decode 해준다.
	}
	,function (error, res, body) {
		if( !error && res.statusCode == 200 )
		{
			const enc = charset(res.headers, body) // 해당 사이트의 charset값을 획득
			const i_result = iconv.decode(body, enc) // 획득한 charset값으로 body를 디코딩
			console.log( i_result )
		}
	}
);