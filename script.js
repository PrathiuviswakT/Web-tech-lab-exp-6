function  change(){
    var box = document.getElementById("box");
    var bgcolor = document.getElementById("background").value;
    var txtcolor = document.getElementById("textcolor").value;
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var size = document.getElementById("size").value;
    var range = document.getElementById("range").value;

    box.style.backgroundColor = bgcolor;
    box.style.color = txtcolor;
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.fontSize = size + "px";
    box.style.borderRadius = range + "px";
}


var car = null;
var timer = null;
function init(){
    car = document.getElementById('car')
    car.style.position = "relative";
    car.style.left ="2px";
}

function move(){
    car.style.left= parseInt(car.style.left) + 2 + "px"
    timer = setTimeout(move,100)
    if(x >= 1500){
        document.getElementById("danger").innerHTML="DANGER";
        clearTimeout(timer);
    }
}

function stop(){
    clearTimeout(timer);
}

function reset(){
    car.style.left ="2px";
}


var names =[];
var num=[];
function add(){
    names.push(document.getElementById("add").value);
    num.push(document.getElementById("num").value);
    view();
}
function firstremove(){
    names.shift();
    num.shift();
    view();
    
}

function lastremove(){
    names.pop();
    num.pop();
    view();
}

function view(){
    var result= "<ol>";
    for (var i=0;i<names.length;i++){
        result += "<li>"+names[i]+ " - "+num[i]+"</li>";
    }
    result += "</ol>";
    document.getElementById("output").innerHTML=result;
}
