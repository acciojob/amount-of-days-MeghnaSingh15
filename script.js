//your JS code here. If required.
function daysOfAYear() {
	if ((year % 4 == 0) && (year % 100 != 0) ||(year % 400 ==0)){
		console.log("365");
		}
	else {
	    console.log("366");
	}
}
year = prompt("Please enter a year:");
daysOfAYear(year);