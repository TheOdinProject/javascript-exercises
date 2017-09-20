var Timer = require ('./timer.js');

describe('Timer', function() {
	var timer; // undefined, here for scope purposes

	beforeEach(function () {
		timer = new Timer.timeFormat();
	});

	it('should initialize to 0 seconds', function() {
		expect(timer.seconds).toEqual(0); // makes sure timer starts with 0 seconds
	});
	
	describe('time_string', function() {
		it('should display 0 seconds as 00:00:00', function() {
			timer.seconds = 0;
			expect(timer.time_string()).toEqual("00:00:00");
		});

		it('should display 12 seconds as 00:00:12', function() {
			timer.seconds = 12;
			expect(timer.time_string()).toEqual("00:00:12");
		});

		it('should display 66 seconds as 00:01:06', function() {
			timer.seconds = 66;
			expect(timer.time_string()).toEqual("00:01:06");
		});

		it('should display 4000 seconds as 01:06:40', function() {
			timer.seconds = 4000;
			expect(timer.time_string()).toEqual("01:06:40");
		});
	});
});