/* Word: an object containing text ( the word itself)
 * top/left position, and dimensions in pixels */
var Word = function(text, posx, posy, width, height) {
	this.text = text;
	this.x = posx;
	this.y = posy;
	this.w = width;
	this.h = height;
}

/* stringToWords: converts a continuous block of text into
 * and array of words, parsed spans of words, and the height of the box*/
function stringToWords(sentence, box) {
	var fontSize = 20;
	var fontHeight = 24;
	var space = 6; //blank space is 5 pixels
	var splits = new Array();
	var wordBundle = { words: [], parsed: "", boxHeight:0};
	var x = 0; var y = 0;
	
	splits = sentence.split(" ");
	for (var i = 0; i < splits.length(); i++) {
		var text = splits[i];
		$("tempOut").update("<span style='position: absolute; height: auto; \
							width: auto; font-size: "+text+"px; visibility: \
							'hidden' id='measure'>"+wordtext+"</span>");
		var test = $("measure");
		var height = test.clientHeight + 1;
		var width = test.clientWidth + 1;
		wordBundle.parsed += "<span id='"+box.id+"."+i+"'>"+text+"</span>";
		wordBundle.words[i] = text;
		if (x+width > box.maxWidth) { //out of bounds, new line
			x = 0;
			y += fontHeight;
		}
		wordBundle.words.x = x;
		wordBundle.words.y = y;
		wordBundle.words.width = width;
		wordBundle.words.height = height;
		x += width + space;
	}
	wordBundle.maxHeight = y + height;
	return wordBundle
}
