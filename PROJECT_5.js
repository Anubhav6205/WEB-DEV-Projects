let xxx = document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue= '';
for(item of buttons){
    item.addEventListener('click',(e)=>{  //e text 
        buttonText=e.target.innerText;  //it will give written inside button
         console.log('Button text is ',buttonText)
         if(buttonText=='X'){
             buttonText= '*';
             screenValue += buttonText;
             xxx.value=screenValue;

         }
         else if (buttonText=='AC'){     //blank screen
            screenValue ="";
            xxx.value=screenValue;

         }
         else if (buttonText =='='){     //it will evaluate 
              xxx.value = eval(screenValue);
         }
         else{
            screenValue += buttonText;
            xxx.value=screenValue;
         }

    })
}