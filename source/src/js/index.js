(function(window) {
    document.addEventListener('touchstart', touch, false);
    document.addEventListener('touchmove', touch, false);
    /*document.addEventListener('touchend', function(e) {
        var eye1 = document.getElementsByClassName('eyes')[0],
            eye2 = document.getElementsByClassName('eyes')[1],
            mouth = document.getElementsByClassName('mouth')[0];
        eye1.style.transform = 'translate3d(0, 0, 0)';
        eye2.style.transform = 'translate3d(0, 0, 0)';
        mouth.style.transform = 'rotateZ(0)';
    }, false);*/

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
        event.preventDefault();
        //计算偏移量
        x = Math.round((tX - oX) / stepX);
        y = Math.round((tY - oY) / stepY);
        deg = Math.round((tX - oX) / stepX);
        deg3D = (tY > oY ? 150 + deg : 30 - deg);
        mouthY = (tY > oY ? -1 : 0);

        switch (event.type) {
            case 'touchstart':
                eye1.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
                eye2.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
                mouth.style.transform = 'rotateZ(' + deg + 'deg) rotate3d(1, 0, 0, ' + deg3D + 'deg)' + 'translateY(' + mouthY + 'rem)';
                break;
            case 'touchmove':
                eye1.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
                eye2.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
                mouth.style.transform = 'rotateZ(' + deg + 'deg) rotate3d(1, 0, 0, ' + deg3D + 'deg)' + 'translateY(' + mouthY + 'rem)';
                break;
        }
    }
})(window);
