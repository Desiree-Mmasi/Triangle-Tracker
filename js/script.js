function result() {
    console.log('l')
    var sideA = document.getElementById('a').value;
    var sideB = document.getElementById('b').value;
    var sideC = document.getElementById('c').value;
    var result = document.getElementById("result");
   
if(sideA != sideB && sideB != sideC && sideC != sideA) {
    // document.getElementById("result").innerHTML = "Scalene Triangle <img src= Image/Scalene triangle.png>"
    alert("Scalene Triangle")
}
else if (sideA === sideB && sideB === sideC && sideA === sideC) {
    //document.getElementById("result").innerHTML = "Equilateral Triangle <img src= Image/Equilateral triangle.png>"
alert("Equilateral Triangle")
}
else if (sideA === sideB != sideC || sideB === sideC != sideA || sideC === sideA != sideB) {
    // document.getElementById("result").innerHTML = "Isosceles Triangle <img src= Image/Isosceles triangle.png>"
    alert("Isosceles Traingle")
}
else{
    //document.getElementById("result").innerHTML = "Not a Triangle <img src= Image/sad.jpg>"
  alert("Not a triangle")
}    



}