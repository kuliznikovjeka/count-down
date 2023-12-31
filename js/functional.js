import { ELEMENTS, TIME } from "./ui-elements.js";
import { defineDayTitle, defineYearTitle, defineHourTitle, defineMinuteTitle, defineSecondTitle } from "./declination.js";

function determineTimeLeft(e) {
	if (e) {
		e.preventDefault();
	}

	const deadLine = ELEMENTS.INPUT.value;
	if (!deadLine) {
		alert('Введите дату');
		return
	};

	const differenceInMilliseconds = Date.parse(deadLine) - Date.parse(new Date());

	const { SECOND_IN_ONE_MILISECOND, SECOND_IN_ONE_MINUTE, MINUTES_IN_ONE_HOUR, HOURS_IN_ONE_DAY, DAYS_IN_ONE_YEAR } = TIME;

	const milisecondsInYear = SECOND_IN_ONE_MILISECOND * SECOND_IN_ONE_MINUTE * MINUTES_IN_ONE_HOUR * HOURS_IN_ONE_DAY * DAYS_IN_ONE_YEAR;
	const milisecondsInDay = SECOND_IN_ONE_MILISECOND * SECOND_IN_ONE_MINUTE * MINUTES_IN_ONE_HOUR * HOURS_IN_ONE_DAY;
	const milisecondsInHour = SECOND_IN_ONE_MILISECOND * SECOND_IN_ONE_MINUTE * MINUTES_IN_ONE_HOUR;
	const milisecondsInMinute = SECOND_IN_ONE_MILISECOND * SECOND_IN_ONE_MINUTE;

	const yearsLeft = Math.floor(differenceInMilliseconds / milisecondsInYear);
	const daysLeft = Math.floor((differenceInMilliseconds / milisecondsInDay) % DAYS_IN_ONE_YEAR);
	const hoursLeft = Math.floor((differenceInMilliseconds / milisecondsInHour) % HOURS_IN_ONE_DAY);
	const minutesLeft = Math.floor((differenceInMilliseconds / milisecondsInMinute) % MINUTES_IN_ONE_HOUR);
	const secondsLeft = Math.floor((differenceInMilliseconds / SECOND_IN_ONE_MILISECOND) % SECOND_IN_ONE_MINUTE);

	setСountdown();

	return {
		differenceInMilliseconds,
		yearsLeft,
		daysLeft,
		hoursLeft,
		minutesLeft,
		secondsLeft
	}
}

function setСountdown() {
	const timeInterval = setInterval(updateTimer, 1000);

	function updateTimer() {
		const time = determineTimeLeft();

		updateAndDisplayElement(time.yearsLeft, ELEMENTS.YEARS, defineYearTitle);
		updateAndDisplayElement(time.daysLeft, ELEMENTS.DAYS, defineDayTitle);
		updateAndDisplayElement(time.hoursLeft, ELEMENTS.HOURS, defineHourTitle);
		updateAndDisplayElement(time.minutesLeft, ELEMENTS.MINUTES, defineMinuteTitle);
		updateAndDisplayElement(time.secondsLeft, ELEMENTS.SECONDS, defineSecondTitle);

		if (time.differenceInMilliseconds <= 0) {
			clearInterval(timeInterval);
		}
	}
}

function hiddenZeroValue(value, uiElement) {
	const zero = 0;

	value === zero ? uiElement.style.display = 'none'
		: uiElement.style.display = 'block';
}

function updateAndDisplayElement(value, element, titleFunc) {
	hiddenZeroValue(value, element);
	element.textContent = `${value} ${titleFunc(value)}`;
}

export { determineTimeLeft };


