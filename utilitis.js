

// hide section
function hideSectionF (sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.add('hidden')
}

// show section
function showSectionF (sectionId) {
    const section = document.getElementById(sectionId)
    section.classList.remove('hidden')
}


// generated random letter
function generatedRandomLetterF() {
    // letter array
    const letterString = 'abcdefghijklmnopqrstuvwxyz'
    const letterArray = letterString.split('')
    
    // random number
    const randomNum = Math.random()*25
    const index = Math.round(randomNum)

    const randomLetter = letterArray[index]
    
    return randomLetter;
}

// set background in random letter 
function setBgRandomLetterF(letterId) {
    const letter = document.getElementById(letterId)
    letter.classList.add('bg-orange-400','text-black')
}

// remove bg
function removeBgF (letterId) {
    const letter = document.getElementById(letterId)
    letter.classList.remove('bg-orange-400','text-black')
}


// get value in element 
function getValueF (elementId) {
    const element = document.getElementById(elementId)
    const elementText = element.innerText;
    const value = parseInt(elementText)
    return value
}

// set value in element 
function setValueF (elementId,value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}