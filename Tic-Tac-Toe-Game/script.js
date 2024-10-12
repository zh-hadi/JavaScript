const restart = document.getElementById('restart');
restart.classList.add('hidden');

const data = Array.from({length: 9}, () => 0)
let move = 'x'

let count = 0
let result = false

const formula = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

function handelGame(value)
{
    if (data[value] != 0 || result ) return; 
    count++

    move = move == 'x'? 'o': 'x';

    data[value] = move

    const id = 'id'+value
    document.getElementById(id).innerText = move;

    formula.forEach((row)=>{
       if( data[row[0]] === 'o' && data[row[1]] === 'o' && data[row[2]] === 'o' ) {
        document.getElementById('result').innerText = 'O is win!'
        result =true
        restart.classList.remove('hidden')
        return;
       }else if( data[row[0]] === 'x' && data[row[1]] === 'x' && data[row[2]] === 'x' ) {
        document.getElementById('result').innerText = 'X is win!'
        result = true
        restart.classList.remove('hidden')
        return;
       }
    });


    if(count===9 && !result) {
        document.getElementById('result').innerText = 'Game is Over'
        restart.classList.remove('hidden')
    }
    


    console.log(data)
}

function gameStartAgain(){
    location.reload();
}