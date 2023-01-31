function openNav() {
    var x = document.getElementById("d-sidebar");
    if (x.style.display == "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function FirstTab(){
    document.getElementById("tab1-content").style.display = "block";
    document.getElementById("tab2-content").style.display = "none";
    document.getElementById("tab3-content").style.display = "none";

    document.getElementById("button1").style.color = "red";
    document.getElementById("button2").style.color = "black";
    document.getElementById("button3").style.color = "black";

    document.getElementById("button1").style.borderBottom = "2px solid red";
    document.getElementById("button2").style.borderBottom = "none";
    document.getElementById("button3").style.borderBottom = "none";
 

}
function SecondtTab(){
    document.getElementById("tab1-content").style.display = "none";
    document.getElementById("tab2-content").style.display = "block";
    document.getElementById("tab3-content").style.display = "none";

    document.getElementById("button2").style.color = "red";
    document.getElementById("button1").style.color = "black";
    document.getElementById("button3").style.color = "black";

    document.getElementById("button1").style.borderBottom = "none";
    document.getElementById("button2").style.borderBottom = "2px solid red";
    document.getElementById("button3").style.borderBottom = "none";
}
function ThirdTab(){
    document.getElementById("tab1-content").style.display = "none";
    document.getElementById("tab2-content").style.display = "none";
    document.getElementById("tab3-content").style.display = "block";

    document.getElementById("button3").style.color = "red";
    document.getElementById("button1").style.color = "black";
    document.getElementById("button2").style.color = "black";
    
    document.getElementById("button1").style.borderBottom = "none";
    document.getElementById("button2").style.borderBottom = "none";
    document.getElementById("button3").style.borderBottom = "2px solid red";
}