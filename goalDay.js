var itemButton = document.getElementsByClassName('plus')
var itemHours = document.getElementsByClassName('hours')
var itemReset = document.getElementsByClassName('reset')
var itemGoal = document.getElementsByClassName('goal')
var containter = document.getElementsByClassName('item')
var itemCongrats = document.querySelector('.congrats')
var progressTable = document.getElementsByClassName('progress-day')[0]
var itemButtonSub = document.getElementsByClassName('submit')[0]

var itemTaskName = document.getElementsByClassName('task-day')[0]
itemTaskName.value = localStorage.getItem('task_day_name')

var itemTaskDone = document.getElementsByClassName('task-day-done')[0]
itemTaskDone.value = localStorage.getItem('task_day_done_name')
var itemButtonDone = document.getElementsByClassName('submit-done')[0]

var itemTaskDoneTwo = document.getElementsByClassName('task-day-done')[1]
itemTaskDoneTwo.value = localStorage.getItem('task_day_done_name_two')
var itemButtonDoneTwo = document.getElementsByClassName('submit-done')[1]

var itemButtonResetDone = document.getElementsByClassName('reset-done')[0]

var task_one_done = localStorage.getItem('task_one_done')
var task_two_done = localStorage.getItem('task_two_done')

var itemButtonDoneV = document.getElementsByClassName('done')[0]
var itemButtonDoneV2 = document.getElementsByClassName('done')[1]


checkDone()



itemButtonDoneV.addEventListener('click', function(){
    localStorage.setItem('task_one_done', true)
    checkDone()
})

itemButtonDoneV2.addEventListener('click', function(){
    localStorage.setItem('task_two_done', true)
    checkDone()
})

itemButtonResetDone.addEventListener('click', function(){
    localStorage.setItem('task_one_done', false)
    localStorage.setItem('task_two_done', false)
    location.reload()
})    

var day_text = localStorage.getItem('hours_worked_day')
var day_text_goal = localStorage.getItem('hours_goal_day')

console.log(itemCongrats);

var score = parseFloat(localStorage.getItem('hours_worked_day'))
var goal = parseFloat(localStorage.getItem('hours_goal_day'))
checkGoal(score, goal)


itemButtonSub.addEventListener('click', function(){
    localStorage.setItem('task_day_name', itemTaskName.value)
    location.reload()
})

itemButtonDone.addEventListener('click', function(){
    localStorage.setItem('task_day_done_name', itemTaskDone.value)
})

itemButtonDoneTwo.addEventListener('click', function(){
    localStorage.setItem('task_day_done_name_two', itemTaskDoneTwo.value)
})

for(var i = 0; i<itemGoal.length; i++){
    var goal = itemGoal[i]
    var initial_goal = localStorage.getItem('hours_goal_day')
    goal.value =  initial_goal
    var goal_score = goal.value

    goal.addEventListener('change', function(event) {
        var item_goal = event.target.value
        localStorage.setItem('hours_goal_day', item_goal)
      })
}

for(var i = 0; i < itemButton.length; i++){
    var button = itemButton[i]
    var hours_ittem = itemHours[i]
    var reset = itemReset[i]

    var initial_hours = localStorage.getItem('hours_worked_day')
    hours_ittem.value = initial_hours


    button.setAttribute('index', i)
    reset.setAttribute('index', i)
    button.addEventListener("click", function(event){
        var button_clicked = event.target
        var index = button_clicked.getAttribute("index")
        var hours_worked = itemHours[index]
        hours_worked.value++ 
        localStorage.setItem('hours_worked_day', hours_worked.value)
        var score = hours_worked.value
        checkGoal(score, goal_score) //add check goal
    })

    reset.addEventListener("click", function(event){
        var button_clicked = event.target
        var index = button_clicked.getAttribute("index")
        var reset_hours = itemHours[index]
        reset_hours.value = 0
        localStorage.setItem('hours_worked_day', 0)
        var score = reset_hours.value
        checkGoal(score, goal_score)
    })



}

function checkGoal(score, goal_score){
    console.log(score, goal_score);
    score = parseFloat(score)
    goal_score = parseFloat(goal_score)
    if(score >= goal_score) {
        progressTable.innerText = "DONE"
    }
    else{
        progressTable.innerText = (parseFloat(score/goal_score) * 100).toFixed(1) + "%"
    }
    
}   

function checkDone() {
    var task_one_done = localStorage.getItem('task_one_done')
    var task_two_done = localStorage.getItem('task_two_done')

    if(task_one_done != undefined){
        if(task_one_done == 'true'){
            itemButtonDoneV.value = "done"
        }
    }
    else{
        itemButtonDoneV.value = "do"
    }

    if(task_two_done != undefined){
        if(task_two_done == 'true'){
            itemButtonDoneV2.value = "done"
        }
    }
    else{
        itemButtonDoneV2.value = "do"
    }
    
}