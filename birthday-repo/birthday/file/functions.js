

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);


function timeElapse(){
	
    var start = new Date(Date.UTC(2000, 8, 7)); //input the date you want, in js months start from 0, so december would be 11, Format: year, month, day.
    var today = new Date();
    var current = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes()));

    var millisecondsPerDay = 1000 * 60 * 60 * 24;
	var millisecondsPerHour = 1000 * 60 * 60;
	var millisecondsPerMinute = 1000 * 60 * 24;

    var timeDiff = current - start;
    var daysDiff = Math.floor(timeDiff / millisecondsPerDay);

	var remainingMsAfterDays = timeDiff % millisecondsPerDay;
    var hoursDiff = Math.floor(remainingMsAfterDays / millisecondsPerHour);

    var remainingMsAfterHours = remainingMsAfterDays % millisecondsPerHour;
    var minutesDiff = Math.floor(remainingMsAfterHours / millisecondsPerMinute);

	var result ="<span class=\"digit\">" + daysDiff + "  Days Ago <span class=\"digit\">";

    $("#clock").html(result);
    var text = "You were born ";
    $("#message-box").html(text);
}
