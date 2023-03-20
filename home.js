let itemCS = document.getElementsByClassName('cs_stats')[0];
let itemCS_goal = document.getElementsByClassName('cs_goal')[0];
let itemCS_table = document.getElementsByClassName('cs_table')[0];

let itemMath = document.getElementsByClassName('math_stats')[0];
let itemMath_goal = document.getElementsByClassName('math_goal')[0];
let itemMath_table = document.getElementsByClassName('math_table')[0];

let itemVA = document.getElementsByClassName('va_stats')[0];
let itemVA_goal = document.getElementsByClassName('va_goal')[0];
let itemVA_table = document.getElementsByClassName('va_table')[0];

let itemEng = document.getElementsByClassName('eng_stats')[0];
let itemEng_goal = document.getElementsByClassName('eng_goal')[0];
let itemEng_table = document.getElementsByClassName('eng_table')[0];

let itemPsycho = document.getElementsByClassName('psycho_stats')[0];
let itemPsycho_goal = document.getElementsByClassName('psycho_goal')[0];
let itemPsycho_table = document.getElementsByClassName('psycho_table')[0];

let itemPol = document.getElementsByClassName('pl_stats')[0];
let itemPol_goal = document.getElementsByClassName('pl_goal')[0];
let itemPol_table = document.getElementsByClassName('pl_table')[0];

var cs_text = localStorage.getItem('hours_worked_CS')
var cs_text_goal = localStorage.getItem('hours_goal_CS')

var math_text = localStorage.getItem('hours_worked_math')
var math_text_goal = localStorage.getItem('hours_goal_math')

var va_text = localStorage.getItem('hours_worked_va')
var va_text_goal = localStorage.getItem('hours_goal_va')

var eng_text = localStorage.getItem('hours_worked_english')
var eng_text_goal = localStorage.getItem('hours_goal_english')

var psycho_text = localStorage.getItem('hours_worked_psycho')
var psycho_text_goal = localStorage.getItem('hours_goal_psycho')

var pl_text = localStorage.getItem('hours_worked_polish')
var pl_text_goal = localStorage.getItem('hours_goal_polish')

let itemProgress = document.getElementsByClassName('progress')[0]

//stars concept
/*var stars_cs = []
var stars_count_cs = parseInt(cs_text)
for(var i = 0; i<stars_count_cs; i++){
    stars_cs.push('X')
}*/

//localStorage.events = JSON.stringify(events);
//var events = JSON.parse(localStorage.events)

//var stored_events = JSON.parse(localStorage.events);
var itemCalenderButton = document.getElementsByClassName('calender-btn')
var itemCalenderRemoveButton = document.getElementsByClassName('rmv-calender-btn')[0]
var itemCalenderValue = document.getElementsByClassName('calender-value')[0]
var itemCalenderEvent = document.getElementsByClassName('calender-event')[0]
var itemCalenderAddButton = document.getElementsByClassName('add-calender-btn')[0]
var itemEvent = document.getElementsByClassName('event-txt')[0]
var itemCalenderDiv = document.getElementsByClassName('calendar-itm')
var itemTaskName = document.getElementsByClassName('task-name')[0]
var itemTaskDone = document.getElementsByClassName('task-done')[0]
var itemTaskDoneTWo = document.getElementsByClassName('task-done')[1]

var itemNotes = document.getElementsByClassName('notes-refo')[0]


var notes = localStorage.getItem('notes')
if(notes != undefined){
    console.log(notes.length);
    if(notes.length > 200){
        notes = notes.slice(0,200) + '...'
    }
    itemNotes.innerText = notes
}


itemCalenderRemoveButton.hidden = true
itemTaskName.innerText = localStorage.getItem('task_day_name') + " " + (parseFloat(localStorage.getItem('hours_worked_day')/localStorage.getItem('hours_goal_day')) * 100).toFixed(1) + "%"
itemTaskDone.innerText = localStorage.getItem('task_day_done_name')
itemTaskDoneTWo.innerText = localStorage.getItem('task_day_done_name_two')

if(localStorage.getItem('events') == null){
    localStorage.setItem('events', '[]')
}

var stored_events = JSON.parse(localStorage.getItem('events'))

itemCalenderButton = document.getElementsByClassName('calender-btn')

//ading clock
const clock = new Date()
var today = clock.getDate() - 1
for(var i = 0; i<32; i++){
    if(i == today){
        itemCalenderDiv[i].style.backgroundColor = 'crimson';
    }
}

var task_one_done = localStorage.getItem('task_one_done')
var task_two_done = localStorage.getItem('task_two_done')
var task_done_proc = (parseFloat(localStorage.getItem('hours_worked_day')/localStorage.getItem('hours_goal_day')) * 100).toFixed(1)
console.log(task_done_proc, "proc");

if(task_done_proc != undefined){
    if(task_done_proc >= 100.0){
        itemTaskName.style.color = 'rgb(121, 255, 161)'
    }
    else{
        itemTaskName.style.color = 'red'
    }
}

if(task_one_done != undefined){
    if(task_one_done == 'true'){
        itemTaskDone.style.color = 'rgb(121, 255, 161)'
    }
    else{
        itemTaskDone.style.color = 'red'
    }
}

if(task_two_done != undefined){
    if(task_two_done == 'true'){
        itemTaskDoneTWo.style.color = 'rgb(121, 255, 161)'
    }
    else{
        itemTaskDoneTWo.style.color = 'red'
    }
}

itemCalenderAddButton.addEventListener('click', function(event){
    if(itemCalenderEvent.value != null){
        stored_events[itemCalenderValue.value-1] = itemCalenderEvent.value
        itemCalenderValue.value = 0
        itemCalenderEvent.value = ""
        console.log(stored_events)
        //we make sure that the data is stored after the end of the website
        localStorage.setItem('events', JSON.stringify(stored_events))
        checkCalendar()
    }
})


function addRemoveButton(index) {
    itemCalenderRemoveButton.hidden = false
    itemCalenderRemoveButton.addEventListener('click', function(event){
        stored_events[index] = null
        //we make sure that the data is stored after the end of the website
        localStorage.setItem('events', JSON.stringify(stored_events))
        checkCalendar()
        itemCalenderRemoveButton.hidden = true
        itemEvent.innerText = ""
    })
}

function checkCalendar() {
    itemCalenderButton = document.getElementsByClassName('calender-btn');
    for(var i = 0; i<itemCalenderButton.length; i++){
        if(stored_events[i] != null){
            itemCalenderButton[i].hidden = false
            //itemCalenderDiv[i].style.backgroundColor = 'blue';
        }
        else{
            itemCalenderButton[i].hidden = true
            //itemCalenderDiv[i].style.backgroundColor = 'rgb(26, 26, 26)'
        }
    }
}

checkCalendar()

for(var i = 0; i<itemCalenderButton.length; i++){
    var button_calender = itemCalenderButton[i]
    button_calender.setAttribute('data-index', i)
    button_calender.addEventListener('click', function(event){
        var button_clicked = event.target
        var index = button_clicked.getAttribute('data-index')
        if(stored_events[index] != undefined){
            var day = parseInt(index) + 1
            itemEvent.innerText = 'Event Day ' + day + ': ' + stored_events[index]
            addRemoveButton(index)
            checkCalendar()
        }
        else{
            console.log('no event');
        }
    })
}

itemCS.innerText = "Done: " + cs_text
itemCS_goal.innerText = "Need: " + cs_text_goal
itemCS_table.innerText = (parseFloat(cs_text/cs_text_goal) * 100).toFixed(1) + "%"

itemMath.innerText = "Done: " + math_text
itemMath_goal.innerText = "Need: " + math_text_goal
itemMath_table.innerText = (parseFloat(math_text/math_text_goal) * 100).toFixed(1) + "%"


itemVA.innerText = "Done: " + va_text
itemVA_goal.innerText = "Need: " + va_text_goal
itemVA_table.innerText = (parseFloat(va_text/va_text_goal) * 100).toFixed(1) + "%"

itemEng.innerText = "Done: " + eng_text
itemEng_goal.innerText = "Need: " + eng_text_goal
itemEng_table.innerText = (parseFloat(eng_text/eng_text_goal) * 100).toFixed(1) + "%"

itemPsycho.innerText = "Done: " + psycho_text
itemPsycho_goal.innerText = "Need: " + psycho_text_goal
itemPsycho_table.innerText = (parseFloat(psycho_text/psycho_text_goal) * 100).toFixed(1) + "%"

itemPol.innerText = "Done: " + pl_text
itemPol_goal.innerText = "Need: " + pl_text_goal
itemPol_table.innerText = (parseFloat(pl_text/pl_text_goal) * 100).toFixed(1) + "%"

var cs_score = parseFloat(cs_text)
var math_score = parseFloat(math_text)
var va_score = parseFloat(va_text)
var eng_score = parseFloat(eng_text)
var psycho_score = parseFloat(psycho_text)
var pl_score = parseFloat(pl_text)

var cs_score_goal = parseFloat(cs_text_goal)
var math_score_goal = parseFloat(math_text_goal)
var va_score_goal = parseFloat(va_text_goal)
var eng_score_goal = parseFloat(eng_text_goal)
var psycho_score_goal = parseFloat(psycho_text_goal)
var pl_score_goal = parseFloat(pl_text_goal)

var sum_hours = cs_score + math_score + va_score + eng_score + psycho_score + pl_score
var sum_goal = cs_score_goal + math_score_goal + va_score_goal + eng_score_goal + psycho_score_goal + pl_score_goal

console.log(sum_hours, sum_goal)
var progressAll = (sum_hours/ sum_goal) *100

itemProgress.innerText = "PROGRESS FOR THIS WEEK: " + progressAll.toFixed(0) + "%"
