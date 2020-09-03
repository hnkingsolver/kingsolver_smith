// THIS IS THE CONTACT SECTION
var changeTexts = ['Call me beep me &#128242','Call me maybe? &#128171',' HELLO HELLO baby you called, I cant hear a thing? &#128577','Hello? Is it me you\'re looking for? &#10024','You say goodbye & I say Hello! &#127774'];

function changeText(index) {     
  var element = document.getElementById('changingtext');
  
  if(index >= changeTexts.length){
    changeTexts.splice(-1,1);
    return;
  }
  
  if(index === 0) changeTexts.push(element.innerHTML);   
  
  element.innerHTML = changeTexts[index];
  index++;
  
  setTimeout(function(){ changeText(index); },1500);    
}


// $(document).ready(function () {
//     var textArray = [];
//     textArray[0] = 'test 1';    
//     textArray[1] = 'test 2';    
//     textArray[2] = 'test 3';    
//     textArray[3] = 'test 4';    
    
//     var idx = 0;
//     $('input#click').on('click', function(){
//         idx++;
//         var newidx = idx % textArray.length;
//         $('h1#test').text(textArray[newidx]);
//     });
// });


// THIS IS THE MODAL SECTION
// Get the modal
var modal = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal

//Basic
btn[0].onclick = function () {
    modal[0].style.display = "block";
}
//Enhanced
btn[1].onclick = function () {
    modal[1].style.display = "block";
}
//Tailored
btn[2].onclick = function () {
    modal[2].style.display = "block";
}
//Store
btn[3].onclick = function () {
    modal[3].style.display = "block";
}


// When the user clicks on <span> (x), close the modal

//Basic
span[0].onclick = function () {
    modal[0].style.display = "none";
}
//Enhanced
span[1].onclick = function () {
    modal[1].style.display = "none";
}
//Tailored
span[2].onclick = function () {
    modal[2].style.display = "none";
}
//Store
span[3].onclick = function () {
    modal[3].style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
