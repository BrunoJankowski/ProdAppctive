var itemNotes = document.getElementsByClassName('notes')[0]
itemNotes.value = localStorage.getItem('notes')

var itemSumbit = document.getElementsByClassName('submit-notes')[0]
var itemReset = document.getElementsByClassName('reset-notes')[0]

itemReset.addEventListener('click', function(){
    localStorage.setItem('notes', '...')
    location.reload()
})

itemSumbit.addEventListener('click', function(){
    localStorage.setItem('notes', itemNotes.value)
    location.reload()
})
