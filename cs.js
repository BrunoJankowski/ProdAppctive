var itemButton = document.getElementsByClassName('plus')
var itemHours = document.getElementsByClassName('hours')
var itemReset = document.getElementsByClassName('reset')
var itemGoal = document.getElementsByClassName('goal')[0]
var containter = document.getElementsByClassName('item')
var itemCongrats = document.querySelector('.congrats')

var itemFinalGoal = document.getElementsByClassName('final-goal')[0]

var itemNotes = document.getElementsByClassName('notes-mir')[0]
var itemNotesReset = document.getElementsByClassName('reset-notes')[0]
itemNotesReset.addEventListener('click', function(){
    itemNotes.innerText = '...'
    localStorage.setItem('cs-notes', '')
    location.reload
})

itemNotes.innerHTML = localStorage.getItem('cs-notes')


itemFinalGoal.value = localStorage.getItem('final-cs')

itemFinalGoal.addEventListener('change', function(){
    localStorage.setItem('final-cs', itemFinalGoal.value)
})



var initial_goal = localStorage.getItem('hours_goal_CS')
itemGoal.value =  initial_goal
itemGoal.addEventListener('change', function(event) {
    var item_goal = event.target.value
    localStorage.setItem('hours_goal_CS', item_goal)
    })


for(var i = 0; i < itemButton.length; i++){
    var button = itemButton[i]
    var hours_ittem = itemHours[i]
    var reset = itemReset[i]

    var initial_hours = localStorage.getItem('hours_worked_CS')
    hours_ittem.value = initial_hours

    button.setAttribute('index', i)
    reset.setAttribute('index', i)
    button.addEventListener("click", function(event){
        var button_clicked = event.target
        itemFinalGoal.value --
        localStorage.setItem('final-cs', itemFinalGoal.value)
        var index = button_clicked.getAttribute("index")
        var hours_worked = itemHours[index]
        hours_worked.value++ 
        localStorage.setItem('hours_worked_CS', hours_worked.value)
        var score = hours_worked.value
        checkGoal(score, itemGoal.value) //add check goal
    })

    reset.addEventListener("click", function(event){
        var button_clicked = event.target
        var index = button_clicked.getAttribute("index")
        var reset_hours = itemHours[index]
        reset_hours.value = 0
        localStorage.setItem('hours_worked_CS', 0)
        var score = reset_hours.value
        checkGoal(score, itemGoal.value)
    })

}

function checkGoal(score, goal_score){
    if(score >= goal_score){
        itemCongrats.style.display = 'block'
    }
    else{
        itemCongrats.style.display = 'none';
    }
}   