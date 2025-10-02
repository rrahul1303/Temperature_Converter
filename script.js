function convert(){
let Temp_first=document.querySelector("#Temp_first").value;
let Temp_second=document.querySelector("#Temp_second").value;
let degree=document.querySelector("#degree");
let Values=parseInt(document.querySelector("#value").value);
let result=document.querySelector("#result");

if(Temp_first==="Celcius" && Temp_second==="Celcius"  )
{
    result.value=Values;
    degree.innerText="Celsius";
}
else if(Temp_first==="Fahrenhiet" && Temp_second==="Fahrenhiet"){
    result.value=Values;
    degree.innerText="Fahrenhiet";
}
else if(Temp_first==="Kelvin" && Temp_second==="Kelvin")
    {
        result.value=Values;
        degree.innerText="Kelvin";
    }
else if(Temp_first==="Celcius" && Temp_second==="Fahrenhiet")
{
    result.value=((9/5*Values)+32).toFixed(2);
    degree.innerText="Fahrenhiet";
}

else if(Temp_first==="Celcius" && Temp_second==="Kelvin")
    {
        result.value=(Values+273.15).toFixed(2);
        degree.innerText="Kelvin";
    }
    else if(Temp_first==="Kelvin" && Temp_second==="Celcius")
        {
            result.value=(Values-273.15).toFixed(2);
            degree.innerText="Celsius";
        }
        else if(Temp_first==="Kelvin" && Temp_second==="Fahrenhiet")
            {
                result.value=((Values-273.15)*9/5+32).toFixed(2);
                degree.innerText="Fahrenhiet";
            }

else if(Temp_first==="Fahrenhiet" && Temp_second==="Celcius"){
    result.value=((Values-32)*5/9).toFixed(2);
    degree.innerText="Celsius";
}
else if(Temp_first==="Fahrenhiet" && Temp_second==="Kelvin"){
    result.value=((Values-32)*5/9+273.15).toFixed(2);
    degree.innerText="Kelvin";
}

}