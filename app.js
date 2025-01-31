const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	// Get query params
	const email = 'cyberraff@gmail.com';

	// Get current day and time in UTC with validation of +/-2 hours
	const currentTime = new Date();
	const offset = currentTime.getTimezoneOffset() / 60;
	const isValidOffset = offset >= -2 && offset <= 2;
	const utcTime = isValidOffset
		? new Date(currentTime.getTime() - offset * 60 * 60 * 1000)
				.toISOString()
				.slice(0, -5) + 'Z'
		: null;

	const resData = {
		email: email,
		current_day: new Date().toLocaleString('en-US', { weekday: 'long' }),
		utc_time: utcTime,

		github_url: 'https://github.com/cyberraff/hng12-task-one',
	};

	res.send(resData);
});
app.listen(port, () => console.log(`App is listening on port ${port}!`));
