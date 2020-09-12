module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		// frequency: 60 * 23, // (in minutes), 23 hours
    frequency: 60, // (in minutes), 23 hours
    freshChrome: "run",
	},
	urls: [
		"https://www.speedlify.dev/",
    "https://vreeman.com/",
	]
};