import { countryInfo } from "./country-data";
import { languageInfo } from "./language-data";
import { CountryInfo, ISOCountryCode, ISOCountryCode3, ISOLanguageCode, LanguageInfo, WorldRegion } from "./types";

export class Country {
    static get(code: ISOCountryCode | ISOCountryCode3): CountryInfo
    static get(code: string): CountryInfo | null {
        if (code.match(/[A-Z]{3}/)) {
            let foundCountry = countryInfo.find(item => item.code3 === code);
            if (foundCountry) return foundCountry;
        }
        let foundCountry = countryInfo.find(item => item.code === code);
        if (foundCountry) return foundCountry;
        return null;
    }
    static getAll() {
        return [...countryInfo];
    }
    static getAllFromRegion(region: WorldRegion) {
        return countryInfo.filter(item => item.region.includes(region));
    }
    static getAllSovereign() {
        return countryInfo.filter(item => item.sovereign);
    }
}

export class Language {
    static get(code: ISOLanguageCode): LanguageInfo
    static get(code: string): LanguageInfo | null {
        let foundLang = languageInfo.find(item => item.code === code);
        if (foundLang) return foundLang;

        foundLang = languageInfo.find(item => item.code.split('-')[0] === code);
        if (foundLang) return foundLang;
        return null;
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
