// const axios = require("axios");
// const wordId = process.argv.slice(2);

// const app_id = "515b3055";
// const app_key = "3822089c52e1b2b0d472d53895a1239b";
// const baseUrl = `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}`;

// st options

// // const http = require("https");

// const fields = "definitions";
// const strictMatch = "false";

// const options = {
//   host: "",
//   port: "443",
//   path:
//     "/api/v2/entries/en-gb/" +
//     wordId +
//     "?fields=" +
//     fields +
//     "&strictMatch=" +
//     strictMatch,
// //   method: "GET",
// //   headers: {
// //     app_id: app_id,
// //     app_key: app_key
// //   }
// // };

// const axios = require("axios");
// let endpoint = "entries";
// let language_code = "en-us";
// let wordId = process.argv[2];
// let url_final = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${wordId}`;
// axios({
//   method: "GET",
//   url: url_final,
//   headers: {
//     Accept: "application/json",
//     app_id: "515b3055",
//     app_key: "3822089c52e1b2b0d472d53895a1239b"
//   }
// });

// axios.get(resp => {
//   let body = "";
//   resp.on("data", d => {
//     body += d;
//   });
//   resp.on("end", () => {
//     let parsed = JSON.parse(body);

//     let res = parsed.results;
//     let searchWord = wordId.toString();
//     // let res = parsed.results[0].lexicalEntries[0].entries[0].senses;
//     // let text = parsed.results[0].lexicalEntries[0].lexicalCategory.text;

//     console.log(`${searchWord}`);

//     getResults = () => {
//       res.forEach((el, index) => {
//         let lE = el.lexicalEntries;
//         console.log(lE[0].lexicalCategory.text);

//         lE.forEach((el, index) => {
//           console.log(
//             "Explanation",
//             index + 1,
//             el.entries[0].senses[0].definitions.toString()
//           );
//         });
//       });
//     };

//     getResults();
//   });
// });

const axios = require("axios");
let endpoint = "entries";
let language_code = "en-us";
let searchWord = process.argv[2];
let url_final = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${searchWord}`;
axios({
  method: "GET",
  url: url_final,
  headers: {
    Accept: "application/json",
    app_id: "515b3055",
    app_key: "3822089c52e1b2b0d472d53895a1239b"
  }
}).then(function(response) {
  console.log(`${searchWord}`);

  getResults = () => {
    let res = response.data.results[0].lexicalEntries[0].entries[0].senses;
    let lE = response.data.results[0].lexicalEntries;

    res.forEach((el, index) => {
      console.log(lE[0].lexicalCategory.text);

      lE.forEach((el, index) => {
        console.log(
          "Explanation",
          index + 1,
          el.entries[0].senses[0].definitions.toString()
        );
      });
    });
  };

  getResults();
});
// .catch(err => {
//   console.log("The word you are looking for was not found.");
// });

//////////////////////////////////////////////////////////////////////////
//////////////////////  V L A D S    C O D E  ///////////////////////////
// /////////////////////////////////////////////////////////////////////

// let lexCat =
//     response.data.results[0].lexicalEntries[0].lexicalCategory.text;
//   let defi_array =
//     response.data.results[0].lexicalEntries[0].entries[0].senses;
//   let counter = 1;
//   console.log(word_id, `(${lexCat})`);
//   defi_array.forEach(el => {
//     console.log(`${counter}. ${el.shortDefinitions[0]}`);
//     counter++;
//   });
