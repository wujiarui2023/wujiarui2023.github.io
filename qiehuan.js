$(function() {
var title; 
		window.onblur = function(){
      // onblur时先存下原来的title,再更改title内容
      title = document.title;
      document.title = " （╯‵□′）╯︵┴─┴ 快回来";
    };
    window.onfocus = function () {
      // onfocus时原来的title不为空才替换回去
      // 防止页面还没加载完成且onblur时title=undefined的情况
      if(title) { 
        document.title = title;
      }
	}
}