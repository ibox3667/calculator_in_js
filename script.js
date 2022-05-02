// let calcnum = document.querySelector('.calcnum');

// calcnum.addEventListener('click', function () {
//     calcnum.style.border= 'none';
// })

function plus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('out').innerHTML = result;
}

function minus() {
    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById('out').innerHTML = result;
}


function kara() {
    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;

    document.getElementById('out').innerHTML = result;
}


function bolamz() {
    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 / num2;

    document.getElementById('out').innerHTML = result;
}