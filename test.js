function myFunction() {
    document.getElementById("operator").style.display = "block";
      var x = document.getElementsByClassName("nested");
      for (var i = 0; i < x.length; i++) {
        if (x[i].classList.contains("active")) {
          x[i].classList.remove("active");
        } else {
          x[i].classList.add("active");
        }
      }
    }                                            
  
  
  function displayExp() {
      var operand1 = document.getElementById("myList").value;
      //var text = document.getElementById("val2").value;
      var operator1 = document.getElementById("myOperator").value;
      var andor = document.getElementById("operator").value;
      var val1 = document.getElementById("val1").value; 
      var operand2 = document.getElementById("myList2").value;
      var operator2 = document.getElementById("myOperator2").value;
      var operand2 = document.getElementById("val2").value;
      var result;
      result = operand1 + " "  + operator1 +" "+val1 +" " +andor +" "+ operand2 +" " + operator2 +" "+val1 ;
      //var res = eval(operand1 + " "  + operator1 +" "+val1 +" " +andor +" "+ operand2 +" " + operator2 +" "+val1);
      //" " + operand2 +  +  " " + comOperator;
      //  console.log(result);
      document.getElementById("res").innerHTML = result;
      res.innerHTML = result;
      
      // document.write(result);
    }                        
    

   

//toggle2 = document.querySelector('#toggle2');
var dropDown1 = document.getElementById("myList");
//var textBox = document.getElementById("textBox");
var dropDown2 = document.getElementById("myOperator");
var textBox = document.getElementById("val1");
toggle2 = document.querySelector('#toggle2');
toggle2.addEventListener('click', () => {
  toggle2.classList.toggle('off');


  if (toggle2 == true){

    dropDown1.style.display = "inline-block";
    dropDown2.style.display = "inline-block";
    textBox.style.display = "none";

  } else {
    
    dropDown1.style.display = "none";
    dropDown2.style.display = "none";
    textBox.style.display = "inline-block";
  }
});




