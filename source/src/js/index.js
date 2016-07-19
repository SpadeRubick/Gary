/*var dpr = window.devicePixelRatio || 1,
    fontEl = document.createElement('style'),
    rem = document.documentElement.clientWidth / 10;

document.documentElement.setAttribute('data-dpr', dpr);
document.documentElement.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';

var svg = document.getElementsByTagName('svg')[0],
    path = svg.getElementsByTagName('path')[0],
    _remove_target = document.getElementsByClassName('g-content')[0],
    dTxt = '';
svg.setAttribute('width', rem * 3);
svg.setAttribute('height', rem);
dTxt = 'M10 10 C ' + rem + ' ' + rem + ', ' + 2 * rem + ' ' + rem + ', ' + (rem * 3 - 10) + ' 10';
path.setAttribute('d', dTxt);

if (navigator.platform.indexOf('Win32') !== -1) {
    _remove_target.parentNode.removeChild(_remove_target);
}*/
document.addEventListener('touchstart', touch, false);
document.addEventListener('touchmove', touch, false);
document.addEventListener('touchend', touch, false);

function touch(event) {
	var event = event || window.event,
		eye1 = document.getElementsByClassName('eyes')[0],
		eye2 = document.getElementsByClassName('eyes')[1],
		//页面中心坐标
		oX = Math.round(document.documentElement.clientWidth/2),
		oY = Math.round(document.documentElement.clientHeight/2),
		//touch坐标
		tX = Math.round(event.touches[0].clientX),
		tY = Math.round(event.touches[0].clientY),
		//步长
		stepX = Math.round(oX/10),
		stepY = Math.round(oY/15),
		//偏移量
		x = 0,
		y = 0;
	//计算偏移量
	x = Math.round((oX - tX)/setpX);
	y = Math.round((oY - tY)/setpY);

	switch(event.type) {
		case 'touchstart':
			eye1.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
			eye2.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
			break;
		case 'touchmove':
			eye1.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
			eye2.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
			break;
		case 'touchend':
			eye1.style.transform = 'translate3d(0, 0, 0)';
			eye2.style.transform = 'translate3d(0, 0, 0)';
			break;
	}
}
