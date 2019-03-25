function triangle() {
    var sideA = parseInt(document.getElementById('a').value);
    var sideB = parseInt(document.getElementById('b').value);
    var sideC = parseInt(document.getElementById('c').value);
    if(((sideA+sideB !=sideC) || (sideB+sideC !=sideA) || (sideA+sideC !=sideB)) && ((sideA+sideB<sideC) || (sideB+sideC<sideA) || (sideC+sideA<sideB));
    document.getElementById("result").innerHTML = "Not a Triangle"        
}
else if (sideA != sideB && sideB != sideC && sideC != sideA) {
    document.getElementById("result").innerHTML = "Scalene Triangle"
}
else if (sideA === sideB)
    


