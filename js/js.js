/**
 * 
 * @authors ldx
 * @date    2015-05-25 10:46:27
 * @version $Id$
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
};
// 回到顶部
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $("#backToTop").fadeIn(800);
        }
        else
        {
            $("#backToTop").fadeOut(800);
        }
    });
    $('#backToTop').hover(function(){
        $('#backToTop span').css('display','none');
    },function(){
        $('#backToTop span').css('display','block');
    });
    $("#backToTop").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
});
// 广告图片滚动
$(function(){
    var iNow=0;
    var allImg=$('.ImgLoad li').length;
    $('.m-mad-con li').click(function(){
        var index=$(this).index();
        iNow=index;
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.ImgLoad').animate({'marginTop':-245*index},500);
    });
    setInterval(function(){
        if(iNow>=allImg-1){iNow=0;}else{iNow++;}
        $('.m-mad-con li').eq(iNow).addClass('cur').siblings().removeClass('cur');
        $('.ImgLoad').animate({'marginTop':-245*iNow},500);
      
    },2000)
});

