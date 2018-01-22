/*

    Los Pomodoros - a JavaScript countdown timer ;)
    
    author: Joachim Hauge
    license: Attribution 4.0 International (CC BY 4.0)
    
*/

// set time variables
var duration = {};
duration.min = 24;
duration.sec = 60;

// fetch ui elements
var backgroundColor = document.querySelector('body');
var appName = document.querySelector('.appname');
var timeObject = document.querySelector('.minutes');
var startBtn = document.querySelector('.start');

// add eventlistener to the start button
startBtn.addEventListener('click', startTimer);

// add startTimer event function
function startTimer(event){
    
    timeObject.classList.add('bigtext');
    backgroundColor.classList.add('dark');
    appName.classList.add('hidden');
    startBtn.classList.add('hidden');
    
    // set interval timer
    var intervalObject = setInterval(handleInterval, 1000);
    
    // define what happens inside interval
    function handleInterval(){
        
        if(duration.min == 0 && duration.sec == 0){
            clearInterval(intervalObject);
            playAlert();
        }else{
        
        // call the timer functions
        countDown();
        showDuration();
        }
    };        
}

// decrease duration by 1 sec
function countDown(){
    
    // when timer hits 0 stop the loop
    if (duration.min == 0 && duration.sec == 0){
        return;
    }
    
    duration.sec = duration.sec - 1;
    
    if (duration.sec < 0){
        duration.min = duration.min - 1;
        duration.sec = 59;
    }
}

// show the remaining time duration
function showDuration(){
    
    var min = duration.min;
    var sec = duration.sec;
    
    if (sec < 10){
        sec = '0' + sec;
    }
    
    if (min < 10){
        min = '0' + min;
    }
    
    timeObject.textContent = min + ':' + sec;

}

// Alert when timer is done
function playAlert(){
    
    timeObject.textContent = 'GG!';
    setTimeout(resetTimer, 3000);
}


// resets the clock after timer runs out
function resetTimer(){
    timeObject.textContent = '25 min';
    
    timeObject.classList.remove('bigtext');
    backgroundColor.classList.remove('dark');
    appName.classList.remove('hidden');
    startBtn.classList.remove('hidden');
    
    duration.min = 25;
    
}