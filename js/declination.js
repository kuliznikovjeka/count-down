function defineDayTitle(days) {
	const lastDigit = days % 10;

	return (days >= 5 && days <= 20) || (lastDigit >= 5 && lastDigit <= 9) || lastDigit === 0
		? 'дней'
		: lastDigit === 1
			? 'день'
			: lastDigit >= 2 && lastDigit <= 4
				? 'дня'
				: 'дней';
}

function defineYearTitle(year) {
	const count = year % 100;
	const lastDigit = count % 10;

	return (count >= 5 && count <= 20) ? 'лет'
		: (lastDigit === 1) ? 'год'
			: (lastDigit >= 2 && lastDigit <= 4) ? 'года'
				: 'лет';
}

function defineHourTitle(hour) {
	const lastDigit = hour % 10;

	return (hour >= 5 && hour <= 20) || (lastDigit >= 5 && lastDigit <= 9) || lastDigit === 0
		? 'часов'
		: lastDigit === 1
			? 'час'
			: lastDigit >= 2 && lastDigit <= 4
				? 'часа'
				: 'часов';
}

function defineMinuteTitle(minutes) {
	const lastDigit = minutes % 10;

	return (minutes >= 5 && minutes <= 20) || (lastDigit >= 5 && lastDigit <= 9) || lastDigit === 0
		? 'минут'
		: lastDigit === 1
			? 'минута'
			: lastDigit >= 2 && lastDigit <= 4
				? 'минуты'
				: 'минут';
}

function defineSecondTitle(seconds) {
	const lastDigit = seconds % 10;

	return (seconds >= 5 && seconds <= 20) || (lastDigit >= 5 && lastDigit <= 9) || lastDigit === 0
		? 'секунд'
		: lastDigit === 1
			? 'секунда'
			: lastDigit >= 2 && lastDigit <= 4
				? 'секунды'
				: 'секунд';
}

export { defineDayTitle, defineYearTitle, defineHourTitle, defineMinuteTitle, defineSecondTitle };