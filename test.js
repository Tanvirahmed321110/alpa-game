
// hide or show
function hideOrShowSectionF(isHide,sectionId) {
    const section = document.getElementById(sectionId)
    if(isHide){
        return  section.classList.add('hidden')
    }
    section.classList.remove('hidden')
}



// random letter generated
function randomLetterGeneratedF () {
    // letter array
    const letterString= 'abcdefghijklmnopqrstuvwxyz'
    const letterArray= letterString.split("")
    
    // random number
    const randomNum= Math.random()*25;
    const index= Math.round(randomNum)
    
    // letter 
    const letter= letterArray[index]
    return letter;
}



// set and remove background 
function setOrRemoveBackgroundF(isSet,letterId){
    const letter = document.getElementById(letterId)
    
    if(isSet){
        return letter.classList.add('bg-orange-400','text-black')
    }
    else{
        return letter.classList.remove('bg-orange-400','text-black')
    }
}

// get value 
function getValueF(elementId){
    
    const element = document.getElementById(elementId)
    const elementText = element.innerText;
    const value = parseInt(elementText)
    
    return value
}

// set value 
function setValueF(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value
}


// handel in document
document.addEventListener('keyup',function(event){
    const userPressKey = event.key;
    const computerKey = document.getElementById('display-letter').innerText
    
    
    if(userPressKey.toLowerCase() === computerKey.toLowerCase()){
        let score = getValueF('score') + 1
        setValueF('score',score)
        continueGameF()
        setOrRemoveBackgroundF(false,computerKey.toLowerCase())
    }
    else{
        let life = getValueF('life') -1;
        setValueF('life',life)
        if(life === 0){
            gameOverF()
        }
    }
})


// continue game
function continueGameF (){
    
    // random letter 
    const randomLetter = randomLetterGeneratedF()
    const displayLetter = document.getElementById('display-letter')
    displayLetter.innerText = randomLetter;
    
    // set background
    setOrRemoveBackgroundF(true,randomLetter)   
}

// play now 
function playNowF() {
    // hide section
    hideOrShowSectionF(true,'home-screen')
    hideOrShowSectionF(true,'score-section')
        
    // show section
    hideOrShowSectionF (false,'game-field') 
    
    // reset value
    setValueF('score',0)
    setValueF('life',4)
    continueGameF()   
}


// game over 
function gameOverF(){
    hideOrShowSectionF(true,'game-field')
    hideOrShowSectionF(false,'score-section')
    
    // final score
    const finalScore = getValueF('score')
    setValueF('final-score',finalScore)
    
    // remove bg
    const current = document.getElementById('display-letter').innerText
    setOrRemoveBackgroundF(false,current)
}