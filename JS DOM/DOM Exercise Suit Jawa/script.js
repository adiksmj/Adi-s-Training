var ask = true;

let skorM = 0;
let skorK = 0;
let skorS = 0;

while (ask) {
    let p = prompt('choose one :\nhuman, elephant, ant');

    let kom = Math.random()
    if (kom < 0.34) {
        kom = 'elephant';
    }else if (kom >= 0.34 && kom < 0.67) {
        kom = 'human';
    }else {
        kom = 'ant';
    } 

    let result = '';
    if ( p == kom) {
        result = 'DRAW !';
    } else if ( p == 'elephant') {
        result = (kom == 'human') ? 'WIN !' : 'LOSE !'; 
    } else if (p == 'ant') {
        result = (kom == 'elephant') ? 'WIN !' : 'LOSE !'; 
    } else if ( p == 'human') {
        result = (kom == 'ant') ? 'WIN !' : 'LOSE !'; 
    } else {
        result = 'you entered incorrect option';
    }

   
    if (result == 'WIN !') {
        skorM++;
    } else if (result == 'LOSE !') {
        skorK++;
    } else if (result == 'DRAW !') {
        skorS++;
    }

    alert('You chose : '+ p +', and Computer chose : '+ kom +'\nThe result is '+ result +'\nYour Score : WIN '+ skorM +' , LOSE '+ skorK +', DRAW '+ skorS);
    
    ask = confirm('Play Again ?')
}

alert('Thank you for playing, have a great time :)')