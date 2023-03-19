var itemNotes = document.getElementsByClassName('notes')[0]
itemNotes.value = localStorage.getItem('notes')

var itemSumbit = document.getElementsByClassName('submit-notes')[0]

itemSumbit.addEventListener('click', function(){
    localStorage.setItem('notes', itemNotes.value)
})