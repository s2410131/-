function datetimeshow(){
	var datetime = new Date();   //現在時刻取得
	
	var year = datetime.getFullYear();   //年
	var month = datetime.getMonth() + 1;   //月
	var day = datetime.getDate();   //日
	var hour = datetime.getHours();   //時間
	var minute = datetime.getMinutes();   //分
	var second = datetime.getSeconds();   //秒
	
	var datetimeview = year + "年" + month + "月" + day + "日" + hour + "時" + minute + "分" + second + "秒";
	
	var object = document.getElementById("datetime");
	object.innerText = datetimeview;
}