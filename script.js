function process(){
  var person = document.getElementById("nameBox").value ; 
  var check = parseInt(document.getElementById("checkBox").value) ; 
  
  if (check > 5 ) {
  
    document.getElementById("content").innerHTML= `
    
    <h4>Wow ${person},  Hope your travels were filled with amazing experiences and memories. Can't wait to catch up with you!:)</h4>`;
  }
  else {
  
     document.getElementById("content").innerHTML= `
    <h4> A Little Advice for you, ${person}. “Jobs fill your pocket, but adventures fill your soul.” - Jamie Lyn Beatty </h4>`;
  }

}


