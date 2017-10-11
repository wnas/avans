var countdownClock = { 
    wrapper: '',
    eventDateTime: '',
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
    timer: '',
    refreshRate: 1000 * 60,
    loop: function () {
    	countdownClock.updateClock();
    	if (countdownClock.refreshRate > 0) {
    		countdownClock.timer = setTimeout(countdownClock.loop, countdownClock.refreshRate);
    	}
    },
    updateClock: function () {
    	
    	if (countdownClock.eventDateTime < new Date) {
    		
    		// event date is in the past... stop counting.
    		countdownClock.days = 0;
    		countdownClock.hours = 0;
    		countdownClock.minutes = 0;
    		
    		countdownClock.refreshRate= 0;
    		
    	} else {
    		
	    	// get total seconds between the times
			var delta = Math.abs(countdownClock.eventDateTime - new Date) / 1000;
	
			// calculate (and subtract) whole days
			countdownClock.days = Math.floor(delta / 86400);
			delta -= countdownClock.days * 86400;
	
			// calculate (and subtract) whole hours
			countdownClock.hours = Math.floor(delta / 3600) % 24;
			delta -= countdownClock.hours * 3600;
	
			// calculate (and subtract) whole minutes
			countdownClock.minutes = (Math.floor(delta / 60) % 60) + 1;
			delta -= countdownClock.minutes * 60;
	
			// what's left is seconds
			countdownClock.seconds = Math.floor(delta % 60);
    	}
    	countdownClock.renderClock();
    },
    renderClock: function(){
    	document.getElementById('days').innerHTML = countdownClock.zeroPad(countdownClock.days, 2);
    	document.getElementById('hours').innerHTML = countdownClock.zeroPad(countdownClock.hours, 2);
    	document.getElementById('minutes').innerHTML = countdownClock.zeroPad(countdownClock.minutes, 2);
    },
    init: function (elementId) {
        this.wrapper = document.querySelector(elementId);
        this.eventDateTime = new Date(Date.parse(this.wrapper.dataset.eventDateTime));
        this.loop();
    },
    zeroPad : function zeroPad(num, places) {
    	  var zero = places - num.toString().length + 1;
    	  return Array(+(zero > 0 && zero)).join("0") + num;
    }

};