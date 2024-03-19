var lol = "<h6>Minimum 7 karaktera i 1 broj.</h6>";
$("div.burger a").click(function(){
		$("div.burger-meni").addClass("prikazi");
});

$("a.skloni-meni").click(function(){
		$("div.burger-meni").removeClass("prikazi");
});

$("input.email").focusout(function() {
  $(this).removeClass("err", "success");
  var email = $(this).val();
	var regEmail = /^([a-zA-Z0-9_.-])+\@(([a-zA-Z0-9-])+.)+([a-zA-Z]{2,4})+$/
	if(regEmail.test(email)){
		$(this).addClass("success");
	} else {
		$(this).addClass("err");
	}
});

$("input.password").focusout(function() {
  $(this).removeClass("err", "success");
  var pass = $(this).val();
	var regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
	if(regPass.test(pass)){
		$(this).addClass("success");
		$("span.error").removeClass("display");
	} else {
		$(this).addClass("err");
		$("span.error").addClass("display");
	}
})

$("input.ime").focusout(function() {
  $(this).removeClass("err", "success");
  var ime = $(this).val();
	var regIme = /^[A-Z][a-z]{1,10}$/
	if(regIme.test(ime)){
		$(this).addClass("success");
	} else {
		$(this).addClass("err");
	}
})

$("input.prezime").focusout(function() {
  $(this).removeClass("err", "success");
  var prez = $(this).val();
	var regPrez = /^[A-Z][a-z]{1,18}$/
	if(regPrez.test(prez)){
		$(this).addClass("success");
	} else {
		$(this).addClass("err");
	}
})
