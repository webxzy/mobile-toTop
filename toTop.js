function Totop(opt) {
	this.defuls = {
		width: 42,
		height: 42,
		size: 26,
		opacity: 0.6,
		scroll: 200,
		right: '2%',
		bottom: '2%',
		radius: '50%'
	}

	// 属性替换
	for(var k in opt) {
		this.defuls[k] = opt[k];
	}
	this.timer = null;
	var self = this;
	this.e = document.createElement('div');
	this.e.style.cssText = 'width: '+this.defuls.width+'px;height: '+this.defuls.height+'px;line-height: '+this.defuls.height+'px;color: #fff;font-size: '+this.defuls.size+'px;font-weight: 100;right: '+ this.defuls.right+';bottom: '+this.defuls.bottom+';position: fixed;transition-property: opacity;	transition-duration: 200ms;text-align: center;border-radius: '+this.defuls.radius+';background-color: rgba(0, 0, 0, '+this.defuls.opacity+');font-family: serif;opacity: 0;z-index: 9999';
	this.e.innerHTML = '&and;';
	document.body.appendChild(this.e);

	// 回到顶部
	this.e.addEventListener('touchstart', function (ev) {
        clearInterval(self.timer);
        self.timer = setInterval(function() {
        	var scrollTop = document.body.scrollTop;
            document.body.scrollTop -= (scrollTop * 0.1);
            if (!scrollTop) {
                clearInterval(self.timer);
            }
        }, 20);
	}, false);

	// 点击停止
	document.addEventListener('touchstart', function () {
		clearInterval(self.timer);
	}, true);

	// 显示隐藏
	window.onscroll = function() {
        document.body.scrollTop > self.defuls.scroll ? self.e.style.opacity = 1 : self.e.style.opacity = 0;
    }
}