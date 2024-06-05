
// function playNowF () {
//     // hidden home screen
//     const homeScreen = document.getElementById("home-screen") 
//     homeScreen.classList.add('hidden')
    
//     // show field ground
//     const fieldGround = document.getElementById("game-field")
//     fieldGround.classList.remove('hidden')
// }


// // show screen function
// function showSectionF (sectionId) {
//     const section = document.getElementById(sectionId)
//     section.classList.remove('hidden')
// }

// // hidden screen function
// function hiddenSectionF (sectionId) {
//     const section = document.getElementById(sectionId)
//     section.classList.add('hidden')
// }

// // generated a random  letter
// function generatedRandomLetterF () {
//     // letter string and array 
//     const lettersString = 'abcdefghijklmnopqrstuvwxyz'
//     const letterArray = lettersString.split('')
    
//     // random index 
//     const randomNum = Math.random()*25;
//     const index = Math.round(randomNum)
//     const randomLetter = letterArray[index]
    
//     return randomLetter
// }

// // set background in random letter
// function setBackgroundRandomLetter (letterId) {
//     const letter = document.getElementById(letterId)
//     letter.classList.add('bg-orange-400','text-black')
// }

// // remove background 
// function removeBackground (elementId) {
//     const element = document.getElementById(elementId)
//     letter.classList.remove('bg-orange-400','text-black')
// }




// function playNowF () {
//     showSectionF('game-field')
//     hiddenSectionF('home-screen')
//     continueGame()
// }


// function continueGame () {
//     const letter = generatedRandomLetterF()
//     const displayLetter = document.getElementById('display-letter')
//     displayLetter.innerText = letter
//     setBackgroundRandomLetter(letter)
// }


// document.addEventListener('keyup',function(event){
//     const UserPressKey = event.key;
//     const letter = document.getElementById('display-letter').innerText;
//     const computerKey = letter.toLowerCase()
//     console.log(UserPressKey,computerKey)
// })

document.addEventListener('keyup',handelKeyF)

// handel key
function handelKeyF(event) {
    const userPressKey = event.key.toLowerCase();
    const letter = document.getElementById('display-letter').innerText;
    const computerKey = letter.toLowerCase()
    
    if(userPressKey == 'escape'){
        gameOverF()
    }
    
    if(userPressKey === computerKey){
        
        // get value
        const score = getValueF('score')
        const newScore = score + 1;
        // set value
        setValueF('score',newScore)

        
        removeBgF(computerKey)
        continueGameF()
        
    }
    else{
        // get value 
        const life = getValueF('life')
        const newLife = life - 1;
        
        // set value 
        setValueF('life',newLife)
        
        if(newLife === 0){
            gameOverF()
        }
    }
}



function playNowF () {
    hideSectionF('home-screen')
    hideSectionF('score-section')
    showSectionF ('game-field')
    
    // reset life and score 
    setValueF('life',4)
    setValueF('score',0)
    
    continueGameF()
}



function continueGameF () {
    const randomLetter = generatedRandomLetterF()
    const displayLetter = document.getElementById('display-letter')
    displayLetter.innerText = randomLetter;
    setBgRandomLetterF(randomLetter)
}


function gameOverF() {
    hideSectionF('game-field')
    showSectionF('score-section')
    
    // set final score
    const finalScore = getValueF('score')
    setValueF('final-score',finalScore)
    
    const current = document.getElementById('display-letter').innerText
    removeBgF(current)
}