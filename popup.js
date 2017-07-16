var kurs = [];

var usd_pok=document.querySelector("#usdpok");
var usd_pro=document.querySelector("#usdpro");
var input=document.querySelector("#input");
var button_res=document.querySelector("#button_res");
var result=document.querySelector("#result");
var select=document.querySelector("#select");

var xhr = new XMLHttpRequest();

xhr.onload = function() {

    kurs = this.response;

    usd_pok.innerHTML = kurs[2].buy.substr(0,4);
    usd_pro.innerHTML = kurs[2].sale.substr(0,4);

};

select.onchange = function (){
    var selected_opt = select.value;
    if (selected_opt == "pok") {
        var kurs_value = kurs[2].buy;
    } if (selected_opt == "pro") {
        var kurs_value = kurs[2].sale;
    }
    
    button_res.onclick = function () {
        var input_value = input.value;            
        var res = input_value * kurs_value;
        result.innerHTML = res.toFixed(1) + ' грн';
        console.log(res.toFixed(1))
    }
} 

xhr.open("GET", "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");
xhr.responseType = "json";
xhr.send();