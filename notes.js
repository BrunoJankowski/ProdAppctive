var itemNotes = document.getElementsByClassName('notes')[0]
itemNotes.value = localStorage.getItem('notes')

var itemSumbit = document.getElementsByClassName('submit-notes')[0]
var itemReset = document.getElementsByClassName('reset-notes')[0]
var itemClear = document.getElementsByClassName('clear-notes')[0]
var itemAbandon = document.getElementsByClassName('cancel-notes')[0]
var itemNoteHome = document.getElementsByClassName('home')[0]
var itemLinks = document.getElementsByClassName('link')[0]
var itemInfoNote = document.getElementsByClassName('info')[0]
var itemAddLink = document.getElementsByClassName('add-links')[0]

var stored_links = JSON.parse(localStorage.getItem("links")); 

localStorage.setItem("links", JSON.stringify(stored_links));

itemLinks.innerHTML = '<a href="https://www.notion.so/Code-Notes-IB-061a11c16e7b4adaaa8c1d540bd97650?pvs=4" target=_blank class="linked"> CODE NOTES <a/>'

itemNoteHome.addEventListener('click', function(){
    itemNotes.value = localStorage.getItem('notes')
})

itemReset.addEventListener('click', function(){
    localStorage.setItem('notes', '...')
    location.reload()
})

itemClear.addEventListener('click', function(){
    itemNotes.value = ''
    itemInfoNote.innerText = 'view cleared'
})


itemSumbit.addEventListener('click', function(){
    localStorage.setItem('notes', itemNotes.value)
    itemInfoNote.innerText = 'note submited to home page'
})

var clickCount = 0
itemAbandon.addEventListener('click', function(){
    itemNotes.value = ''
    itemInfoNote.innerText = 'changes abandoned'
    checkClicks(0, 0)
    clickCount = 0
})

var itemCSButton = document.getElementsByClassName('cs-add-notes')[0]
itemCSButton.addEventListener('click', function(){
    clickCount ++
    checkClicks(clickCount, itemCSButton)
    if(clickCount == 1){
        itemNotes.value = localStorage.getItem('cs-notes')
        itemInfoNote.innerText = 'note opened ' + itemCSButton.value
    }
    else if(clickCount == 2){
        localStorage.setItem('cs-notes', itemNotes.value)
        itemInfoNote.innerText = 'note sent to ' + itemCSButton.value
        clickCount = 0
        itemNotes.value = '...'
        location.reload
    }
})



var itemMathButton = document.getElementsByClassName('math-add-notes')[0]
itemMathButton.addEventListener('click', function(){
    clickCount ++
    checkClicks(clickCount, itemMathButton)
    console.log(clickCount);
    if(clickCount == 1){
        itemNotes.value = localStorage.getItem('math-notes')
        itemInfoNote.innerText = 'note opened '+ itemMathButton.value
        
    }
    else if(clickCount == 2){
        localStorage.setItem('math-notes', itemNotes.value)
        itemInfoNote.innerText = 'note sent to ' + itemMathButton.value
        clickCount = 0
        itemNotes.value = '...'
        location.reload()
    }
})


var itemVAButton = document.getElementsByClassName('va-add-notes')[0]
itemVAButton.addEventListener('click', function(){
    clickCount ++
    checkClicks(clickCount, itemVAButton)
    console.log(clickCount);
    if(clickCount == 1){
        itemNotes.value = localStorage.getItem('va-notes')
        itemInfoNote.innerText = 'note opened '+ itemVAButton.value
        
    }
    else if(clickCount == 2){
        localStorage.setItem('va-notes', itemNotes.value)
        itemInfoNote.innerText = 'note sent to '+ itemVAButton.value
        clickCount = 0
        itemNotes.value = '...'
        location.reload()
    }
})


var itemEnglishButton = document.getElementsByClassName('eng-add-notes')[0]
itemEnglishButton.addEventListener('click', function(){
    clickCount ++
    checkClicks(clickCount, itemEnglishButton)
    console.log(clickCount);
    if(clickCount == 1){
        itemNotes.value = localStorage.getItem('eng-notes')
        itemInfoNote.innerText = 'note opened '+ itemEnglishButton.value
        
    }
    else if(clickCount == 2){
        localStorage.setItem('eng-notes', itemNotes.value)
        itemInfoNote.innerText = 'note sent to '+ itemEnglishButton.value
        clickCount = 0
        itemNotes.value = '...'
        location.reload()
    }
})


var itemPsychoButton = document.getElementsByClassName('psycho-add-notes')[0]
itemPsychoButton.addEventListener('click', function(){
    clickCount ++
    checkClicks(clickCount, itemPsychoButton)
    console.log(clickCount);
    if(clickCount == 1){
        itemNotes.value = localStorage.getItem('psycho-notes')
        itemInfoNote.innerText = 'note opened '+ itemPsychoButton.value
        
    }
    else if(clickCount == 2){
        localStorage.setItem('psycho-notes', itemNotes.value)
        itemInfoNote.innerText = 'note sent to '+ itemPsychoButton.value
        clickCount = 0
        itemNotes.value = '...'
        location.reload()
    }
})


var itemPlButton = document.getElementsByClassName('pl-add-notes')[0]
itemPlButton.addEventListener('click', function(){
    clickCount ++
    checkClicks(clickCount, itemPlButton)
    console.log(clickCount);
    if(clickCount == 1){
        itemNotes.value = localStorage.getItem('pl-notes')
        itemInfoNote.innerText = 'note opened '+ itemPlButton.value
        
    }
    else if(clickCount == 2){
        localStorage.setItem('pl-notes', itemNotes.value)
        itemInfoNote.innerText = 'note sent to '+ itemPlButton.value
        clickCount = 0
        itemNotes.value = '...'
        location.reload()
    }
})

function checkClicks(clicks, button){
    if(clicks == 1){
        button.style.backgroundColor = 'rgb(146, 43, 66)'
        itemAbandon.hidden = false
        console.log("first clicked", button);
    }
    else if(clicks == 2){
        button.style.backgroundColor = 'rgb(42, 94, 40)'
        itemAbandon.hidden = true
        console.log("submited");
    }
    else{
        location.reload()
    }
}

/*
var subjectsButoons = [itemCSButton, itemMathButton, itemVAButton, itemEnglishButton, itemPsychoButton , itemPlButton]
var subjectsNotes = ['cs-notes','math-notes','va-notes','eng-notes', 'psycho-notes', 'pl-notes']

console.log(subjectsButoons);

for(var i = 0; i<subjectsButoons.length; i++){
    var button = subjectsButoons[i]
    button.setAttribute('data-index', i)
    button.addEventListener('click', function(event){
        var button_click = event.target
        var index = button_click.getAttribute('data-index')
        var value = subjectsNotes[index].toString()
        console.log(value);
        localStorage.setAttribute(value, itemNotes.value)
    })
}*/