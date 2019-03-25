function triangle() {
    var sideA = parseInt(document.getElementById('a').value);
    var sideB = parseInt(document.getElementById('b').value);
    var sideC = parseInt(document.getElementById('c').value);
    if(((sideA+sideB !=sideC) || (sideB+sideC !=sideA) || (sideA+sideC !=sideB)) && ((sideA+sideB<sideC) || (sideB+sideC<sideA) || (sideC+sideA<sideB));
    document.getElementById("result").innerHTML = "Not a Triangle";        
}
else if (sideA != sideB && sideB != sideC && sideC != sideA) {
    document.getElementById("result").innerHTML = "Scalene Triangle <img src= Image/Scalene triangle.png">
}
else if (sideA === sideB && sideB === sideC && sideA === sideC) {
    document.getElementsById("result").innerHTML = "Equilateral Triangle <img src= Image/Equilateral triangle.png>"
}
else if ((sideA === sideB != sideC) || (sideB === sideC != sideA) || (sideC === sideA != sideB)) {
    document.getElementById("result").innerHTML = "Isosceles Triangle <img src= Image/Isosceles triangle.png">
}
else{
    document.getElementById("result").innerHTML = "Not a Triangle <img src= Image/sad.jpg">
}    
function reload(){
    location.reload();
}


