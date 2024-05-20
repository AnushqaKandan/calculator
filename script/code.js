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

function show(value) {
    let currentValue = document.getElementById("result").value;
    if (value === '.' && currentValue.includes('.')) {
      return;
    }
    if (value === '+' && currentValue.includes('+')) {
        return;
      }
      if (value === '/' && currentValue.includes('/')) {
        return;
      }
      if (value === '*' && currentValue.includes('*')) {
        return;
      }

    document.getElementById("result").value += value;
  }
