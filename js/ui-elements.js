const ELEMENTS = {
	FORM: document.querySelector('.countdown__form'),
	INPUT: document.querySelector('.countdown__input-date'),
	BUTTON: document.querySelector('.countdown__button'),
	TIME_LEFT: document.querySelector('.countdown__time-left'),
	YEARS: document.querySelector('.countdown__years'),
	DAYS: document.querySelector('.countdown__days'),
	HOURS: document.querySelector('.countdown__hours'),
	MINUTES: document.querySelector('.countdown__minutes'),
	SECONDS: document.querySelector('.countdown__seconds'),
}

const TIME = {
	SECOND_IN_ONE_MILISECOND: 1000,
	SECOND_IN_ONE_MINUTE: 60,
	MINUTES_IN_ONE_HOUR: 60,
	HOURS_IN_ONE_DAY: 24,
	DAYS_IN_ONE_YEAR: 365,
}
export { ELEMENTS, TIME }

