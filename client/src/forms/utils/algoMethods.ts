// קובץ שמרכז אלגוריטמיקה
export const makeFirstLetterCapital = (string: string) => {
	/** *TRIM מוריד את הרווים בקצבות*/
	const term = string.toLowerCase().trim()
	return term.charAt(0).toUpperCase() + term.slice(1)
}
