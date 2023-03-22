var itemNotes = document.getElementsByClassName('notes')[0]
itemNotes.value = localStorage.getItem('notes')

//home note buttons
var itemSumbit = document.getElementsByClassName('submit-notes')[0]
var itemReset = document.getElementsByClassName('reset-notes')[0]
var itemNoteHome = document.getElementsByClassName('home')[0]

//edit notes btns
var itemClear = document.getElementsByClassName('clear-notes')[0]
var itemAbandon = document.getElementsByClassName('cancel-notes')[0]
var itemInfoNote = document.getElementsByClassName('info')[0] //infomessages
var itemInfoMode = document.getElementsByClassName('mode-info')[0] //infomessages
//links sys

var itemLinksValue = document.getElementsByClassName('link-value')[0]
var itemLinksNames = document.getElementsByClassName('link-names')[0]
var itemLinks = document.getElementsByClassName('link')
var itemAddLink = document.getElementsByClassName('add-links')[0]
var itemLinkRemove = document.getElementsByClassName('link-remove')

var stored_links = JSON.parse(localStorage.getItem("links")); 
var stored_names = JSON.parse(localStorage.getItem("link-names")); 
localStorage.setItem("links", JSON.stringify(stored_links));
localStorage.setItem("link-names", JSON.stringify(stored_names));

reloadLinks() //run to see links


function reloadLinks() {
    for(var i = 0; i<stored_names.length;i++){
        var linkText = itemLinks[i]
        var link_remove_btn = itemLinkRemove[i]
        linkText.innerHTML = '<a href="' + stored_links[i] + '" target=_blank class="linked">' + stored_names[i] + '<a/>'
        link_remove_btn.hidden = false
        link_remove_btn.setAttribute('data-i', i)
        link_remove_btn.addEventListener('click', function(event){
            var button_clicked = event.target
            var index = button_clicked.getAttribute('data-i')
            stored_links.splice(index)
            stored_names.splice(index)
            localStorage.setItem("links", JSON.stringify(stored_links))
            localStorage.setItem("link-names", JSON.stringify(stored_names))
            location.reload()
        })
    }
}

//styling text btns
var insert = false

var itemStyleLink = document.getElementsByClassName('style-link-btn')[0]
itemStyleLink.addEventListener('click', function(){
    itemNotes.value = itemNotes.value + '<a href="#" target=_blank class="linked"> link name <a/>'
})

var itemStyleLine = document.getElementsByClassName('style-line-btn')[0]
itemStyleLine.addEventListener('click', function(){
    itemNotes.value = itemNotes.value + '<br/>'
})

var tempNotes = "..."
var itemStyleInsert = document.getElementsByClassName('style-insert-btn')[0]
itemStyleInsert.addEventListener('click', function(){
    if(insert){
        itemNotes.value = tempNotes
        itemInfoMode.innerText = 'mode: edit'
        itemStyleInsert.style.backgroundColor = 'rgb(39, 48, 77)'
        insert = false
    }
    else{
        tempNotes = itemNotes.value //trick just not to use JSON :<<< hurts a bit
        console.log(tempNotes);
        itemNotes.value = ''
        itemInfoMode.innerText = 'mode: insert'
        itemStyleInsert.style.backgroundColor = 'rgb(146, 43, 66)'
        insert = true
    }
    console.log(insert); 
})




//Notes sys btns functions

itemAddLink.addEventListener('click', function() {
    
    var link_value = itemLinksValue.value
    var link_name = itemLinksNames.value

    stored_links.push(link_value)
    stored_names.push(link_name)
    localStorage.setItem("links", JSON.stringify(stored_links))
    localStorage.setItem("link-names", JSON.stringify(stored_names))
    reloadLinks()
})

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


//Subject notes sys (btns and functions)


var itemCSButton = document.getElementsByClassName('cs-add-notes')[0]
itemCSButton.addEventListener('click', function(){
    clickCount ++
    checkClicks(clickCount, itemCSButton)
    if(clickCount == 1){
        itemNotes.value = localStorage.getItem('cs-notes')
        itemInfoNote.innerText = 'note opened ' + itemCSButton.value
    }
    else if(clickCount == 2){
        if(insert){
            console.log("inserted");
            localStorage.setItem('cs-notes', localStorage.getItem('cs-notes') + itemNotes.value)
        }
        else{
            localStorage.setItem('cs-notes', itemNotes.value)
        }
        itemInfoNote.innerText = 'note sent to ' + itemCSButton.value
        clickCount = 0
        itemNotes.value = '...'
        location.reload()
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
        if(insert){
            console.log("inserted");
            localStorage.setItem('math-notes', localStorage.getItem('math-notes') + itemNotes.value)
        }
        else{
            localStorage.setItem('math-notes', itemNotes.value)
        }
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
        if(insert){
            console.log("inserted");
            localStorage.setItem('va-notes', localStorage.getItem('va-notes') + itemNotes.value)
        }
        else{
            localStorage.setItem('va-notes', itemNotes.value)
        }
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
        if(insert){
            console.log("inserted");
            localStorage.setItem('eng-notes', localStorage.getItem('eng-notes') + itemNotes.value)
        }
        else{
            localStorage.setItem('eng-notes', itemNotes.value)
        }
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
        if(insert){
            console.log("inserted");
            localStorage.setItem('psycho-notes', localStorage.getItem('psycho-notes') + itemNotes.value)
        }
        else{
            localStorage.setItem('psycho-notes', itemNotes.value)
        }
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
        if(insert){
            console.log("inserted");
            localStorage.setItem('pl-notes', localStorage.getItem('pl-notes') + itemNotes.value)
        }
        else{
            localStorage.setItem('pl-notes', itemNotes.value)
        }
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
        itemStyleLink.hidden = false
        itemStyleLine.hidden = false
        itemStyleInsert.hidden = false
        console.log("first clicked", button);
    }
    else if(clicks == 2){
        button.style.backgroundColor = 'rgb(42, 94, 40)'
        itemAbandon.hidden = true
        itemStyleLink.hidden = true
        itemStyleLine.hidden = false
        itemStyleInsert.hidden = true
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