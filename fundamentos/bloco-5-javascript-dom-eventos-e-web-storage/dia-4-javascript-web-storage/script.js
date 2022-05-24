let backgroundColorButton = document.getElementById('background')
backgroundColorButton.addEventListener('click',changeBackgroundColor)

function changeBackgroundColor(event) {
    if (document.body.style.backgroundColor !== 'blue') {
    document.body.style.backgroundColor = 'blue'
    localStorage.setItem('bodyColor','blue')
    } else {
        document.body.style.backgroundColor = 'white'
        localStorage.setItem('bodyColor','white')
    }
}

function setBodyColor() {
    if (localStorage.getItem('bodyColor') === 'white') {
        document.body.style.backgroundColor = 'white'
    } else if (localStorage.getItem('bodyColor') === 'blue') {
        document.body.style.backgroundColor = 'blue'
    }
}

let textColorButton = document.getElementById('color')
textColorButton.addEventListener('click',changeTextColor)

function changeTextColor() {
    let p = document.getElementById('p')
    if (p.style.color !== 'yellow') {
        p.style.color = 'yellow'
        localStorage.setItem('textColor','yellow')
    } else {
        p.style.color = 'black'
        localStorage.setItem('textColor','black')
    }
}

function setTextColor() {
    if (localStorage.getItem('textColor') === 'yellow') {
        p.style.color = 'yellow'
    } else {
        p.style.color = 'black'
    }
}

let fontSizeButton = document.getElementById('size')
fontSizeButton.addEventListener('click',changeFontSize)

function changeFontSize() {
    let p = document.getElementById('p')
    if (p.style.fontSize !== '20px') {
        p.style.fontSize = '20px'
        localStorage.setItem('fontSize','20px')
    } else {
        p.style.fontSize = 'unset'
        localStorage.setItem('fontSize','unset')
    }
}

function setFontSize() {
    if (localStorage.getItem('fontSize') === '20px') {
        p.style.fontSize = '20px'
    } else {
        p.style.fontSize = 'unset'
    }
}

let fontFamilyButton = document.getElementById('font')
fontFamilyButton.addEventListener('click',changeFontFamily)

function changeFontFamily() {
    let p = document.getElementById('p')
    if (p.style.fontFamily !== 'fantasy') {
        p.style.fontFamily = 'fantasy'
        localStorage.setItem('fontFamily','fantasy')
    } else {
        p.style.fontFamily = 'unset'
        localStorage.setItem('fontFamily','unset')
    }
}

function setFontFamily() {
    if (localStorage.getItem('fontFamily') === 'fantasy') {
        p.style.fontFamily = 'fantasy'
    } else {
        p.style.fontFamily = 'unset'
    }
}

let lineSpacingButton = document.getElementById('spacing')
lineSpacingButton.addEventListener('click',changeLineSpacing)

function changeLineSpacing() {
    let p = document.getElementById('p')
    if (p.style.lineHeight !== '20px') {
        p.style.lineHeight = '20px'
        localStorage.setItem('lineSpacing','20px')
    } else {
        p.style.lineHeight = 'unset'
        localStorage.setItem('lineSpacing','unset')
    }
}

function setLineSpacing() {
    if (localStorage.getItem('lineSpacing') === '20px') {
        p.style.lineHeight = '20px'
    } else {
        p.style.lineHeight = 'unset'
    }
}

window.onload = function() {
    setBodyColor()
    setTextColor()
    setFontSize()
    setFontFamily()
    setLineSpacing()
  };