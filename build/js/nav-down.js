////выдвигающееся меню ///
$(function() {
	var $window = $(window);
    var blockTop = $('.header__slider').offset().top; //расстояние от верха страницы блока
	var scrollTop = $window.scrollTop(); //значение на сколько проскролили сверху
	var CountUpFlag = 0;
	        if (scrollTop  >= blockTop && CountUpFlag == 0) {
			toggleDownMenu();
            CountUpFlag = 1;
        }
    $window.on('load scroll', function() {
		var scrollTop = $window.scrollTop(); //значение на сколько проскролили сверху
        if (scrollTop  >= blockTop && CountUpFlag == 0) {
			toggleDownMenu();
            CountUpFlag = 1;
        }
		if (scrollTop  <= blockTop && CountUpFlag == 1) {
            toggleUpMenu();
            CountUpFlag = 0;
		}


    });
    function toggleDownMenu() {
		$( '#toggleMenu' ).css({"top":"0", "transition":"0.5s"});

    }
	function toggleUpMenu() {
        $( '#toggleMenu' ).css({"top":"-142px", "transition":"0.5s"});
    }

});
/////плавный переход по секциям//////
var items =  document.querySelectorAll("section"), len = items.length;
 function fn(b) {
    var a = 0;
    return function(c) {
        "current" != c && (c ? (a--, 0 > a && (a = b - 1)) : (a = ++a % b));
        return a
    }
};
var fn = fn(len);
 
function fnShow(a)
{
   items[fn(a)].scrollIntoView({behavior: "smooth"});
   return false
}
document.querySelector("#arrow_top").addEventListener("click", function() {
  fnShow(true )
}, false);
document.querySelector("#arrow_bot").addEventListener("click", function() {
 fnShow(false)
}, false);

