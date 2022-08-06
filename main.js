var can = document.getElementById("myCanvas") ;
var ctx = can.getContext("2d") ;
var mousev = "empty" ;
var col = "Red" ;
var wili = 1 ;
var radi = 40 ;
can.addEventListener("mousedown", mymd) ;
function mymd(e) 
{
   col = document.getElementById("col").value ;
   wili = document.getElementById("wil").value ;
   radi = document.getElementById("rad").value ;
   mousev = "mousedown" ;
}
can.addEventListener("mouseup", mymp) ;
function mymp(e) 
{
    mousev = "mouseup" ;
}
can.addEventListener("mouseleave", myml) ;
function myml(e) 
{
    mousev = "mouseleave" ;
}
can.addEventListener("mousemove", mymo) ;
function mymo(e) 
{
    var curX = e.clientX - can.offsetLeft ;
    var curY = e.clientY - can.offsetTop ;
    if (mousev == "mousedown") 
    {
        ctx.beginPath()
        ctx.strokeStyle = col ;
        ctx.lineWidth = wili ;
        console.log("last position of x and y coordinate = ")
        console.log("X = "+curX+" Y = "+curY) ;
        ctx.arc(curX,curY,radi,0,2 * Math.PI)
        ctx.stroke() ;
    }
}    