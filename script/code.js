let dataEntry = document.querySelector('[data-entry]')

function display(value) {
    dataEntry.value += value
}


function display(value) {
    var resultField = document.getElementById("result");

    if (value === '=') {
        try {
            resultField.value = eval(resultField.value);
        } 
    catch (error) {
            resultField.value = 'Error';
        } 
    } 
    else if (value === 'c') {
        resultField.value = '';
    } 
    else {
        resultField.value += value;
    }
}