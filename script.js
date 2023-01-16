const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");
const operator = ["+","-","*","/"];
var finish = false;

function insert(num){
    var numerator = 0;
    var denominator = 0;
    var exp = calculation.textContent;
    for (let index = 0; index < operator.length; index++) {
        if(calculation.textContent.includes(operator[index])){
            denominator = exp.substring(exp.indexOf(operator[index])+1,exp.length)
            if(operator.includes(num)){
                return;
            }
            else if(denominator.includes(".") && num=="."){
                return;
            }
        }
    }
    if(denominator==0){
        numerator = calculation.textContent;
        if(numerator.includes(".") && num=="."){
            return;
        }else if (calculation.textContent=="" && num=="."){
            calculation.textContent+= "0";
        }
    }
    if (finish){
        if(operator.includes(num)){
            calculation.textContent = (result.textContent + num);
        }else{
            calculation.textContent="";
            calculation.textContent += num;
        }
        finish = false
    }else{
        calculation.textContent += num;
    }
    
    console.log(num);
}

document.getElementById("clear").addEventListener("click",function(){
    calculation.textContent="";
    result.textContent=0;
})

document.getElementById("back").addEventListener("click",function(){
    var exp = calculation.textContent;
    calculation.textContent = exp.substring(0,exp.length-1);
})

document.getElementById("equal").addEventListener("click",function(){
    var exp = calculation.textContent;
    result.textContent = eval(exp);
    finish = true;
})