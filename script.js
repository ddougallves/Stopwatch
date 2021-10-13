let hour = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 80;
let currentLap = 0;
let time;
let IntTime;

let intHour = 0;
let intMinutes = 0;
let intSeconds = 0;
let intMilliseconds = 80;

function start(){
    updateTimer(true);
    document.querySelector('.timer-area .controls .start').style.display = 'none';
    document.querySelector('.timer-area .controls .reset').style.display = 'none';
    document.querySelector('.timer-area .controls .add-lap').style.display = 'block';
    document.querySelector('.timer-area .controls .stop').style.display = 'block';
}

function stopTimer(){
    updateTimer(false);
    document.querySelector('.timer-area .controls .start').style.display = 'block';
    document.querySelector('.timer-area .controls .reset').style.display = 'block';
    document.querySelector('.timer-area .controls .add-lap').style.display = 'none';
    document.querySelector('.timer-area .controls .stop').style.display = 'none';
}

function reset(){
    hour = 0;minutes = 0;seconds = 0;milliseconds = 0;currentLap = 0;
    intHour = 0;intMinutes = 0;intSeconds = 0;intMilliseconds = 0;
    document.querySelector('.lap-area').style.display = 'none';
    document.querySelectorAll('.lap-area .addLap-area .lap').forEach(item=>{
        item.remove();
    })
    showTimer();
}

function lap(){
    currentLap++;
    document.querySelector('.lap-area').style.display = 'block';
    showLap();
}

function updateTimer(status){
    if(status === true){
        time = setInterval(()=>{
            milliseconds++;intMilliseconds++
            
            if(intMilliseconds>99){
                intMilliseconds=0;
                intSeconds++;
            }
            if(milliseconds > 99){
                milliseconds = 0;
                seconds++;
            }
            if(intSeconds > 59){
                intSeconds = 0;
                intMinutes++;
            }
            if(seconds > 59){
                seconds = 0;
                minutes++;
            }
            if(intMinutes > 59){
                intMinutes = 0;
                intHour++; 
            }
            if(minutes > 59){
                minutes = 0;
                hour++; 
            }
            showTimer();
        },10)
    }else if(status === false){
        clearInterval(time);
        intHour = 0;intMinutes = 0;intSeconds = 0;intMilliseconds = 0;
    }
}

function showTimer(){
    if(hour > 0){
        timerhtml = `<div class="hour">${(hour < 10)?'0'+hour:hour}:</div>
        <div class="minutes">${(minutes < 10)?'0'+minutes:minutes}:</div>
        <div class="seconds">${(seconds < 10)?'0'+seconds:seconds}</div>
        <div class="milliseconds">.${(milliseconds < 10)?'0'+milliseconds:milliseconds}</div>`
        document.querySelector('.timer-area .timer').innerHTML = timerhtml;
        nextLapIntHtml = 
        `<div class="time lap">${currentLap + 1}</div>
        <div class="time interval">${(intHour < 10)?
        '0' + intHour:intHour}:${(intMinutes < 10)?'0' + intMinutes:intMinutes}:${(intSeconds < 10)?
        '0' + intSeconds:intSeconds}.${(intMilliseconds < 10)?'0'+intMilliseconds:intMilliseconds}</div>
        <div class="time">${(hour < 10)?'0' + hour:hour}:${(minutes < 10)?'0' + minutes:minutes}:${(seconds < 10)?
        '0' + seconds:seconds}.${(milliseconds < 10)?'0' + milliseconds:milliseconds}</div>`;
        
        document.querySelector('.lap-area .lap.model.interval').innerHTML = nextLapIntHtml;
    }else{
        timerhtml = `<div class="minutes">${(minutes < 10)?'0'+minutes:minutes}:</div>
        <div class="seconds">${(seconds < 10)?'0'+seconds:seconds}</div>
        <div class="milliseconds">.${(milliseconds < 10)?'0'+milliseconds:milliseconds}</div>`
        document.querySelector('.timer-area .timer').innerHTML = timerhtml;
        nextLapIntHtml = `<div class="time lap">${currentLap+1}</div>
                        <div class="time interval">${(intMinutes < 10)?'0'+intMinutes:intMinutes}:${(intSeconds < 10)?'0'+intSeconds:intSeconds}.${(intMilliseconds < 10)?'0'+intMilliseconds:intMilliseconds}</div>
                        <div class="time">${(minutes < 10)?'0'+minutes:minutes}:${(seconds < 10)?'0'+seconds:seconds}.${(milliseconds < 10)?'0'+milliseconds:milliseconds}</div>`;
        document.querySelector('.lap-area .lap.model.interval').innerHTML = nextLapIntHtml;                
    }
}

function showLap(){
    let node = document.querySelector('.lap.model').cloneNode(true);

    if(currentLap == 1){
        if(hour > 0){
            node.querySelector('.time.lap').innerHTML = `${currentLap}`;
            node.querySelector('.time.interval').innerHTML = `${(intHour < 10)?'0'+intHour:intHour}:${(intMinutes < 10)?'0'+intMinutes:intMinutes}:${(intSeconds < 10)?'0'+intSeconds:intSeconds}.${(intMilliseconds < 10)?'0'+intMilliseconds:intMilliseconds}`;
            node.querySelector('.time:last-child').innerHTML = `${(hour < 10)?'0'+hour:hour}:${(minutes < 10)?'0'+minutes:minutes}:${(seconds < 10)?'0'+seconds:seconds}.${(milliseconds < 10)?'0'+milliseconds:milliseconds}`;
            document.querySelector('.lap-area .addLap-area').prepend(node);
        }else{
            node.querySelector('.time.lap').innerHTML = `${currentLap}`;
            node.querySelector('.time.interval').innerHTML = `${(intMinutes < 10)?'0'+intMinutes:intMinutes}:${(intSeconds < 10)?'0'+intSeconds:intSeconds}.${(intMilliseconds < 10)?'0'+intMilliseconds:intMilliseconds}`;
            node.querySelector('.time:last-child').innerHTML = `${(minutes < 10)?'0'+minutes:minutes}:${(seconds < 10)?'0'+seconds:seconds}.${(milliseconds < 10)?'0'+milliseconds:milliseconds}`;
            document.querySelector('.lap-area .addLap-area').prepend(node);
        }
        intHour = 0;intMinutes = 0;intSeconds = 0;intMilliseconds = 0;
    }else{
        if(hour > 0){
            node.querySelector('.time.lap').innerHTML = `${currentLap}`;
            node.querySelector('.time.interval').innerHTML = `${(intHour < 10)?'0'+intHour:intHour}:${(intMinutes < 10)?'0'+intMinutes:intMinutes}:${(intSeconds < 10)?'0'+intSeconds:intSeconds}.${(intMilliseconds < 10)?'0'+intMilliseconds:intMilliseconds}`;
            node.querySelector('.time:last-child').innerHTML = `${(hour < 10)?'0'+hour:hour}:${(minutes < 10)?'0'+minutes:minutes}:${(seconds < 10)?'0'+seconds:seconds}.${(milliseconds < 10)?'0'+milliseconds:milliseconds}`;
            document.querySelector('.lap-area .addLap-area').prepend(node);
        }else{
            node.querySelector('.time.lap').innerHTML = `${currentLap}`;
            node.querySelector('.time.interval').innerHTML = `${(intMinutes < 10)?'0'+intMinutes:intMinutes}:${(intSeconds < 10)?'0'+intSeconds:intSeconds}.${(intMilliseconds < 10)?'0'+intMilliseconds:intMilliseconds}`;
            node.querySelector('.time:last-child').innerHTML = `${(minutes < 10)?'0'+minutes:minutes}:${(seconds < 10)?'0'+seconds:seconds}.${(milliseconds < 10)?'0'+milliseconds:milliseconds}`;
            document.querySelector('.lap-area .addLap-area').prepend(node);
        } 
        intHour = 0;intMinutes = 0;intSeconds = 0;intMilliseconds = 0;
    }

}
