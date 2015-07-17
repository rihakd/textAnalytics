// global info
var panelInUse = false;
var exapandedWordEntry = "";
var exapandedWordEntryDiv = null;
//jQuery
$(document).ready(function(){
	
	$("#panel").on({
		mouseover: function(){
			// highlight the word entry in the panel
			addCssToClass("wordEntryHover", ".wordEntry", this);
			// highlight all word occurenes in the text
			addCssToClass("selected", ".word", this);
		},
		mouseout: function(){
			// stop highlighting the word entry in the panel
			removeCssFromClass("wordEntryHover", ".wordEntry", this);
			// stop highlighting all word occurenes in the text
			removeCssFromClass("selected", ".word", this);
		},
		click: function(){
			wordClick(this);
		}
	}, ".wordEntry");

	// remove word listing from panel
	$("#panel").on("click", ".delButton", 
		function(event){
			event.stopPropagation();
			fDelButton(this);
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
		exapandedWordEntryDiv = word;
		panelInUse = true;
	// if panel in use AND the word we are clicking 
	// is the word  exapanded. This has only one sub-case 
	// since we are guaranteed to have the word in the panel.
	// !!! This is the only case were we want to close stuff.
	// 					REMOVE
	} else if (exapandedWordEntry == $t){
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
	// !! Both cases panel is being used so:
	// 		1. we first need to close
	// 		2.  - either:
	// 						open an existing entry 
	//								OR
	//						add a new entry

	} else {
		removeCssFromClass("buttonOn", ".wordEntry", exapandedWordEntryDiv);
		removeCssFromClass("clickedInText", ".word", exapandedWordEntryDiv);
		$("#info").remove();
		exapandedWordEntry = $t;
		exapandedWordEntryDiv = word;
		if (!existsIn(word ,".wordEntry")){
			$("#panel").prepend(
				'<div class="wordEntry">' 
				+ $t
				+ '<button class="delButton btn '
				+ 'btn-danger"></button></div>');
		}
		addCssToClass("clickedInText", ".word", word);
		addCssToClass("buttonOn", ".wordEntry", word);
		addAfter("<p id='info'>15% bitch</p>", ".wordEntry", word);
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




