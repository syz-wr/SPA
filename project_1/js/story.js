	$(function() {
		$('.top').load('son-head.html', function() {
			$('h1').html(a)
		})
		
		$('.live').load('alive.html')
		$('.liuyan').load('onlineword.html')
		$('.story-bottom').load('foot.html')
		var h = decodeURI(window.location.href)
		var n = h.indexOf("#")
		var a = h.substr(n + 1)
		console.log(a)
		
	})