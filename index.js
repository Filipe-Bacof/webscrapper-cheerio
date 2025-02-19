const axios = require("axios");
const cheerio = require("cheerio");

async function scrap() {
    const response = await axios.get("https://www.scrapethissite.com/pages/simple/");

    console.log(response.data);
};

scrap();