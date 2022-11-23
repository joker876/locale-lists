import { countryInfo } from "./country-data";
import { currencyInfo } from "./currency-data";
import { languageInfo } from "./language-data";
import { CountryInfo, CurrencyInfo, ISOCountryCode, ISOCountryCode3, ISOCurrencyCode, ISOLanguageCode, LanguageInfo, WorldRegion } from "./types";

export class Country {
    private static getMemo: Map<string, CountryInfo | null> = new Map();

    static get(code: ISOCountryCode | ISOCountryCode3): CountryInfo
    static get(code: string): CountryInfo | null {
        if (Country.getMemo.has(code)) return Country.getMemo.get(code) ?? null;

        if (code.match(/[A-Z]{3}/)) {
            let foundCountry = countryInfo.find(item => item.alpha3 === code);
            if (foundCountry) {
                Country.getMemo.set(code, foundCountry);
                return foundCountry;
            }
        }
        let foundCountry = countryInfo.find(item => item.alpha2 === code);
        Country.getMemo.set(code, foundCountry ?? null);
        return foundCountry ?? null;
    }
    static getAll() {
        return [...countryInfo];
    }
    static getAllFromRegion(region: WorldRegion) {
        return countryInfo.filter(item => item.region.includes(region));
    }
    static getAllSovereign() {
        return countryInfo.filter(item => item.isSovereign);
    }
}

export class Language {
    private static getMemo: Map<string, LanguageInfo | null> = new Map();

    static get(code: ISOLanguageCode): LanguageInfo
    static get(code: string): LanguageInfo | null {
        if (Language.getMemo.has(code)) return Language.getMemo.get(code) ?? null;

        let foundLang = languageInfo.find(item => item.code === code);
        if (foundLang) {
            Language.getMemo.set(code, foundLang);
            return foundLang;
        }

        foundLang = languageInfo.find(item => item.code.split('-')[0] === code);
        Language.getMemo.set(code, foundLang ?? null);
        return foundLang ?? null;
    }
    static getAll(): LanguageInfo[]
    static getAll(code?: ISOLanguageCode): LanguageInfo[]
    static getAll(code?: ISOLanguageCode, options?: {general?: boolean, popular?: boolean}): LanguageInfo[] {
        return languageInfo.filter(item => {
            if (options && options.general && !item.general) return false;
            if (options && options.popular && !item.popular) return false;
            if (code && !(item.code === code || item.code.split('-')[0] === code)) return false;
            return true;
        });
    }
    static getAllFromRegion(region: WorldRegion, options?: { general?: boolean, popular?: boolean }): LanguageInfo[] {
        let codes = new Set<ISOLanguageCode>();
        Country.getAllFromRegion(region).forEach(country => {
            for (const lang of country.languages) {
                codes.add(lang);
            }
        });
        let filteredCodes = Array.from(codes.entries()).filter(([code]) => {
            let item = Language.get(code);
            if (!item) return false;
            if (options && options.general && !item.general) return false;
            if (options && options.popular && !item.popular) return false;
            return true;
        }).map(([code]) => code);
        return filteredCodes.map(code => Language.get(code));
    }
}

export class Currency {
    private static getMemo: Map<string, CurrencyInfo | null> = new Map();

    static get(code: ISOCurrencyCode): CurrencyInfo;
    static get(code: string): CurrencyInfo | null {
        if (Currency.getMemo.has(code)) return Currency.getMemo.get(code) ?? null;

        let foundCurrency = currencyInfo.find(item => item.code === code);
        Currency.getMemo.set(code, foundCurrency ?? null);
        return foundCurrency ?? null;
    }
    static getAll(): CurrencyInfo[] {
        return [...currencyInfo];
    }
}