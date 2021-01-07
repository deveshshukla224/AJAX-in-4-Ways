var xhr_btn = document.querySelector("#xhr");
var fetch_btn = document.querySelector("#fetch");
var jquery_btn = document.querySelector("#jquery");
var axios_btn = document.querySelector("#axios");
var quote = document.querySelector("#quote");
var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

xhr_btn.addEventListener("click",function () {
    var xhr_req = new XMLHttpRequest();
    xhr_req.onreadystatechange = function () {
        if (xhr_req.readyState == 4 && xhr_req.status == 200) {
            quote.innerHTML = JSON.parse(xhr_req.responseText)[0];
        }
    }
    xhr_req.open("GET",url);
    xhr_req.send();
});


fetch_btn.addEventListener("click",function () {
    fetch(url)
        .then(function(req){
            (req);
            req.json().then(function(data){
                (data);
                quote.innerText = data[0];
            })
        })
        .catch(function(){
            alert("ERROR!")
        })
});


$('#jquery').click(function(){
    $.getJSON(url)
        .done(function(data){
            $('#quote').text(data[0]);
        });
});


axios_btn.addEventListener("click",function(){
    axios.get(url)
        .then(function(res){
            quote.innerText = res.data[0];
        })
        .catch(function(){
            alert("ERROR!");
        })
});