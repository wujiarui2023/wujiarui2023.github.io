var rotateIndexH = 0;
var rotateIndexM = 0;
var rotateIndexS = 0;
init();

function init() {

// 更换背景图片
$(".timeBox .year-wrapper").click(function(){
    $("body").css("background-image", "url(images/background"+ Math.ceil(Math.random()*4) +".jpg)")
})
// 设置文本值
setNumText();

// 设置干支纪年时间
var nowYear = (new Date).getFullYear();
var acientYear = toAncientYear(nowYear);
$(".year-wrapper p").text(acientYear).attr("title","公元" + nowYear + "农历" + acientYear +"年");

// 初始化内容位置，旋转到指定角度
var weekLen = $(".week-content li").length;
var weekDeg = 360/weekLen; 
$(".week-content li").each(function(index) {
    $(this).css({
        "transform":"rotate("+index*weekDeg+"deg)",
        "transform-origin":"-100% 50%",
        "margin-left":parseInt($(this).css("width")) * 3 + "px",
        "margin-top":parseInt($(this).css("width")) * 2 - 10 + "px"
    })
})

// 时
var hoursLen = $(".hours-content li").length;
var hoursDeg = 360/hoursLen; 
$(".hours-content li").each(function(index) {
    $(this).css({
        "transform":"rotate("+index*hoursDeg+"deg)",
        "transform-origin":"-250% 50%",
        "margin-left":parseInt($(this).css("width")) * 6 + "px",
        "margin-top":parseInt($(this).css("width")) * 3.5 - 10 + "px"
    })
})

//分
var minutesLen = $(".minutes-content li").length;
var minutesDeg = 360/minutesLen;
$(".minutes-content li").each(function(index) {
    $(this).css({
        "transform":"rotate("+index*minutesDeg+"deg)",
        "transform-origin":"-400% 50%",
        "margin-left":parseInt($(this).css("width")) * 9 + "px",
        "margin-top":parseInt($(this).css("width")) * 5 - 10 + "px"
    })
})

//秒
var secondsLen = $(".seconds-content li").length;
var secondsDeg = 360/secondsLen;
$(".seconds-content li").each(function(index) {
    $(this).css({
        "transform":"rotate("+index*secondsDeg+"deg)",
        "transform-origin":"-550% 50%",
        "margin-left":parseInt($(this).css("width")) * 12 + "px",
        "margin-top":parseInt($(this).css("width")) * 6.5 - 10 + "px"
    })
})

//每秒刷新一次
run();
}


// 设置文本内容
function setNumText(){
for(var i = 7; i > 0; i --) {
    $(".week-content").append("<li data-time = "+ i +"> 星期"+ numberToZh(i) +"<li>")
}
for(var i = 12;i > 0; i --) {
    $(".hours-content").append("<li data-time = "+ i +">"+ numberToZh(i) +"时<li>")
}
for(var i = 60;i > 0; i --) {
    $(".minutes-content").append("<li data-time = "+ i +">"+ numberToZh(i) +"<li>")
}
for(var i = 60;i > 0; i --) {
    $(".seconds-content").append("<li data-time = "+ i +">"+ numberToZh(i) +"<li>")
}
}

// 数字大小写转换
function numberToZh(num) {
var zh = ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖","拾","佰","仟","万"];
var res = "";
if(num <= 10) {
    res = zh[num];
} else if(num < 20) {
    var bits = num % 10;
    res = zh[10] + zh[bits];
} else if(num < 100) {
    var bits = num % 10;
    var decade = parseInt(num / 10);
    if(bits == 0) {
        res = zh[decade] + zh[10] + "整";
    } else {
        res = zh[decade] + zh[10] + zh[bits];
    }
    
}
return res;
}

// 刷新轮盘
function run() {
clearInterval(timer);
var date = new Date();
var week = date.getDay();
var hours = date.getHours()%12;
var minutes = date.getMinutes();
var seconds = date.getSeconds();
// week
var weekRote = 360 / 7 * (week);

// hours
var hoursRote = 360 / 12 * (hours) + rotateIndexH*360;

// minites secondes
var tempDeg = 360 / 60;
var minutesRote = tempDeg * (minutes) + rotateIndexM*360;
var secondsRote = tempDeg * (seconds) + rotateIndexS*360;
//var secondsRote = tempDeg * (seconds + 1) + rotateIndexS*360; // 加一是为了滚到位置再变色，去掉会先变色再滚到位置

$(".week-wrapper").css("transform", "rotate(" + weekRote + "deg)");
$(".hours-wrapper").css("transform", "rotate(" + hoursRote + "deg)");
$(".minutes-wrapper").css("transform", "rotate(" + minutesRote + "deg)");
$(".seconds-wrapper").css("transform", "rotate(" + secondsRote + "deg)");

// 点亮 
var secondDot = seconds == 0 ? 60: seconds;
var minuteDot = minutes == 0 ? 60: minutes;
var hourDot = hours == 0 ? 60: hours;
var weekDot = hours == 0 ? 7: week;
// $(".hour-content li[data-time="+hourDot+"]").addClass("active").next("li").removeClass("active");
// $(".minutes-content li[data-time="+minuteDot+"]").addClass("active").prev("li").removeClass("active");
//$(".seconds-content li[data-time='"+secondDot+"']").addClass("active").next("li").removeClass("active");
$(".week-content li[data-time="+weekDot+"]").parents("ul:first").children("li[class='active']").removeClass("active").end().end().addClass("active");
$(".hours-content li[data-time="+hourDot+"]").parents("ul:first").children("li[class='active']").removeClass("active").end().end().addClass("active");
$(".minutes-content li[data-time="+minuteDot+"]").parents("ul:first").children("li[class='active']").removeClass("active").end().end().addClass("active");
$(".seconds-content li[data-time="+secondDot+"]").parents("ul:first").children("li[class='active']").removeClass("active").end().end().addClass("active");

hours === 11 ? rotateIndexH++ : 0;
minutes === 59 ? rotateIndexM++ : 0;
seconds === 59 ? rotateIndexS++ : 0;

var timer = setTimeout(run,1000);
}

function toAncientYear(year) {
var sky = ["", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己", "庚"];
var land = ["", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申"];

// 用年份除以10得数中余数相对应的便是天干
var one = year % 10;
// 用年份除以12得数中余数相对应的便是地支
var two = year % 12;

var res = sky[one] + land[two];
return res;
}
