#1 
Only one button in the panel should be clickable at a time.

#2
When a button on the panel is clicked. All words are highlighted with the same
colour, but the first one is also highlighted with a different MAIN colour, 
which is an !important css.
!!! The <spand> element that is highlighted with the MAIN class must be 
remembered so that it can be changed easily.

#3
A Next and Prev buttons must be added to change the MAIN highlighted word. 
!!! Make sure to only only allow traversal to the end and no further. That is
once we reach the last element we should not be able to go any further. Same 
goes for prev. This could be done by count the number of occurrences of the selected
word. 
!!! Note: When we reach the last element, make sure to change the css of the next button.

#4 
Display the number of words to change. -  for the user. 

#5 
Display the popup-box under a clicked wordEntry. This will include some stats.

#6
Hover and click possible for any word in the “text” area. When you click a word, it will pair with an appearance of the same word in the “panel”. When you hover over it, the word
gets a css background colour. When a word is hovered over hihlishgt all appearances of 
that word in the “text” area.

#7 FIX!!!
When a clicked panel button is deleted, make sure to remove the <div> bellow it 
(this div is the pop-up box)

#8 
When removing an element from the panel, make sure to un-highlight the words in
text.

#9
To check if something exits use: if ($(selector).length)

#10 
Tests