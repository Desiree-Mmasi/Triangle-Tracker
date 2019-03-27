function triangle (a,b,c){
    if (a+b>c && a+c>b && b+c>a && a==b && b==c)
equilateral();
else if (a+b>c && a+c>b && b+c>a && a==b || b==c || c==a)
    iso();
else if (a+b>c && a+c>b && b+c>a && a!=b && b!=a && c!=a)
    scalene();
else
     fail();
} 

function equilateral(){
    window.location = "Equi.html";
}

 function scalene(){
    window.location = "Scalene.html";
 }


 function iso (){
    //alert("Cannot form a triangle")
     window.location = "Isosceles.html";

 }
 function fail(){
    window.location = "Sad.html";
 }