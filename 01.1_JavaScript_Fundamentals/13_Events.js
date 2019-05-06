// Events: these happen when an action is triggered on a webpage.
/* Examples of JS Events are:
onClick, onDblClick, onFocus, on Blur, onMouseDown, onMouseUp,
onMouseMove, onMouseOut, onMouseOver, onKeyDown,
onKeyPress and onKeyUp.
*/
// JS Events are global attributes that can be applied to almost any HTML element.
// onClick Example:
// Head:
function Click(txt) {
  alert(txt);
}
// Body:
<button type="button" onclick='Click(" You Clicked the Button!")'>
  Click Me!
</button>;

// onFocus Example:
// Head:
function StartFocus() {
  alert("You Are Now Focused on Inputting Text.");
}
// Body:
<input type="input" onfocus="StartFocus();" value="" />;
// onBlur is what happens when I go back out of onFocus.

//Mouse Events:
// Head:
function MouseOver() {
  alert("I am Hovering over the element!");
}
// Body:
<div
  style="height:300px; width:450px; border: 2px solid black;"
  onMouseOver="MouseOver();"
>
  Hover Over Me!
</div>;
// onMouseDown is onClick but BEFORE release.

//Key Events:
// Head:
function AfterPress() {
  alert("Pressed a Key");
}
// Body:
<input
  type="text"
  onKeyPress="AfterPress();"
  placeholder="Add Your Text Here..."
/>;
// Events CAN be used to add interactivity to a webpage.
