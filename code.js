$(document).ready(function () {
    $("#addWord").on("click", addWord)
    $("#generateHaiku").on("click", makeHaiku)
})

let SyallableDrawer = [
    oneSyllables = ["red", "blue", "end"],
    twoSyllables = ["seaweed", "index", "mascot" ],
    threeSyllables = ["Average", "Banana", "blindingly" ],
    fourSyllables = ['Bureaucratic','Directory','Execution'],
    fiveSyllables = ['amanuensis','subterranean','tonsillectomy'],
    sixSyllables = ['interarytenoid','osteoporosis','aibohphobia'],
    sevenSyllables = ['establishmentarian','magnetoluminescent','macrolepidoptera']
]

function addWord(event) {
    event.preventDefault()
    let word = $("input#word").val();
    let count = ((word.match(/-/g) || []).length) + 1;
    for (let i = 0; i <= count; i++) {
        word = word.replace("-", "")
    }
    $("#word").val('')
    if (count < 7) {
        switch (count) {
            case 1:
                SyallableDrawer[0].push(word)
                break;
            case 2:
                SyallableDrawer[1].push(word)
                break;
            case 3:
                SyallableDrawer[2].push(word)
                break;
            case 4:
                SyallableDrawer[3].push(word)
                break;
            case 5:
                SyallableDrawer[4].push(word)
                break;
            case 6:
                SyallableDrawer[5].push(word)
                break;
        }
    }
    else
        $("#output").text("More than 7 dashes is too many Syllables")
}

let syllableSum = 0;
function makeHaiku(event) {
    $("#output").text('')
    $("#lineOne").text('')
    $("#lineTwo").text(' ')
    $("#lineThree").text(' ')
    //Limiter declaration
    let syllableSum = 0;
    let SyllableSumTwo = 0

    //First Line
    let randomSyllable = (Math.random()*5)
    randomSyllable = Math.floor(randomSyllable)
    console.log(randomSyllable + 1 + ' Syllables')

    let randomWord = (Math.random()*SyallableDrawer[randomSyllable].length)
    randomWord = Math.floor(randomWord)
    $('p#lineOne').append(SyallableDrawer[randomSyllable][randomWord] + ' ')

    syllableSum += randomSyllable+1

    while(syllableSum<5){
        randomSyllable = (Math.random()*(5-syllableSum))
        randomSyllable = Math.floor(randomSyllable)

        console.log(randomSyllable + 1 + ' Syllables')

        randomWord = (Math.random()*SyallableDrawer[randomSyllable].length)
        randomWord = Math.floor(randomWord)



        syllableSum +=randomSyllable +1

        $('p#lineOne').append(SyallableDrawer[randomSyllable][randomWord] + ' ')

    }

    //Limiter Reset
    syllableSum = 0;
    SyllableSumTwo = 0


     randomSyllable = (Math.random()*7)
    randomSyllable = Math.floor(randomSyllable)
    console.log(randomSyllable + 1 + ' Syllables')

     randomWord = (Math.random()*SyallableDrawer[randomSyllable].length)
    randomWord = Math.floor(randomWord)

    $('p#lineTwo').append(SyallableDrawer[randomSyllable][randomWord] + ' ')

    syllableSum += randomSyllable+1

    while(syllableSum<7){
        randomSyllable = (Math.random()*(7-syllableSum))
        randomSyllable = Math.floor(randomSyllable)

        console.log(randomSyllable + 1 + ' Syllables')

        randomWord = (Math.random()*SyallableDrawer[randomSyllable].length + ' ')
        randomWord = Math.floor(randomWord)



        syllableSum +=randomSyllable +1

        $('p#lineTwo').append(SyallableDrawer[randomSyllable][randomWord] + ' ')

    }

    //Line 3
    //Limiter reset
     syllableSum = 0;
     SyllableSumTwo = 0

     randomSyllable = (Math.random()*5)
    randomSyllable = Math.floor(randomSyllable)
    console.log(randomSyllable + 1 + ' Syllables')

     randomWord = (Math.random()*SyallableDrawer[randomSyllable].length)
    randomWord = Math.floor(randomWord)
    $('p#lineThree').append(SyallableDrawer[randomSyllable][randomWord] + ' ')

    syllableSum += randomSyllable+1

    while(syllableSum<5){
        randomSyllable = (Math.random()*(5-syllableSum))
        randomSyllable = Math.floor(randomSyllable)

        console.log(randomSyllable + 1 + ' Syllables')

        randomWord = (Math.random()*SyallableDrawer[randomSyllable].length)
        randomWord = Math.floor(randomWord)



        syllableSum +=randomSyllable +1

        $('p#lineThree').append(SyallableDrawer[randomSyllable][randomWord] + ' ')

    }


}

//test
