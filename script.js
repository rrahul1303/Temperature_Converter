function convert(){
let Temp_first=document.querySelector("#Temp_first").value;
let Temp_second=document.querySelector("#Temp_second").value;
let degree=document.querySelector("#degree");
let Values=parseInt(document.querySelector("#value").value);
let result=document.querySelector("#result");

if(Temp_first==="Celcius" && Temp_second==="Celcius" || Temp_first==="Fahrenhiet" && Temp_second==="Fahrenhiet")
{
    result.value=Values;
}
else if(Temp_first==="Celcius" && Temp_second==="Fahrenhiet")
{
    result.value=((9/5*Values)+32).toFixed(2);
    degree.innerText="Fahrenhiet";
}
else{
    result.value=((Values-32)*5/9).toFixed(2);
    degree.innerText="Celcius";
}

}