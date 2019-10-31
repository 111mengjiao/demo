var tele = document.getElementById('tele');
var code = document.getElementById('code');
var tip = document.getElementsByClassName('tip')[0];
function isTrueTel(){
		var myReg = /^[1][3,4,5,7,8][0-9]{9}$/;
		if(!myReg.test(tele.value)){
			return false;
		}
		else{
			return true;
		}
	}
	function isTrueCode(){
		var flag = /[a-z]{6,16}/;
		if(!flag.test(code.value)){
			return false;
		}
		else{
			return true;
		}
	}
	isTrueCode();
	isTrueTel();
function submitFunc(){
	if(isTrueTel()){
		{
		if(isTrueCode())
		{
			tip.innerText = "成功输入";
		}
		else{
			tip.innerText = "密码输入错误，请重新输入";
			code.value = '';
			setTimeout(function(){
				tip.innerText = ''
			},500);
		}
	   }
	}
	else {
		tip.innerText = "电话号码输入错误，请重新输入";
	}
	setTimeout(function(){
		tip.innerText = ''
	},3000);
}
var card = document.getElementsByClassName('card')[0];
function drag(elem){
	elem.onmousedown = function(e){
		var e = e || window.event;
		var cardX = e.pageX - card.offsetLeft;
		var cardY = e.pageY - card.offsetTop;
		document.onmousemove = function(e){
			var e = e||window.event;
			elem.style.left = e.pageX - cardX + 'px';
			elem.style.top = e.pageY - cardY + 'px';
		}
	};
		
	document.onmouseup = function(){
		document.onmousemove = null;
	};
};
