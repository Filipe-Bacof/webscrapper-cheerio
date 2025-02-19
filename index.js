const axios = require("axios");
const cheerio = require("cheerio");

const countries = [];

async function scrap() {
    const response = await axios.get("https://www.scrapethissite.com/pages/simple/");

    const $ = cheerio.load(response.data);

    $(".country-name").each((index, item) => {
        countries.push($(item).text().trim());
    });
    
    const countriesSortedAlphabetically = countries.sort().join(" | ")

    console.log(countriesSortedAlphabetically);
};

scrap();