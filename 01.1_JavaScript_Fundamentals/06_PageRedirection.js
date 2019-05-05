// Re-Direction:
//window.location():
window.location = "https://mechmadhog.com/";
// This will instantly re-direct a user to my portfolio page.

/* IMPORTANT Note: NEVER link to the current page as creating a LOOP can CRASH the browser. */

/* window.open: */

// "URL" is the PATH of a New Location.
// "name" is the TARGET parameter and can accept the following values: "_blank", "_self", "_top" and "_framename".
/*The Optional Parameters consist of:
"height" (The window height in px),
"width" (The window width in px),
"top" (The position from the top of the window in px),
"left" (The position from the left of the window in px),
"scrollbar" (Disables the Scroll Bars) - Values = "yes"(DEFAULT) or "no",
"resizable" (Disables the Window Resizing) - Values = "yes"(DEFAULT) or "no",
"location" (Disables the Page Location) - Values = "yes"(DEFAULT) or "no",
"menubar" (Disables the Menu Bar) - Values= "yes"(DEFAULT) or "no" */
// "replace" (Replaces Web History with the Redirected Page. ) - Values= "true" or "false"(DEFAULT).
window.open(
  "https://mechmadhog.com/",
  "_blank",
  "width=1920, height=1080,scrollbar=no",
  "true"
); //This will open in a new tab an this page won't get stored in browser history.
