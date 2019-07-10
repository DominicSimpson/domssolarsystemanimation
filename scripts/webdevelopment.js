function readMore() {
	document.getElementById("readmore").onclick = function() {
		document.getElementById("hidden-first").style.display="inline";
	return true;
	}
}

window.addEventListener('load',readMore, false);