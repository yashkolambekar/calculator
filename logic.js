let screen = document.getElementById('r1');
buttons = document.querySelectorAll('.btns');
for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerHTML
        console.log('Button text is ', buttonText);
      
        if(buttonText == "="){
            screen.innerHTML = eval(screen.innerHTML);

            if(screen.innerHTML == '16122005'){
               showhbd();
            }

            if(screen.innerHTML == '20022005'){
                showhbd2();
             }
            
            if(screen.innerHTML == '24052005'){
                showhbd3();
             }

        }

        if(buttonText == "C"){
            screen.innerHTML = '';
        }

        else if(screen.innerHTML.length < '14'&& buttonText != 'C' &&  buttonText != "="){
            screen.innerHTML += buttonText;
        }
    }
    )
}

function exithbd(){
    document.getElementById('hbd').style.display = 'none';
}

function showhbd(){
    document.getElementById('hbd').style.display = 'flex';
}

function exithbd2(){
    document.getElementById('hbd2').style.display = 'none';
}

function showhbd2(){
    document.getElementById('hbd2').style.display = 'flex';
}

function exithbd3(){
    document.getElementById('hbd3').style.display = 'none';
}

function showhbd3(){
    document.getElementById('hbd3').style.display = 'flex';
}
