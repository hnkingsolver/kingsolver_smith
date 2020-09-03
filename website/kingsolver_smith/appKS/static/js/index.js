
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