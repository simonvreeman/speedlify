module.exports = {
  name: "Sites", // optional, falls back to object key
  description: "The default sites that get tested",
  options: {
    // frequency: 60 * 23, // (in minutes), 23 hours
    frequency: 60 * 6, // (in minutes), 6 hours
    freshChrome: "run",
  },
  urls: [
    "https://vreeman.com/",
    "https://www.vanmoof.com/en-NL",
  ]
};