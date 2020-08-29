function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

$(document).ready(function() {
	if(getCookie("warning_seen") == "true"){
		$("#warning").css('display', 'none');
		$("#content").css('display', 'block');
	}else{
		$("#warning").css('display', 'block');
		$("#content").css('display', 'none');
	}
	
	$("#btn-proceed").click(function(){
		$("#warning").css('display', 'none');
		$("#content").css('display', 'block');
		setCookie("warning_seen","true",60);
	});
	$("#btn-dont-proceed").click(function(){
		window.location.href = "https://www.google.com/";
	});
});

