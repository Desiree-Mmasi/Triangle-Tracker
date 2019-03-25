function triangle() {
    var sideA = parseInt(document.getElementById('a').value);
    var sideB = parseInt(document.getElementById('b').value);
    var sideC = parseInt(document.getElementById('c').value);
    if(((sideA+sideB !=sideC) || (sideB+sideC !=sideA) || (sideA+sideC !=sideB)) && ((sideA+sideB<sideC) || (sideB+sideC<sideA) || (sideC+sideA<sideB));
    document.getElementById("result").innerHTML = "Not a Triangle"        
}
else if(sideA != sideB && sideB != sideC && sideC != sideA) {
    document.getElementById("result").innerHTML = "Scalene Triangle" <img src="Image/Scalene Triangle.png">
}
else if (sideA === sideB && sideB === sideC && sideA === sideC) {
    document.getElementsById("result").innerHTML = "Equilateral Triangle" <img src="Image/Equilateral Triangle.png>"
}
MediaElementAudioSourceNodeee

    


