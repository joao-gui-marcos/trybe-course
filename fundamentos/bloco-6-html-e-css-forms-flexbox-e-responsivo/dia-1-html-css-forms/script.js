let submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click',getValue)

function getValue(event) {
    //event.preventDefault()
    console.log('teste')
}

let terms = document.getElementById('terms')
terms.addEventListener('change',enableSubmit)

function enableSubmit() {
    if (terms.checked == true) {
        submitButton.disabled = false
    } else {
        submitButton.disabled = true
    }
}