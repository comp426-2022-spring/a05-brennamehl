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

// Flip multiple coins and show coin images in table as well as summary results
const coins = document.getElementById("coins")
// Add event listener for coins form
coins.addEventListener("submit", flipCoins)
// Create the submit handler
async function flipCoins(event) {
    event.preventDefault();
    
    const endpoint = "app/flip/coins/"
    const url = document.baseURI+endpoint

    const formEvent = event.currentTarget

    try {
        const formData = new FormData(formEvent);
        const flips = await sendFlips({ url, formData });

        console.log(flips);
        document.getElementById("heads").innerHTML = "Heads: "+flips.summary.heads;
        document.getElementById("tails").innerHTML = "Tails: "+flips.summary.tails;
    } catch (error) {
        console.log(error);
    }
}
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button
