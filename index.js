"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = exports.Language = exports.Country = void 0;
const country_data_1 = require("./country-data");
const currency_data_1 = require("./currency-data");
const language_data_1 = require("./language-data");
class Country {
    static get(code) {
        var _a;
        if (Country.getMemo.has(code))
            return (_a = Country.getMemo.get(code)) !== null && _a !== void 0 ? _a : null;
        if (code.match(/[A-Z]{3}/)) {
            let foundCountry = country_data_1.countryInfo.find(item => item.alpha3 === code);
            if (foundCountry) {
                Country.getMemo.set(code, foundCountry);
                return foundCountry;
            }
        }
        let foundCountry = country_data_1.countryInfo.find(item => item.alpha2 === code);
        Country.getMemo.set(code, foundCountry !== null && foundCountry !== void 0 ? foundCountry : null);
        return foundCountry !== null && foundCountry !== void 0 ? foundCountry : null;
    }
    static getAll() {
        return [...country_data_1.countryInfo];
    }
    static getAllFromRegion(region) {
        return country_data_1.countryInfo.filter(item => item.region.includes(region));
    }
    static getAllSovereign() {
        return country_data_1.countryInfo.filter(item => item.isSovereign);
    }
}
exports.Country = Country;
Country.getMemo = new Map();
class Language {
    static get(code) {
        var _a;
        if (Language.getMemo.has(code))
            return (_a = Language.getMemo.get(code)) !== null && _a !== void 0 ? _a : null;
        let foundLang = language_data_1.languageInfo.find(item => item.code === code);
        if (foundLang) {
            Language.getMemo.set(code, foundLang);
            return foundLang;
        }
        foundLang = language_data_1.languageInfo.find(item => item.code.split('-')[0] === code);
        Language.getMemo.set(code, foundLang !== null && foundLang !== void 0 ? foundLang : null);
        return foundLang !== null && foundLang !== void 0 ? foundLang : null;
    }
    static getAll(code, options) {
        return language_data_1.languageInfo.filter(item => {
            if (options && options.general && !item.general)
                return false;
            if (options && options.popular && !item.popular)
                return false;
            if (code && !(item.code === code || item.code.split('-')[0] === code))
                return false;
            return true;
        });
    }
    static getAllFromRegion(region, options) {
        let codes = new Set();
        Country.getAllFromRegion(region).forEach(country => {
            for (const lang of country.languages) {
                codes.add(lang);
            }
        });
        let filteredCodes = Array.from(codes.entries()).filter(([code]) => {
            let item = Language.get(code);
            if (!item)
                return false;
            if (options && options.general && !item.general)
                return false;
            if (options && options.popular && !item.popular)
                return false;
            return true;
        }).map(([code]) => code);
        return filteredCodes.map(code => Language.get(code));
    }
}
exports.Language = Language;
Language.getMemo = new Map();
class Currency {
    static get(code) {
        var _a;
        if (Currency.getMemo.has(code))
            return (_a = Currency.getMemo.get(code)) !== null && _a !== void 0 ? _a : null;
        let foundCurrency = currency_data_1.currencyInfo.find(item => item.code === code);
        Currency.getMemo.set(code, foundCurrency !== null && foundCurrency !== void 0 ? foundCurrency : null);
        return foundCurrency !== null && foundCurrency !== void 0 ? foundCurrency : null;
    }
    static getAll() {
        return [...currency_data_1.currencyInfo];
    }
}
exports.Currency = Currency;
Currency.getMemo = new Map();
