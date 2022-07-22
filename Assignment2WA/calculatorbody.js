function buttonClicker(num){
    document.getElementById("result").value += num
}
function clearBox(){
    document.getElementById("result").value = ""
}
function equateTheResult(){
    let num = document.getElementById("result").value
    let result = eval(num)

    document.getElementById("result").value = result
}
function percentageOfNum(){
    let num = document.getElementById("result").value 
    let result = eval(num/100)

    document.getElementById("result").value = result
}
function powerTo(){
    let num = document.getElementById("result").value
    let result = Math.pow(num,2)

    document.getElementById("result").value = result
}