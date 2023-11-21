// Fetching elements from HTML document
calculateBtn = document.getElementById('calcButton')
clearBtn = document.getElementById('clearButton')
myOutput = document.getElementById('myResult')

// Onclick event listener to calculate sums
calculateBtn.addEventListener("click", function () {
    console.log('Calculate Button Clicked')

    // Casting to Number to prevent value or type errors
    let num1 = Number(document.getElementById('input1').value)
    let num2 = Number(document.getElementById('input2').value)
    // Logic to prevent empty input fields
    if (num1 == "") {
        alert('Please enter the first number')
        console.log('First number was not added')
        return false
    }
    if (num2 == "" || num2 == 0) {
        num2 = 0
        alert('Please enter the second number')
        console.log('Second number was not added')
        return false
    }
    // Appends result to document
    let sum = num1 + num2
    console.log(`Number 1: ${num1} \nNumber 2: ${num2} \nResult: ${sum}`)
    let result = document.createTextNode(sum)
    myOutput.appendChild(result)

    // Disables Calculate button after it's clicked
    disableButton = true
    if (disableButton) calculateBtn.disabled = "disabled"
})

// Onclick event listener to reset result and clear input fields
clearBtn.addEventListener("click", function () {
    console.log('Clear Button Clicked')
    num1 = document.getElementById('input1').value = ""
    num2 = document.getElementById('input2').value = ""
    myOutput.innerText = "Result: "
    // Re enables Calculate button
    calculateBtn.disabled = false


})


