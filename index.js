const http = require("https");

const app_id = "515b3055";
const app_key = "3822089c52e1b2b0d472d53895a1239b";
const wordId = process.argv.slice(2);
const fields = "definitions";
const strictMatch = "false";

const options = {
  host: "od-api.oxforddictionaries.com",
  port: "443",
  path:
    "/api/v2/entries/en-gb/" +
    wordId +
    "?fields=" +
    fields +
    "&strictMatch=" +
    strictMatch,
  method: "GET",
  headers: {
    app_id: app_id,
    app_key: app_key
  }
};

http.get(options, resp => {
  let body = "";
  resp.on("data", d => {
    body += d;
  });
  resp.on("end", () => {
    let parsed = JSON.parse(body);

    let res = parsed.results[0].lexicalEntries[0].entries[0].senses;

    let searchWord = wordId.toString();
    let text = parsed.results[0].lexicalEntries[0].lexicalCategory.text;

    console.log(`${searchWord} (${text}) `);
    res.forEach((el, index) => {
      console.log(`${index + 1}: ${el.definitions[0]}`);
    });
  });
});
