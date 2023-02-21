const md5 = require('md5');

export const gravatarPath = (string) => {
	const lowerString = string.trim().toLowerCase();

	const digest = md5(lowerString, {encoding: 'binary'});
	return `https://www.gravatar.com/avatar/${digest}/?d=identicon`;
}