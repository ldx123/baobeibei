/**
 * Created by Administrator on 2015/5/25.
 */
window.onload=function ()
{
//    选项卡1
    var aLi = document.getElementById("z-tab").getElementsByTagName("li");
    var aDiv = document.getElementById("z-con").getElementsByTagName("div");
    var n=0;
    for(var i=0;i<aLi.length;i++){
        aLi[i].index = i;
        aLi[i].onmouseover = function ()
        {
            for( n = 0; n < aLi.length; n++) aLi[n].className="";
            this.className = "sel";
            for( n = 0; n < aDiv.length; n++) aDiv[n].style.display = "none";
            aDiv[this.index].style.display = "block"
        }
    }
//    选项卡2
    var oLi = document.getElementById("brand-list-tag").getElementsByTagName("li");
    var oUl = document.getElementById("brand-list-con").getElementsByTagName("ul");
    var n=0;
    for(var i = 0; i < oLi.length; i++)
    {
        oLi[i].index = i;
        oLi[i].onmouseover = function ()
        {
            for( n = 0; n < oLi.length; n++) oLi[n].className="";
            this.className = "z-link-crt";
            for( n = 0; n < oUl.length; n++) oUl[n].style.display = "none";
            oUl[this.index].style.display = "block"
        }
    }
//图片滚动
};
//图片滚动
//$(function(){
//    $(".ImgLoad img").hide();
//    $(".ImgLoad img").eq(0).show();
//    var n=0;
//    function showImg(){
//        if(n<$(".ImgLoad img").length-1){
//            n++;
//        }else{
//            n=0;
//        }
//        $(".ImgLoad img").hide();
//        $(".ImgLoad img").eq(n).show();
//        $(".m-mad-con li").removeClass("cur");
//        $(".m-mad-con li").eq(n).addClass("cur");
//    }
//    $(".m-mad-con li").click(function(){
//        $(".m-mad-con li").removeClass("cur");
//        $(this).addClass("cur");
//        n=$(".m-mad-con li").index(this);
//        $(".ImgLoad img").hide();
//        $(".ImgLoad img").eq(n).show();
//    });
//    setInterval(showImg,3000);
//});

function AutoScroll(obj){
    $(obj).find("ul:first").animate({
        marginTop:"-240px"
    },500,function(){
        $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
    });
}

$(document).ready(function(){
    setInterval('AutoScroll("#feng1")',2000)
});


