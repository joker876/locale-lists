export type CountryInfo = {
    name: string;
    nameFull: string;
    sovereign: boolean;
    code: ISOCountryCode;
    code3: ISOCountryCode3 | null;
    dialCode: string | string[] | null;
    domains: string[];
    languages: ISOLanguageCode[];
    region: WorldRegion[]; //TODO
    territoryOf?: ISOCountryCode;
}
export type LanguageInfo = {
    name: string;
    code: ISOLanguageCode;
    countryCode?: ISOCountryCode | WorldRegion;
    general?: boolean;
    popular?: true;
    flag: ISOCountryCode | string;
}

export type CurrencyInfo = {
    name: string;
    code: ISOCurrencyCode;
    symbol: string | null;
}

export enum ISOCountryCode {
    Afghanistan = "AF",
    AlandIslands = "AX",
    Albania = "AL",
    Algeria = "DZ",
    AmericanSamoa = "AS",
    Andorra = "AD",
    Angola = "AO",
    Anguilla = "AI",
    Antarctica = "AQ",
    AntiguaAndBarbuda = "AG",
    Argentina = "AR",
    Armenia = "AM",
    Aruba = "AW",
    Australia = "AU",
    Austria = "AT",
    Azerbaijan = "AZ",
    Bahamas = "BS",
    Bahrain = "BH",
    Bangladesh = "BD",
    Barbados = "BB",
    Belarus = "BY",
    Belgium = "BE",
    Belize = "BZ",
    Benin = "BJ",
    Bermuda = "BM",
    Bhutan = "BT",
    Bolivia = "BO",
    BonaireSintEustatiusSaba = "BQ",
    BosniaAndHerzegovina = "BA",
    Botswana = "BW",
    BouvetIsland = "BV",
    Brazil = "BR",
    BritishIndianOceanTerritory = "IO",
    BruneiDarussalam = "BN",
    Bulgaria = "BG",
    BurkinaFaso = "BF",
    Burundi = "BI",
    CaboVerde = "CV",
    Cambodia = "KH",
    Cameroon = "CM",
    Canada = "CA",
    CanaryIslands = "IC",
    Catalonia = "ES-CT",
    CaymanIslands = "KY",
    CentralAfricanRepublic = "CF",
    Chad = "TD",
    Chile = "CL",
    China = "CN",
    ChristmasIsland = "CX",
    CocosIslands = "CC",
    Colombia = "CO",
    Comoros = "KM",
    CookIslands = "CK",
    CostaRica = "CR",
    Croatia = "HR",
    Cuba = "CU",
    Curacao = "CW",
    Cyprus = "CY",
    Czechia = "CZ",
    DemocraticRepublicOfCongo = "CD",
    Denmark = "DK",
    Djibouti = "DJ",
    Dominica = "DM",
    DominicanRepublic = "DO",
    Ecuador = "EC",
    Egypt = "EG",
    ElSalvador = "SV",
    England = "GB-ENG",
    EquatorialGuinea = "GQ",
    Eritrea = "ER",
    Estonia = "EE",
    Eswatini = "SZ",
    Ethiopia = "ET",
    EuropeanUnion = "EU",
    FalklandIslands = "FK",
    FaroeIslands = "FO",
    Fiji = "FJ",
    Finland = "FI",
    France = "FR",
    FrenchGuiana = "GF",
    FrenchPolynesia = "PF",
    FrenchSouthernTerritories = "TF",
    Gabon = "GA",
    Gambia = "GM",
    Georgia = "GE",
    Germany = "DE",
    Ghana = "GH",
    Gibraltar = "GI",
    Greece = "GR",
    Greenland = "GL",
    Grenada = "GD",
    Guadeloupe = "GP",
    Guam = "GU",
    Guatemala = "GT",
    Guernsey = "GG",
    Guinea = "GN",
    GuineaBissau = "GW",
    Guyana = "GY",
    Haiti = "HT",
    HeardIslandAndMcdonaldIslands = "HM",
    Honduras = "HN",
    HongKong = "HK",
    Hungary = "HU",
    Iceland = "IS",
    India = "IN",
    Indonesia = "ID",
    Iran = "IR",
    Iraq = "IQ",
    Ireland = "IE",
    IsleOfMan = "IM",
    Israel = "IL",
    Italy = "IT",
    IvoryCoast = "CI",
    Jamaica = "JM",
    Japan = "JP",
    Jersey = "JE",
    Jordan = "JO",
    Kazakhstan = "KZ",
    Kenya = "KE",
    Kiribati = "KI",
    Kosovo = "XK",
    Kuwait = "KW",
    Kyrgyzstan = "KG",
    Laos = "LA",
    Latvia = "LV",
    Lebanon = "LB",
    Lesotho = "LS",
    Liberia = "LR",
    Libya = "LY",
    Liechtenstein = "LI",
    Lithuania = "LT",
    Luxembourg = "LU",
    Macau = "MO",
    Madagascar = "MG",
    Malawi = "MW",
    Malaysia = "MY",
    Maldives = "MV",
    Mali = "ML",
    Malta = "MT",
    MarshallIslands = "MH",
    Martinique = "MQ",
    Mauritania = "MR",
    Mauritius = "MU",
    Mayotte = "YT",
    Mexico = "MX",
    Micronesia = "FM",
    Moldova = "MD",
    Monaco = "MC",
    Mongolia = "MN",
    Montenegro = "ME",
    Montserrat = "MS",
    Morocco = "MA",
    Mozambique = "MZ",
    Myanmar = "MM",
    Namibia = "NA",
    Nauru = "NR",
    Nepal = "NP",
    Netherlands = "NL",
    NewCaledonia = "NC",
    NewZealand = "NZ",
    Nicaragua = "NI",
    Niger = "NE",
    Nigeria = "NG",
    Niue = "NU",
    NorfolkIsland = "NF",
    NorthKorea = "KP",
    NorthMacedonia = "MK",
    NorthernIreland = "GB-NIR",
    NorthernMarianaIslands = "MP",
    Norway = "NO",
    Oman = "OM",
    Pakistan = "PK",
    Palau = "PW",
    Palestine = "PS",
    Panama = "PA",
    PapuaNewGuinea = "PG",
    Paraguay = "PY",
    Peru = "PE",
    Philippines = "PH",
    Pitcairn = "PN",
    Poland = "PL",
    Portugal = "PT",
    PuertoRico = "PR",
    Qatar = "QA",
    RepublicOfCongo = "CG",
    Reunion = "RE",
    Romania = "RO",
    RussianFederation = "RU",
    Rwanda = "RW",
    SaintBarthelemy = "BL",
    SaintHelenaAscensionIslandTristanDaCunha = "SH",
    SaintKittsAndNevis = "KN",
    SaintLucia = "LC",
    SaintMartin = "MF",
    SaintPierreAndMiquelon = "PM",
    SaintVincentAndTheGrenadines = "VC",
    Samoa = "WS",
    SanMarino = "SM",
    SaoTomeAndPrincipe = "ST",
    SaudiArabia = "SA",
    Scotland = "GB-SCT",
    Senegal = "SN",
    Serbia = "RS",
    Seychelles = "SC",
    SierraLeone = "SL",
    Singapore = "SG",
    SintMaarten = "SX",
    Slovakia = "SK",
    Slovenia = "SI",
    SolomonIslands = "SB",
    Somalia = "SO",
    SouthAfrica = "ZA",
    SouthGeorgiaAndTheSouthSandwichIslands = "GS",
    SouthKorea = "KR",
    SouthSudan = "SS",
    Spain = "ES",
    SriLanka = "LK",
    Sudan = "SD",
    Suriname = "SR",
    SvalbardJanMayen = "SJ",
    Sweden = "SE",
    Switzerland = "CH",
    Syria = "SY",
    Taiwan = "TW",
    Tajikistan = "TJ",
    Tanzania = "TZ",
    Thailand = "TH",
    TimorLeste = "TL",
    Togo = "TG",
    Tokelau = "TK",
    Tonga = "TO",
    TrinidadAndTobago = "TT",
    Tunisia = "TN",
    Turkey = "TR",
    Turkmenistan = "TM",
    TurksAndCaicosIslands = "TC",
    Tuvalu = "TV",
    Uganda = "UG",
    Ukraine = "UA",
    UnitedArabEmirates = "AE",
    UnitedKingdom = "GB",
    UnitedNations = "UN",
    UnitedStatesMinorOutlyingIslands = "UM",
    UnitedStatesOfAmerica = "US",
    Uruguay = "UY",
    Uzbekistan = "UZ",
    Vanuatu = "VU",
    Vatican = "VA",
    Venezuela = "VE",
    Vietnam = "VN",
    VirginIslands = "VG",
    VirginIslandsUS = "VI",
    Wales = "GB-WLS",
    WallisAndFutuna = "WF",
    Yemen = "YE",
    Zambia = "ZM",
    Zimbabwe = "ZW",
}
export enum ISOCountryCode3 {
    Afghanistan = "AFG",
    AlandIslands = "ALA",
    Albania = "ALB",
    Algeria = "DZA",
    AmericanSamoa = "ASM",
    Andorra = "AND",
    Angola = "AGO",
    Anguilla = "AIA",
    Antarctica = "ATA",
    AntiguaAndBarbuda = "ATG",
    Argentina = "ARG",
    Armenia = "ARM",
    Aruba = "ABW",
    Australia = "AUS",
    Austria = "AUT",
    Azerbaijan = "AZE",
    Bahamas = "BHS",
    Bahrain = "BHR",
    Bangladesh = "BGD",
    Barbados = "BRB",
    Belarus = "BLR",
    Belgium = "BEL",
    Belize = "BLZ",
    Benin = "BEN",
    Bermuda = "BMU",
    Bhutan = "BTN",
    Bolivia = "BOL",
    BonaireSintEustatiusSaba = "BES",
    BosniaAndHerzegovina = "BIH",
    Botswana = "BWA",
    BouvetIsland = "BVT",
    Brazil = "BRA",
    BritishIndianOceanTerritory = "IOT",
    BruneiDarussalam = "BRN",
    Bulgaria = "BGR",
    BurkinaFaso = "BFA",
    Burundi = "BDI",
    CaboVerde = "CPV",
    Cambodia = "KHM",
    Cameroon = "CMR",
    Canada = "CAN",
    CaymanIslands = "CYM",
    CentralAfricanRepublic = "CAF",
    Chad = "TCD",
    Chile = "CHL",
    China = "CHN",
    ChristmasIsland = "CXR",
    CocosIslands = "CCK",
    Colombia = "COL",
    Comoros = "COM",
    CookIslands = "COK",
    CostaRica = "CRI",
    Croatia = "HRV",
    Cuba = "CUB",
    Curacao = "CUW",
    Cyprus = "CYP",
    Czechia = "CZE",
    DemocraticRepublicOfCongo = "COD",
    Denmark = "DNK",
    Djibouti = "DJI",
    Dominica = "DMA",
    DominicanRepublic = "DOM",
    Ecuador = "ECU",
    Egypt = "EGY",
    ElSalvador = "SLV",
    EquatorialGuinea = "GNQ",
    Eritrea = "ERI",
    Estonia = "EST",
    Eswatini = "SWZ",
    Ethiopia = "ETH",
    FalklandIslands = "FLK",
    FaroeIslands = "FRO",
    Fiji = "FJI",
    Finland = "FIN",
    France = "FRA",
    FrenchGuiana = "GUF",
    FrenchPolynesia = "PYF",
    FrenchSouthernTerritories = "ATF",
    Gabon = "GAB",
    Gambia = "GMB",
    Georgia = "GEO",
    Germany = "DEU",
    Ghana = "GHA",
    Gibraltar = "GIB",
    Greece = "GRC",
    Greenland = "GRL",
    Grenada = "GRD",
    Guadeloupe = "GLP",
    Guam = "GUM",
    Guatemala = "GTM",
    Guernsey = "GGY",
    Guinea = "GIN",
    GuineaBissau = "GNB",
    Guyana = "GUY",
    Haiti = "HTI",
    HeardIslandAndMcdonaldIslands = "HMD",
    Honduras = "HND",
    HongKong = "HKG",
    Hungary = "HUN",
    Iceland = "ISL",
    India = "IND",
    Indonesia = "IDN",
    Iran = "IRN",
    Iraq = "IRQ",
    Ireland = "IRL",
    IsleOfMan = "IMN",
    Israel = "ISR",
    Italy = "ITA",
    IvoryCoast = "CIV",
    Jamaica = "JAM",
    Japan = "JPN",
    Jersey = "JEY",
    Jordan = "JOR",
    Kazakhstan = "KAZ",
    Kenya = "KEN",
    Kiribati = "KIR",
    Kosovo = "XKX",
    Kuwait = "KWT",
    Kyrgyzstan = "KGZ",
    Laos = "LAO",
    Latvia = "LVA",
    Lebanon = "LBN",
    Lesotho = "LSO",
    Liberia = "LBR",
    Libya = "LBY",
    Liechtenstein = "LIE",
    Lithuania = "LTU",
    Luxembourg = "LUX",
    Macau = "MAC",
    Madagascar = "MDG",
    Malawi = "MWI",
    Malaysia = "MYS",
    Maldives = "MDV",
    Mali = "MLI",
    Malta = "MLT",
    MarshallIslands = "MHL",
    Martinique = "MTQ",
    Mauritania = "MRT",
    Mauritius = "MUS",
    Mayotte = "MYT",
    Mexico = "MEX",
    Micronesia = "FSM",
    Moldova = "MDA",
    Monaco = "MCO",
    Mongolia = "MNG",
    Montenegro = "MNE",
    Montserrat = "MSR",
    Morocco = "MAR",
    Mozambique = "MOZ",
    Myanmar = "MMR",
    Namibia = "NAM",
    Nauru = "NRU",
    Nepal = "NPL",
    Netherlands = "NLD",
    NewCaledonia = "NCL",
    NewZealand = "NZL",
    Nicaragua = "NIC",
    Niger = "NER",
    Nigeria = "NGA",
    Niue = "NIU",
    NorfolkIsland = "NFK",
    NorthKorea = "PRK",
    NorthMacedonia = "MKD",
    NorthernMarianaIslands = "MNP",
    Norway = "NOR",
    Oman = "OMN",
    Pakistan = "PAK",
    Palau = "PLW",
    Palestine = "PSE",
    Panama = "PAN",
    PapuaNewGuinea = "PNG",
    Paraguay = "PRY",
    Peru = "PER",
    Philippines = "PHL",
    Pitcairn = "PCN",
    Poland = "POL",
    Portugal = "PRT",
    PuertoRico = "PRI",
    Qatar = "QAT",
    RepublicOfCongo = "COG",
    Reunion = "REU",
    Romania = "ROU",
    RussianFederation = "RUS",
    Rwanda = "RWA",
    SaintBarthelemy = "BLM",
    SaintHelenaAscensionIslandTristanDaCunha = "SHN",
    SaintKittsAndNevis = "KNA",
    SaintLucia = "LCA",
    SaintMartin = "MAF",
    SaintPierreAndMiquelon = "SPM",
    SaintVincentAndTheGrenadines = "VCT",
    Samoa = "WSM",
    SanMarino = "SMR",
    SaoTomeAndPrincipe = "STP",
    SaudiArabia = "SAU",
    Senegal = "SEN",
    Serbia = "SRB",
    Seychelles = "SYC",
    SierraLeone = "SLE",
    Singapore = "SGP",
    SintMaarten = "SXM",
    Slovakia = "SVK",
    Slovenia = "SVN",
    SolomonIslands = "SLB",
    Somalia = "SOM",
    SouthAfrica = "ZAF",
    SouthGeorgiaAndTheSouthSandwichIslands = "SGS",
    SouthKorea = "KOR",
    SouthSudan = "SSD",
    Spain = "ESP",
    SriLanka = "LKA",
    Sudan = "SDN",
    Suriname = "SUR",
    SvalbardJanMayen = "SJM",
    Sweden = "SWE",
    Switzerland = "CHE",
    Syria = "SYR",
    Taiwan = "TWN",
    Tajikistan = "TJK",
    Tanzania = "TZA",
    Thailand = "THA",
    TimorLeste = "TLS",
    Togo = "TGO",
    Tokelau = "TKL",
    Tonga = "TON",
    TrinidadAndTobago = "TTO",
    Tunisia = "TUN",
    Turkey = "TUR",
    Turkmenistan = "TKM",
    TurksAndCaicosIslands = "TCA",
    Tuvalu = "TUV",
    Uganda = "UGA",
    Ukraine = "UKR",
    UnitedArabEmirates = "ARE",
    UnitedKingdom = "GBR",
    UnitedStatesMinorOutlyingIslands = "UMI",
    UnitedStatesOfAmerica = "USA",
    Uruguay = "URY",
    Uzbekistan = "UZB",
    Vanuatu = "VUT",
    Vatican = "VAT",
    Venezuela = "VEN",
    Vietnam = "VNM",
    VirginIslands = "VGB",
    VirginIslandsUS = "VIR",
    WallisAndFutuna = "WLF",
    Yemen = "YEM",
    Zambia = "ZMB",
    Zimbabwe = "ZWE",
}

export enum ISOLanguageCode {
    Afrikaans = "af",
    Albanian = "sq",
    Amharic = "am",
    Arabic = "ar",
    ArabicAlgeria = "ar-dz",
    ArabicBahrain = "ar-bh",
    ArabicEgypt = "ar-eg",
    ArabicIraq = "ar-iq",
    ArabicJordan = "ar-jo",
    ArabicKuwait = "ar-kw",
    ArabicLebanon = "ar-lb",
    ArabicLibya = "ar-ly",
    ArabicMorocco = "ar-ma",
    ArabicOman = "ar-om",
    ArabicQatar = "ar-qa",
    ArabicSaudiArabia = "ar-sa",
    ArabicSyria = "ar-sy",
    ArabicTunisia = "ar-tn",
    ArabicUnitedArabEmirates = "ar-ae",
    ArabicYemen = "ar-ye",
    Armenian = "hy",
    Assamese = "as",
    Azeri = "az",
    Basque = "eu",
    Belarusian = "be",
    Bengali = "bn",
    Bosnian = "bs",
    Bulgarian = "bg",
    Burmese = "my",
    Catalan = "ca",
    Chinese = "zh",
    ChineseChina = "zh-cn",
    ChineseHongKong = "zh-hk",
    ChineseMacau = "zh-mo",
    ChineseSingapore = "zh-sg",
    ChineseTaiwan = "zh-tw",
    Croatian = "hr",
    Czech = "cs",
    Danish = "da",
    Dutch = "nl",
    DutchBelgium = "nl-be",
    DutchNetherlands = "nl-nl",
    Dzongkha = "dz",
    English = "en",
    EnglishAfrica = "en-za",
    EnglishAustralia = "en-au",
    EnglishBelize = "en-bz",
    EnglishCanada = "en-ca",
    EnglishCaribbean = "en-cb",
    EnglishGreatBritain = "en-gb",
    EnglishIndia = "en-in",
    EnglishIreland = "en-ie",
    EnglishJamaica = "en-jm",
    EnglishNewZealand = "en-nz",
    EnglishPhilippines = "en-ph",
    EnglishPirateSpeak = "qpe",
    EnglishTrinidadAndTobago = "en-tt",
    EnglishUnitedStatesOfAmerica = "en-us",
    EnglishZimbabwe = "en-zw",
    Estonian = "et",
    Faroese = "fo",
    Finnish = "fi",
    French = "fr",
    FrenchBelgium = "fr-be",
    FrenchCanada = "fr-ca",
    FrenchFrance = "fr-fr",
    FrenchIndia = "fr-in",
    FrenchIvoryCoast = "fr-ci",
    FrenchLuxembourg = "fr-lu",
    FrenchMali = "fr-ml",
    FrenchMonaco = "fr-mc",
    FrenchMorocco = "fr-ma",
    FrenchRepublicOfCongo = "fr-cg",
    FrenchSenegal = "fr-sn",
    FrenchSwitzerland = "fr-ch",
    GaelicIreland = "gd-ie",
    GaelicScotland = "gd",
    Galician = "gl",
    Georgian = "ka",
    German = "de",
    GermanAustria = "de-at",
    GermanGermany = "de-de",
    GermanLiechtenstein = "de-li",
    GermanLuxembourg = "de-lu",
    GermanSwitzerland = "de-ch",
    Greek = "el",
    Greenlandic = "kl",
    Guarani = "gn",
    Gujarati = "gu",
    Hebrew = "he",
    Hindi = "hi",
    Hungarian = "hu",
    Icelandic = "is",
    Igbo = "ig",
    Indonesian = "id",
    Irish = "ga",
    Italian = "it",
    ItalianItaly = "it-it",
    ItalianSwitzerland = "it-ch",
    Japanese = "ja",
    Kannada = "kn",
    Kashmiri = "ks",
    Kazakh = "kk",
    Khmer = "km",
    Korean = "ko",
    Kyrgyz = "ky",
    Lao = "lo",
    Latin = "la",
    Latvian = "lv",
    Lithuanian = "lt",
    Luxembourgish = "lb",
    Macedonian = "mk",
    Malay = "ms",
    MalayBrunei = "ms-bn",
    MalayMalaysia = "ms-my",
    Malayalam = "ml",
    Maldivian = "dv",
    Maltese = "mt",
    Maori = "mi",
    Marathi = "mr",
    Mongolian = "mn",
    Nepali = "ne",
    Norwegian = "no-no",
    Oriya = "or",
    Pashto = "ps",
    Persian = "fa",
    Polish = "pl",
    Portuguese = "pt-br",
    PortugueseBrazil = "pt-br",
    PortuguesePortugal = "pt-pt",
    Punjabi = "pa",
    Romanian = "ro",
    RomanianMoldova = "ro-mo",
    Russian = "ru",
    RussianMoldova = "ru-mo",
    Samoan = "sm",
    Serbian = "sr-sp",
    Setsuana = "tn",
    Silesian = "szl",
    Sindhi = "sd",
    Sinhalese = "si",
    Slovak = "sk",
    Slovenian = "sl",
    Somali = "so",
    Sorbian = "sb",
    Sotho = "st",
    Spanish = "es",
    SpanishArgentina = "es-ar",
    SpanishBolivia = "es-bo",
    SpanishChile = "es-cl",
    SpanishColombia = "es-co",
    SpanishCostaRica = "es-cr",
    SpanishDominicanRepublic = "es-do",
    SpanishEcuador = "es-ec",
    SpanishElSalvador = "es-sv",
    SpanishGuatemala = "es-gt",
    SpanishHonduras = "es-hn",
    SpanishMexico = "es-mx",
    SpanishNicaragua = "es-ni",
    SpanishPanama = "es-pa",
    SpanishParaguay = "es-py",
    SpanishPeru = "es-pe",
    SpanishPuertoRico = "es-pr",
    SpanishSpain = "es-es",
    SpanishUruguay = "es-uy",
    SpanishVenezuela = "es-ve",
    Swahili = "sw",
    Swazi = "ss",
    Swedish = "sv",
    SwedishFinland = "sv-fi",
    SwedishSweden = "sv-se",
    Syriac = "syr",
    Tajik = "tg",
    Tamil = "ta",
    Tatar = "tt",
    Telugu = "te",
    Thai = "th",
    Tibetan = "bo",
    Tigrinya = "ti",
    Tsonga = "ts",
    Turkish = "tr",
    Turkmen = "tk",
    Tuvalan = "tvl",
    Ukrainian = "uk",
    Urdu = "ur",
    Uzbek = "uz-uz",
    Vietnamese = "vi",
    Welsh = "cy",
    Xhosa = "xh",
    Yiddish = "yi",
    Zulu = "zu"
}

export enum ISOCurrencyCode {
    Afghani = "AFN",
    AlgerianDinar = "DZD",
    ArabicDirham = "AED",
    ArgentinePeso = "ARS",
    AustralianDollar = "AUD",
    AzerbaijaniManat = "AZN",
    BahamianDollar = "BSD",
    BahrainDinar = "BHD",
    BarbadianDollar = "BBD",
    BelarusRubel = "BYR",
    BelizeDollar = "BZD",
    BermudianDollar = "BMD",
    Birr = "ETB",
    Boliviano = "BOB",
    BrazilianReal = "BRL",
    BruneiDollar = "BND",
    BulgarianLev = "BGN",
    BurundiFranc = "BIF",
    CambodianRiel = "KHR",
    CanadianDollar = "CAD",
    CapeVerdeanEscudo = "CVE",
    CaymanDollar = "KYD",
    CentralAfricanFranc = "XAF",
    ChileanPeso = "CLP",
    ColombianPeso = "COP",
    Colon = "CRC",
    ComorianFranc = "KMF",
    CongoleseFranc = "CDF",
    ConvertibleMark = "BAM",
    CookDollar = "CKD",
    CordobaOro = "NIO",
    CubanPeso = "CUP",
    CzechKrone = "CZK",
    Dalasi = "GMD",
    DanishKrone = "DKK",
    DjiboutiFranc = "DJF",
    Dobra = "STD",
    DominicanPeso = "DOP",
    Dong = "VND",
    Dram = "AMD",
    EastCaribbeanDollar = "XCD",
    EgyptPound = "EGP",
    Euro = "EUR",
    FalklandsPound = "FKP",
    FaroeseKrona = "FOK",
    FidschiDollar = "FJD",
    GeorgianLari = "GEL",
    GhanaCedi = "GHS",
    GibraltarPound = "GIP",
    Gourde = "HTG",
    Guarani = "PYG",
    GuernseyPound = "GGP",
    Guilder = "AWG",
    GuineaFranc = "GNF",
    GuyanaDollar = "GYD",
    HongKongDollar = "HKD",
    Hrywnja = "UAH",
    HungarianForint = "HUF",
    IcelandicKrone = "ISK",
    IndianRupee = "INR",
    IndonesianRupiah = "IDR",
    IranianRial = "IRR",
    IraqiDinar = "IQD",
    IsraeliShekel = "ILS",
    JamaicaDollar = "JMD",
    JapaneseYen = "JPY",
    JemenRial = "YER",
    JerseySterlingPound = "JEP",
    JordanianDinar = "JOD",
    KenianSchilling = "KES",
    Kina = "PGK",
    Kip = "LAK",
    KiribatiDollar = "KID",
    Kuna = "HRK",
    KuwaitiDinar = "KWD",
    Kwacha = "MWK",
    Kwanza = "AOA",
    Kyat = "MMK",
    LebanesePound = "LBP",
    Lek = "ALL",
    Lempira = "HNL",
    Leone = "SLL",
    LesothoLoti = "LSL",
    LiberianDollar = "LRD",
    LibyanDinar = "LYD",
    MacanesePataca = "MOP",
    MacedonianDenar = "MKD",
    MalagasyAriary = "MGA",
    MaldivianRufiyaa = "MVR",
    ManxPound = "IMP",
    MauritianRupee = "MUR",
    Metical = "MZN",
    MexicanPeso = "MXN",
    MoldavianLeu = "MDL",
    MoroccanDirham = "MAD",
    Naira = "NGN",
    Nakfa = "ERN",
    NamibianDollar = "NAD",
    NepaleseRupee = "NPR",
    NetherlandsAntilleanGuilder = "ANG",
    NewTaiwanDollar = "TWD",
    NewZealandDollar = "NZD",
    Ngultrum = "BTN",
    NorthKoreanWon = "KPW",
    NorwegianKrone = "NOK",
    OmaniRial = "OMR",
    Ouguiya = "MRO",
    Paanga = "TOP",
    PacificFranc = "XPF",
    PakistanianRupee = "PKR",
    PanamanianBalboa = "PAB",
    PhilippinePeso = "PHP",
    Pula = "BWP",
    QatariRial = "QAR",
    Quetzal = "GTQ",
    RenminbiYuan = "CNY",
    Ringgit = "MYR",
    RomanianLeu = "RON",
    RussianRubel = "RUB",
    RwandanFranc = "RWF",
    SaintHelenaPound = "SHP",
    SalomonDollar = "SBD",
    SaudiRial = "SAR",
    SerbianDinar = "RSD",
    SeychellesRupee = "SCR",
    SingaporeDollar = "SGD",
    Sol = "PEN",
    Som = "KGS",
    SomalianShilling = "SOS",
    Somoni = "TJS",
    SouthAfricanRand = "ZAR",
    SouthKoreanWon = "KRW",
    SouthSudanesePound = "SSP",
    SriLankaRupee = "LKR",
    SterlingPound = "GBP",
    SudanesePound = "SDG",
    SurinamDollar = "SRD",
    SwaziLilangeni = "SZL",
    SwedishKrone = "SEK",
    SwissFranc = "CHF",
    SyrianPound = "SYP",
    Taka = "BDT",
    Tala = "WST",
    TansanianShilling = "TZS",
    Tenge = "KZT",
    ThaiBaht = "THB",
    TrinidadandTobagoDollar = "TTD",
    Tugrik = "MNT",
    TunesianDinar = "TND",
    TurkishLira = "TRY",
    TurkmenistaniManat = "TMT",
    TuvaluanDollar = "TVD",
    USDollar = "USD",
    UgandanSchilling = "UGX",
    UruguayPeso = "UYU",
    UzbekistaniSoum = "UZS",
    Vatu = "VUV",
    WestAfricanFranc = "XOF",
    ZambianKwacha = "ZMW",
    ZimbabweDollar = "ZWL",
    Zloty = "PLN",
}

export enum WorldRegion {
    Asia = "Asia",
    Europe = "Europe",
    EuropeEastern = "Eastern Europe",
    EuropeWestern = "Western Europe",
    EuropeNorthern = "Northern Europe",
    EuropeSouthern = "Southern Europe",
    Africa = "Africa",
    Oceania = "Oceania",
    America = "America",
    NorthAmerica = "North America",
    SouthAmerica = "South America",
    Australia = "Australia",
    Antarctica = "Antarctica",
    MiddleEast = "Middle East",
    Caribbean = "Caribbean",
    Scandinavia = "Scandinavia",
    EuropeanUnion = "European Union",
    MainlandUnitedKingdom = "Mainland United Kingdom",
}