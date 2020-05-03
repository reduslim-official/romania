 <!--Скрипт защиты от копирования-->

function notmenu() { window.event.returnValue=false;} 

document.ondragstart = test; 
document.onselectstart = test; 
document.ontextmenu = test; 
function test() { return false } 
