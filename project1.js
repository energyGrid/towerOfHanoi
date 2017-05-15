/*bronze: stack of three elements that move right and left by clicking
silver: drag elements to new locations, css, https://api.jqueryui.com/draggable/
gold: stack of seven elements and a timer*/

// //Create disk elements using jquery.
// function handleDragStart(e) {
//   this.style.opacity = "0.8";
// }
$(init)
function init() {
  $("#discOne").draggable( {
    cursor: "move",
    containment: "window",
  })
}
//function allowing element to move one space right on click event

//function allowing element to move two spaces right on click event

//function allowing element to move one space left on click event

//function allowing element to move two spaces left on click event

//prevent a larger element from landing on-top of a smaller element
