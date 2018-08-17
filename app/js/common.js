	var setTime = function(el) {

	    var currentdate = new Date();

	    setInterval(function() {
	        var datetime = currentdate.getHours() + ":" + currentdate.getMinutes();
	        $(el).text(datetime);
	    }, 1000)

	}

	$(function() {
	    setTime('.b-header__time')
	});