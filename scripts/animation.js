$(document).ready(function() {
	$("#sun").click(function() {
		$("#thesuninvisible").toggleClass("show");
	});

	$("#mercury").click(function() {
		$("#mercuryinvisible").toggleClass("show");
	});

	$("#venus").click(function() {
		$("#venusinvisible").toggleClass("show");
	});

	$("#earth").click(function() {
		$("#earthinvisible").toggleClass("show");
	});

	$("#moon").click(function() {
		$("#mooninvisible").toggleClass("show");
	})
});
