

function action(e) {
    var btn = e.target || e.srcElement;
    /* Get the clicked element's innerHTML */
    var val = document.getElementById(btn.id).innerHTML;
    running.push(val)
    if(val == 'C'){
        running = [];
        OP1 = [];
        OP2 = [];
        OP = [];
    }
    else if(val == '-'){
        OP = '-';
        OP1 = [...running].join('');
    }
    else if(val == '+'){
        OP = '+';
        OP1 = [...running].join('');
    }
    else if(val == '*'){
        OP = '*';
        OP1 = [...running].join('');
    }
    else if(val == '/'){
        OP = '/';
        OP1 = [...running].join('');
    }
    else if(val == '='){
        OP2 = [...running].slice(-(running.length - OP1.length));
        OP2.pop();
        OP2 = OP2.join('');
        result = eval(parseInt(OP1,2) + OP + parseInt(OP2,3));
        running = [...result.toString(2)];
    }
    
    res.innerHTML = running.join('');

}

var running = [];
var OP = [];
var OP1 = [];
var OP2 = [];
var result = [];
var res = document.getElementById("res");
document.getElementById('btn0').addEventListener('click', action);
document.getElementById('btn1').addEventListener('click', action);
document.getElementById('btnClr').addEventListener('click', action);
document.getElementById('btnEql').addEventListener('click', action);
document.getElementById('btnSum').addEventListener('click', action);
document.getElementById('btnSub').addEventListener('click', action);
document.getElementById('btnMul').addEventListener('click', action);
document.getElementById('btnDiv').addEventListener('click', action);

