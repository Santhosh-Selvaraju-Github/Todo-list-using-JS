function addTask(){
    const input = document.getElementById('input').value;
    const ul = document.getElementById('ul')

    if(input.trim() === ""){
        alert('Enter the task')
    }
    else{
        const addInput = document.createTextNode(input)
        const getIntoList = document.createElement('li')
        const getIntoSpan = document.createElement('span')
        getIntoSpan.classList.add('myTask')
        getIntoSpan.appendChild(addInput)

        const getIntoSpanClose = document.createElement('span')
        getIntoSpanClose.classList.add('close')
        getIntoSpanClose.innerHTML = '&times;'
        
        getIntoList.appendChild(getIntoSpan)
        getIntoList.appendChild(getIntoSpanClose)
        ul.appendChild(getIntoList)

        input= '';
    }
        
}
