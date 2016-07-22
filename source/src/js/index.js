(function(window) {
    /*事件绑定*/
    document.addEventListener('touchstart', touch, false);
    document.addEventListener('touchmove', touch, false);
    document.querySelector('.btn-box').addEventListener('touchstart', function(e) {
        var event = e || window.e;
        e.stopPropagation();
        return false;
    }, false);
    /*心情开关*/
    var moodSwitch = document.querySelector('#mood').getElementsByClassName('switch')[0],
    	face = document.querySelector('.face'),
    	happy = document.querySelector('#happy'),
    	sad = document.querySelector('#sad');
    /*switch*/
    moodSwitch.addEventListener('click', function() {
    	toggleClass(this, 'checked');
    	toggleClass(face, 'sad');
    }, false);
    /*happy*/
    happy.addEventListener('click', function() {
    	!hasClass(moodSwitch, 'checked') && addClass(moodSwitch, 'checked');
    	!hasClass(face, 'sad') && addClass(face, 'sad');
    }, false);
    /*sad*/
    sad.addEventListener('click', function() {
    	hasClass(moodSwitch, 'checked') && removeClass(moodSwitch, 'checked');
    	hasClass(face, 'sad') && addClass(face, 'sad');
    }, false);

    /*touch事件*/
    function touch(event) {
        var event = event || window.event,
            eye1 = document.getElementsByClassName('eyes')[0],
            eye2 = document.getElementsByClassName('eyes')[1],
            mouth = document.getElementsByClassName('mouth')[0],
            //页面中心坐标
            oX = Math.round(document.documentElement.clientWidth / 2),
            oY = Math.round(document.documentElement.clientHeight / 2),
            //touch坐标
            tX = Math.round(event.touches[0].clientX),
            tY = Math.round(event.touches[0].clientY),
            //步长
            stepX = Math.round(oX / 30),
            stepY = Math.round(oY / 30),
            //偏移量
            x = 0,
            y = 0,
            deg = 0,
            deg3D = 0,
            mouthY = 0;
        //event.preventDefault();
        //计算偏移量
        x = Math.round((tX - oX) / stepX);
        y = Math.round((tY - oY) / stepY);
        deg = Math.round((tX - oX) / stepX);
        deg3D = (tY > oY ? 180 : 0); //deg
        mouthY = (tY > oY ? -1 : 0); //rem

        switch (event.type) {
            case 'touchstart':
                eye1.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
                eye2.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
                mouth.style.transform = 'rotateZ(' + deg + 'deg)';
                break;
            case 'touchmove':
                eye1.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
                eye2.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
                mouth.style.transform = 'rotateZ(' + deg + 'deg)';
                break;
        }
    }

    /*阻止微信下拉*/
    function overscroll(el) {
        el.addEventListener('touchstart', function() {
            var top = el.scrollTop,
                totalScroll = el.scrollHeight,
                currentScroll = top + el.offsetHeight;

            if (top === 0) {
                el.scrollTop = 1;
            } else if (currentScroll === totalScroll) {
                el.scrollTop = top - 1;
            }
        });
        el.addEventListener('touchmove', function(evt) {
            if (el.offsetHeight < el.scrollHeight)
                evt._isScroller = true;
        });
    }
    overscroll(document.querySelector('html'));
    document.body.addEventListener('touchmove', function(evt) {
        if (!evt._isScroller) {
            evt.preventDefault();
        }
    });
    /*hasClass*/
    function hasClass(el, className) {
    	var _list = el.className.replace(/\s+/g, ' ').split(' ');
    	var _index = _list.indexOf(className);
    	var _flag = (_index === -1 ? false : true);
    	return _flag;
    }
    /*addClass*/
    function addClass(el, className) {
    	if (hasClass(el, className)) return el;
    	var _list = el.className.replace(/\s+/g, ' ').split(' ');
    	_list.push(className);
    	el.className = _list.join(' ');
    	return el;
    }
    /*removeClass*/
    function removeClass(el, className) {
    	if (!hasClass(el, className)) return el;
    	var _list = el.className.replace(/\s+/g, ' ').split(' ');
    	var _index = _list.indexOf(className);
    	_list.splice(_index);
    	el.className = _list.join(' ');
    	return el;
    }
    /*toggleClass*/
    function toggleClass(el, className) {
    	hasClass(el, className) ? removeClass(el, className) : addClass(el, className);
    };
})(window);
