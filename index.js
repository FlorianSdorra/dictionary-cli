const axios = require("axios");
const [word] = process.argv.slice(2);

const app_key = "3822089c52e1b2b0d472d53895a1239b";
const app_id = "515b3055";
const baseUrl = `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false?fields=definitions`;

const options = {
  headers: {
    app_id: app_id,
    app_key: app_key
  }
};

printMyResults = (data, type) => {
  console.log(`${word} (${type})`);
  data.forEach((el, index) => {
    console.log(`${index + 1}. ${el.shortDefinitions[0]}`);
  });
};

getWordDefinitions = async () => {
  try {
    const res = await axios.get(baseUrl, options);
    const data = res.data.results[0].lexicalEntries[0].entries[0].senses;
    const type = res.data.results[0].lexicalEntries[0].lexicalCategory.text;
    printMyResults(data, type);
  } catch (error) {
    console.log(error);
  }
};

getWordDefinitions();

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
