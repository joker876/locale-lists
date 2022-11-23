"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldRegion = exports.ISOCurrencyCode = exports.ISOLanguageCode = exports.ISOCountryCode3 = exports.ISOCountryCode = void 0;
var ISOCountryCode;
(function (ISOCountryCode) {
    ISOCountryCode["Afghanistan"] = "AF";
    ISOCountryCode["AlandIslands"] = "AX";
    ISOCountryCode["Albania"] = "AL";
    ISOCountryCode["Algeria"] = "DZ";
    ISOCountryCode["AmericanSamoa"] = "AS";
    ISOCountryCode["Andorra"] = "AD";
    ISOCountryCode["Angola"] = "AO";
    ISOCountryCode["Anguilla"] = "AI";
    ISOCountryCode["Antarctica"] = "AQ";
    ISOCountryCode["AntiguaAndBarbuda"] = "AG";
    ISOCountryCode["Argentina"] = "AR";
    ISOCountryCode["Armenia"] = "AM";
    ISOCountryCode["Aruba"] = "AW";
    ISOCountryCode["Australia"] = "AU";
    ISOCountryCode["Austria"] = "AT";
    ISOCountryCode["Azerbaijan"] = "AZ";
    ISOCountryCode["Bahamas"] = "BS";
    ISOCountryCode["Bahrain"] = "BH";
    ISOCountryCode["Bangladesh"] = "BD";
    ISOCountryCode["Barbados"] = "BB";
    ISOCountryCode["Belarus"] = "BY";
    ISOCountryCode["Belgium"] = "BE";
    ISOCountryCode["Belize"] = "BZ";
    ISOCountryCode["Benin"] = "BJ";
    ISOCountryCode["Bermuda"] = "BM";
    ISOCountryCode["Bhutan"] = "BT";
    ISOCountryCode["Bolivia"] = "BO";
    ISOCountryCode["BonaireSintEustatiusSaba"] = "BQ";
    ISOCountryCode["BosniaAndHerzegovina"] = "BA";
    ISOCountryCode["Botswana"] = "BW";
    ISOCountryCode["BouvetIsland"] = "BV";
    ISOCountryCode["Brazil"] = "BR";
    ISOCountryCode["BritishIndianOceanTerritory"] = "IO";
    ISOCountryCode["BruneiDarussalam"] = "BN";
    ISOCountryCode["Bulgaria"] = "BG";
    ISOCountryCode["BurkinaFaso"] = "BF";
    ISOCountryCode["Burundi"] = "BI";
    ISOCountryCode["CapeVerde"] = "CV";
    ISOCountryCode["Cambodia"] = "KH";
    ISOCountryCode["Cameroon"] = "CM";
    ISOCountryCode["Canada"] = "CA";
    ISOCountryCode["CanaryIslands"] = "IC";
    ISOCountryCode["Catalonia"] = "ES-CT";
    ISOCountryCode["CaymanIslands"] = "KY";
    ISOCountryCode["CentralAfricanRepublic"] = "CF";
    ISOCountryCode["Chad"] = "TD";
    ISOCountryCode["Chile"] = "CL";
    ISOCountryCode["China"] = "CN";
    ISOCountryCode["ChristmasIsland"] = "CX";
    ISOCountryCode["CocosIslands"] = "CC";
    ISOCountryCode["Colombia"] = "CO";
    ISOCountryCode["Comoros"] = "KM";
    ISOCountryCode["CookIslands"] = "CK";
    ISOCountryCode["CostaRica"] = "CR";
    ISOCountryCode["Croatia"] = "HR";
    ISOCountryCode["Cuba"] = "CU";
    ISOCountryCode["Curacao"] = "CW";
    ISOCountryCode["Cyprus"] = "CY";
    ISOCountryCode["Czechia"] = "CZ";
    ISOCountryCode["DemocraticRepublicOfCongo"] = "CD";
    ISOCountryCode["Denmark"] = "DK";
    ISOCountryCode["Djibouti"] = "DJ";
    ISOCountryCode["Dominica"] = "DM";
    ISOCountryCode["DominicanRepublic"] = "DO";
    ISOCountryCode["Ecuador"] = "EC";
    ISOCountryCode["Egypt"] = "EG";
    ISOCountryCode["ElSalvador"] = "SV";
    ISOCountryCode["England"] = "GB-ENG";
    ISOCountryCode["EquatorialGuinea"] = "GQ";
    ISOCountryCode["Eritrea"] = "ER";
    ISOCountryCode["Estonia"] = "EE";
    ISOCountryCode["Eswatini"] = "SZ";
    ISOCountryCode["Ethiopia"] = "ET";
    ISOCountryCode["EuropeanUnion"] = "EU";
    ISOCountryCode["FalklandIslands"] = "FK";
    ISOCountryCode["FaroeIslands"] = "FO";
    ISOCountryCode["Fiji"] = "FJ";
    ISOCountryCode["Finland"] = "FI";
    ISOCountryCode["France"] = "FR";
    ISOCountryCode["FrenchGuiana"] = "GF";
    ISOCountryCode["FrenchPolynesia"] = "PF";
    ISOCountryCode["FrenchSouthernTerritories"] = "TF";
    ISOCountryCode["Gabon"] = "GA";
    ISOCountryCode["Gambia"] = "GM";
    ISOCountryCode["Georgia"] = "GE";
    ISOCountryCode["Germany"] = "DE";
    ISOCountryCode["Ghana"] = "GH";
    ISOCountryCode["Gibraltar"] = "GI";
    ISOCountryCode["Greece"] = "GR";
    ISOCountryCode["Greenland"] = "GL";
    ISOCountryCode["Grenada"] = "GD";
    ISOCountryCode["Guadeloupe"] = "GP";
    ISOCountryCode["Guam"] = "GU";
    ISOCountryCode["Guatemala"] = "GT";
    ISOCountryCode["Guernsey"] = "GG";
    ISOCountryCode["Guinea"] = "GN";
    ISOCountryCode["GuineaBissau"] = "GW";
    ISOCountryCode["Guyana"] = "GY";
    ISOCountryCode["Haiti"] = "HT";
    ISOCountryCode["HeardIslandAndMcdonaldIslands"] = "HM";
    ISOCountryCode["Honduras"] = "HN";
    ISOCountryCode["HongKong"] = "HK";
    ISOCountryCode["Hungary"] = "HU";
    ISOCountryCode["Iceland"] = "IS";
    ISOCountryCode["India"] = "IN";
    ISOCountryCode["Indonesia"] = "ID";
    ISOCountryCode["Iran"] = "IR";
    ISOCountryCode["Iraq"] = "IQ";
    ISOCountryCode["Ireland"] = "IE";
    ISOCountryCode["IsleOfMan"] = "IM";
    ISOCountryCode["Israel"] = "IL";
    ISOCountryCode["Italy"] = "IT";
    ISOCountryCode["IvoryCoast"] = "CI";
    ISOCountryCode["Jamaica"] = "JM";
    ISOCountryCode["Japan"] = "JP";
    ISOCountryCode["Jersey"] = "JE";
    ISOCountryCode["Jordan"] = "JO";
    ISOCountryCode["Kazakhstan"] = "KZ";
    ISOCountryCode["Kenya"] = "KE";
    ISOCountryCode["Kiribati"] = "KI";
    ISOCountryCode["Kosovo"] = "XK";
    ISOCountryCode["Kuwait"] = "KW";
    ISOCountryCode["Kyrgyzstan"] = "KG";
    ISOCountryCode["Laos"] = "LA";
    ISOCountryCode["Latvia"] = "LV";
    ISOCountryCode["Lebanon"] = "LB";
    ISOCountryCode["Lesotho"] = "LS";
    ISOCountryCode["Liberia"] = "LR";
    ISOCountryCode["Libya"] = "LY";
    ISOCountryCode["Liechtenstein"] = "LI";
    ISOCountryCode["Lithuania"] = "LT";
    ISOCountryCode["Luxembourg"] = "LU";
    ISOCountryCode["Macau"] = "MO";
    ISOCountryCode["Madagascar"] = "MG";
    ISOCountryCode["Malawi"] = "MW";
    ISOCountryCode["Malaysia"] = "MY";
    ISOCountryCode["Maldives"] = "MV";
    ISOCountryCode["Mali"] = "ML";
    ISOCountryCode["Malta"] = "MT";
    ISOCountryCode["MarshallIslands"] = "MH";
    ISOCountryCode["Martinique"] = "MQ";
    ISOCountryCode["Mauritania"] = "MR";
    ISOCountryCode["Mauritius"] = "MU";
    ISOCountryCode["Mayotte"] = "YT";
    ISOCountryCode["Mexico"] = "MX";
    ISOCountryCode["Micronesia"] = "FM";
    ISOCountryCode["Moldova"] = "MD";
    ISOCountryCode["Monaco"] = "MC";
    ISOCountryCode["Mongolia"] = "MN";
    ISOCountryCode["Montenegro"] = "ME";
    ISOCountryCode["Montserrat"] = "MS";
    ISOCountryCode["Morocco"] = "MA";
    ISOCountryCode["Mozambique"] = "MZ";
    ISOCountryCode["Myanmar"] = "MM";
    ISOCountryCode["Namibia"] = "NA";
    ISOCountryCode["Nauru"] = "NR";
    ISOCountryCode["Nepal"] = "NP";
    ISOCountryCode["Netherlands"] = "NL";
    ISOCountryCode["NewCaledonia"] = "NC";
    ISOCountryCode["NewZealand"] = "NZ";
    ISOCountryCode["Nicaragua"] = "NI";
    ISOCountryCode["Niger"] = "NE";
    ISOCountryCode["Nigeria"] = "NG";
    ISOCountryCode["Niue"] = "NU";
    ISOCountryCode["NorfolkIsland"] = "NF";
    ISOCountryCode["NorthKorea"] = "KP";
    ISOCountryCode["NorthMacedonia"] = "MK";
    ISOCountryCode["NorthernIreland"] = "GB-NIR";
    ISOCountryCode["NorthernMarianaIslands"] = "MP";
    ISOCountryCode["Norway"] = "NO";
    ISOCountryCode["Oman"] = "OM";
    ISOCountryCode["Pakistan"] = "PK";
    ISOCountryCode["Palau"] = "PW";
    ISOCountryCode["Palestine"] = "PS";
    ISOCountryCode["Panama"] = "PA";
    ISOCountryCode["PapuaNewGuinea"] = "PG";
    ISOCountryCode["Paraguay"] = "PY";
    ISOCountryCode["Peru"] = "PE";
    ISOCountryCode["Philippines"] = "PH";
    ISOCountryCode["Pitcairn"] = "PN";
    ISOCountryCode["Poland"] = "PL";
    ISOCountryCode["Portugal"] = "PT";
    ISOCountryCode["PuertoRico"] = "PR";
    ISOCountryCode["Qatar"] = "QA";
    ISOCountryCode["RepublicOfCongo"] = "CG";
    ISOCountryCode["Reunion"] = "RE";
    ISOCountryCode["Romania"] = "RO";
    ISOCountryCode["RussianFederation"] = "RU";
    ISOCountryCode["Rwanda"] = "RW";
    ISOCountryCode["SaintBarthelemy"] = "BL";
    ISOCountryCode["SaintHelenaAscensionIslandTristanDaCunha"] = "SH";
    ISOCountryCode["SaintKittsAndNevis"] = "KN";
    ISOCountryCode["SaintLucia"] = "LC";
    ISOCountryCode["SaintMartin"] = "MF";
    ISOCountryCode["SaintPierreAndMiquelon"] = "PM";
    ISOCountryCode["SaintVincentAndTheGrenadines"] = "VC";
    ISOCountryCode["Samoa"] = "WS";
    ISOCountryCode["SanMarino"] = "SM";
    ISOCountryCode["SaoTomeAndPrincipe"] = "ST";
    ISOCountryCode["SaudiArabia"] = "SA";
    ISOCountryCode["Scotland"] = "GB-SCT";
    ISOCountryCode["Senegal"] = "SN";
    ISOCountryCode["Serbia"] = "RS";
    ISOCountryCode["Seychelles"] = "SC";
    ISOCountryCode["SierraLeone"] = "SL";
    ISOCountryCode["Singapore"] = "SG";
    ISOCountryCode["SintMaarten"] = "SX";
    ISOCountryCode["Slovakia"] = "SK";
    ISOCountryCode["Slovenia"] = "SI";
    ISOCountryCode["SolomonIslands"] = "SB";
    ISOCountryCode["Somalia"] = "SO";
    ISOCountryCode["SouthAfrica"] = "ZA";
    ISOCountryCode["SouthGeorgiaAndTheSouthSandwichIslands"] = "GS";
    ISOCountryCode["SouthKorea"] = "KR";
    ISOCountryCode["SouthSudan"] = "SS";
    ISOCountryCode["Spain"] = "ES";
    ISOCountryCode["SriLanka"] = "LK";
    ISOCountryCode["Sudan"] = "SD";
    ISOCountryCode["Suriname"] = "SR";
    ISOCountryCode["SvalbardJanMayen"] = "SJ";
    ISOCountryCode["Sweden"] = "SE";
    ISOCountryCode["Switzerland"] = "CH";
    ISOCountryCode["Syria"] = "SY";
    ISOCountryCode["Taiwan"] = "TW";
    ISOCountryCode["Tajikistan"] = "TJ";
    ISOCountryCode["Tanzania"] = "TZ";
    ISOCountryCode["Thailand"] = "TH";
    ISOCountryCode["TimorLeste"] = "TL";
    ISOCountryCode["Togo"] = "TG";
    ISOCountryCode["Tokelau"] = "TK";
    ISOCountryCode["Tonga"] = "TO";
    ISOCountryCode["TrinidadAndTobago"] = "TT";
    ISOCountryCode["Tunisia"] = "TN";
    ISOCountryCode["Turkey"] = "TR";
    ISOCountryCode["Turkmenistan"] = "TM";
    ISOCountryCode["TurksAndCaicosIslands"] = "TC";
    ISOCountryCode["Tuvalu"] = "TV";
    ISOCountryCode["Uganda"] = "UG";
    ISOCountryCode["Ukraine"] = "UA";
    ISOCountryCode["UnitedArabEmirates"] = "AE";
    ISOCountryCode["UnitedKingdom"] = "GB";
    ISOCountryCode["UnitedNations"] = "UN";
    ISOCountryCode["UnitedStatesMinorOutlyingIslands"] = "UM";
    ISOCountryCode["UnitedStatesOfAmerica"] = "US";
    ISOCountryCode["Uruguay"] = "UY";
    ISOCountryCode["Uzbekistan"] = "UZ";
    ISOCountryCode["Vanuatu"] = "VU";
    ISOCountryCode["Vatican"] = "VA";
    ISOCountryCode["Venezuela"] = "VE";
    ISOCountryCode["Vietnam"] = "VN";
    ISOCountryCode["VirginIslands"] = "VG";
    ISOCountryCode["VirginIslandsUS"] = "VI";
    ISOCountryCode["Wales"] = "GB-WLS";
    ISOCountryCode["WallisAndFutuna"] = "WF";
    ISOCountryCode["Yemen"] = "YE";
    ISOCountryCode["Zambia"] = "ZM";
    ISOCountryCode["Zimbabwe"] = "ZW";
})(ISOCountryCode = exports.ISOCountryCode || (exports.ISOCountryCode = {}));
var ISOCountryCode3;
(function (ISOCountryCode3) {
    ISOCountryCode3["Afghanistan"] = "AFG";
    ISOCountryCode3["AlandIslands"] = "ALA";
    ISOCountryCode3["Albania"] = "ALB";
    ISOCountryCode3["Algeria"] = "DZA";
    ISOCountryCode3["AmericanSamoa"] = "ASM";
    ISOCountryCode3["Andorra"] = "AND";
    ISOCountryCode3["Angola"] = "AGO";
    ISOCountryCode3["Anguilla"] = "AIA";
    ISOCountryCode3["Antarctica"] = "ATA";
    ISOCountryCode3["AntiguaAndBarbuda"] = "ATG";
    ISOCountryCode3["Argentina"] = "ARG";
    ISOCountryCode3["Armenia"] = "ARM";
    ISOCountryCode3["Aruba"] = "ABW";
    ISOCountryCode3["Australia"] = "AUS";
    ISOCountryCode3["Austria"] = "AUT";
    ISOCountryCode3["Azerbaijan"] = "AZE";
    ISOCountryCode3["Bahamas"] = "BHS";
    ISOCountryCode3["Bahrain"] = "BHR";
    ISOCountryCode3["Bangladesh"] = "BGD";
    ISOCountryCode3["Barbados"] = "BRB";
    ISOCountryCode3["Belarus"] = "BLR";
    ISOCountryCode3["Belgium"] = "BEL";
    ISOCountryCode3["Belize"] = "BLZ";
    ISOCountryCode3["Benin"] = "BEN";
    ISOCountryCode3["Bermuda"] = "BMU";
    ISOCountryCode3["Bhutan"] = "BTN";
    ISOCountryCode3["Bolivia"] = "BOL";
    ISOCountryCode3["BonaireSintEustatiusSaba"] = "BES";
    ISOCountryCode3["BosniaAndHerzegovina"] = "BIH";
    ISOCountryCode3["Botswana"] = "BWA";
    ISOCountryCode3["BouvetIsland"] = "BVT";
    ISOCountryCode3["Brazil"] = "BRA";
    ISOCountryCode3["BritishIndianOceanTerritory"] = "IOT";
    ISOCountryCode3["BruneiDarussalam"] = "BRN";
    ISOCountryCode3["Bulgaria"] = "BGR";
    ISOCountryCode3["BurkinaFaso"] = "BFA";
    ISOCountryCode3["Burundi"] = "BDI";
    ISOCountryCode3["CapeVerde"] = "CPV";
    ISOCountryCode3["Cambodia"] = "KHM";
    ISOCountryCode3["Cameroon"] = "CMR";
    ISOCountryCode3["Canada"] = "CAN";
    ISOCountryCode3["CaymanIslands"] = "CYM";
    ISOCountryCode3["CentralAfricanRepublic"] = "CAF";
    ISOCountryCode3["Chad"] = "TCD";
    ISOCountryCode3["Chile"] = "CHL";
    ISOCountryCode3["China"] = "CHN";
    ISOCountryCode3["ChristmasIsland"] = "CXR";
    ISOCountryCode3["CocosIslands"] = "CCK";
    ISOCountryCode3["Colombia"] = "COL";
    ISOCountryCode3["Comoros"] = "COM";
    ISOCountryCode3["CookIslands"] = "COK";
    ISOCountryCode3["CostaRica"] = "CRI";
    ISOCountryCode3["Croatia"] = "HRV";
    ISOCountryCode3["Cuba"] = "CUB";
    ISOCountryCode3["Curacao"] = "CUW";
    ISOCountryCode3["Cyprus"] = "CYP";
    ISOCountryCode3["Czechia"] = "CZE";
    ISOCountryCode3["DemocraticRepublicOfCongo"] = "COD";
    ISOCountryCode3["Denmark"] = "DNK";
    ISOCountryCode3["Djibouti"] = "DJI";
    ISOCountryCode3["Dominica"] = "DMA";
    ISOCountryCode3["DominicanRepublic"] = "DOM";
    ISOCountryCode3["Ecuador"] = "ECU";
    ISOCountryCode3["Egypt"] = "EGY";
    ISOCountryCode3["ElSalvador"] = "SLV";
    ISOCountryCode3["EquatorialGuinea"] = "GNQ";
    ISOCountryCode3["Eritrea"] = "ERI";
    ISOCountryCode3["Estonia"] = "EST";
    ISOCountryCode3["Eswatini"] = "SWZ";
    ISOCountryCode3["Ethiopia"] = "ETH";
    ISOCountryCode3["FalklandIslands"] = "FLK";
    ISOCountryCode3["FaroeIslands"] = "FRO";
    ISOCountryCode3["Fiji"] = "FJI";
    ISOCountryCode3["Finland"] = "FIN";
    ISOCountryCode3["France"] = "FRA";
    ISOCountryCode3["FrenchGuiana"] = "GUF";
    ISOCountryCode3["FrenchPolynesia"] = "PYF";
    ISOCountryCode3["FrenchSouthernTerritories"] = "ATF";
    ISOCountryCode3["Gabon"] = "GAB";
    ISOCountryCode3["Gambia"] = "GMB";
    ISOCountryCode3["Georgia"] = "GEO";
    ISOCountryCode3["Germany"] = "DEU";
    ISOCountryCode3["Ghana"] = "GHA";
    ISOCountryCode3["Gibraltar"] = "GIB";
    ISOCountryCode3["Greece"] = "GRC";
    ISOCountryCode3["Greenland"] = "GRL";
    ISOCountryCode3["Grenada"] = "GRD";
    ISOCountryCode3["Guadeloupe"] = "GLP";
    ISOCountryCode3["Guam"] = "GUM";
    ISOCountryCode3["Guatemala"] = "GTM";
    ISOCountryCode3["Guernsey"] = "GGY";
    ISOCountryCode3["Guinea"] = "GIN";
    ISOCountryCode3["GuineaBissau"] = "GNB";
    ISOCountryCode3["Guyana"] = "GUY";
    ISOCountryCode3["Haiti"] = "HTI";
    ISOCountryCode3["HeardIslandAndMcdonaldIslands"] = "HMD";
    ISOCountryCode3["Honduras"] = "HND";
    ISOCountryCode3["HongKong"] = "HKG";
    ISOCountryCode3["Hungary"] = "HUN";
    ISOCountryCode3["Iceland"] = "ISL";
    ISOCountryCode3["India"] = "IND";
    ISOCountryCode3["Indonesia"] = "IDN";
    ISOCountryCode3["Iran"] = "IRN";
    ISOCountryCode3["Iraq"] = "IRQ";
    ISOCountryCode3["Ireland"] = "IRL";
    ISOCountryCode3["IsleOfMan"] = "IMN";
    ISOCountryCode3["Israel"] = "ISR";
    ISOCountryCode3["Italy"] = "ITA";
    ISOCountryCode3["IvoryCoast"] = "CIV";
    ISOCountryCode3["Jamaica"] = "JAM";
    ISOCountryCode3["Japan"] = "JPN";
    ISOCountryCode3["Jersey"] = "JEY";
    ISOCountryCode3["Jordan"] = "JOR";
    ISOCountryCode3["Kazakhstan"] = "KAZ";
    ISOCountryCode3["Kenya"] = "KEN";
    ISOCountryCode3["Kiribati"] = "KIR";
    ISOCountryCode3["Kosovo"] = "XKX";
    ISOCountryCode3["Kuwait"] = "KWT";
    ISOCountryCode3["Kyrgyzstan"] = "KGZ";
    ISOCountryCode3["Laos"] = "LAO";
    ISOCountryCode3["Latvia"] = "LVA";
    ISOCountryCode3["Lebanon"] = "LBN";
    ISOCountryCode3["Lesotho"] = "LSO";
    ISOCountryCode3["Liberia"] = "LBR";
    ISOCountryCode3["Libya"] = "LBY";
    ISOCountryCode3["Liechtenstein"] = "LIE";
    ISOCountryCode3["Lithuania"] = "LTU";
    ISOCountryCode3["Luxembourg"] = "LUX";
    ISOCountryCode3["Macau"] = "MAC";
    ISOCountryCode3["Madagascar"] = "MDG";
    ISOCountryCode3["Malawi"] = "MWI";
    ISOCountryCode3["Malaysia"] = "MYS";
    ISOCountryCode3["Maldives"] = "MDV";
    ISOCountryCode3["Mali"] = "MLI";
    ISOCountryCode3["Malta"] = "MLT";
    ISOCountryCode3["MarshallIslands"] = "MHL";
    ISOCountryCode3["Martinique"] = "MTQ";
    ISOCountryCode3["Mauritania"] = "MRT";
    ISOCountryCode3["Mauritius"] = "MUS";
    ISOCountryCode3["Mayotte"] = "MYT";
    ISOCountryCode3["Mexico"] = "MEX";
    ISOCountryCode3["Micronesia"] = "FSM";
    ISOCountryCode3["Moldova"] = "MDA";
    ISOCountryCode3["Monaco"] = "MCO";
    ISOCountryCode3["Mongolia"] = "MNG";
    ISOCountryCode3["Montenegro"] = "MNE";
    ISOCountryCode3["Montserrat"] = "MSR";
    ISOCountryCode3["Morocco"] = "MAR";
    ISOCountryCode3["Mozambique"] = "MOZ";
    ISOCountryCode3["Myanmar"] = "MMR";
    ISOCountryCode3["Namibia"] = "NAM";
    ISOCountryCode3["Nauru"] = "NRU";
    ISOCountryCode3["Nepal"] = "NPL";
    ISOCountryCode3["Netherlands"] = "NLD";
    ISOCountryCode3["NewCaledonia"] = "NCL";
    ISOCountryCode3["NewZealand"] = "NZL";
    ISOCountryCode3["Nicaragua"] = "NIC";
    ISOCountryCode3["Niger"] = "NER";
    ISOCountryCode3["Nigeria"] = "NGA";
    ISOCountryCode3["Niue"] = "NIU";
    ISOCountryCode3["NorfolkIsland"] = "NFK";
    ISOCountryCode3["NorthKorea"] = "PRK";
    ISOCountryCode3["NorthMacedonia"] = "MKD";
    ISOCountryCode3["NorthernMarianaIslands"] = "MNP";
    ISOCountryCode3["Norway"] = "NOR";
    ISOCountryCode3["Oman"] = "OMN";
    ISOCountryCode3["Pakistan"] = "PAK";
    ISOCountryCode3["Palau"] = "PLW";
    ISOCountryCode3["Palestine"] = "PSE";
    ISOCountryCode3["Panama"] = "PAN";
    ISOCountryCode3["PapuaNewGuinea"] = "PNG";
    ISOCountryCode3["Paraguay"] = "PRY";
    ISOCountryCode3["Peru"] = "PER";
    ISOCountryCode3["Philippines"] = "PHL";
    ISOCountryCode3["Pitcairn"] = "PCN";
    ISOCountryCode3["Poland"] = "POL";
    ISOCountryCode3["Portugal"] = "PRT";
    ISOCountryCode3["PuertoRico"] = "PRI";
    ISOCountryCode3["Qatar"] = "QAT";
    ISOCountryCode3["RepublicOfCongo"] = "COG";
    ISOCountryCode3["Reunion"] = "REU";
    ISOCountryCode3["Romania"] = "ROU";
    ISOCountryCode3["RussianFederation"] = "RUS";
    ISOCountryCode3["Rwanda"] = "RWA";
    ISOCountryCode3["SaintBarthelemy"] = "BLM";
    ISOCountryCode3["SaintHelenaAscensionIslandTristanDaCunha"] = "SHN";
    ISOCountryCode3["SaintKittsAndNevis"] = "KNA";
    ISOCountryCode3["SaintLucia"] = "LCA";
    ISOCountryCode3["SaintMartin"] = "MAF";
    ISOCountryCode3["SaintPierreAndMiquelon"] = "SPM";
    ISOCountryCode3["SaintVincentAndTheGrenadines"] = "VCT";
    ISOCountryCode3["Samoa"] = "WSM";
    ISOCountryCode3["SanMarino"] = "SMR";
    ISOCountryCode3["SaoTomeAndPrincipe"] = "STP";
    ISOCountryCode3["SaudiArabia"] = "SAU";
    ISOCountryCode3["Senegal"] = "SEN";
    ISOCountryCode3["Serbia"] = "SRB";
    ISOCountryCode3["Seychelles"] = "SYC";
    ISOCountryCode3["SierraLeone"] = "SLE";
    ISOCountryCode3["Singapore"] = "SGP";
    ISOCountryCode3["SintMaarten"] = "SXM";
    ISOCountryCode3["Slovakia"] = "SVK";
    ISOCountryCode3["Slovenia"] = "SVN";
    ISOCountryCode3["SolomonIslands"] = "SLB";
    ISOCountryCode3["Somalia"] = "SOM";
    ISOCountryCode3["SouthAfrica"] = "ZAF";
    ISOCountryCode3["SouthGeorgiaAndTheSouthSandwichIslands"] = "SGS";
    ISOCountryCode3["SouthKorea"] = "KOR";
    ISOCountryCode3["SouthSudan"] = "SSD";
    ISOCountryCode3["Spain"] = "ESP";
    ISOCountryCode3["SriLanka"] = "LKA";
    ISOCountryCode3["Sudan"] = "SDN";
    ISOCountryCode3["Suriname"] = "SUR";
    ISOCountryCode3["SvalbardJanMayen"] = "SJM";
    ISOCountryCode3["Sweden"] = "SWE";
    ISOCountryCode3["Switzerland"] = "CHE";
    ISOCountryCode3["Syria"] = "SYR";
    ISOCountryCode3["Taiwan"] = "TWN";
    ISOCountryCode3["Tajikistan"] = "TJK";
    ISOCountryCode3["Tanzania"] = "TZA";
    ISOCountryCode3["Thailand"] = "THA";
    ISOCountryCode3["TimorLeste"] = "TLS";
    ISOCountryCode3["Togo"] = "TGO";
    ISOCountryCode3["Tokelau"] = "TKL";
    ISOCountryCode3["Tonga"] = "TON";
    ISOCountryCode3["TrinidadAndTobago"] = "TTO";
    ISOCountryCode3["Tunisia"] = "TUN";
    ISOCountryCode3["Turkey"] = "TUR";
    ISOCountryCode3["Turkmenistan"] = "TKM";
    ISOCountryCode3["TurksAndCaicosIslands"] = "TCA";
    ISOCountryCode3["Tuvalu"] = "TUV";
    ISOCountryCode3["Uganda"] = "UGA";
    ISOCountryCode3["Ukraine"] = "UKR";
    ISOCountryCode3["UnitedArabEmirates"] = "ARE";
    ISOCountryCode3["UnitedKingdom"] = "GBR";
    ISOCountryCode3["UnitedStatesMinorOutlyingIslands"] = "UMI";
    ISOCountryCode3["UnitedStatesOfAmerica"] = "USA";
    ISOCountryCode3["Uruguay"] = "URY";
    ISOCountryCode3["Uzbekistan"] = "UZB";
    ISOCountryCode3["Vanuatu"] = "VUT";
    ISOCountryCode3["Vatican"] = "VAT";
    ISOCountryCode3["Venezuela"] = "VEN";
    ISOCountryCode3["Vietnam"] = "VNM";
    ISOCountryCode3["VirginIslands"] = "VGB";
    ISOCountryCode3["VirginIslandsUS"] = "VIR";
    ISOCountryCode3["WallisAndFutuna"] = "WLF";
    ISOCountryCode3["Yemen"] = "YEM";
    ISOCountryCode3["Zambia"] = "ZMB";
    ISOCountryCode3["Zimbabwe"] = "ZWE";
})(ISOCountryCode3 = exports.ISOCountryCode3 || (exports.ISOCountryCode3 = {}));
var ISOLanguageCode;
(function (ISOLanguageCode) {
    ISOLanguageCode["Afrikaans"] = "af";
    ISOLanguageCode["Albanian"] = "sq";
    ISOLanguageCode["Amharic"] = "am";
    ISOLanguageCode["Arabic"] = "ar";
    ISOLanguageCode["ArabicAlgeria"] = "ar-dz";
    ISOLanguageCode["ArabicBahrain"] = "ar-bh";
    ISOLanguageCode["ArabicEgypt"] = "ar-eg";
    ISOLanguageCode["ArabicIraq"] = "ar-iq";
    ISOLanguageCode["ArabicJordan"] = "ar-jo";
    ISOLanguageCode["ArabicKuwait"] = "ar-kw";
    ISOLanguageCode["ArabicLebanon"] = "ar-lb";
    ISOLanguageCode["ArabicLibya"] = "ar-ly";
    ISOLanguageCode["ArabicMorocco"] = "ar-ma";
    ISOLanguageCode["ArabicOman"] = "ar-om";
    ISOLanguageCode["ArabicQatar"] = "ar-qa";
    ISOLanguageCode["ArabicSaudiArabia"] = "ar-sa";
    ISOLanguageCode["ArabicSyria"] = "ar-sy";
    ISOLanguageCode["ArabicTunisia"] = "ar-tn";
    ISOLanguageCode["ArabicUnitedArabEmirates"] = "ar-ae";
    ISOLanguageCode["ArabicYemen"] = "ar-ye";
    ISOLanguageCode["Armenian"] = "hy";
    ISOLanguageCode["Assamese"] = "as";
    ISOLanguageCode["Azeri"] = "az";
    ISOLanguageCode["Basque"] = "eu";
    ISOLanguageCode["Belarusian"] = "be";
    ISOLanguageCode["Bengali"] = "bn";
    ISOLanguageCode["Bosnian"] = "bs";
    ISOLanguageCode["Bulgarian"] = "bg";
    ISOLanguageCode["Burmese"] = "my";
    ISOLanguageCode["Catalan"] = "ca";
    ISOLanguageCode["Chinese"] = "zh";
    ISOLanguageCode["ChineseChina"] = "zh-cn";
    ISOLanguageCode["ChineseHongKong"] = "zh-hk";
    ISOLanguageCode["ChineseMacau"] = "zh-mo";
    ISOLanguageCode["ChineseSingapore"] = "zh-sg";
    ISOLanguageCode["ChineseTaiwan"] = "zh-tw";
    ISOLanguageCode["Croatian"] = "hr";
    ISOLanguageCode["Czech"] = "cs";
    ISOLanguageCode["Danish"] = "da";
    ISOLanguageCode["Dutch"] = "nl";
    ISOLanguageCode["DutchBelgium"] = "nl-be";
    ISOLanguageCode["DutchNetherlands"] = "nl-nl";
    ISOLanguageCode["Dzongkha"] = "dz";
    ISOLanguageCode["English"] = "en";
    ISOLanguageCode["EnglishAfrica"] = "en-za";
    ISOLanguageCode["EnglishAustralia"] = "en-au";
    ISOLanguageCode["EnglishBelize"] = "en-bz";
    ISOLanguageCode["EnglishCanada"] = "en-ca";
    ISOLanguageCode["EnglishCaribbean"] = "en-cb";
    ISOLanguageCode["EnglishGreatBritain"] = "en-gb";
    ISOLanguageCode["EnglishIndia"] = "en-in";
    ISOLanguageCode["EnglishIreland"] = "en-ie";
    ISOLanguageCode["EnglishJamaica"] = "en-jm";
    ISOLanguageCode["EnglishNewZealand"] = "en-nz";
    ISOLanguageCode["EnglishPhilippines"] = "en-ph";
    ISOLanguageCode["EnglishTrinidadAndTobago"] = "en-tt";
    ISOLanguageCode["EnglishUnitedStatesOfAmerica"] = "en-us";
    ISOLanguageCode["EnglishZimbabwe"] = "en-zw";
    ISOLanguageCode["Estonian"] = "et";
    ISOLanguageCode["Faroese"] = "fo";
    ISOLanguageCode["Finnish"] = "fi";
    ISOLanguageCode["French"] = "fr";
    ISOLanguageCode["FrenchBelgium"] = "fr-be";
    ISOLanguageCode["FrenchCanada"] = "fr-ca";
    ISOLanguageCode["FrenchFrance"] = "fr-fr";
    ISOLanguageCode["FrenchIndia"] = "fr-in";
    ISOLanguageCode["FrenchIvoryCoast"] = "fr-ci";
    ISOLanguageCode["FrenchLuxembourg"] = "fr-lu";
    ISOLanguageCode["FrenchMali"] = "fr-ml";
    ISOLanguageCode["FrenchMonaco"] = "fr-mc";
    ISOLanguageCode["FrenchMorocco"] = "fr-ma";
    ISOLanguageCode["FrenchRepublicOfCongo"] = "fr-cg";
    ISOLanguageCode["FrenchSenegal"] = "fr-sn";
    ISOLanguageCode["FrenchSwitzerland"] = "fr-ch";
    ISOLanguageCode["GaelicIreland"] = "gd-ie";
    ISOLanguageCode["GaelicScotland"] = "gd";
    ISOLanguageCode["Galician"] = "gl";
    ISOLanguageCode["Georgian"] = "ka";
    ISOLanguageCode["German"] = "de";
    ISOLanguageCode["GermanAustria"] = "de-at";
    ISOLanguageCode["GermanGermany"] = "de-de";
    ISOLanguageCode["GermanLiechtenstein"] = "de-li";
    ISOLanguageCode["GermanLuxembourg"] = "de-lu";
    ISOLanguageCode["GermanSwitzerland"] = "de-ch";
    ISOLanguageCode["Greek"] = "el";
    ISOLanguageCode["Greenlandic"] = "kl";
    ISOLanguageCode["Guarani"] = "gn";
    ISOLanguageCode["Gujarati"] = "gu";
    ISOLanguageCode["Hebrew"] = "he";
    ISOLanguageCode["Hindi"] = "hi";
    ISOLanguageCode["Hungarian"] = "hu";
    ISOLanguageCode["Icelandic"] = "is";
    ISOLanguageCode["Igbo"] = "ig";
    ISOLanguageCode["Indonesian"] = "id";
    ISOLanguageCode["Irish"] = "ga";
    ISOLanguageCode["Italian"] = "it";
    ISOLanguageCode["ItalianItaly"] = "it-it";
    ISOLanguageCode["ItalianSwitzerland"] = "it-ch";
    ISOLanguageCode["Japanese"] = "ja";
    ISOLanguageCode["Kannada"] = "kn";
    ISOLanguageCode["Kashmiri"] = "ks";
    ISOLanguageCode["Kazakh"] = "kk";
    ISOLanguageCode["Khmer"] = "km";
    ISOLanguageCode["Korean"] = "ko";
    ISOLanguageCode["Kyrgyz"] = "ky";
    ISOLanguageCode["Lao"] = "lo";
    ISOLanguageCode["Latin"] = "la";
    ISOLanguageCode["Latvian"] = "lv";
    ISOLanguageCode["Lithuanian"] = "lt";
    ISOLanguageCode["Luxembourgish"] = "lb";
    ISOLanguageCode["Macedonian"] = "mk";
    ISOLanguageCode["Malay"] = "ms";
    ISOLanguageCode["MalayBrunei"] = "ms-bn";
    ISOLanguageCode["MalayMalaysia"] = "ms-my";
    ISOLanguageCode["Malayalam"] = "ml";
    ISOLanguageCode["Maldivian"] = "dv";
    ISOLanguageCode["Maltese"] = "mt";
    ISOLanguageCode["Maori"] = "mi";
    ISOLanguageCode["Marathi"] = "mr";
    ISOLanguageCode["Mongolian"] = "mn";
    ISOLanguageCode["Nepali"] = "ne";
    ISOLanguageCode["Norwegian"] = "no-no";
    ISOLanguageCode["Oriya"] = "or";
    ISOLanguageCode["Pashto"] = "ps";
    ISOLanguageCode["Persian"] = "fa";
    ISOLanguageCode["Polish"] = "pl";
    ISOLanguageCode["Portuguese"] = "pt-br";
    ISOLanguageCode["PortugueseBrazil"] = "pt-br";
    ISOLanguageCode["PortuguesePortugal"] = "pt-pt";
    ISOLanguageCode["Punjabi"] = "pa";
    ISOLanguageCode["Romanian"] = "ro";
    ISOLanguageCode["RomanianMoldova"] = "ro-mo";
    ISOLanguageCode["Russian"] = "ru";
    ISOLanguageCode["RussianMoldova"] = "ru-mo";
    ISOLanguageCode["Samoan"] = "sm";
    ISOLanguageCode["Serbian"] = "sr-sp";
    ISOLanguageCode["Setsuana"] = "tn";
    ISOLanguageCode["Sindhi"] = "sd";
    ISOLanguageCode["Sinhalese"] = "si";
    ISOLanguageCode["Slovak"] = "sk";
    ISOLanguageCode["Slovenian"] = "sl";
    ISOLanguageCode["Somali"] = "so";
    ISOLanguageCode["Sorbian"] = "sb";
    ISOLanguageCode["Sotho"] = "st";
    ISOLanguageCode["Spanish"] = "es";
    ISOLanguageCode["SpanishArgentina"] = "es-ar";
    ISOLanguageCode["SpanishBolivia"] = "es-bo";
    ISOLanguageCode["SpanishChile"] = "es-cl";
    ISOLanguageCode["SpanishColombia"] = "es-co";
    ISOLanguageCode["SpanishCostaRica"] = "es-cr";
    ISOLanguageCode["SpanishDominicanRepublic"] = "es-do";
    ISOLanguageCode["SpanishEcuador"] = "es-ec";
    ISOLanguageCode["SpanishElSalvador"] = "es-sv";
    ISOLanguageCode["SpanishGuatemala"] = "es-gt";
    ISOLanguageCode["SpanishHonduras"] = "es-hn";
    ISOLanguageCode["SpanishMexico"] = "es-mx";
    ISOLanguageCode["SpanishNicaragua"] = "es-ni";
    ISOLanguageCode["SpanishPanama"] = "es-pa";
    ISOLanguageCode["SpanishParaguay"] = "es-py";
    ISOLanguageCode["SpanishPeru"] = "es-pe";
    ISOLanguageCode["SpanishPuertoRico"] = "es-pr";
    ISOLanguageCode["SpanishSpain"] = "es-es";
    ISOLanguageCode["SpanishUruguay"] = "es-uy";
    ISOLanguageCode["SpanishVenezuela"] = "es-ve";
    ISOLanguageCode["Swahili"] = "sw";
    ISOLanguageCode["Swazi"] = "ss";
    ISOLanguageCode["Swedish"] = "sv";
    ISOLanguageCode["SwedishFinland"] = "sv-fi";
    ISOLanguageCode["SwedishSweden"] = "sv-se";
    ISOLanguageCode["Syriac"] = "syr";
    ISOLanguageCode["Tajik"] = "tg";
    ISOLanguageCode["Tamil"] = "ta";
    ISOLanguageCode["Tatar"] = "tt";
    ISOLanguageCode["Telugu"] = "te";
    ISOLanguageCode["Thai"] = "th";
    ISOLanguageCode["Tibetan"] = "bo";
    ISOLanguageCode["Tigrinya"] = "ti";
    ISOLanguageCode["Tsonga"] = "ts";
    ISOLanguageCode["Turkish"] = "tr";
    ISOLanguageCode["Turkmen"] = "tk";
    ISOLanguageCode["Tuvalan"] = "tvl";
    ISOLanguageCode["Ukrainian"] = "uk";
    ISOLanguageCode["Urdu"] = "ur";
    ISOLanguageCode["Uzbek"] = "uz-uz";
    ISOLanguageCode["Vietnamese"] = "vi";
    ISOLanguageCode["Welsh"] = "cy";
    ISOLanguageCode["Xhosa"] = "xh";
    ISOLanguageCode["Yiddish"] = "yi";
    ISOLanguageCode["Zulu"] = "zu";
})(ISOLanguageCode = exports.ISOLanguageCode || (exports.ISOLanguageCode = {}));
var ISOCurrencyCode;
(function (ISOCurrencyCode) {
    ISOCurrencyCode["Afghani"] = "AFN";
    ISOCurrencyCode["AlgerianDinar"] = "DZD";
    ISOCurrencyCode["UnitedArabEmiratesDirham"] = "AED";
    ISOCurrencyCode["ArgentinePeso"] = "ARS";
    ISOCurrencyCode["AustralianDollar"] = "AUD";
    ISOCurrencyCode["AzerbaijaniManat"] = "AZN";
    ISOCurrencyCode["BahamianDollar"] = "BSD";
    ISOCurrencyCode["BahrainDinar"] = "BHD";
    ISOCurrencyCode["BarbadianDollar"] = "BBD";
    ISOCurrencyCode["BelarusRubel"] = "BYR";
    ISOCurrencyCode["BelizeDollar"] = "BZD";
    ISOCurrencyCode["BermudianDollar"] = "BMD";
    ISOCurrencyCode["Birr"] = "ETB";
    ISOCurrencyCode["Boliviano"] = "BOB";
    ISOCurrencyCode["BrazilianReal"] = "BRL";
    ISOCurrencyCode["BruneiDollar"] = "BND";
    ISOCurrencyCode["BulgarianLev"] = "BGN";
    ISOCurrencyCode["BurundiFranc"] = "BIF";
    ISOCurrencyCode["CambodianRiel"] = "KHR";
    ISOCurrencyCode["CanadianDollar"] = "CAD";
    ISOCurrencyCode["CapeVerdeanEscudo"] = "CVE";
    ISOCurrencyCode["CaymanDollar"] = "KYD";
    ISOCurrencyCode["CentralAfricanFranc"] = "XAF";
    ISOCurrencyCode["ChileanPeso"] = "CLP";
    ISOCurrencyCode["ColombianPeso"] = "COP";
    ISOCurrencyCode["Colon"] = "CRC";
    ISOCurrencyCode["ComorianFranc"] = "KMF";
    ISOCurrencyCode["CongoleseFranc"] = "CDF";
    ISOCurrencyCode["ConvertibleMark"] = "BAM";
    ISOCurrencyCode["CookDollar"] = "CKD";
    ISOCurrencyCode["CordobaOro"] = "NIO";
    ISOCurrencyCode["CubanPeso"] = "CUP";
    ISOCurrencyCode["CzechKrone"] = "CZK";
    ISOCurrencyCode["Dalasi"] = "GMD";
    ISOCurrencyCode["DanishKrone"] = "DKK";
    ISOCurrencyCode["DjiboutiFranc"] = "DJF";
    ISOCurrencyCode["Dobra"] = "STD";
    ISOCurrencyCode["DominicanPeso"] = "DOP";
    ISOCurrencyCode["Dong"] = "VND";
    ISOCurrencyCode["Dram"] = "AMD";
    ISOCurrencyCode["EastCaribbeanDollar"] = "XCD";
    ISOCurrencyCode["EgyptianPound"] = "EGP";
    ISOCurrencyCode["Euro"] = "EUR";
    ISOCurrencyCode["FalklandsPound"] = "FKP";
    ISOCurrencyCode["FaroeseKrona"] = "FOK";
    ISOCurrencyCode["FijianDollar"] = "FJD";
    ISOCurrencyCode["GeorgianLari"] = "GEL";
    ISOCurrencyCode["GhanaCedi"] = "GHS";
    ISOCurrencyCode["GibraltarPound"] = "GIP";
    ISOCurrencyCode["Gourde"] = "HTG";
    ISOCurrencyCode["Guarani"] = "PYG";
    ISOCurrencyCode["GuernseyPound"] = "GGP";
    ISOCurrencyCode["ArubanGuilder"] = "AWG";
    ISOCurrencyCode["GuineaFranc"] = "GNF";
    ISOCurrencyCode["GuyanaDollar"] = "GYD";
    ISOCurrencyCode["HongKongDollar"] = "HKD";
    ISOCurrencyCode["Hrywnja"] = "UAH";
    ISOCurrencyCode["HungarianForint"] = "HUF";
    ISOCurrencyCode["IcelandicKrone"] = "ISK";
    ISOCurrencyCode["IndianRupee"] = "INR";
    ISOCurrencyCode["IndonesianRupiah"] = "IDR";
    ISOCurrencyCode["IranianRial"] = "IRR";
    ISOCurrencyCode["IraqiDinar"] = "IQD";
    ISOCurrencyCode["IsraeliShekel"] = "ILS";
    ISOCurrencyCode["JamaicaDollar"] = "JMD";
    ISOCurrencyCode["JapaneseYen"] = "JPY";
    ISOCurrencyCode["YemeniRial"] = "YER";
    ISOCurrencyCode["JerseySterlingPound"] = "JEP";
    ISOCurrencyCode["JordanianDinar"] = "JOD";
    ISOCurrencyCode["KenianSchilling"] = "KES";
    ISOCurrencyCode["Kina"] = "PGK";
    ISOCurrencyCode["Kip"] = "LAK";
    ISOCurrencyCode["KiribatiDollar"] = "KID";
    ISOCurrencyCode["Kuna"] = "HRK";
    ISOCurrencyCode["KuwaitiDinar"] = "KWD";
    ISOCurrencyCode["Kwacha"] = "MWK";
    ISOCurrencyCode["Kwanza"] = "AOA";
    ISOCurrencyCode["Kyat"] = "MMK";
    ISOCurrencyCode["LebanesePound"] = "LBP";
    ISOCurrencyCode["Lek"] = "ALL";
    ISOCurrencyCode["Lempira"] = "HNL";
    ISOCurrencyCode["Leone"] = "SLL";
    ISOCurrencyCode["LesothoLoti"] = "LSL";
    ISOCurrencyCode["LiberianDollar"] = "LRD";
    ISOCurrencyCode["LibyanDinar"] = "LYD";
    ISOCurrencyCode["MacanesePataca"] = "MOP";
    ISOCurrencyCode["MacedonianDenar"] = "MKD";
    ISOCurrencyCode["MalagasyAriary"] = "MGA";
    ISOCurrencyCode["MaldivianRufiyaa"] = "MVR";
    ISOCurrencyCode["ManxPound"] = "IMP";
    ISOCurrencyCode["MauritianRupee"] = "MUR";
    ISOCurrencyCode["Metical"] = "MZN";
    ISOCurrencyCode["MexicanPeso"] = "MXN";
    ISOCurrencyCode["MoldavianLeu"] = "MDL";
    ISOCurrencyCode["MoroccanDirham"] = "MAD";
    ISOCurrencyCode["Naira"] = "NGN";
    ISOCurrencyCode["Nakfa"] = "ERN";
    ISOCurrencyCode["NamibianDollar"] = "NAD";
    ISOCurrencyCode["NepaleseRupee"] = "NPR";
    ISOCurrencyCode["NetherlandsAntilleanGuilder"] = "ANG";
    ISOCurrencyCode["NewTaiwanDollar"] = "TWD";
    ISOCurrencyCode["NewZealandDollar"] = "NZD";
    ISOCurrencyCode["Ngultrum"] = "BTN";
    ISOCurrencyCode["NorthKoreanWon"] = "KPW";
    ISOCurrencyCode["NorwegianKrone"] = "NOK";
    ISOCurrencyCode["OmaniRial"] = "OMR";
    ISOCurrencyCode["Ouguiya"] = "MRO";
    ISOCurrencyCode["Paanga"] = "TOP";
    ISOCurrencyCode["PacificFranc"] = "XPF";
    ISOCurrencyCode["PakistanianRupee"] = "PKR";
    ISOCurrencyCode["PanamanianBalboa"] = "PAB";
    ISOCurrencyCode["PhilippinePeso"] = "PHP";
    ISOCurrencyCode["Pula"] = "BWP";
    ISOCurrencyCode["QatariRial"] = "QAR";
    ISOCurrencyCode["Quetzal"] = "GTQ";
    ISOCurrencyCode["RenminbiYuan"] = "CNY";
    ISOCurrencyCode["Ringgit"] = "MYR";
    ISOCurrencyCode["RomanianLeu"] = "RON";
    ISOCurrencyCode["RussianRubel"] = "RUB";
    ISOCurrencyCode["RwandanFranc"] = "RWF";
    ISOCurrencyCode["SaintHelenaPound"] = "SHP";
    ISOCurrencyCode["SalomonDollar"] = "SBD";
    ISOCurrencyCode["SaudiRial"] = "SAR";
    ISOCurrencyCode["SerbianDinar"] = "RSD";
    ISOCurrencyCode["SeychellesRupee"] = "SCR";
    ISOCurrencyCode["SingaporeDollar"] = "SGD";
    ISOCurrencyCode["Sol"] = "PEN";
    ISOCurrencyCode["Som"] = "KGS";
    ISOCurrencyCode["SomalianShilling"] = "SOS";
    ISOCurrencyCode["Somoni"] = "TJS";
    ISOCurrencyCode["SouthAfricanRand"] = "ZAR";
    ISOCurrencyCode["SouthKoreanWon"] = "KRW";
    ISOCurrencyCode["SouthSudanesePound"] = "SSP";
    ISOCurrencyCode["SriLankaRupee"] = "LKR";
    ISOCurrencyCode["SterlingPound"] = "GBP";
    ISOCurrencyCode["SudanesePound"] = "SDG";
    ISOCurrencyCode["SurinameseDollar"] = "SRD";
    ISOCurrencyCode["SwaziLilangeni"] = "SZL";
    ISOCurrencyCode["SwedishKrone"] = "SEK";
    ISOCurrencyCode["SwissFranc"] = "CHF";
    ISOCurrencyCode["SyrianPound"] = "SYP";
    ISOCurrencyCode["Taka"] = "BDT";
    ISOCurrencyCode["Tala"] = "WST";
    ISOCurrencyCode["TansanianShilling"] = "TZS";
    ISOCurrencyCode["Tenge"] = "KZT";
    ISOCurrencyCode["ThaiBaht"] = "THB";
    ISOCurrencyCode["TrinidadandTobagoDollar"] = "TTD";
    ISOCurrencyCode["Tugrik"] = "MNT";
    ISOCurrencyCode["TunesianDinar"] = "TND";
    ISOCurrencyCode["TurkishLira"] = "TRY";
    ISOCurrencyCode["TurkmenistaniManat"] = "TMT";
    ISOCurrencyCode["TuvaluanDollar"] = "TVD";
    ISOCurrencyCode["USDollar"] = "USD";
    ISOCurrencyCode["UgandanSchilling"] = "UGX";
    ISOCurrencyCode["UruguayPeso"] = "UYU";
    ISOCurrencyCode["UzbekistaniSoum"] = "UZS";
    ISOCurrencyCode["Vatu"] = "VUV";
    ISOCurrencyCode["VenezuelanBolivar"] = "VED";
    ISOCurrencyCode["WestAfricanFranc"] = "XOF";
    ISOCurrencyCode["ZambianKwacha"] = "ZMW";
    ISOCurrencyCode["ZimbabweDollar"] = "ZWL";
    ISOCurrencyCode["Zloty"] = "PLN";
})(ISOCurrencyCode = exports.ISOCurrencyCode || (exports.ISOCurrencyCode = {}));
var WorldRegion;
(function (WorldRegion) {
    WorldRegion["Asia"] = "Asia";
    WorldRegion["Europe"] = "Europe";
    WorldRegion["EuropeEastern"] = "Eastern Europe";
    WorldRegion["EuropeWestern"] = "Western Europe";
    WorldRegion["EuropeNorthern"] = "Northern Europe";
    WorldRegion["EuropeSouthern"] = "Southern Europe";
    WorldRegion["Africa"] = "Africa";
    WorldRegion["Oceania"] = "Oceania";
    WorldRegion["America"] = "America";
    WorldRegion["NorthAmerica"] = "North America";
    WorldRegion["SouthAmerica"] = "South America";
    WorldRegion["Australia"] = "Australia";
    WorldRegion["Antarctica"] = "Antarctica";
    WorldRegion["MiddleEast"] = "Middle East";
    WorldRegion["Caribbean"] = "Caribbean";
    WorldRegion["Scandinavia"] = "Scandinavia";
    WorldRegion["EuropeanUnion"] = "European Union";
    WorldRegion["MainlandUnitedKingdom"] = "Mainland United Kingdom";
})(WorldRegion = exports.WorldRegion || (exports.WorldRegion = {}));