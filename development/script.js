// global info
var panelInUse = false;
var exapandedWordEntry = "";
//jQuery
$(document).ready(function(){
	// remove word listing from panel
	$(".delButton").click(function(){
		fDelButton(this);
	});

	$(".wordEntry").hover(
		function(){
			// highlight the word entry in the panel
			addCssToClass("wordEntryHover", ".wordEntry", this);
			// highlight all word occurenes in the text
			addCssToClass("selected", ".word", this);
		},function(){
			// stop highlighting the word entry in the panel
			removeCssFromClass("wordEntryHover", ".wordEntry", this);
			// stop highlighting all word occurenes in the text
			removeCssFromClass("selected", ".word", this);
	});

	$("#panel").on("click", ".wordEntry", 
		function(){
			wordClick(this);
	});

	$(".word").hover(
		function(){
			// highlight all word occurenes in the text
			addCssToClass("selected", ".word", this);
			// highlight the word entry in the panel
			addCssToClass("wordEntryHover", ".wordEntry", this);
		}, function(){
			// stop highlighting all word occurenes in the text
			removeCssFromClass("selected", ".word", this);
			// stop highlighting the word entry in the panel
			removeCssFromClass("wordEntryHover", ".wordEntry", this);
	});

	$(".word").on("click",
		function(){
			wordClick(this);
	});

});

function wordClick(word){
	var $t = $(word).text();
	// if panel is inactive 
	// => the word netry may be present or not
	// => in either case we need to highlight some things
	//		so it should probably be the first case 
	// 		since it shares some bahaviour
	if(!panelInUse){
		addCssToClass("clickedInText", ".word", word);
		// add an info pop-up box
		if (!existsIn(word ,".wordEntry")){
			$("#panel").prepend(
				'<div class="wordEntry">' 
				+ $t
				+ '<button class="delButton btn '
				+ 'btn-danger"></button></div>');
		}
		addCssToClass("buttonOn", ".wordEntry", word);
		addAfter("<p id='info'>15% bitch</p>", ".wordEntry", word);
		// Finish by updateing page status
		exapandedWordEntry = $t
		panelInUse = true;
	// if panel in use AND the word we are clicking 
	// is the word  exapanded. This has only one sub-case 
	// since we are guaranteed to have the word in the panel.
	// !!! This is the only case were we want to close stuff.
	// 					REMOVE
	} else if (exapandedWordEntry == $t){
		// add css
		// highlish words in text
		removeCssFromClass("buttonOn", ".wordEntry", word);
		removeCssFromClass("clickedInText", ".word", word);
		// remove the info box
		$("#info").remove();
		// Finish by updateing page status
		panelInUse = false;
		exapandedWordEntry = "";
	// THE REST IS: panelInUser AND exapandedWordEntry != $t
	// => we are trying to open something that is not currently
	//		open

	// It is in the panel so we just want to close the previous
	// thing and open the new one.
	} else if (false){

	// it is not present so we are cliking in the text 
	// and need to add a new entry in the text
	//
	} else if (false ){

	}
}

// .js functions 
function fDelButton(buttonObject){
	// var $t = $(this).parent().text();
	// the problem is: once i click remove
	// the wordEntry is clicked as well.
	// no it's not
	if ($(buttonObject).parent().next().attr("id") == "info") {
		$(buttonObject).parent().next().remove();
		removeCssFromClass("clickedInText", 
			".word", $(buttonObject).parent());
		exapandedWordEntry = ""
		panelInUse = false;
	}
	removeCssFromClass("selected", 
		".word", $(buttonObject).parent());
	$(buttonObject).parent().remove();
}

/*
css: is a css class that adds style
class: is a distinguishes different parts of the page.
word: is a div that contains a word text
	usually either .wordEntry or .word

	Adds the specified css to all elems with
	class=clss if they contain the same text 
	as word. 
*/
function addCssToClass(css, clss, word){
	var $t = $(word).text();
	$(clss).filter(function(){
		return $(this).text() == $t;
	}).addClass(css);
}

/*
css: is a css class that adds style
class: is a distinguishes different parts of the page.
word: is a div that contains a word text
	usually either .wordEntry or .word

	Removes the specified css to all elems with
	class=clss if they contain the same text 
	as word. 	
*/
function removeCssFromClass(css, clss, word){
	var $t = $(word).text();
	$(clss).filter(function(){
		return $(this).text() == $t;
	}).removeClass(css);
}
/*
target: is a that shoul be in html form
clss: is a distinguishes different parts of the page.
word: is a div that contains a word text usually .wordEntry

	Adds a target after the occurence of an element 
	which has class=class text from word.
*/
function addAfter(target, clss, word){
	var $t = $(word).text();
	$(clss).filter(function(){
		return $(this).text() == $t;
	}).after(target);
}

function existsIn(word, clss){
	var $t = $(word).text();
	return $(clss).filter(function(){
		return $(this).text() == $t;
	}).length;
}




