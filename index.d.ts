import { CountryInfo, CurrencyInfo, ISOCountryCode, ISOCountryCode3, ISOCurrencyCode, ISOLanguageCode, LanguageInfo, WorldRegion } from "./types";
export declare class Country {
    private static getMemo;
    static get(code: ISOCountryCode | ISOCountryCode3): CountryInfo;
    static getAll(): CountryInfo[];
    static getAllFromRegion(region: WorldRegion): CountryInfo[];
    static getAllSovereign(): CountryInfo[];
}
export declare class Language {
    private static getMemo;
    static get(code: ISOLanguageCode): LanguageInfo;
    static getAll(): LanguageInfo[];
    static getAll(code?: ISOLanguageCode): LanguageInfo[];
    static getAllFromRegion(region: WorldRegion, options?: {
        general?: boolean;
        popular?: boolean;
    }): LanguageInfo[];
}
export declare class Currency {
    private static getMemo;
    static get(code: ISOCurrencyCode): CurrencyInfo;
    static getAll(): CurrencyInfo[];
}
