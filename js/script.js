window.onload = function(){
	var music = document.getElementById("music"),
		page1 = document.getElementById("page1"),
		page2 = document.getElementById("page2"),
		page3 = document.getElementById("page3"), 
        audio = document.getElementsByTagName("audio")[0];
    // 当音乐播放完停止时候，自动停止光盘旋转效果
    audio.addEventListener('ended',function(event){
    	music.setAttribute("class","");
    },false);


music.addEventListener("touchstart",function(event){
			if (audio.paused) {
				audio.play();
				this.setAttribute("class","play");
		    }else{
		    	audio.pause();
			    	this.setAttribute("class","");
				};
	},false);
	// 点击屏幕，开启好运2016
	page1.addEventListener("touchstart",function(event){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top     = "100%";
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},5500);
	},false);
};