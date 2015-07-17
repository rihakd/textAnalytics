
var lastKey = 32;
$(document).ready(function(){
	$('body').on("keypress", function(){
		//var key = e.which;
		event.preventDefault();
		var key = event.which;
		var c = String.fromCharCode(key);
		if (lastKey == 32) {
			//event.preventDefault();
			//var key = event.which;
			var c = String.fromCharCode(key);
			insertTextAtCursor(c);
			lastKey = key;
		} else {
			lastKey = event.which;
		}
	});
});

function insertTextAtCursor(text) {
    var sel, range, html;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var newSpan = document.createElement('span');
            var att = document.createAttribute("class");
            att.value = "word";
            var txt = document.createTextNode(text);
            newSpan.setAttributeNode(att);
            newSpan.appendChild(txt);
            //range.surroundContents(newSpan);
            range.insertNode( newSpan);
            sel.modify("move", "right", "character");
            sel.modify("move", "right", "character");
        }
    } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().text = text;
    }
}
