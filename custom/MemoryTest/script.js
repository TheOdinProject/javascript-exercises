
function shuffleArray(arr) {
  	arr.sort(function (a, b) {
    	return Math.random() - 0.5;
  	});
}


function GetRandomIndex(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 


function AssignCard(card) {
    let index = GetRandomIndex(0, shuffledList.length - 1)
    card.textContent = shuffledList[index]
    card.id = shuffledList[index]
    shuffledList.splice(index, 1)
}

 
function MatchPair() {
    let selected = Array.from(document.querySelectorAll(".selected"))
    let isMatch = false

    selected.map(s => s.classList.remove('selected'))

    selected = selected.slice(0, 2)

    if (english.includes(selected[0].id)) {
        if (english.indexOf(selected[0].id) === greek.indexOf(selected[1].id)) isMatch = true
    }
    else {
        if (english.indexOf(selected[1].id) === greek.indexOf(selected[0].id)) isMatch = true
    }

    if (isMatch) {
        selected[0].style.visibility = "hidden"
        selected[1].style.visibility = "hidden"
    }

    isCardSelected = false
}


let english = [ "yes", "no", "taxi" ]
let greek = [ "vaε", "ουχί", "ταξί" ]

let isCardSelected = false;

let shuffledList = english.concat(greek)
shuffleArray(shuffledList);

let cards = document.querySelectorAll(".card")


cards.forEach(card => {

    AssignCard(card)

    card.addEventListener('click', (e) => {
        card.classList.toggle('selected')
        if (isCardSelected) MatchPair()
        else isCardSelected = true
    })

});
