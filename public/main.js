// Focus div based on nav button click
function clickHome(){
    document.getElementById("homenav").className = "active";
    document.getElementById("singlenav").className = "hidden";
    document.getElementById("multinav").className = "hidden";
    document.getElementById("guessnav").className = "hidden";
}
function clickSingle(){
    document.getElementById("homenav").className = "hidden";
    document.getElementById("singlenav").className = "active";
    document.getElementById("multinav").className = "hidden";
    document.getElementById("guessnav").className = "hidden";
}

function clickMulti(){
    document.getElementById("homenav").className = "hidden";
    document.getElementById("singlenav").className = "hidden";
    document.getElementById("multinav").className = "active";
    document.getElementById("guessnav").className = "hidden";
}

function clickGuess(){
    document.getElementById("homenav").className = "hidden";
    document.getElementById("singlenav").className = "hidden";
    document.getElementById("multinav").className = "hidden";
    document.getElementById("guessnav").className = "active";
}

// Flip one coin and show coin image to match result when button clicked
const coin = document.getElementById("coin");
coin.addEventListener("click", flipCoin);
async function flipCoin(){
    const endpoint = "app/flip/";
    const url = document.baseURI+endpoint;
    await fetch(url).then(function(response){
            return response.json();
        }).then(function(result){
            console.log(result);
            document.getElementById("result").innerHTML = result.flip;
            document.getElementById("singleFlip").setAttribute("src","assets/img/"+result.flip+".png");  
        });
}
// Flip multiple coins and show coin images in table as well as summary results
const coins = document.getElementById("coins")
// Add event listener for coins form
coins.addEventListener("submit", flipCoins)
// Create the submit handler
async function flipCoins(event) {
    event.preventDefault();
    
    const endpoint = "app/flip/coins/";
    const url = document.baseURI+endpoint;

    const formEvent = event.currentTarget;

    try {
        const formData = new FormData(formEvent);
        const flips = await sendFlips({ url, formData });

        console.log(flips);
        document.getElementById("heads").innerHTML = "Heads: "+flips.summary.heads;
        document.getElementById("tails").innerHTML = "Tails: "+flips.summary.tails;
        document.getElementById("coinlist").innerHTML = coinArray(flips.raw);
    } catch (error) {
        console.log(error);
    }
}

// Create a data sender
async function sendFlips({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJson = JSON.stringify(plainFormData);
    console.log(formDataJson);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: formDataJson
    };

    const response = await fetch(url, options);
    return response.json()
}

// Enter number and press button to activate coin flip series

function coinFlipSeries(){

}

// Guess a flip by clicking either heads or tails button
const call = document.getElementById("call");
call.addEventListener("submit", flipCall);

//creates the array of coin images
function coinArray(array){
    let text = "";
    for(let i = 0; i<array.length; i++){
        text = text + '<li><img src="assets/img/'+array[i]+'.png" class="smallcoin"></li>';
    }
    return text;
}