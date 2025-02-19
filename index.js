const axios = require("axios");
const cheerio = require("cheerio");

const countries = [];

async function scrap() {
    const response = await axios.get("https://www.scrapethissite.com/pages/simple/");

    const $ = cheerio.load(response.data);

    $(".country-name").each((_index, item) => {
        countries.push({ name: $(item).text().trim() });
    });

    $(".country-capital").each((index, item) => {
        countries[index].capital = $(item).text().trim();
    });
    console.log(countries);
};

scrap();