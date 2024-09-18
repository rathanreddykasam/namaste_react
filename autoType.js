const targetWPM = 45;
const delayBetweenWords = (10 * 1000) / targetWPM; // Calculate delay between words based on target WPM

const keyOverrides = {
	[String.fromCharCode(160)]: ' ', // convert hard space to normal space
};

function getTargetCharacters() {
	const els = Array.from(document.querySelectorAll('.token span.token_unit'));
	const chrs = els
		.map((el) => {
			// get letter to type from each letter DOM element
			if (el.firstChild?.classList?.contains('_enter')) {
				// special case: ENTER
				return '\n';
			}
			let text = el.textContent[0];
			return text;
		})
		.map((c) => (keyOverrides.hasOwnProperty(c) ? keyOverrides[c] : c)); // convert special characters
	return chrs;
}

function recordKey(chr) {
	// send it straight to the internal API
	window.core.record_keydown_time(chr);
}

function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

async function autoPlay(finish) {
	const chrs = getTargetCharacters();
	for (let i = 0; i < chrs.length - !finish; ++i) {
		const c = chrs[i];
		recordKey(c);
		//console.log(c, c.charCodeAt());
		await sleep(Math.random() * delayBetweenWords + delayBetweenWords / 2); // Adjust delay for each keystroke
	}
}

autoPlay(true);
