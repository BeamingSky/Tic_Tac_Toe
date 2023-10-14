var num = 0,count = 0;
var i0,i1,i2,i3,i4,i5,i6,i7,i8 ;
function myfun0()
{
    if(num % 2 == 0)
    {
        i0 =  document.getElementById("click0").innerHTML="X"
        num++;
    } 
    else
    {
        i0 = document.getElementById("click0").innerHTML="O"
        document.getElementById("click0").style.color="blue"
        num++;
    }   
}
function myfun1()
{
    if(num % 2 == 0)
    {
        i1 = document.getElementById("click1").innerHTML="X"
        num++;
    }
    else
    {
        i1 = document.getElementById("click1").innerHTML="O"
        document.getElementById("click1").style.color="blue"
        num++;
    }
}
function myfun2()
{
    if(num % 2 == 0)
    {
        i2 = document.getElementById("click2").innerHTML="X"
        num++;
    }
    else
    {
        i2 = document.getElementById("click2").innerHTML="O"
        document.getElementById("click2").style.color="blue"
        num++;
    }
}
function myfun3()
{
    if(num % 2 == 0)
    {
        i3 = document.getElementById("click3").innerHTML="X"
        num++;
    } 
    else
    {
        i3 = document.getElementById("click3").innerHTML="O"
        document.getElementById("click3").style.color="blue"
        num++;
    }   
}
function myfun4()
{
    if(num % 2 == 0)
    {
        i4 = document.getElementById("click4").innerHTML="X"
        num++;
    }
    else
    {
        i4 = document.getElementById("click4").innerHTML="O"
        document.getElementById("click4").style.color="blue"
        num++;
    }
}
function myfun5()
{
    if(num % 2 == 0)
    {
        i5 = document.getElementById("click5").innerHTML="X"
        num++;
    }
    else
    {
        i5 = document.getElementById("click5").innerHTML="O"
        document.getElementById("click5").style.color="blue"
        num++;
    }
}
function myfun6()
{
    if(num % 2 == 0)
    {
        i6 = document.getElementById("click6").innerHTML="X"
        num++;
    } 
    else
    {
        i6 = document.getElementById("click6").innerHTML="O"
        document.getElementById("click6").style.color="blue"
        num++;
    }   
}
function myfun7()
{
    if(num % 2 == 0)
    {
        i7 = document.getElementById("click7").innerHTML="X"
        num++;
    }
    else
    {
        i7 = document.getElementById("click7").innerHTML="O"
        document.getElementById("click7").style.color="blue"
        num++;
    }
}
function myfun8()
{
    if(num % 2 == 0)
    {
        i8 = document.getElementById("click8").innerHTML="X"
        num++;
    }
    else
    {
        i8 = document.getElementById("click8").innerHTML="O"
        document.getElementById("click8").style.color="blue"
        num++;
    }
}
function myfun()
{
    count++;
    if(i0 == "X" && i1 == "X" && i2 == "X"|| i3 == "X" && i4 == "X" && i5 == "X" || i6 == "X" && i7 == "X" && i8 == "X"|| i0 == "X" && i3 == "X" && i6 == "X" || i1 == "X" && i4 == "X" && i7 == "X" || i2 == "X" && i5 == "X" && i8 == "X" || i0 == "X" && i4 == "X" && i8 == "X" || i2 == "X" && i4 == "X" && i6 == "X")
    {
        document.getElementById("print").innerHTML="player x is won";

    }
    else if(i0 == "O" && i1 == "O" && i2 == "O"|| i3 == "O" && i4 == "O" && i5 == "O" || i6 == "O" && i7 == "O" && i8 == "O"|| i0 == "O" && i3 == "O" && i6 == "O" || i1 == "O" && i4 == "O" && i7 == "O" || i2 == "O" && i5 == "O" && i8 == "O" || i0 == "O" && i4 == "O" && i8 == "O" || i2 == "O" && i4 == "O" && i6 == "O")
    {
        document.getElementById("print").innerHTML="player O is won";                
    }
    else if(count == 9)
    {
        document.getElementById("print").innerHTML="game is drow"
    }
}
function restart()
{  
    location.reload();
}
