import { ELEMENTS } from "./ui-elements.js";
import { determineTimeLeft } from './functional.js';

export const EVENTS = {
	DETERMINE_TIME_LEFT: ELEMENTS.FORM.addEventListener('submit', determineTimeLeft)
}


