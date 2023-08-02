document.getElementById('hello').addEventListener("click",function(){
    document.getElementById('dinkar').href="style2.css";
});
document.getElementById('by').addEventListener("click",function(){
    document.getElementById('dinkar').href="style1.css";
});
document.getElementById('tata').addEventListener("click",function(){
    document.getElementById('dinkar').href="style3.css";
});
var string="";
document.getElementById('seven').addEventListener("click",function(){
     string +="7";
     document.getElementById('second').innerHTML=string;
});
document.getElementById('eight').addEventListener("click",function(){
    string +="8";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('nine').addEventListener("click",function(){
    string +="9";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('DEL').addEventListener("click",function(){
    string=string.slice(0,-1);
    document.getElementById('second').innerHTML=string;
});
document.getElementById('four').addEventListener("click",function(){
    string +="4";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('five').addEventListener("click",function(){
    string +="5";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('six').addEventListener("click",function(){
    string +="6";
    document.getElementById('second').innerHTML=string;  
});
document.getElementById('add').addEventListener("click",function(){
    string +="+";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('one').addEventListener("click",function(){
    string +="1";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('two').addEventListener("click",function(){
    string +="2";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('three').addEventListener("click",function(){
    string +="3";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('subtract').addEventListener("click",function(){
    string +="-";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('dot').addEventListener("click",function(){
    string +=".";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('zero').addEventListener("click",function(){
    string +="0";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('slash').addEventListener("click",function(){
    string +="/";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('multiply').addEventListener("click",function(){
    string += "*";
    document.getElementById('second').innerHTML=string;
});
document.getElementById('RESET').addEventListener("click",function(){
    string="";
    document.getElementById('second').innerHTML='';
});
document.getElementById('equal').addEventListener("click",function(){
   var god=eval(string);
    document.getElementById('second').innerHTML=god;
})  