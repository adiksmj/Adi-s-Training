var ask = true
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
        result = 'entered the incorrect option'
    }
    let skorM = '';
    let skorK = '';
    let skorS = '';
    if (result == 'WIN !') {
        skorM = '1';
    } else if (result == 'LOSE !') {
        skorK = '1';
    } else if (result == 'DRAW !') {
        skorS = '1';
    } else {
        
    }

    // if (result == 'WIN !') {
    //     skorK = '0';
    // } else if (result == 'LOSE !') {
    //     skorK = '1';
    // } else {
    //     skorK = '0';
    // };

    // if (result == 'WIN !') {
    //     skorS = '0';
    // } else if (result == 'LOSE !') {
    //     skorS = '0';
    // } else {
    //     skorS = '1';
    // };

    alert('You chose : '+ p +', and Computer chose : '+ kom +'\nSo you '+ result +'\nYour Score : WIN '+ skorM +' , LOSE '+ skorK +', DRAW '+ skorS +'')

    ask = confirm('Play Again ?')
}

alert('Thank you for playing, have a great  time :)')