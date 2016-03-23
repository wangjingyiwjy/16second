var ull = document.querySelector('#ull');

var getTarget = function (event) {
	var target = event.target || srcElement;
	return target;
}
//  function  getcl () {
// 	var arr = [];
// 	i = 0;
// 	C = '0123456789ABCDEF';
// 	while (i ++ < 6);
// 	x = Math.random()*16;
// 	b = parseInt(x);
// 	c = C.substr(b,1);
// 	arr.push(c);
// 	var cl = "#" + arr.join('');
// 	return cl;
// }

var changeColor = function (event) {
	var target = getTarget(event);
	if (target.tagName = 'LI') {
		target.style.background = '#' + ('00000' + (Math.random()* 0x1000000<<0).toString(16)).substr(-6);
	}
}

ull.addEventListener("click" , changeColor);