import {
    WorldRegion,
    CountryInfo,
    ISOCountryCode,
    ISOCountryCode3,
    ISOLanguageCode,
    ISOCurrencyCode,
} from "./types";

export const countryInfo: CountryInfo[] = [
    {
        name: "Afghanistan",
        officialName: "The Islamic Republic of Afghanistan",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Afghanistan,
        alpha3: ISOCountryCode3.Afghanistan,
        dialCode: "+93",
        languages: [
            ISOLanguageCode.Pashto,
        ],
        domains: [
            ".af"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Afghani
    },
    {
        name: "Åland Islands",
        officialName: "Åland",
        region: [
            WorldRegion.Europe
        ],
        alpha2: ISOCountryCode.AlandIslands,
        alpha3: ISOCountryCode3.AlandIslands,
        dialCode: "+358 18",
        languages: [
            ISOLanguageCode.Swedish,
        ],
        domains: [
            ".ax"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Finland,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Albania",
        officialName: "The Republic of Albania",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        alpha2: ISOCountryCode.Albania,
        alpha3: ISOCountryCode3.Albania,
        dialCode: "+355",
        languages: [
            ISOLanguageCode.Albanian,
        ],
        domains: [
            ".al"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Lek
    },
    {
        name: "Algeria",
        officialName: "The People's Democratic Republic of Algeria",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Algeria,
        alpha3: ISOCountryCode3.Algeria,
        dialCode: "+213",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicAlgeria,
        ],
        domains: [
            ".dz"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.AlgerianDinar
    },
    {
        name: "American Samoa",
        officialName: "The Territory of American Samoa",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.AmericanSamoa,
        alpha3: ISOCountryCode3.AmericanSamoa,
        dialCode: "+1 684",
        languages: [
            ISOLanguageCode.Samoan,
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishUnitedStatesOfAmerica,
        ],
        domains: [
            ".as"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedStatesOfAmerica,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Andorra",
        officialName: "The Principality of Andorra",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
        ],
        alpha2: ISOCountryCode.Andorra,
        alpha3: ISOCountryCode3.Andorra,
        dialCode: "+376",
        languages: [
            ISOLanguageCode.Catalan,
        ],
        domains: [
            ".ad"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Angola",
        officialName: "The Republic of Angola",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Angola,
        alpha3: ISOCountryCode3.Angola,
        dialCode: "+244",
        languages: [
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".ao"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Kwanza
    },
    {
        name: "Anguilla",
        officialName: "Anguilla",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Anguilla,
        alpha3: ISOCountryCode3.Anguilla,
        dialCode: "+1 264",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".ai"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.EastCaribbeanDollar
    },
    {
        name: "Antarctica",
        officialName: "Antarctica",
        region: [
            WorldRegion.Antarctica
        ],
        alpha2: ISOCountryCode.Antarctica,
        alpha3: ISOCountryCode3.Antarctica,
        dialCode: "+672",
        languages: [],
        domains: [
            ".aq"
        ],
        isSovereign: false,
        currency: null
    },
    {
        name: "Antigua and Barbuda",
        officialName: "Antigua and Barbuda",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.AntiguaAndBarbuda,
        alpha3: ISOCountryCode3.AntiguaAndBarbuda,
        dialCode: "+1 268",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".ag"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.EastCaribbeanDollar
    },
    {
        name: "Argentina",
        officialName: "The Argentine Republic",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.Argentina,
        alpha3: ISOCountryCode3.Argentina,
        dialCode: "+54",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishArgentina,
        ],
        domains: [
            ".ar"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.ArgentinePeso
    },
    {
        name: "Armenia",
        officialName: "The Republic of Armenia",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Armenia,
        alpha3: ISOCountryCode3.Armenia,
        dialCode: "+374",
        languages: [
            ISOLanguageCode.Armenian,
        ],
        domains: [
            ".am"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Dram
    },
    {
        name: "Aruba",
        officialName: "Aruba",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Aruba,
        alpha3: ISOCountryCode3.Aruba,
        dialCode: "+297",
        languages: [
            ISOLanguageCode.Dutch,
            ISOLanguageCode.DutchNetherlands,
        ],
        domains: [
            ".aw"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Netherlands,
        currency: ISOCurrencyCode.ArubanGuilder
    },
    {
        name: "Australia",
        officialName: "The Commonwealth of Australia",
        region: [
            WorldRegion.Australia,
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Australia,
        alpha3: ISOCountryCode3.Australia,
        dialCode: "+61",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAustralia,
        ],
        domains: [
            ".au"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.AustralianDollar
    },
    {
        name: "Austria",
        officialName: "The Republic of Austria",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Austria,
        alpha3: ISOCountryCode3.Austria,
        dialCode: "+43",
        languages: [
            ISOLanguageCode.German,
            ISOLanguageCode.GermanAustria,
        ],
        domains: [
            ".at"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Azerbaijan",
        officialName: "The Republic of Azerbaijan",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Azerbaijan,
        alpha3: ISOCountryCode3.Azerbaijan,
        dialCode: "+994",
        languages: [
            ISOLanguageCode.Azeri,
        ],
        domains: [
            ".az"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.AzerbaijaniManat
    },
    {
        name: "Bahamas",
        officialName: "The Commonwealth of The Bahamas",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Bahamas,
        alpha3: ISOCountryCode3.Bahamas,
        dialCode: "+1 242",

        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".bs"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.BahamianDollar
    },
    {
        name: "Bahrain",
        officialName: "The Kingdom of Bahrain",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Bahrain,
        alpha3: ISOCountryCode3.Bahrain,
        dialCode: "+973",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicBahrain,
        ],
        domains: [
            ".bh"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.BahrainDinar
    },
    {
        name: "Bangladesh",
        officialName: "The People's Republic of Bangladesh",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Bangladesh,
        alpha3: ISOCountryCode3.Bangladesh,
        dialCode: "+880",
        languages: [
            ISOLanguageCode.Bengali,
        ],
        domains: [
            ".bd"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Taka
    },
    {
        name: "Barbados",
        officialName: "Barbados",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Barbados,
        alpha3: ISOCountryCode3.Barbados,
        dialCode: "+1 264",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".bb"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.BarbadianDollar
    },
    {
        name: "Belarus",
        officialName: "The Republic of Belarus",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        alpha2: ISOCountryCode.Belarus,
        alpha3: ISOCountryCode3.Belarus,
        dialCode: "+375",
        languages: [
            ISOLanguageCode.Belarusian,
            ISOLanguageCode.Russian,
        ],
        domains: [
            ".by"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.BelarusRubel
    },
    {
        name: "Belgium",
        officialName: "The Kingdom of Belgium",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Belgium,
        alpha3: ISOCountryCode3.Belgium,
        dialCode: "+32",
        languages: [
            ISOLanguageCode.Dutch,
            ISOLanguageCode.DutchBelgium,
            ISOLanguageCode.French,
            ISOLanguageCode.German,
        ],
        domains: [
            ".be"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Belize",
        officialName: "Belize",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        alpha2: ISOCountryCode.Belize,
        alpha3: ISOCountryCode3.Belize,
        dialCode: "+501",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishBelize,
        ],
        domains: [
            ".bz"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.BelizeDollar
    },
    {
        name: "Benin",
        officialName: "The Republic of Benin",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Benin,
        alpha3: ISOCountryCode3.Benin,
        dialCode: "+229",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".bj"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.WestAfricanFranc
    },
    {
        name: "Bermuda",
        officialName: "Bermuda",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        alpha2: ISOCountryCode.Bermuda,
        alpha3: ISOCountryCode3.Bermuda,
        dialCode: "+1 441",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".bm"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.BermudianDollar
    },
    {
        name: "Bhutan",
        officialName: "The Kingdom of Bhutan",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Bhutan,
        alpha3: ISOCountryCode3.Bhutan,
        dialCode: "+975",
        languages: [
            ISOLanguageCode.Dzongkha,
        ],
        domains: [
            ".bt"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Ngultrum
    },
    {
        name: "Bolivia",
        officialName: "The Plurinational State of Bolivia",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.Bolivia,
        alpha3: ISOCountryCode3.Bolivia,
        dialCode: "+591",

        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishBolivia,
            ISOLanguageCode.Guarani,
        ],
        domains: [
            ".bo"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Boliviano
    },
    {
        name: "Bonaire, Sint Eustatius, Saba",
        officialName: "Bonaire, Sint Eustatius and Saba",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.BonaireSintEustatiusSaba,
        alpha3: ISOCountryCode3.BonaireSintEustatiusSaba,
        dialCode: ["+599 7", "+599 3", "599 4"],
        languages: [
            ISOLanguageCode.Dutch,
            ISOLanguageCode.DutchNetherlands,
        ],
        domains: [
            ".bq",
            ".nl"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Netherlands,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Bosnia and Herzegovina",
        officialName: "Bosnia and Herzegovina",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        alpha2: ISOCountryCode.BosniaAndHerzegovina,
        alpha3: ISOCountryCode3.BosniaAndHerzegovina,
        dialCode: "+387",
        languages: [
            ISOLanguageCode.Bosnian,
            ISOLanguageCode.Croatian,
            ISOLanguageCode.Serbian,
        ],
        domains: [
            ".ba"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.ConvertibleMark
    },
    {
        name: "Botswana",
        officialName: "The Republic of Botswana",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Botswana,
        alpha3: ISOCountryCode3.Botswana,
        dialCode: "+267",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
        ],
        domains: [
            ".bw"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Pula
    },
    {
        name: "Bouvet Island",
        officialName: "Bouvet Island",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.BouvetIsland,
        alpha3: ISOCountryCode3.BouvetIsland,
        dialCode: "+47",
        languages: [
            ISOLanguageCode.Norwegian,
        ],
        domains: [
            ".no",
            ".bv"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Norway,
        currency: ISOCurrencyCode.NorwegianKrone
    },
    {
        name: "Brazil",
        officialName: "The Federative Republic of Brazil",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.Brazil,
        alpha3: ISOCountryCode3.Brazil,
        dialCode: "+55",
        languages: [
            ISOLanguageCode.Portuguese,
            ISOLanguageCode.PortugueseBrazil,
        ],
        domains: [
            ".br"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.BrazilianReal
    },
    {
        name: "British Indian Ocean Territory",
        officialName: "The British Indian Ocean Territory",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.BritishIndianOceanTerritory,
        alpha3: ISOCountryCode3.BritishIndianOceanTerritory,
        dialCode: "+246",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".io"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Brunei Darussalam",
        officialName: "The Nation of Brunei, the Abode of Peace",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.BruneiDarussalam,
        alpha3: ISOCountryCode3.BruneiDarussalam,
        dialCode: "+673",
        languages: [
            ISOLanguageCode.Malay,
            ISOLanguageCode.MalayBrunei,
            ISOLanguageCode.English,
        ],
        domains: [
            ".bn"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.BruneiDollar
    },
    {
        name: "Bulgaria",
        officialName: "The Republic of Bulgaria",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Bulgaria,
        alpha3: ISOCountryCode3.Bulgaria,
        dialCode: "+359",
        languages: [
            ISOLanguageCode.Bulgarian,
        ],
        domains: [
            ".bg"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.BulgarianLev
    },
    {
        name: "Burkina Faso",
        officialName: "Burkina Faso",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.BurkinaFaso,
        alpha3: ISOCountryCode3.BurkinaFaso,
        dialCode: "+226",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".bf"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.WestAfricanFranc
    },
    {
        name: "Burundi",
        officialName: "The Republic of Burundi",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Burundi,
        alpha3: ISOCountryCode3.Burundi,
        dialCode: "+257",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
        ],
        domains: [
            ".bi"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.BurundiFranc
    },
    {
        name: "Cambodia",
        officialName: "The Kingdom of Cambodia",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Cambodia,
        alpha3: ISOCountryCode3.Cambodia,
        dialCode: "+855",
        languages: [
            ISOLanguageCode.Khmer,
        ],
        domains: [
            ".kh"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CambodianRiel
    },
    {
        name: "Cameroon",
        officialName: "The Republic of Cameroon",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Cameroon,
        alpha3: ISOCountryCode3.Cameroon,
        dialCode: "+237",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
            ISOLanguageCode.French,
        ],
        domains: [
            ".cm"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CentralAfricanFranc
    },
    {
        name: "Canada",
        officialName: "Canada",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        alpha2: ISOCountryCode.Canada,
        alpha3: ISOCountryCode3.Canada,
        dialCode: "+1",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCanada,
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchCanada,
        ],
        domains: [
            ".ca"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CanadianDollar
    },
    {
        name: "Canary Islands",
        officialName: "Canary Islands",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.CanaryIslands,
        alpha3: null,
        dialCode: "+1",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishSpain,
        ],
        domains: [
            ".ca"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Spain,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Cape Verde",
        officialName: "The Republic of Cabo Verde",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.CapeVerde,
        alpha3: ISOCountryCode3.CapeVerde,
        dialCode: "+238",
        languages: [
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".cv"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CapeVerdeanEscudo
    },
    {
        name: "Catalonia",
        officialName: "Catalonia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Catalonia,
        alpha3: null,
        dialCode: ["+34 93", "+34 97"],
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishSpain,
            ISOLanguageCode.Catalan
        ],
        domains: [
            ".es"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Spain,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Cayman Islands",
        officialName: "The Cayman Islands",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.CaymanIslands,
        alpha3: ISOCountryCode3.CaymanIslands,
        dialCode: "+1 345",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".ky"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.CaymanDollar
    },
    {
        name: "Central African Republic",
        officialName: "The Central African Republic",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.CentralAfricanRepublic,
        alpha3: ISOCountryCode3.CentralAfricanRepublic,
        dialCode: "+236",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".cf"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CentralAfricanFranc
    },
    {
        name: "Chad",
        officialName: "The Republic of Chad",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Chad,
        alpha3: ISOCountryCode3.Chad,
        dialCode: "+235",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.French,
        ],
        domains: [
            ".td"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CentralAfricanFranc
    },
    {
        name: "Chile",
        officialName: "The Republic of Chile",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.Chile,
        alpha3: ISOCountryCode3.Chile,
        dialCode: "+56",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishChile,
        ],
        domains: [
            ".cl"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.ChileanPeso
    },
    {
        name: "China",
        officialName: "The People's Republic of China",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.China,
        alpha3: ISOCountryCode3.China,
        dialCode: "+86",
        languages: [
            ISOLanguageCode.Chinese,
            ISOLanguageCode.ChineseChina,
        ],
        domains: [
            ".cn"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.RenminbiYuan
    },
    {
        name: "Christmas Island",
        officialName: "The Territory of Christmas Island",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.ChristmasIsland,
        alpha3: ISOCountryCode3.ChristmasIsland,
        dialCode: "+61 89164",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAustralia,
            ISOLanguageCode.Chinese,
            ISOLanguageCode.Malay,
        ],
        domains: [
            ".cx"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Australia,
        currency: ISOCurrencyCode.AustralianDollar
    },
    {
        name: "Cocos (Keeling) Islands",
        officialName: "The Territory of Cocos (Keeling) Islands",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.CocosIslands,
        alpha3: ISOCountryCode3.CocosIslands,
        dialCode: "+61 89162",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAustralia,
            ISOLanguageCode.Malay,
        ],
        domains: [
            ".cc"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Australia,
        currency: ISOCurrencyCode.AustralianDollar
    },
    {
        name: "Colombia",
        officialName: "The Republic of Colombia",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.Colombia,
        alpha3: ISOCountryCode3.Colombia,
        dialCode: "+57",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishColombia,
        ],
        domains: [
            ".co"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.ColombianPeso
    },
    {
        name: "Comoros",
        officialName: "The Union of the Comoros",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Comoros,
        alpha3: ISOCountryCode3.Comoros,
        dialCode: "+269",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.French,
        ],
        domains: [
            ".km"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.ComorianFranc
    },
    {
        name: "Cook Islands",
        officialName: "The Cook Islands",
        region: [
            WorldRegion.Asia,
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.CookIslands,
        alpha3: ISOCountryCode3.CookIslands,
        dialCode: "+682",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.Maori,
        ],
        domains: [
            ".ck"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.NewZealand,
        currency: ISOCurrencyCode.NewZealandDollar
    },
    {
        name: "Costa Rica",
        officialName: "The Republic of Costa Rica",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.CostaRica,
        alpha3: ISOCountryCode3.CostaRica,
        dialCode: "+506",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishCostaRica,
        ],
        domains: [
            ".cr"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Colon
    },
    {
        name: "Croatia",
        officialName: "The Republic of Croatia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Croatia,
        alpha3: ISOCountryCode3.Croatia,
        dialCode: "+385",
        languages: [
            ISOLanguageCode.Croatian,
        ],
        domains: [
            ".hr"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Kuna
    },
    {
        name: "Cuba",
        officialName: "The Republic of Cuba",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Cuba,
        alpha3: ISOCountryCode3.Cuba,
        dialCode: "+53",
        languages: [
            ISOLanguageCode.Spanish,
        ],
        domains: [
            ".cu"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CubanPeso
    },
    {
        name: "Curaçao",
        officialName: "The Country of Curaçao",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Curacao,
        alpha3: ISOCountryCode3.Curacao,
        dialCode: "+599 9",
        languages: [
            ISOLanguageCode.Dutch,
            ISOLanguageCode.DutchNetherlands,
        ],
        domains: [
            ".cw"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Netherlands,
        currency: ISOCurrencyCode.NetherlandsAntilleanGuilder
    },
    {
        name: "Cyprus",
        officialName: "The Republic of Cyprus",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Cyprus,
        alpha3: ISOCountryCode3.Cyprus,
        dialCode: "+357",
        languages: [
            ISOLanguageCode.Greek,
            ISOLanguageCode.Turkish,
        ],
        domains: [
            ".cy"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Czechia",
        officialName: "The Czech Republic",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Czechia,
        alpha3: ISOCountryCode3.Czechia,
        dialCode: "+420",
        languages: [
            ISOLanguageCode.Czech,
            ISOLanguageCode.Slovak,
        ],
        domains: [
            ".cz"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CzechKrone
    },
    {
        name: "Democratic Republic of Congo",
        officialName: "The Democratic Republic of the Congo",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.DemocraticRepublicOfCongo,
        alpha3: ISOCountryCode3.DemocraticRepublicOfCongo,
        dialCode: "+243",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchRepublicOfCongo,
        ],
        domains: [
            ".cd"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CongoleseFranc
    },
    {
        name: "Denmark",
        officialName: "The Kingdom of Denmark",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Denmark,
        alpha3: ISOCountryCode3.Denmark,
        dialCode: "+45",
        languages: [
            ISOLanguageCode.Danish,
        ],
        domains: [
            ".dk"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.DanishKrone
    },
    {
        name: "Djibouti",
        officialName: "The Republic of Djibouti",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Djibouti,
        alpha3: ISOCountryCode3.Djibouti,
        dialCode: "+253",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.French,
        ],
        domains: [
            ".dj"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.DjiboutiFranc
    },
    {
        name: "Dominica",
        officialName: "The Commonwealth of Dominica",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Dominica,
        alpha3: ISOCountryCode3.Dominica,
        dialCode: "+1 767",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".dm"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.EastCaribbeanDollar
    },
    {
        name: "Dominican Republic",
        officialName: "The Dominican Republic",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.DominicanRepublic,
        alpha3: ISOCountryCode3.DominicanRepublic,
        dialCode: ["+1 809", "+1 829", "+1 849"],
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishDominicanRepublic,
        ],
        domains: [
            ".do"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.DominicanPeso
    },
    {
        name: "Ecuador",
        officialName: "The Republic of Ecuador",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.Ecuador,
        alpha3: ISOCountryCode3.Ecuador,
        dialCode: "+593",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishEcuador,
        ],
        domains: [
            ".ec"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Egypt",
        officialName: "The Arab Republic of Egypt",
        region: [
            WorldRegion.Africa,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Egypt,
        alpha3: ISOCountryCode3.Egypt,
        dialCode: "+20",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicEgypt,
        ],
        domains: [
            ".eg"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.EgyptianPound
    },
    {
        name: "El Salvador",
        officialName: "The Republic of El Salvador",
        region: [
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.ElSalvador,
        alpha3: ISOCountryCode3.ElSalvador,
        dialCode: "+503",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishElSalvador,
        ],
        domains: [
            ".sv"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "England",
        officialName: "England",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.MainlandUnitedKingdom
        ],
        alpha2: ISOCountryCode.England,
        alpha3: null,
        dialCode: "+44",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".gb",
            ".uk"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.SterlingPound
    },
    {
        name: "Equatorial Guinea",
        officialName: "The Republic of Equatorial Guinea",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.EquatorialGuinea,
        alpha3: ISOCountryCode3.EquatorialGuinea,
        dialCode: "+240",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.Portuguese,
            ISOLanguageCode.Spanish,
        ],
        domains: [
            ".gq"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CentralAfricanFranc
    },
    {
        name: "Eritrea",
        officialName: "The State of Eritrea",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Eritrea,
        alpha3: ISOCountryCode3.Eritrea,
        dialCode: "+291",
        languages: [
            ISOLanguageCode.Tigrinya
        ],
        domains: [
            ".er"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Nakfa
    },
    {
        name: "Estonia",
        officialName: "The Republic of Estonia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Estonia,
        alpha3: ISOCountryCode3.Estonia,
        dialCode: "+372",
        languages: [
            ISOLanguageCode.Estonian,
        ],
        domains: [
            ".ee"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Eswatini",
        officialName: "The Kingdom of Eswatini",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Eswatini,
        alpha3: ISOCountryCode3.Eswatini,
        dialCode: "+268",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
            ISOLanguageCode.Swazi,
        ],
        domains: [
            ".sz"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SwaziLilangeni
    },
    {
        name: "Ethiopia",
        officialName: "The Federal Democratic Republic of Ethiopia",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Ethiopia,
        alpha3: ISOCountryCode3.Ethiopia,
        dialCode: "+251",
        languages: [
            ISOLanguageCode.Amharic,
            ISOLanguageCode.Somali,
            ISOLanguageCode.Tigrinya,
        ],
        domains: [
            ".et"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Birr
    },
    {
        name: "European Union",
        officialName: "European Union",
        region: [
            WorldRegion.Europe,
        ],
        alpha2: ISOCountryCode.EuropeanUnion,
        alpha3: null,
        dialCode: null,
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.French,
            ISOLanguageCode.German,
        ],
        domains: [
            ".eu"
        ],
        isSovereign: false,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Falkland Islands",
        officialName: "The Falkland Islands",
        region: [
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.FalklandIslands,
        alpha3: ISOCountryCode3.FalklandIslands,
        dialCode: "+500",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".fk"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.FalklandsPound
    },
    {
        name: "Faroe Islands",
        officialName: "The Faroe Islands",
        region: [
            WorldRegion.Europe
        ],
        alpha2: ISOCountryCode.FaroeIslands,
        alpha3: ISOCountryCode3.FaroeIslands,
        dialCode: "+298",
        languages: [
            ISOLanguageCode.Faroese,
        ],
        domains: [
            ".fo"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Denmark,
        currency: ISOCurrencyCode.FaroeseKrona
    },
    {
        name: "Fiji",
        officialName: "The Republic of Fiji",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Fiji,
        alpha3: ISOCountryCode3.Fiji,
        dialCode: "+679",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.Hindi,
        ],
        domains: [
            ".fj"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.FijianDollar
    },
    {
        name: "Finland",
        officialName: "The Republic of Finland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.EuropeanUnion,
            WorldRegion.Scandinavia,
        ],
        alpha2: ISOCountryCode.Finland,
        alpha3: ISOCountryCode3.Finland,
        dialCode: "+358",
        languages: [
            ISOLanguageCode.Finnish,
            ISOLanguageCode.Swedish,
            ISOLanguageCode.SwedishFinland,
        ],
        domains: [
            ".fi"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "France",
        officialName: "The French Republic",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.France,
        alpha3: ISOCountryCode3.France,
        dialCode: "+33",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".fr"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "French Guiana",
        officialName: "Guyane",
        region: [
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.FrenchGuiana,
        alpha3: ISOCountryCode3.FrenchGuiana,
        dialCode: "+594",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".gf"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.France,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "French Polynesia",
        officialName: "French Polynesia",
        region: [
            WorldRegion.Asia,
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.FrenchPolynesia,
        alpha3: ISOCountryCode3.FrenchPolynesia,
        dialCode: "+689",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".pf"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.France,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "French Southern Territories",
        officialName: "The French Southern and Antarctic Lands",
        region: [
            WorldRegion.Antarctica
        ],
        alpha2: ISOCountryCode.FrenchSouthernTerritories,
        alpha3: ISOCountryCode3.FrenchSouthernTerritories,
        dialCode: "+262",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".tf"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.France,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Gabon",
        officialName: "The Gabonese Republic",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Gabon,
        alpha3: ISOCountryCode3.Gabon,
        dialCode: "+241",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".ga"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CentralAfricanFranc
    },
    {
        name: "Gambia",
        officialName: "The Republic of The Gambia",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Gambia,
        alpha3: ISOCountryCode3.Gambia,
        dialCode: "+220",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
        ],
        domains: [
            ".gm"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Dalasi
    },
    {
        name: "Georgia",
        officialName: "Georgia",
        region: [
            WorldRegion.Europe,
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Georgia,
        alpha3: ISOCountryCode3.Georgia,
        dialCode: "+995",
        languages: [
            ISOLanguageCode.Georgian,
        ],
        domains: [
            ".ge"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.GeorgianLari
    },
    {
        name: "Germany",
        officialName: "The Federal Republic of Germany",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Germany,
        alpha3: ISOCountryCode3.Germany,
        dialCode: "+49",
        languages: [
            ISOLanguageCode.German,
            ISOLanguageCode.GermanGermany,
        ],
        domains: [
            ".de"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Ghana",
        officialName: "The Republic of Ghana",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Ghana,
        alpha3: ISOCountryCode3.Ghana,
        dialCode: "+233",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
        ],
        domains: [
            ".gh"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.GhanaCedi
    },
    {
        name: "Gibraltar",
        officialName: "Gibraltar",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
        ],
        alpha2: ISOCountryCode.Gibraltar,
        alpha3: ISOCountryCode3.Gibraltar,
        dialCode: "+350",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".gi"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.GibraltarPound
    },
    {
        name: "Greece",
        officialName: "The Hellenic Republic",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Greece,
        alpha3: ISOCountryCode3.Greece,
        dialCode: "+30",
        languages: [
            ISOLanguageCode.Greek,
        ],
        domains: [
            ".gr"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Greenland",
        officialName: "Kalaallit Nunaat",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        alpha2: ISOCountryCode.Greenland,
        alpha3: ISOCountryCode3.Greenland,
        dialCode: "+299",
        languages: [
            ISOLanguageCode.Greenlandic,
        ],
        domains: [
            ".gl"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Denmark,
        currency: ISOCurrencyCode.DanishKrone
    },
    {
        name: "Grenada",
        officialName: "Grenada",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Grenada,
        alpha3: ISOCountryCode3.Grenada,
        dialCode: "+1 473",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".gd"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.EastCaribbeanDollar
    },
    {
        name: "Guadeloupe",
        officialName: "Guadeloupe",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Guadeloupe,
        alpha3: ISOCountryCode3.Guadeloupe,
        dialCode: "+590",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".gp"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.France,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Guam",
        officialName: "The Territory of Guam",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Guam,
        alpha3: ISOCountryCode3.Guam,
        dialCode: "+1 671",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishUnitedStatesOfAmerica,
        ],
        domains: [
            ".gu"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedStatesOfAmerica,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Guatemala",
        officialName: "The Republic of Guatemala",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        alpha2: ISOCountryCode.Guatemala,
        alpha3: ISOCountryCode3.Guatemala,
        dialCode: "+502",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishGuatemala,
        ],
        domains: [
            ".gt"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Quetzal
    },
    {
        name: "Guernsey",
        officialName: "The Bailiwick of Guernsey",
        region: [
            WorldRegion.Europe
        ],
        alpha2: ISOCountryCode.Guernsey,
        alpha3: ISOCountryCode3.Guernsey,
        dialCode: ["+44 1481", "+44 7781", "+44 7839", "+44 7911"],
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".gg"
        ],
        isSovereign: false,
        currency: ISOCurrencyCode.GuernseyPound
    },
    {
        name: "Guinea",
        officialName: "The Republic of Guinea",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Guinea,
        alpha3: ISOCountryCode3.Guinea,
        dialCode: "+224",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".gn"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.GuineaFranc
    },
    {
        name: "Guinea-Bissau",
        officialName: "The Republic of Guinea-Bissau",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.GuineaBissau,
        alpha3: ISOCountryCode3.GuineaBissau,
        dialCode: "+245",
        languages: [
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".gw"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.WestAfricanFranc
    },
    {
        name: "Guyana",
        officialName: "The Co-operative Republic of Guyana",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Guyana,
        alpha3: ISOCountryCode3.Guyana,
        dialCode: "+592",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".gy"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.GuyanaDollar
    },
    {
        name: "Haiti",
        officialName: "The Republic of Haiti",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Haiti,
        alpha3: ISOCountryCode3.Haiti,
        dialCode: "+509",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".ht"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Gourde
    },
    {
        name: "Heard Island and McDonald Islands",
        officialName: "The Territory of Heard Island and McDonald Islands",
        region: [
            WorldRegion.Antarctica
        ],
        alpha2: ISOCountryCode.HeardIslandAndMcdonaldIslands,
        alpha3: ISOCountryCode3.HeardIslandAndMcdonaldIslands,
        dialCode: "+0",
        languages: [],
        domains: [
            ".hm"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Australia,
        currency: ISOCurrencyCode.AustralianDollar
    },
    {
        name: "Honduras",
        officialName: "The Republic of Honduras",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        alpha2: ISOCountryCode.Honduras,
        alpha3: ISOCountryCode3.Honduras,
        dialCode: "+504",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishHonduras,
        ],
        domains: [
            ".hn"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Lempira
    },
    {
        name: "Hong Kong",
        officialName: "The Hong Kong Special Administrative Region of China",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.HongKong,
        alpha3: ISOCountryCode3.HongKong,
        dialCode: "+852",
        languages: [
            ISOLanguageCode.Chinese,
            ISOLanguageCode.ChineseHongKong,
        ],
        domains: [
            ".hk"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.China,
        currency: ISOCurrencyCode.HongKongDollar
    },
    {
        name: "Hungary",
        officialName: "Hungary",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Hungary,
        alpha3: ISOCountryCode3.Hungary,
        dialCode: "+36",
        languages: [
            ISOLanguageCode.Hungarian,
        ],
        domains: [
            ".hu"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.HungarianForint
    },
    {
        name: "Iceland",
        officialName: "Iceland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
        ],
        alpha2: ISOCountryCode.Iceland,
        alpha3: ISOCountryCode3.Iceland,
        dialCode: "+354",
        languages: [
            ISOLanguageCode.Icelandic,
        ],
        domains: [
            ".is"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.IcelandicKrone
    },
    {
        name: "India",
        officialName: "The Republic of India",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.India,
        alpha3: ISOCountryCode3.India,
        dialCode: "+91",
        languages: [
            ISOLanguageCode.Hindi,
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishIndia,
            ISOLanguageCode.Punjabi,
            ISOLanguageCode.Telugu,
            ISOLanguageCode.Assamese,
            ISOLanguageCode.Gujarati,
            ISOLanguageCode.Kannada,
            ISOLanguageCode.Malayalam,
            ISOLanguageCode.Marathi,
            ISOLanguageCode.Oriya,
            ISOLanguageCode.Sindhi,
        ],
        domains: [
            ".in"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.IndianRupee
    },
    {
        name: "Indonesia",
        officialName: "The Republic of Indonesia",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Indonesia,
        alpha3: ISOCountryCode3.Indonesia,
        dialCode: "+62",
        languages: [
            ISOLanguageCode.Indonesian,
        ],
        domains: [
            ".id"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.IndonesianRupiah
    },
    {
        name: "Iran",
        officialName: "The Islamic Republic of Iran",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Iran,
        alpha3: ISOCountryCode3.Iran,
        dialCode: "+98",
        languages: [
            ISOLanguageCode.Persian,
        ],
        domains: [
            ".ir"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.IranianRial
    },
    {
        name: "Iraq",
        officialName: "The Republic of Iraq",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Iraq,
        alpha3: ISOCountryCode3.Iraq,
        dialCode: "+964",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicIraq,
        ],
        domains: [
            ".iq"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.IraqiDinar
    },
    {
        name: "Ireland",
        officialName: "Ireland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Ireland,
        alpha3: ISOCountryCode3.Ireland,
        dialCode: "+353",
        languages: [
            ISOLanguageCode.Irish,
            ISOLanguageCode.GaelicIreland,
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishIreland,
        ],
        domains: [
            ".ie"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Isle of Man",
        officialName: "The Isle of Man",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
        ],
        alpha2: ISOCountryCode.IsleOfMan,
        alpha3: ISOCountryCode3.IsleOfMan,
        dialCode: ["+44 1624", "+44 7524", "+44 7624", "+44 7924"],
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".im"
        ],
        isSovereign: false,
        currency: ISOCurrencyCode.ManxPound
    },
    {
        name: "Israel",
        officialName: "The State of Israel",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Israel,
        alpha3: ISOCountryCode3.Israel,
        dialCode: "+972",
        languages: [
            ISOLanguageCode.Hebrew,
        ],
        domains: [
            ".il"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.IsraeliShekel
    },
    {
        name: "Italy",
        officialName: "The Italian Republic",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Italy,
        alpha3: ISOCountryCode3.Italy,
        dialCode: "+39",
        languages: [
            ISOLanguageCode.Italian,
            ISOLanguageCode.ItalianItaly,
        ],
        domains: [
            ".it"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Ivory Coast",
        officialName: "The Republic of Côte d'Ivoire",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.IvoryCoast,
        alpha3: ISOCountryCode3.IvoryCoast,
        dialCode: "+225",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchIvoryCoast,
        ],
        domains: [
            ".ci"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.WestAfricanFranc
    },
    {
        name: "Jamaica",
        officialName: "Jamaica",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Jamaica,
        alpha3: ISOCountryCode3.Jamaica,
        dialCode: ["+1 658", "+1 876"],
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishJamaica,
        ],
        domains: [
            ".jm"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.JamaicaDollar
    },
    {
        name: "Japan",
        officialName: "Japan",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Japan,
        alpha3: ISOCountryCode3.Japan,
        dialCode: "+81",
        languages: [
            ISOLanguageCode.Japanese,
        ],
        domains: [
            ".jp"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.JapaneseYen
    },
    {
        name: "Jersey",
        officialName: "The Bailiwick of Jersey",
        region: [
            WorldRegion.Europe
        ],
        alpha2: ISOCountryCode.Jersey,
        alpha3: ISOCountryCode3.Jersey,
        dialCode: "+44 1534",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".je"
        ],
        isSovereign: false,
        currency: ISOCurrencyCode.JerseySterlingPound
    },
    {
        name: "Jordan",
        officialName: "The Hashemite Kingdom of Jordan",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Jordan,
        alpha3: ISOCountryCode3.Jordan,
        dialCode: "+962",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicJordan,
        ],
        domains: [
            ".jo"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.JordanianDinar
    },
    {
        name: "Kazakhstan",
        officialName: "The Republic of Kazakhstan",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Kazakhstan,
        alpha3: ISOCountryCode3.Kazakhstan,
        dialCode: ["+7 6", "+7 7"],
        languages: [
            ISOLanguageCode.Kazakh,
            ISOLanguageCode.Russian,
        ],
        domains: [
            ".kz"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Tenge
    },
    {
        name: "Kenya",
        officialName: "The Republic of Kenya",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Kenya,
        alpha3: ISOCountryCode3.Kenya,
        dialCode: "+254",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
            ISOLanguageCode.Swahili,
        ],
        domains: [
            ".ke"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.KenianSchilling
    },
    {
        name: "Kiribati",
        officialName: "The Republic of Kiribati",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Kiribati,
        alpha3: ISOCountryCode3.Kiribati,
        dialCode: "+686",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".ki"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.KiribatiDollar
    },
    {
        name: "Kosovo",
        officialName: "Republic of Kosovo",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        alpha2: ISOCountryCode.Kosovo,
        alpha3: ISOCountryCode3.Kosovo,
        dialCode: "+383",
        languages: [
            ISOLanguageCode.Albanian,
            ISOLanguageCode.Serbian,
        ],
        domains: [
            ".xk"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Kuwait",
        officialName: "The State of Kuwait",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Kuwait,
        alpha3: ISOCountryCode3.Kuwait,
        dialCode: "+965",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicKuwait,
        ],
        domains: [
            ".kw"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.KuwaitiDinar
    },
    {
        name: "Kyrgyzstan",
        officialName: "The Kyrgyz Republic",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Kyrgyzstan,
        alpha3: ISOCountryCode3.Kyrgyzstan,
        dialCode: "+996",
        languages: [
            ISOLanguageCode.Kyrgyz,
            ISOLanguageCode.Russian,
        ],
        domains: [
            ".kg"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Som
    },
    {
        name: "Laos",
        officialName: "The Lao People's Democratic Republic",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Laos,
        alpha3: ISOCountryCode3.Laos,
        dialCode: "+859",
        languages: [
            ISOLanguageCode.Lao,
        ],
        domains: [
            ".la"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Kip
    },
    {
        name: "Latvia",
        officialName: "The Republic of Latvia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Latvia,
        alpha3: ISOCountryCode3.Latvia,
        dialCode: "+371",
        languages: [
            ISOLanguageCode.Latvian,
        ],
        domains: [
            ".lv"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Lebanon",
        officialName: "The Lebanese Republic",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Lebanon,
        alpha3: ISOCountryCode3.Lebanon,
        dialCode: "+961",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicLebanon,
        ],
        domains: [
            ".lb"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.LebanesePound
    },
    {
        name: "Lesotho",
        officialName: "The Kingdom of Lesotho",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Lesotho,
        alpha3: ISOCountryCode3.Lesotho,
        dialCode: "+266",
        languages: [
            ISOLanguageCode.Sotho,
            ISOLanguageCode.English,
        ],
        domains: [
            ".ls"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.LesothoLoti
    },
    {
        name: "Liberia",
        officialName: "The Republic of Liberia",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Liberia,
        alpha3: ISOCountryCode3.Liberia,
        dialCode: "+231",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".lr"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.LiberianDollar
    },
    {
        name: "Libya",
        officialName: "The State of Libya",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Libya,
        alpha3: ISOCountryCode3.Libya,
        dialCode: "+218",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicLibya,
        ],
        domains: [
            ".ly"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.LibyanDinar
    },
    {
        name: "Liechtenstein",
        officialName: "The Principality of Liechtenstein",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
        ],
        alpha2: ISOCountryCode.Liechtenstein,
        alpha3: ISOCountryCode3.Liechtenstein,
        dialCode: "+423",
        languages: [
            ISOLanguageCode.German,
            ISOLanguageCode.GermanLiechtenstein,
        ],
        domains: [
            ".li"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SwissFranc
    },
    {
        name: "Lithuania",
        officialName: "The Republic of Lithuania",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
        ],
        alpha2: ISOCountryCode.Lithuania,
        alpha3: ISOCountryCode3.Lithuania,
        dialCode: "+370",
        languages: [
            ISOLanguageCode.Lithuanian,
        ],
        domains: [
            ".lt"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Luxembourg",
        officialName: "The Grand Duchy of Luxembourg",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Luxembourg,
        alpha3: ISOCountryCode3.Luxembourg,
        dialCode: "+352",
        languages: [
            ISOLanguageCode.Luxembourgish,
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchLuxembourg,
            ISOLanguageCode.German,
            ISOLanguageCode.GermanLuxembourg,
        ],
        domains: [
            ".lu"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Macau",
        officialName: "The Macao Special Administrative Region of China",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Macau,
        alpha3: ISOCountryCode3.Macau,
        dialCode: "+853",
        languages: [
            ISOLanguageCode.Chinese,
            ISOLanguageCode.ChineseMacau,
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".mo"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.China,
        currency: ISOCurrencyCode.MacanesePataca
    },
    {
        name: "Madagascar",
        officialName: "The Republic of Madagascar",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Madagascar,
        alpha3: ISOCountryCode3.Madagascar,
        dialCode: "+261",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".mg"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.MalagasyAriary
    },
    {
        name: "Malawi",
        officialName: "The Republic of Malawi",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Malawi,
        alpha3: ISOCountryCode3.Malawi,
        dialCode: "+265",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".mw"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Kwacha
    },
    {
        name: "Malaysia",
        officialName: "Malaysia",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Malaysia,
        alpha3: ISOCountryCode3.Malaysia,
        dialCode: "+60",
        languages: [
            ISOLanguageCode.Malay,
            ISOLanguageCode.MalayMalaysia,
        ],
        domains: [
            ".my"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Ringgit
    },
    {
        name: "Maldives",
        officialName: "The Republic of Maldives",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Maldives,
        alpha3: ISOCountryCode3.Maldives,
        dialCode: "+960",
        languages: [
            ISOLanguageCode.Maldivian,
        ],
        domains: [
            ".mv"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.MaldivianRufiyaa
    },
    {
        name: "Mali",
        officialName: "The Republic of Mali",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Mali,
        alpha3: ISOCountryCode3.Mali,
        dialCode: "+223",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchMali,
        ],
        domains: [
            ".ml"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.WestAfricanFranc
    },
    {
        name: "Malta",
        officialName: "The Republic of Malta",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Malta,
        alpha3: ISOCountryCode3.Malta,
        dialCode: "+356",
        languages: [
            ISOLanguageCode.Maltese,
            ISOLanguageCode.English,
        ],
        domains: [
            ".mt"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Marshall Islands",
        officialName: "The Republic of the Marshall Islands",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.MarshallIslands,
        alpha3: ISOCountryCode3.MarshallIslands,
        dialCode: "+692",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".mh"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Martinique",
        officialName: "Martinique",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Martinique,
        alpha3: ISOCountryCode3.Martinique,
        dialCode: "+596",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".mq"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.France,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Mauritania",
        officialName: "The Islamic Republic of Mauritania",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Mauritania,
        alpha3: ISOCountryCode3.Mauritania,
        dialCode: "+222",
        languages: [
            ISOLanguageCode.Arabic,
        ],
        domains: [
            ".mr"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Ouguiya
    },
    {
        name: "Mauritius",
        officialName: "The Republic of Mauritius",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Mauritius,
        alpha3: ISOCountryCode3.Mauritius,
        dialCode: "+230",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".mu"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.MauritianRupee
    },
    {
        name: "Mayotte",
        officialName: "The Department of Mayotte",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Mayotte,
        alpha3: ISOCountryCode3.Mayotte,
        dialCode: ["+262 269", "+262 639"],
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".yt"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.France,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Mexico",
        officialName: "The United Mexican States",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        alpha2: ISOCountryCode.Mexico,
        alpha3: ISOCountryCode3.Mexico,
        dialCode: "+52",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishMexico,
        ],
        domains: [
            ".mx"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.MexicanPeso
    },
    {
        name: "Micronesia",
        officialName: "The Federated States of Micronesia",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Micronesia,
        alpha3: ISOCountryCode3.Micronesia,
        dialCode: "+691",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".fm"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Moldova",
        officialName: "The Republic of Moldova",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        alpha2: ISOCountryCode.Moldova,
        alpha3: ISOCountryCode3.Moldova,
        dialCode: "+373",
        languages: [
            ISOLanguageCode.Romanian,
            ISOLanguageCode.RomanianMoldova,
            ISOLanguageCode.Russian,
            ISOLanguageCode.RussianMoldova,
        ],
        domains: [
            ".md"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.MoldavianLeu
    },
    {
        name: "Monaco",
        officialName: "The Principality of Monaco",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
        ],
        alpha2: ISOCountryCode.Monaco,
        alpha3: ISOCountryCode3.Monaco,
        dialCode: "+377",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchMonaco,
        ],
        domains: [
            ".mc"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Mongolia",
        officialName: "Mongolia",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Mongolia,
        alpha3: ISOCountryCode3.Mongolia,
        dialCode: "+976",
        languages: [
            ISOLanguageCode.Mongolian,
        ],
        domains: [
            ".mn"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Tugrik
    },
    {
        name: "Montenegro",
        officialName: "Montenegro",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
        ],
        alpha2: ISOCountryCode.Montenegro,
        alpha3: ISOCountryCode3.Montenegro,
        dialCode: "+382",
        languages: [
            ISOLanguageCode.Serbian,
        ],
        domains: [
            ".me"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Montserrat",
        officialName: "Montserrat",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.Montserrat,
        alpha3: ISOCountryCode3.Montserrat,
        dialCode: "+1 664",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".ms"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.EastCaribbeanDollar
    },
    {
        name: "Morocco",
        officialName: "The Kingdom of Morocco",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Morocco,
        alpha3: ISOCountryCode3.Morocco,
        dialCode: "+212",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicMorocco,
        ],
        domains: [
            ".ma"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.MoroccanDirham
    },
    {
        name: "Mozambique",
        officialName: "The Republic of Mozambique",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Mozambique,
        alpha3: ISOCountryCode3.Mozambique,
        dialCode: "+258",
        languages: [
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".mz"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Metical
    },
    {
        name: "Myanmar",
        officialName: "The Republic of the Union of Myanmar",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Myanmar,
        alpha3: ISOCountryCode3.Myanmar,
        dialCode: "+95",
        languages: [
            ISOLanguageCode.Burmese,
        ],
        domains: [
            ".mm"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Kyat
    },
    {
        name: "Namibia",
        officialName: "The Republic of Namibia",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Namibia,
        alpha3: ISOCountryCode3.Namibia,
        dialCode: "+264",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".na"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.NamibianDollar
    },
    {
        name: "Nauru",
        officialName: "The Republic of Nauru",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Nauru,
        alpha3: ISOCountryCode3.Nauru,
        dialCode: "+674",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".nr"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.AustralianDollar
    },
    {
        name: "Nepal",
        officialName: "The Federal Democratic Republic of Nepal",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Nepal,
        alpha3: ISOCountryCode3.Nepal,
        dialCode: "+977",
        languages: [
            ISOLanguageCode.Nepali,
        ],
        domains: [
            ".np"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.NepaleseRupee
    },
    {
        name: "Netherlands",
        officialName: "The Kingdom of the Netherlands",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Netherlands,
        alpha3: ISOCountryCode3.Netherlands,
        dialCode: "+31",
        languages: [
            ISOLanguageCode.Dutch,
            ISOLanguageCode.DutchNetherlands,
        ],
        domains: [
            ".nl"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "New Caledonia",
        officialName: "New Caledonia",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.NewCaledonia,
        alpha3: ISOCountryCode3.NewCaledonia,
        dialCode: "+687",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".nc"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.France,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "New Zealand",
        officialName: "New Zealand",
        region: [
            WorldRegion.Australia,
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.NewZealand,
        alpha3: ISOCountryCode3.NewZealand,
        dialCode: "+64",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishNewZealand,
            ISOLanguageCode.Maori,
        ],
        domains: [
            ".nz"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.NewZealandDollar
    },
    {
        name: "Nicaragua",
        officialName: "The Republic of Nicaragua",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        alpha2: ISOCountryCode.Nicaragua,
        alpha3: ISOCountryCode3.Nicaragua,
        dialCode: "+505",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishNicaragua,
        ],
        domains: [
            ".ni"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CordobaOro
    },
    {
        name: "Niger",
        officialName: "The Republic of the Niger",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Niger,
        alpha3: ISOCountryCode3.Niger,
        dialCode: "+227",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".ne"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.WestAfricanFranc
    },
    {
        name: "Nigeria",
        officialName: "The Federal Republic of Nigeria",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Nigeria,
        alpha3: ISOCountryCode3.Nigeria,
        dialCode: "+234",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.Igbo,
        ],
        domains: [
            ".ng"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Naira
    },
    {
        name: "Niue",
        officialName: "Niue",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Niue,
        alpha3: ISOCountryCode3.Niue,
        dialCode: "+683",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishNewZealand,
        ],
        domains: [
            ".nu"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.NewZealand,
        currency: ISOCurrencyCode.NewZealandDollar
    },
    {
        name: "Norfolk Island",
        officialName: "The Territory of Norfolk Island",
        region: [
            WorldRegion.Australia
        ],
        alpha2: ISOCountryCode.NorfolkIsland,
        alpha3: ISOCountryCode3.NorfolkIsland,
        dialCode: "+672 3",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.English,
        ],
        domains: [
            ".nf"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Australia,
        currency: ISOCurrencyCode.AustralianDollar
    },
    {
        name: "North Korea",
        officialName: "The Democratic People's Republic of Korea",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.NorthKorea,
        alpha3: ISOCountryCode3.NorthKorea,
        dialCode: "+850",
        languages: [
            ISOLanguageCode.Korean,
        ],
        domains: [
            ".kp"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.NorthKoreanWon
    },
    {
        name: "North Macedonia",
        officialName: "The Republic of North Macedonia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
        ],
        alpha2: ISOCountryCode.NorthMacedonia,
        alpha3: ISOCountryCode3.NorthMacedonia,
        dialCode: "+389",
        languages: [
            ISOLanguageCode.Macedonian,
            ISOLanguageCode.Albanian,
        ],
        domains: [
            ".mk"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.MacedonianDenar
    },
    {
        name: "Northern Ireland",
        officialName: "Northern Ireland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.MainlandUnitedKingdom
        ],
        alpha2: ISOCountryCode.NorthernIreland,
        alpha3: null,
        dialCode: "+44",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
            ISOLanguageCode.Irish,
        ],
        domains: [
            ".gb",
            ".uk"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.SterlingPound
    },
    {
        name: "Northern Mariana Islands",
        officialName: "The Commonwealth of the Northern Mariana Islands",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.NorthernMarianaIslands,
        alpha3: ISOCountryCode3.NorthernMarianaIslands,
        dialCode: "+1 670",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishUnitedStatesOfAmerica,
        ],
        domains: [
            ".mp"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedStatesOfAmerica,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Norway",
        officialName: "The Kingdom of Norway",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.Scandinavia,
        ],
        alpha2: ISOCountryCode.Norway,
        alpha3: ISOCountryCode3.Norway,
        dialCode: "+47",
        languages: [
            ISOLanguageCode.Norwegian,
        ],
        domains: [
            ".no"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.NorwegianKrone
    },
    {
        name: "Oman",
        officialName: "The Sultanate of Oman",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Oman,
        alpha3: ISOCountryCode3.Oman,
        dialCode: "+968",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicOman,
        ],
        domains: [
            ".om"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.OmaniRial
    },
    {
        name: "Pakistan",
        officialName: "The Islamic Republic of Pakistan",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Pakistan,
        alpha3: ISOCountryCode3.Pakistan,
        dialCode: "+92",
        languages: [
            ISOLanguageCode.Urdu,
            ISOLanguageCode.English,
            ISOLanguageCode.Punjabi,
        ],
        domains: [
            ".pk"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.PakistanianRupee
    },
    {
        name: "Palau",
        officialName: "The Republic of Palau",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Palau,
        alpha3: ISOCountryCode3.Palau,
        dialCode: "+680",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".pw"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Palestine",
        officialName: "The State of Palestine",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Palestine,
        alpha3: ISOCountryCode3.Palestine,
        dialCode: "+970",
        languages: [
            ISOLanguageCode.Arabic,
        ],
        domains: [
            ".ps"
        ],
        isSovereign: false,
        currency: ISOCurrencyCode.EgyptianPound
    },
    {
        name: "Panama",
        officialName: "The Republic of Panamá",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        alpha2: ISOCountryCode.Panama,
        alpha3: ISOCountryCode3.Panama,
        dialCode: "+507",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishPanama,
        ],
        domains: [
            ".pa"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.PanamanianBalboa
    },
    {
        name: "Papua New Guinea",
        officialName: "The Independent State of Papua New Guinea",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.PapuaNewGuinea,
        alpha3: ISOCountryCode3.PapuaNewGuinea,
        dialCode: "+675",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".pg"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Kina
    },
    {
        name: "Paraguay",
        officialName: "The Republic of Paraguay",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.Paraguay,
        alpha3: ISOCountryCode3.Paraguay,
        dialCode: "+595",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.Guarani,
        ],
        domains: [
            ".py"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Guarani
    },
    {
        name: "Peru",
        officialName: "The Republic of Perú",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.Peru,
        alpha3: ISOCountryCode3.Peru,
        dialCode: "+51",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishPeru,
        ],
        domains: [
            ".pe"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Sol
    },
    {
        name: "Philippines",
        officialName: "The Republic of the Philippines",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Philippines,
        alpha3: ISOCountryCode3.Philippines,
        dialCode: "+63",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishPhilippines,
        ],
        domains: [
            ".ph"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.PhilippinePeso
    },
    {
        name: "Pitcairn",
        officialName: "The Pitcairn, Henderson, Ducie and Oeno Islands",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Pitcairn,
        alpha3: ISOCountryCode3.Pitcairn,
        dialCode: "+64",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".pn"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.NewZealandDollar
    },
    {
        name: "Poland",
        officialName: "The Republic of Poland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Poland,
        alpha3: ISOCountryCode3.Poland,
        dialCode: "+48",
        languages: [
            ISOLanguageCode.Polish,
        ],
        domains: [
            ".pl"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Zloty
    },
    {
        name: "Portugal",
        officialName: "The Portuguese Republic",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Portugal,
        alpha3: ISOCountryCode3.Portugal,
        dialCode: "+351",
        languages: [
            ISOLanguageCode.Portuguese,
            ISOLanguageCode.PortuguesePortugal,
        ],
        domains: [
            ".pt"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Puerto Rico",
        officialName: "The Commonwealth of Puerto Rico",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.PuertoRico,
        alpha3: ISOCountryCode3.PuertoRico,
        dialCode: ["+1 787", "+1 939"],
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishPuertoRico,
        ],
        domains: [
            ".pr"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedStatesOfAmerica,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Qatar",
        officialName: "The State of Qatar",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Qatar,
        alpha3: ISOCountryCode3.Qatar,
        dialCode: "+974",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicQatar,
        ],
        domains: [
            ".qa"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.QatariRial
    },
    {
        name: "Republic of Congo",
        officialName: "The Republic of the Congo",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.RepublicOfCongo,
        alpha3: ISOCountryCode3.RepublicOfCongo,
        dialCode: "+242",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchRepublicOfCongo,
        ],
        domains: [
            ".cg"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.CentralAfricanFranc
    },
    {
        name: "Romania",
        officialName: "Romania",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Romania,
        alpha3: ISOCountryCode3.Romania,
        dialCode: "+40",
        languages: [
            ISOLanguageCode.Romanian,
        ],
        domains: [
            ".ro"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.RomanianLeu
    },
    {
        name: "Russian Federation",
        officialName: "The Russian Federation",
        region: [
            WorldRegion.Europe,
            WorldRegion.Asia,
            WorldRegion.EuropeEastern,
        ],
        alpha2: ISOCountryCode.RussianFederation,
        alpha3: ISOCountryCode3.RussianFederation,
        dialCode: "+7",
        languages: [
            ISOLanguageCode.Russian,
        ],
        domains: [
            ".ru"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.RussianRubel
    },
    {
        name: "Rwanda",
        officialName: "The Republic of Rwanda",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Rwanda,
        alpha3: ISOCountryCode3.Rwanda,
        dialCode: "+250",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.French,
            ISOLanguageCode.Swahili,
        ],
        domains: [
            ".rw"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.RwandanFranc
    },
    {
        name: "Réunion",
        officialName: "Réunion",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Reunion,
        alpha3: ISOCountryCode3.Reunion,
        dialCode: "+262",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".re"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.France,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Saint Barthélemy",
        officialName: "The Collectivity of Saint-Barthélemy",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.SaintBarthelemy,
        alpha3: ISOCountryCode3.SaintBarthelemy,
        dialCode: "+590",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".bl"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.France,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Saint Helena, Ascension Island, Tristan da Cunha",
        officialName: "Saint Helena, Ascension and Tristan da Cunha",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.SaintHelenaAscensionIslandTristanDaCunha,
        alpha3: ISOCountryCode3.SaintHelenaAscensionIslandTristanDaCunha,
        dialCode: "+290",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".sh"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.SaintHelenaPound
    },
    {
        name: "Saint Kitts and Nevis",
        officialName: "Saint Kitts and Nevis",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.SaintKittsAndNevis,
        alpha3: ISOCountryCode3.SaintKittsAndNevis,
        dialCode: "+1 869",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".kn"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.EastCaribbeanDollar
    },
    {
        name: "Saint Lucia",
        officialName: "Saint Lucia",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.SaintLucia,
        alpha3: ISOCountryCode3.SaintLucia,
        dialCode: "+1 758",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".lc"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.EastCaribbeanDollar
    },
    {
        name: "Saint Martin",
        officialName: "The Collectivity of Saint-Martin",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.SaintMartin,
        alpha3: ISOCountryCode3.SaintMartin,
        dialCode: "+590",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".mf"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.France,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Saint Pierre and Miquelon",
        officialName: "The Overseas Collectivity of Saint-Pierre and Miquelon",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        alpha2: ISOCountryCode.SaintPierreAndMiquelon,
        alpha3: ISOCountryCode3.SaintPierreAndMiquelon,
        dialCode: "+508",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".pm"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.France,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Saint Vincent and the Grenadines",
        officialName: "Saint Vincent and the Grenadines",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.SaintVincentAndTheGrenadines,
        alpha3: ISOCountryCode3.SaintVincentAndTheGrenadines,
        dialCode: "+1 784",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".vc"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.EastCaribbeanDollar
    },
    {
        name: "Samoa",
        officialName: "The Independent State of Samoa",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Samoa,
        alpha3: ISOCountryCode3.Samoa,
        dialCode: "+685",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.Samoan,
        ],
        domains: [
            ".ws"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Tala
    },
    {
        name: "San Marino",
        officialName: "The Republic of San Marino",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
        ],
        alpha2: ISOCountryCode.SanMarino,
        alpha3: ISOCountryCode3.SanMarino,
        dialCode: "+378",
        languages: [
            ISOLanguageCode.Italian,
        ],
        domains: [
            ".sm"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Sao Tome and Principe",
        officialName: "The Democratic Republic of São Tomé and Príncipe",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.SaoTomeAndPrincipe,
        alpha3: ISOCountryCode3.SaoTomeAndPrincipe,
        dialCode: "+239",
        languages: [
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".st"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Dobra
    },
    {
        name: "Saudi Arabia",
        officialName: "The Kingdom of Saudi Arabia",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.SaudiArabia,
        alpha3: ISOCountryCode3.SaudiArabia,
        dialCode: "+966",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicSaudiArabia,
        ],
        domains: [
            ".sa"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SaudiRial
    },
    {
        name: "Scotland",
        officialName: "Scotland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.MainlandUnitedKingdom
        ],
        alpha2: ISOCountryCode.Scotland,
        alpha3: null,
        dialCode: "+44",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
            ISOLanguageCode.GaelicScotland,
        ],
        domains: [
            ".gb",
            ".uk",
            ".scot"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.SterlingPound
    },
    {
        name: "Senegal",
        officialName: "The Republic of Senegal",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Senegal,
        alpha3: ISOCountryCode3.Senegal,
        dialCode: "+221",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchSenegal,
        ],
        domains: [
            ".sn"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.WestAfricanFranc
    },
    {
        name: "Serbia",
        officialName: "The Republic of Serbia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        alpha2: ISOCountryCode.Serbia,
        alpha3: ISOCountryCode3.Serbia,
        dialCode: "+381",
        languages: [
            ISOLanguageCode.Serbian,
        ],
        domains: [
            ".rs"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SerbianDinar
    },
    {
        name: "Seychelles",
        officialName: "The Republic of Seychelles",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Seychelles,
        alpha3: ISOCountryCode3.Seychelles,
        dialCode: "+248",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.French,
        ],
        domains: [
            ".sc"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SeychellesRupee
    },
    {
        name: "Sierra Leone",
        officialName: "The Republic of Sierra Leone",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.SierraLeone,
        alpha3: ISOCountryCode3.SierraLeone,
        dialCode: "+232",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".sl"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Leone
    },
    {
        name: "Singapore",
        officialName: "The Republic of Singapore",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Singapore,
        alpha3: ISOCountryCode3.Singapore,
        dialCode: "+65",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.Malay,
            ISOLanguageCode.Chinese,
            ISOLanguageCode.Tamil,
        ],
        domains: [
            ".sg"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SingaporeDollar
    },
    {
        name: "Sint Maarten",
        officialName: "Sint Maarten",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.SintMaarten,
        alpha3: ISOCountryCode3.SintMaarten,
        dialCode: "+1 721",
        languages: [
            ISOLanguageCode.Dutch,
            ISOLanguageCode.DutchNetherlands,
        ],
        domains: [
            ".sx"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Netherlands,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Slovakia",
        officialName: "The Slovak Republic",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Slovakia,
        alpha3: ISOCountryCode3.Slovakia,
        dialCode: "+421",
        languages: [
            ISOLanguageCode.Slovak,
        ],
        domains: [
            ".sk"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Slovenia",
        officialName: "The Republic of Slovenia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Slovenia,
        alpha3: ISOCountryCode3.Slovenia,
        dialCode: "+386",
        languages: [
            ISOLanguageCode.Slovenian,
        ],
        domains: [
            ".si"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Solomon Islands",
        officialName: "The Solomon Islands",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.SolomonIslands,
        alpha3: ISOCountryCode3.SolomonIslands,
        dialCode: "+677",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".sb"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SalomonDollar
    },
    {
        name: "Somalia",
        officialName: "The Federal Republic of Somalia",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Somalia,
        alpha3: ISOCountryCode3.Somalia,
        dialCode: "+252",
        languages: [
            ISOLanguageCode.Arabic,
        ],
        domains: [
            ".so"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SomalianShilling
    },
    {
        name: "South Africa",
        officialName: "The Republic of South Africa",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.SouthAfrica,
        alpha3: ISOCountryCode3.SouthAfrica,
        dialCode: "+27",
        languages: [
            ISOLanguageCode.Afrikaans,
            ISOLanguageCode.English,
            ISOLanguageCode.Sotho,
            ISOLanguageCode.Swazi,
            ISOLanguageCode.Tsonga,
            ISOLanguageCode.Xhosa,
            ISOLanguageCode.Zulu,
        ],
        domains: [
            ".za"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SouthAfricanRand
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        officialName: "South Georgia and the South Sandwich Islands",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.SouthGeorgiaAndTheSouthSandwichIslands,
        alpha3: ISOCountryCode3.SouthGeorgiaAndTheSouthSandwichIslands,
        dialCode: "+500",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".gs"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.FalklandsPound
    },
    {
        name: "South Korea",
        officialName: "The Republic of Korea",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.SouthKorea,
        alpha3: ISOCountryCode3.SouthKorea,
        dialCode: "+82",
        languages: [
            ISOLanguageCode.Korean,
        ],
        domains: [
            ".kr"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SouthKoreanWon
    },
    {
        name: "South Sudan",
        officialName: "The Republic of South Sudan",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.SouthSudan,
        alpha3: ISOCountryCode3.SouthSudan,
        dialCode: "+211",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".ss"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SouthSudanesePound
    },
    {
        name: "Spain",
        officialName: "The Kingdom of Spain",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        alpha2: ISOCountryCode.Spain,
        alpha3: ISOCountryCode3.Spain,
        dialCode: "+34",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishSpain,
        ],
        domains: [
            ".es"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Sri Lanka",
        officialName: "The Democratic Socialist Republic of Sri Lanka",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.SriLanka,
        alpha3: ISOCountryCode3.SriLanka,
        dialCode: "+94",
        languages: [
            ISOLanguageCode.Sinhalese,
            ISOLanguageCode.Tamil,
        ],
        domains: [
            ".lk"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SriLankaRupee
    },
    {
        name: "Sudan",
        officialName: "The Republic of the Sudan",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Sudan,
        alpha3: ISOCountryCode3.Sudan,
        dialCode: "+249",
        languages: [
            ISOLanguageCode.Arabic,
        ],
        domains: [
            ".sd"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SudanesePound
    },
    {
        name: "Suriname",
        officialName: "The Republic of Suriname",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.Suriname,
        alpha3: ISOCountryCode3.Suriname,
        dialCode: "+597",
        languages: [
            ISOLanguageCode.Dutch,
        ],
        domains: [
            ".sr"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SurinameseDollar
    },
    {
        name: "Svalbard, Jan Mayen",
        officialName: "Svalbard and Jan Mayen",
        region: [
            WorldRegion.Europe
        ],
        alpha2: ISOCountryCode.SvalbardJanMayen,
        alpha3: ISOCountryCode3.SvalbardJanMayen,
        dialCode: "+47 79",
        languages: [
            ISOLanguageCode.Norwegian,
        ],
        domains: [
            ".no",
            ".sj"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.Norway,
        currency: ISOCurrencyCode.NorwegianKrone
    },
    {
        name: "Sweden",
        officialName: "The Kingdom of Sweden",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.EuropeanUnion,
            WorldRegion.Scandinavia,
        ],
        alpha2: ISOCountryCode.Sweden,
        alpha3: ISOCountryCode3.Sweden,
        dialCode: "+46",
        languages: [
            ISOLanguageCode.Swedish,
            ISOLanguageCode.SwedishSweden,
        ],
        domains: [
            ".se"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SwedishKrone
    },
    {
        name: "Switzerland",
        officialName: "The Swiss Confederation",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
        ],
        alpha2: ISOCountryCode.Switzerland,
        alpha3: ISOCountryCode3.Switzerland,
        dialCode: "+41",
        languages: [
            ISOLanguageCode.German,
            ISOLanguageCode.GermanSwitzerland,
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchSwitzerland,
            ISOLanguageCode.Italian,
            ISOLanguageCode.ItalianSwitzerland,
        ],
        domains: [
            ".ch"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SwissFranc
    },
    {
        name: "Syria",
        officialName: "The Syrian Arab Republic",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Syria,
        alpha3: ISOCountryCode3.Syria,
        dialCode: "+963",
        languages: [
            ISOLanguageCode.Syriac,
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicSyria,
        ],
        domains: [
            ".sy"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SyrianPound
    },
    {
        name: "Taiwan",
        officialName: "The Republic of China",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Taiwan,
        alpha3: ISOCountryCode3.Taiwan,
        dialCode: "+886",
        languages: [
            ISOLanguageCode.Chinese,
            ISOLanguageCode.ChineseTaiwan,
        ],
        domains: [
            ".tw"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.China,
        currency: ISOCurrencyCode.NewTaiwanDollar
    },
    {
        name: "Tajikistan",
        officialName: "The Republic of Tajikistan",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Tajikistan,
        alpha3: ISOCountryCode3.Tajikistan,
        dialCode: "+992",
        languages: [
            ISOLanguageCode.Tajik,
        ],
        domains: [
            ".tj"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Somoni
    },
    {
        name: "Tanzania",
        officialName: "The United Republic of Tanzania",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Tanzania,
        alpha3: ISOCountryCode3.Tanzania,
        dialCode: "+255",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".tz"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.TansanianShilling
    },
    {
        name: "Thailand",
        officialName: "The Kingdom of Thailand",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Thailand,
        alpha3: ISOCountryCode3.Thailand,
        dialCode: "+66",
        languages: [
            ISOLanguageCode.Thai,
        ],
        domains: [
            ".th"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.ThaiBaht
    },
    {
        name: "Timor-Leste",
        officialName: "The Democratic Republic of Timor-Leste",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.TimorLeste,
        alpha3: ISOCountryCode3.TimorLeste,
        dialCode: "+670",
        languages: [
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".tl"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Togo",
        officialName: "The Togolese Republic",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Togo,
        alpha3: ISOCountryCode3.Togo,
        dialCode: "+228",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".tg"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.WestAfricanFranc
    },
    {
        name: "Tokelau",
        officialName: "Tokelau",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Tokelau,
        alpha3: ISOCountryCode3.Tokelau,
        dialCode: "+690",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".tk"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.NewZealand,
        currency: ISOCurrencyCode.NewZealandDollar
    },
    {
        name: "Tonga",
        officialName: "The Kingdom of Tonga",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Tonga,
        alpha3: ISOCountryCode3.Tonga,
        dialCode: "+676",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".to"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Paanga
    },
    {
        name: "Trinidad and Tobago",
        officialName: "The Republic of Trinidad and Tobago",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.TrinidadAndTobago,
        alpha3: ISOCountryCode3.TrinidadAndTobago,
        dialCode: "+1 868",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishTrinidadAndTobago,
        ],
        domains: [
            ".tt"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.TrinidadandTobagoDollar
    },
    {
        name: "Tunisia",
        officialName: "The Republic of Tunisia",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Tunisia,
        alpha3: ISOCountryCode3.Tunisia,
        dialCode: "+216",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicTunisia,
        ],
        domains: [
            ".tn"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.TunesianDinar
    },
    {
        name: "Turkey",
        officialName: "The Republic of Türkiye",
        region: [
            WorldRegion.Europe,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Turkey,
        alpha3: ISOCountryCode3.Turkey,
        dialCode: "+90",
        languages: [
            ISOLanguageCode.Turkish,
        ],
        domains: [
            ".tr"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.TurkishLira
    },
    {
        name: "Turkmenistan",
        officialName: "Turkmenistan",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Turkmenistan,
        alpha3: ISOCountryCode3.Turkmenistan,
        dialCode: "+993",
        languages: [
            ISOLanguageCode.Turkmen,
        ],
        domains: [
            ".tm"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.TurkmenistaniManat
    },
    {
        name: "Turks and Caicos Islands",
        officialName: "The Turks and Caicos Islands",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.TurksAndCaicosIslands,
        alpha3: ISOCountryCode3.TurksAndCaicosIslands,
        dialCode: "+1 649",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".tc"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Tuvalu",
        officialName: "Tuvalu",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Tuvalu,
        alpha3: ISOCountryCode3.Tuvalu,
        dialCode: "+688",
        languages: [
            ISOLanguageCode.Tuvalan,
        ],
        domains: [
            ".tv"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.TuvaluanDollar
    },
    {
        name: "Uganda",
        officialName: "The Republic of Uganda",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Uganda,
        alpha3: ISOCountryCode3.Uganda,
        dialCode: "+256",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.Swahili,
        ],
        domains: [
            ".ug"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.UgandanSchilling
    },
    {
        name: "Ukraine",
        officialName: "Ukraine",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        alpha2: ISOCountryCode.Ukraine,
        alpha3: ISOCountryCode3.Ukraine,
        dialCode: "+380",
        languages: [
            ISOLanguageCode.Ukrainian,
        ],
        domains: [
            ".ua"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Hrywnja
    },
    {
        name: "United Arab Emirates",
        officialName: "The United Arab Emirates",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.UnitedArabEmirates,
        alpha3: ISOCountryCode3.UnitedArabEmirates,
        dialCode: "+971",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicUnitedArabEmirates,
        ],
        domains: [
            ".ae"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.UnitedArabEmiratesDirham
    },
    {
        name: "United Kingdom",
        officialName: "The United Kingdom of Great Britain and Northern Ireland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
        ],
        alpha2: ISOCountryCode.UnitedKingdom,
        alpha3: ISOCountryCode3.UnitedKingdom,
        dialCode: "+44",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".gb",
            ".uk"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.SterlingPound
    },
    {
        name: "United Nations",
        officialName: "United Nations",
        region: [],
        alpha2: ISOCountryCode.UnitedNations,
        alpha3: null,
        dialCode: null,
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.French,
            ISOLanguageCode.Spanish,
            ISOLanguageCode.Russian,
            ISOLanguageCode.Chinese,
            ISOLanguageCode.Arabic,
        ],
        domains: [
            ".un.org"
        ],
        isSovereign: false,
        currency: null
    },
    {
        name: "United States Minor Outlying Islands",
        officialName: "Baker Island, Howland Island, Jarvis Island, Johnston Atoll, Kingman Reef, Midway Atoll, Navassa Island, Palmyra Atoll, and Wake Island",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.UnitedStatesMinorOutlyingIslands,
        alpha3: ISOCountryCode3.UnitedStatesMinorOutlyingIslands,
        dialCode: "+1",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishUnitedStatesOfAmerica,
        ],
        domains: [
            ".us"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedStatesOfAmerica,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "United States of America",
        officialName: "The United States of America",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        alpha2: ISOCountryCode.UnitedStatesOfAmerica,
        alpha3: ISOCountryCode3.UnitedStatesOfAmerica,
        dialCode: "+1",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishUnitedStatesOfAmerica,
        ],
        domains: [
            ".us"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Uruguay",
        officialName: "The Oriental Republic of Uruguay",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        alpha2: ISOCountryCode.Uruguay,
        alpha3: ISOCountryCode3.Uruguay,
        dialCode: "+598",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishUruguay,
        ],
        domains: [
            ".uy"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.UruguayPeso
    },
    {
        name: "Uzbekistan",
        officialName: "The Republic of Uzbekistan",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Uzbekistan,
        alpha3: ISOCountryCode3.Uzbekistan,
        dialCode: "+998",
        languages: [
            ISOLanguageCode.Uzbek,
        ],
        domains: [
            ".uz"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.UzbekistaniSoum
    },
    {
        name: "Vanuatu",
        officialName: "The Republic of Vanuatu",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.Vanuatu,
        alpha3: ISOCountryCode3.Vanuatu,
        dialCode: "+678",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.French,
        ],
        domains: [
            ".vu"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Vatu
    },
    {
        name: "Vatican",
        officialName: "The Holy See",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
        ],
        alpha2: ISOCountryCode.Vatican,
        alpha3: ISOCountryCode3.Vatican,
        dialCode: "+379",
        languages: [
            ISOLanguageCode.Latin,
            ISOLanguageCode.Italian,
        ],
        domains: [
            ".va"
        ],
        isSovereign: false,
        currency: ISOCurrencyCode.Euro
    },
    {
        name: "Venezuela",
        officialName: "The Bolivarian Republic of Venezuela",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Venezuela,
        alpha3: ISOCountryCode3.Venezuela,
        dialCode: "+58",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishVenezuela,
        ],
        domains: [
            ".ve"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.VenezuelanBolivar
    },
    {
        name: "Vietnam",
        officialName: "The Socialist Republic of Viet Nam",
        region: [
            WorldRegion.Asia
        ],
        alpha2: ISOCountryCode.Vietnam,
        alpha3: ISOCountryCode3.Vietnam,
        dialCode: "+84",
        languages: [
            ISOLanguageCode.Vietnamese,
        ],
        domains: [
            ".vn"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.Dong
    },
    {
        name: "Virgin Islands (British)",
        officialName: "The Virgin Islands",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.VirginIslands,
        alpha3: ISOCountryCode3.VirginIslands,
        dialCode: "+1 284",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".vg"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Virgin Islands (U.S.)",
        officialName: "The Virgin Islands of the United States",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        alpha2: ISOCountryCode.VirginIslandsUS,
        alpha3: ISOCountryCode3.VirginIslandsUS,
        dialCode: "+1 340",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishUnitedStatesOfAmerica,
        ],
        domains: [
            ".vi"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedStatesOfAmerica,
        currency: ISOCurrencyCode.USDollar
    },
    {
        name: "Wales",
        officialName: "Wales",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.MainlandUnitedKingdom
        ],
        alpha2: ISOCountryCode.Wales,
        alpha3: null,
        dialCode: "+44",
        languages: [
            ISOLanguageCode.Welsh,
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".gb",
            ".uk",
            ".wales",
            ".cymru"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
        currency: ISOCurrencyCode.SterlingPound
    },
    {
        name: "Wallis and Futuna",
        officialName: "The Territory of the Wallis and Futuna Islands",
        region: [
            WorldRegion.Oceania
        ],
        alpha2: ISOCountryCode.WallisAndFutuna,
        alpha3: ISOCountryCode3.WallisAndFutuna,
        dialCode: "+681",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".wf"
        ],
        isSovereign: false,
        territoryOf: ISOCountryCode.France,
        currency: ISOCurrencyCode.PacificFranc
    },
    {
        name: "Yemen",
        officialName: "The Republic of Yemen",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        alpha2: ISOCountryCode.Yemen,
        alpha3: ISOCountryCode3.Yemen,
        dialCode: "+967",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicYemen,
        ],
        domains: [
            ".ye"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.YemeniRial
    },
    {
        name: "Zambia",
        officialName: "The Republic of Zambia",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Zambia,
        alpha3: ISOCountryCode3.Zambia,
        dialCode: "+260",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".zm"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.ZambianKwacha
    },
    {
        name: "Zimbabwe",
        officialName: "The Republic of Zimbabwe",
        region: [
            WorldRegion.Africa
        ],
        alpha2: ISOCountryCode.Zimbabwe,
        alpha3: ISOCountryCode3.Zimbabwe,
        dialCode: "+263",
        languages: [
            ISOLanguageCode.EnglishZimbabwe,
        ],
        domains: [
            ".zw"
        ],
        isSovereign: true,
        currency: ISOCurrencyCode.ZimbabweDollar
    }
];