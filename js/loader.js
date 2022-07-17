var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 500);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    var wheels = document.getElementsByTagName("section");
    // i += 1 o i++
    for (var i = 0; i < wheels.length; i = i + 1 ) {
        wheels[i].style.display = "flex";
    }
    document.getElementById("footer").style.display = "block";
}