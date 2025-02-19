const axios = require("axios");
const cheerio = require("cheerio");

async function scrap() {
    try {
        const response = await axios.get("https://www.scrapethissite.com/pages/simple/");
        const document = cheerio.load(response.data);

        const countries = document(".col-md-4.country").map((_index, element) => {
            const country = document(element);
            return {
                name: country.find(".country-name").text().trim(),
                capital: country.find(".country-capital").text().trim(),
                population: parseInt(country.find(".country-population").text().trim(), 10) || null,
                area: parseFloat(country.find(".country-area").text().trim()) || null
            };
        }).get();

        console.log(countries);
    } catch (error) {
        console.error("Erro ao fazer scraping:", error.message);
    }
}

scrap();