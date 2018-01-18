$(function() {
    var blockTop = $('.services').offset().top;
    var CountUpFlag = 0;
    var $window = $(window);
    $window.on('load scroll', function() {
        var top = $window.scrollTop();
        var height = $window.height();
        if (top + height >= blockTop && CountUpFlag == 0) {
            CountUp();
            CountUpFlag = 1;
        }
		        if (top + height >= blockTop && CountUpFlag == 0) {
            CountDown();
            CountUpFlag = 0;
        }
		
		
		
    });
    function CountUp() {
        alert ("123");
    }
	function CountDown() {
        alert ("890");
    }
	
});