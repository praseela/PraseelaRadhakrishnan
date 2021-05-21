    // To disable right click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // To disable F12 options
        // document.onkeypress = function (event) {
        // event = (event || window.event);
        // if (event.keyCode == 123) {
        // return false;
        // }
        // }
        document.onkeydown = function (e) {
            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
                return false;
            }
            return false;
        };
// document.onmousedown = function (event) {
// event = (event || window.event);
// if (event.keyCode == 123) {
// return false;
// }
// }
// document.onkeydown = function (event) {
// event = (event || window.event);
// if (event.keyCode == 123) {
// return false;
// }
// }
