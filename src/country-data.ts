import {
    WorldRegion,
    CountryInfo,
    ISOCountryCode,
    ISOCountryCode3,
    ISOLanguageCode,
} from "./types";

export const countryInfo: CountryInfo[] = [
    {
        name: "Afghanistan",
        nameFull: "The Islamic Republic of Afghanistan",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Afghanistan,
        code3: ISOCountryCode3.Afghanistan,
        dialCode: "+93",
        languages: [
            ISOLanguageCode.Pashto,
        ],
        domains: [
            ".af"
        ],
        sovereign: true,
    },
    {
        name: "Åland Islands",
        nameFull: "Åland",
        region: [
            WorldRegion.Europe
        ],
        code: ISOCountryCode.AlandIslands,
        code3: ISOCountryCode3.AlandIslands,
        dialCode: "+358 18",
        languages: [
            ISOLanguageCode.Swedish,
        ],
        domains: [
            ".ax"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Finland,
    },
    {
        name: "Albania",
        nameFull: "The Republic of Albania",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        code: ISOCountryCode.Albania,
        code3: ISOCountryCode3.Albania,
        dialCode: "+355",
        languages: [
            ISOLanguageCode.Albanian,
        ],
        domains: [
            ".al"
        ],
        sovereign: true
    },
    {
        name: "Algeria",
        nameFull: "The People's Democratic Republic of Algeria",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Algeria,
        code3: ISOCountryCode3.Algeria,
        dialCode: "+213",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicAlgeria,
        ],
        domains: [
            ".dz"
        ],
        sovereign: true
    },
    {
        name: "American Samoa",
        nameFull: "The Territory of American Samoa",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.AmericanSamoa,
        code3: ISOCountryCode3.AmericanSamoa,
        dialCode: "+1 684",
        languages: [
            ISOLanguageCode.Samoan,
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishUnitedStatesOfAmerica,
        ],
        domains: [
            ".as"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedStatesOfAmerica,
    },
    {
        name: "Andorra",
        nameFull: "The Principality of Andorra",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
        ],
        code: ISOCountryCode.Andorra,
        code3: ISOCountryCode3.Andorra,
        dialCode: "+376",
        languages: [
            ISOLanguageCode.Catalan,
        ],
        domains: [
            ".ad"
        ],
        sovereign: true
    },
    {
        name: "Angola",
        nameFull: "The Republic of Angola",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Angola,
        code3: ISOCountryCode3.Angola,
        dialCode: "+244",
        languages: [
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".ao"
        ],
        sovereign: true
    },
    {
        name: "Anguilla",
        nameFull: "Anguilla",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Anguilla,
        code3: ISOCountryCode3.Anguilla,
        dialCode: "+1 264",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".ai"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom
    },
    {
        name: "Antarctica",
        nameFull: "Antarctica",
        region: [
            WorldRegion.Antarctica
        ],
        code: ISOCountryCode.Antarctica,
        code3: ISOCountryCode3.Antarctica,
        dialCode: "+672",
        languages: [],
        domains: [
            ".aq"
        ],
        sovereign: false
    },
    {
        name: "Antigua and Barbuda",
        nameFull: "Antigua and Barbuda",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.AntiguaAndBarbuda,
        code3: ISOCountryCode3.AntiguaAndBarbuda,
        dialCode: "+1 268",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".ag"
        ],
        sovereign: true
    },
    {
        name: "Argentina",
        nameFull: "The Argentine Republic",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.Argentina,
        code3: ISOCountryCode3.Argentina,
        dialCode: "+54",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishArgentina,
        ],
        domains: [
            ".ar"
        ],
        sovereign: true
    },
    {
        name: "Armenia",
        nameFull: "The Republic of Armenia",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Armenia,
        code3: ISOCountryCode3.Armenia,
        dialCode: "+374",
        languages: [
            ISOLanguageCode.Armenian,
        ],
        domains: [
            ".am"
        ],
        sovereign: true
    },
    {
        name: "Aruba",
        nameFull: "Aruba",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Aruba,
        code3: ISOCountryCode3.Aruba,
        dialCode: "+297",
        languages: [
            ISOLanguageCode.Dutch,
            ISOLanguageCode.DutchNetherlands,
        ],
        domains: [
            ".aw"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Netherlands
    },
    {
        name: "Australia",
        nameFull: "The Commonwealth of Australia",
        region: [
            WorldRegion.Australia,
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Australia,
        code3: ISOCountryCode3.Australia,
        dialCode: "+61",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAustralia,
        ],
        domains: [
            ".au"
        ],
        sovereign: true
    },
    {
        name: "Austria",
        nameFull: "The Republic of Austria",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Austria,
        code3: ISOCountryCode3.Austria,
        dialCode: "+43",
        languages: [
            ISOLanguageCode.German,
            ISOLanguageCode.GermanAustria,
        ],
        domains: [
            ".at"
        ],
        sovereign: true
    },
    {
        name: "Azerbaijan",
        nameFull: "The Republic of Azerbaijan",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Azerbaijan,
        code3: ISOCountryCode3.Azerbaijan,
        dialCode: "+994",
        languages: [
            ISOLanguageCode.Azeri,
        ],
        domains: [
            ".az"
        ],
        sovereign: true
    },
    {
        name: "Bahamas",
        nameFull: "The Commonwealth of The Bahamas",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Bahamas,
        code3: ISOCountryCode3.Bahamas,
        dialCode: "+1 242",
        
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".bs"
        ],
        sovereign: true
    },
    {
        name: "Bahrain",
        nameFull: "The Kingdom of Bahrain",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Bahrain,
        code3: ISOCountryCode3.Bahrain,
        dialCode: "+973",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicBahrain,
        ],
        domains: [
            ".bh"
        ],
        sovereign: true
    },
    {
        name: "Bangladesh",
        nameFull: "The People's Republic of Bangladesh",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Bangladesh,
        code3: ISOCountryCode3.Bangladesh,
        dialCode: "+880",
        languages: [
            ISOLanguageCode.Bengali,
        ],
        domains: [
            ".bd"
        ],
        sovereign: true
    },
    {
        name: "Barbados",
        nameFull: "Barbados",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Barbados,
        code3: ISOCountryCode3.Barbados,
        dialCode: "+1 264",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".bb"
        ],
        sovereign: true
    },
    {
        name: "Belarus",
        nameFull: "The Republic of Belarus",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        code: ISOCountryCode.Belarus,
        code3: ISOCountryCode3.Belarus,
        dialCode: "+375",
        languages: [
            ISOLanguageCode.Belarusian,
            ISOLanguageCode.Russian,
        ],
        domains: [
            ".by"
        ],
        sovereign: true
    },
    {
        name: "Belgium",
        nameFull: "The Kingdom of Belgium",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Belgium,
        code3: ISOCountryCode3.Belgium,
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
        sovereign: true
    },
    {
        name: "Belize",
        nameFull: "Belize",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        code: ISOCountryCode.Belize,
        code3: ISOCountryCode3.Belize,
        dialCode: "+501",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishBelize,
        ],
        domains: [
            ".bz"
        ],
        sovereign: true
    },
    {
        name: "Benin",
        nameFull: "The Republic of Benin",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Benin,
        code3: ISOCountryCode3.Benin,
        dialCode: "+229",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".bj"
        ],
        sovereign: true
    },
    {
        name: "Bermuda",
        nameFull: "Bermuda",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        code: ISOCountryCode.Bermuda,
        code3: ISOCountryCode3.Bermuda,
        dialCode: "+1 441",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".bm"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom
    },
    {
        name: "Bhutan",
        nameFull: "The Kingdom of Bhutan",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Bhutan,
        code3: ISOCountryCode3.Bhutan,
        dialCode: "+975",
        languages: [
            ISOLanguageCode.Dzongkha,
        ],
        domains: [
            ".bt"
        ],
        sovereign: true
    },
    {
        name: "Bolivia",
        nameFull: "The Plurinational State of Bolivia",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.Bolivia,
        code3: ISOCountryCode3.Bolivia,
        dialCode: "+591",
        
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishBolivia,
            ISOLanguageCode.Guarani,
        ],
        domains: [
            ".bo"
        ],
        sovereign: true
    },
    {
        name: "Bonaire, Sint Eustatius, Saba",
        nameFull: "Bonaire, Sint Eustatius and Saba",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.BonaireSintEustatiusSaba,
        code3: ISOCountryCode3.BonaireSintEustatiusSaba,
        dialCode: ["+599 7", "+599 3", "599 4"],
        languages: [
            ISOLanguageCode.Dutch,
            ISOLanguageCode.DutchNetherlands,
        ],
        domains: [
            ".bq",
            ".nl"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Netherlands
    },
    {
        name: "Bosnia and Herzegovina",
        nameFull: "Bosnia and Herzegovina",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        code: ISOCountryCode.BosniaAndHerzegovina,
        code3: ISOCountryCode3.BosniaAndHerzegovina,
        dialCode: "+387",
        languages: [
            ISOLanguageCode.Bosnian,
            ISOLanguageCode.Croatian,
            ISOLanguageCode.Serbian,
        ],
        domains: [
            ".ba"
        ],
        sovereign: true
    },
    {
        name: "Botswana",
        nameFull: "The Republic of Botswana",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Botswana,
        code3: ISOCountryCode3.Botswana,
        dialCode: "+267",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
        ],
        domains: [
            ".bw"
        ],
        sovereign: true
    },
    {
        name: "Bouvet Island",
        nameFull: "Bouvet Island",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.BouvetIsland,
        code3: ISOCountryCode3.BouvetIsland,
        dialCode: "+47",
        languages: [
            ISOLanguageCode.Norwegian,
        ],
        domains: [
            ".no",
            ".bv"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Norway
    },
    {
        name: "Brazil",
        nameFull: "The Federative Republic of Brazil",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.Brazil,
        code3: ISOCountryCode3.Brazil,
        dialCode: "+55",
        languages: [
            ISOLanguageCode.Portuguese,
            ISOLanguageCode.PortugueseBrazil,
        ],
        domains: [
            ".br"
        ],
        sovereign: true
    },
    {
        name: "British Indian Ocean Territory",
        nameFull: "The British Indian Ocean Territory",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.BritishIndianOceanTerritory,
        code3: ISOCountryCode3.BritishIndianOceanTerritory,
        dialCode: "+246",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".io"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom
    },
    {
        name: "Brunei Darussalam",
        nameFull: "The Nation of Brunei, the Abode of Peace",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.BruneiDarussalam,
        code3: ISOCountryCode3.BruneiDarussalam,
        dialCode: "+673",
        languages: [
            ISOLanguageCode.Malay,
            ISOLanguageCode.MalayBrunei,
            ISOLanguageCode.English,
        ],
        domains: [
            ".bn"
        ],
        sovereign: true
    },
    {
        name: "Bulgaria",
        nameFull: "The Republic of Bulgaria",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Bulgaria,
        code3: ISOCountryCode3.Bulgaria,
        dialCode: "+359",
        languages: [
            ISOLanguageCode.Bulgarian,
        ],
        domains: [
            ".bg"
        ],
        sovereign: true
    },
    {
        name: "Burkina Faso",
        nameFull: "Burkina Faso",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.BurkinaFaso,
        code3: ISOCountryCode3.BurkinaFaso,
        dialCode: "+226",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".bf"
        ],
        sovereign: true
    },
    {
        name: "Burundi",
        nameFull: "The Republic of Burundi",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Burundi,
        code3: ISOCountryCode3.Burundi,
        dialCode: "+257",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
        ],
        domains: [
            ".bi"
        ],
        sovereign: true
    },
    {
        name: "Cape Verde",
        nameFull: "The Republic of Cabo Verde",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.CaboVerde,
        code3: ISOCountryCode3.CaboVerde,
        dialCode: "+238",
        languages: [
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".cv"
        ],
        sovereign: true
    },
    {
        name: "Cambodia",
        nameFull: "The Kingdom of Cambodia",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Cambodia,
        code3: ISOCountryCode3.Cambodia,
        dialCode: "+855",
        languages: [
            ISOLanguageCode.Khmer,
        ],
        domains: [
            ".kh"
        ],
        sovereign: true
    },
    {
        name: "Cameroon",
        nameFull: "The Republic of Cameroon",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Cameroon,
        code3: ISOCountryCode3.Cameroon,
        dialCode: "+237",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
            ISOLanguageCode.French,
        ],
        domains: [
            ".cm"
        ],
        sovereign: true
    },
    {
        name: "Canada",
        nameFull: "Canada",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        code: ISOCountryCode.Canada,
        code3: ISOCountryCode3.Canada,
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
        sovereign: true
    },
    {
        name: "Catalonia",
        nameFull: "Catalonia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Catalonia,
        code3: null,
        dialCode: ["+34 93", "+34 97"],
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishSpain,
            ISOLanguageCode.Catalan
        ],
        domains: [
            ".es"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Spain,
    },
    {
        name: "Canary Islands",
        nameFull: "Canary Islands",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.CanaryIslands,
        code3: null,
        dialCode: "+1",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishSpain,
        ],
        domains: [
            ".ca"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Spain,
    },
    {
        name: "Cayman Islands",
        nameFull: "The Cayman Islands",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.CaymanIslands,
        code3: ISOCountryCode3.CaymanIslands,
        dialCode: "+1 345",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".ky"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom
    },
    {
        name: "Central African Republic",
        nameFull: "The Central African Republic",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.CentralAfricanRepublic,
        code3: ISOCountryCode3.CentralAfricanRepublic,
        dialCode: "+236",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".cf"
        ],
        sovereign: true
    },
    {
        name: "Chad",
        nameFull: "The Republic of Chad",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Chad,
        code3: ISOCountryCode3.Chad,
        dialCode: "+235",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.French,
        ],
        domains: [
            ".td"
        ],
        sovereign: true
    },
    {
        name: "Chile",
        nameFull: "The Republic of Chile",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.Chile,
        code3: ISOCountryCode3.Chile,
        dialCode: "+56",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishChile,
        ],
        domains: [
            ".cl"
        ],
        sovereign: true
    },
    {
        name: "China",
        nameFull: "The People's Republic of China",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.China,
        code3: ISOCountryCode3.China,
        dialCode: "+86",
        languages: [
            ISOLanguageCode.Chinese,
            ISOLanguageCode.ChineseChina,
        ],
        domains: [
            ".cn"
        ],
        sovereign: true
    },
    {
        name: "Christmas Island",
        nameFull: "The Territory of Christmas Island",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.ChristmasIsland,
        code3: ISOCountryCode3.ChristmasIsland,
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
        sovereign: false,
        territoryOf: ISOCountryCode.Australia
    },
    {
        name: "Cocos (Keeling) Islands",
        nameFull: "The Territory of Cocos (Keeling) Islands",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.CocosIslands,
        code3: ISOCountryCode3.CocosIslands,
        dialCode: "+61 89162",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAustralia,
            ISOLanguageCode.Malay,
        ],
        domains: [
            ".cc"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Australia
    },
    {
        name: "Colombia",
        nameFull: "The Republic of Colombia",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.Colombia,
        code3: ISOCountryCode3.Colombia,
        dialCode: "+57",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishColombia,
        ],
        domains: [
            ".co"
        ],
        sovereign: true
    },
    {
        name: "Comoros",
        nameFull: "The Union of the Comoros",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Comoros,
        code3: ISOCountryCode3.Comoros,
        dialCode: "+269",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.French,
        ],
        domains: [
            ".km"
        ],
        sovereign: true
    },
    {
        name: "Democratic Republic of Congo",
        nameFull: "The Democratic Republic of the Congo",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.DemocraticRepublicOfCongo,
        code3: ISOCountryCode3.DemocraticRepublicOfCongo,
        dialCode: "+243",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchRepublicOfCongo,
        ],
        domains: [
            ".cd"
        ],
        sovereign: true
    },
    {
        name: "Republic of Congo",
        nameFull: "The Republic of the Congo",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.RepublicOfCongo,
        code3: ISOCountryCode3.RepublicOfCongo,
        dialCode: "+242",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchRepublicOfCongo,
        ],
        domains: [
            ".cg"
        ],
        sovereign: true
    },
    {
        name: "Cook Islands",
        nameFull: "The Cook Islands",
        region: [
            WorldRegion.Asia,
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.CookIslands,
        code3: ISOCountryCode3.CookIslands,
        dialCode: "+682",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.Maori,
        ],
        domains: [
            ".ck"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.NewZealand
    },
    {
        name: "Costa Rica",
        nameFull: "The Republic of Costa Rica",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.CostaRica,
        code3: ISOCountryCode3.CostaRica,
        dialCode: "+506",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishCostaRica,
        ],
        domains: [
            ".cr"
        ],
        sovereign: true
    },
    {
        name: "Ivory Coast",
        nameFull: "The Republic of Côte d'Ivoire",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.IvoryCoast,
        code3: ISOCountryCode3.IvoryCoast,
        dialCode: "+225",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchIvoryCoast,
        ],
        domains: [
            ".ci"
        ],
        sovereign: true
    },
    {
        name: "Croatia",
        nameFull: "The Republic of Croatia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Croatia,
        code3: ISOCountryCode3.Croatia,
        dialCode: "+385",
        languages: [
            ISOLanguageCode.Croatian,
        ],
        domains: [
            ".hr"
        ],
        sovereign: true
    },
    {
        name: "Cuba",
        nameFull: "The Republic of Cuba",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Cuba,
        code3: ISOCountryCode3.Cuba,
        dialCode: "+53",
        languages: [
            ISOLanguageCode.Spanish,
        ],
        domains: [
            ".cu"
        ],
        sovereign: true
    },
    {
        name: "Curaçao",
        nameFull: "The Country of Curaçao",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Curacao,
        code3: ISOCountryCode3.Curacao,
        dialCode: "+599 9",
        languages: [
            ISOLanguageCode.Dutch,
            ISOLanguageCode.DutchNetherlands,
        ],
        domains: [
            ".cw"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Netherlands
    },
    {
        name: "Cyprus",
        nameFull: "The Republic of Cyprus",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Cyprus,
        code3: ISOCountryCode3.Cyprus,
        dialCode: "+357",
        languages: [
            ISOLanguageCode.Greek,
            ISOLanguageCode.Turkish,
        ],
        domains: [
            ".cy"
        ],
        sovereign: true
    },
    {
        name: "Czechia",
        nameFull: "The Czech Republic",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Czechia,
        code3: ISOCountryCode3.Czechia,
        dialCode: "+420",
        languages: [
            ISOLanguageCode.Czech,
            ISOLanguageCode.Slovak,
        ],
        domains: [
            ".cz"
        ],
        sovereign: true
    },
    {
        name: "Denmark",
        nameFull: "The Kingdom of Denmark",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Denmark,
        code3: ISOCountryCode3.Denmark,
        dialCode: "+45",
        languages: [
            ISOLanguageCode.Danish,
        ],
        domains: [
            ".dk"
        ],
        sovereign: true
    },
    {
        name: "Djibouti",
        nameFull: "The Republic of Djibouti",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Djibouti,
        code3: ISOCountryCode3.Djibouti,
        dialCode: "+253",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.French,
        ],
        domains: [
            ".dj"
        ],
        sovereign: true
    },
    {
        name: "Dominica",
        nameFull: "The Commonwealth of Dominica",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Dominica,
        code3: ISOCountryCode3.Dominica,
        dialCode: "+1 767",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".dm"
        ],
        sovereign: true
    },
    {
        name: "Dominican Republic",
        nameFull: "The Dominican Republic",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.DominicanRepublic,
        code3: ISOCountryCode3.DominicanRepublic,
        dialCode: ["+1 809", "+1 829", "+1 849"],
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishDominicanRepublic,
        ],
        domains: [
            ".do"
        ],
        sovereign: true
    },
    {
        name: "Ecuador",
        nameFull: "The Republic of Ecuador",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.Ecuador,
        code3: ISOCountryCode3.Ecuador,
        dialCode: "+593",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishEcuador,
        ],
        domains: [
            ".ec"
        ],
        sovereign: true
    },
    {
        name: "Egypt",
        nameFull: "The Arab Republic of Egypt",
        region: [
            WorldRegion.Africa,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Egypt,
        code3: ISOCountryCode3.Egypt,
        dialCode: "+20",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicEgypt,
        ],
        domains: [
            ".eg"
        ],
        sovereign: true
    },
    {
        name: "El Salvador",
        nameFull: "The Republic of El Salvador",
        region: [
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.ElSalvador,
        code3: ISOCountryCode3.ElSalvador,
        dialCode: "+503",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishElSalvador,
        ],
        domains: [
            ".sv"
        ],
        sovereign: true
    },
    {
        name: "England",
        nameFull: "England",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.MainlandUnitedKingdom
        ],
        code: ISOCountryCode.England,
        code3: null,
        dialCode: "+44",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".gb",
            ".uk"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
    },
    {
        name: "Equatorial Guinea",
        nameFull: "The Republic of Equatorial Guinea",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.EquatorialGuinea,
        code3: ISOCountryCode3.EquatorialGuinea,
        dialCode: "+240",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.Portuguese,
            ISOLanguageCode.Spanish,
        ],
        domains: [
            ".gq"
        ],
        sovereign: true
    },
    {
        name: "Eritrea",
        nameFull: "The State of Eritrea",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Eritrea,
        code3: ISOCountryCode3.Eritrea,
        dialCode: "+291",
        languages: [
            ISOLanguageCode.Tigrinya
        ],
        domains: [
            ".er"
        ],
        sovereign: true
    },
    {
        name: "Estonia",
        nameFull: "The Republic of Estonia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Estonia,
        code3: ISOCountryCode3.Estonia,
        dialCode: "+372",
        languages: [
            ISOLanguageCode.Estonian,
        ],
        domains: [
            ".ee"
        ],
        sovereign: true
    },
    {
        name: "Eswatini",
        nameFull: "The Kingdom of Eswatini",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Eswatini,
        code3: ISOCountryCode3.Eswatini,
        dialCode: "+268",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
            ISOLanguageCode.Swazi,
        ],
        domains: [
            ".sz"
        ],
        sovereign: true
    },
    {
        name: "Ethiopia",
        nameFull: "The Federal Democratic Republic of Ethiopia",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Ethiopia,
        code3: ISOCountryCode3.Ethiopia,
        dialCode: "+251",
        languages: [
            ISOLanguageCode.Amharic,
            ISOLanguageCode.Somali,
            ISOLanguageCode.Tigrinya,
        ],
        domains: [
            ".et"
        ],
        sovereign: true
    },
    {
        name: "European Union",
        nameFull: "European Union",
        region: [
            WorldRegion.Europe,
        ],
        code: ISOCountryCode.EuropeanUnion,
        code3: null,
        dialCode: null,
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.French,
            ISOLanguageCode.German,
        ],
        domains: [
            ".eu"
        ],
        sovereign: false,
    },
    {
        name: "Falkland Islands",
        nameFull: "The Falkland Islands",
        region: [
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.FalklandIslands,
        code3: ISOCountryCode3.FalklandIslands,
        dialCode: "+500",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".fk"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom
    },
    {
        name: "Faroe Islands",
        nameFull: "The Faroe Islands",
        region: [
            WorldRegion.Europe
        ],
        code: ISOCountryCode.FaroeIslands,
        code3: ISOCountryCode3.FaroeIslands,
        dialCode: "+298",
        languages: [
            ISOLanguageCode.Faroese,
        ],
        domains: [
            ".fo"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Denmark
    },
    {
        name: "Fiji",
        nameFull: "The Republic of Fiji",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Fiji,
        code3: ISOCountryCode3.Fiji,
        dialCode: "+679",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.Hindi,
        ],
        domains: [
            ".fj"
        ],
        sovereign: true
    },
    {
        name: "Finland",
        nameFull: "The Republic of Finland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.EuropeanUnion,
            WorldRegion.Scandinavia,
        ],
        code: ISOCountryCode.Finland,
        code3: ISOCountryCode3.Finland,
        dialCode: "+358",
        languages: [
            ISOLanguageCode.Finnish,
            ISOLanguageCode.Swedish,
            ISOLanguageCode.SwedishFinland,
        ],
        domains: [
            ".fi"
        ],
        sovereign: true
    },
    {
        name: "France",
        nameFull: "The French Republic",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.France,
        code3: ISOCountryCode3.France,
        dialCode: "+33",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".fr"
        ],
        sovereign: true
    },
    {
        name: "French Guiana",
        nameFull: "Guyane",
        region: [
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.FrenchGuiana,
        code3: ISOCountryCode3.FrenchGuiana,
        dialCode: "+594",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".gf"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.France
    },
    {
        name: "French Polynesia",
        nameFull: "French Polynesia",
        region: [
            WorldRegion.Asia,
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.FrenchPolynesia,
        code3: ISOCountryCode3.FrenchPolynesia,
        dialCode: "+689",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".pf"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.France
    },
    {
        name: "French Southern Territories",
        nameFull: "The French Southern and Antarctic Lands",
        region: [
            WorldRegion.Antarctica
        ],
        code: ISOCountryCode.FrenchSouthernTerritories,
        code3: ISOCountryCode3.FrenchSouthernTerritories,
        dialCode: "+262",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".tf"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.France
    },
    {
        name: "Gabon",
        nameFull: "The Gabonese Republic",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Gabon,
        code3: ISOCountryCode3.Gabon,
        dialCode: "+241",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".ga"
        ],
        sovereign: true
    },
    {
        name: "Gambia",
        nameFull: "The Republic of The Gambia",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Gambia,
        code3: ISOCountryCode3.Gambia,
        dialCode: "+220",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
        ],
        domains: [
            ".gm"
        ],
        sovereign: true
    },
    {
        name: "Georgia",
        nameFull: "Georgia",
        region: [
            WorldRegion.Europe,
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Georgia,
        code3: ISOCountryCode3.Georgia,
        dialCode: "+995",
        languages: [
            ISOLanguageCode.Georgian,
        ],
        domains: [
            ".ge"
        ],
        sovereign: true
    },
    {
        name: "Germany",
        nameFull: "The Federal Republic of Germany",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Germany,
        code3: ISOCountryCode3.Germany,
        dialCode: "+49",
        languages: [
            ISOLanguageCode.German,
            ISOLanguageCode.GermanGermany,
        ],
        domains: [
            ".de"
        ],
        sovereign: true
    },
    {
        name: "Ghana",
        nameFull: "The Republic of Ghana",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Ghana,
        code3: ISOCountryCode3.Ghana,
        dialCode: "+233",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
        ],
        domains: [
            ".gh"
        ],
        sovereign: true
    },
    {
        name: "Gibraltar",
        nameFull: "Gibraltar",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
        ],
        code: ISOCountryCode.Gibraltar,
        code3: ISOCountryCode3.Gibraltar,
        dialCode: "+350",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".gi"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom
    },
    {
        name: "Greece",
        nameFull: "The Hellenic Republic",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Greece,
        code3: ISOCountryCode3.Greece,
        dialCode: "+30",
        languages: [
            ISOLanguageCode.Greek,
        ],
        domains: [
            ".gr"
        ],
        sovereign: true
    },
    {
        name: "Greenland",
        nameFull: "Kalaallit Nunaat",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        code: ISOCountryCode.Greenland,
        code3: ISOCountryCode3.Greenland,
        dialCode: "+299",
        languages: [
            ISOLanguageCode.Greenlandic,
        ],
        domains: [
            ".gl"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Denmark
    },
    {
        name: "Grenada",
        nameFull: "Grenada",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Grenada,
        code3: ISOCountryCode3.Grenada,
        dialCode: "+1 473",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".gd"
        ],
        sovereign: true
    },
    {
        name: "Guadeloupe",
        nameFull: "Guadeloupe",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Guadeloupe,
        code3: ISOCountryCode3.Guadeloupe,
        dialCode: "+590",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".gp"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.France
    },
    {
        name: "Guam",
        nameFull: "The Territory of Guam",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Guam,
        code3: ISOCountryCode3.Guam,
        dialCode: "+1 671",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishUnitedStatesOfAmerica,
        ],
        domains: [
            ".gu"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedStatesOfAmerica,
    },
    {
        name: "Guatemala",
        nameFull: "The Republic of Guatemala",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        code: ISOCountryCode.Guatemala,
        code3: ISOCountryCode3.Guatemala,
        dialCode: "+502",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishGuatemala,
        ],
        domains: [
            ".gt"
        ],
        sovereign: true
    },
    {
        name: "Guernsey",
        nameFull: "The Bailiwick of Guernsey",
        region: [
            WorldRegion.Europe
        ],
        code: ISOCountryCode.Guernsey,
        code3: ISOCountryCode3.Guernsey,
        dialCode: ["+44 1481", "+44 7781", "+44 7839", "+44 7911"],
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".gg"
        ],
        sovereign: false,
    },
    {
        name: "Guinea",
        nameFull: "The Republic of Guinea",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Guinea,
        code3: ISOCountryCode3.Guinea,
        dialCode: "+224",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".gn"
        ],
        sovereign: true
    },
    {
        name: "Guinea-Bissau",
        nameFull: "The Republic of Guinea-Bissau",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.GuineaBissau,
        code3: ISOCountryCode3.GuineaBissau,
        dialCode: "+245",
        languages: [
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".gw"
        ],
        sovereign: true
    },
    {
        name: "Guyana",
        nameFull: "The Co-operative Republic of Guyana",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Guyana,
        code3: ISOCountryCode3.Guyana,
        dialCode: "+592",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".gy"
        ],
        sovereign: true
    },
    {
        name: "Haiti",
        nameFull: "The Republic of Haiti",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Haiti,
        code3: ISOCountryCode3.Haiti,
        dialCode: "+509",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".ht"
        ],
        sovereign: true
    },
    {
        name: "Heard Island and McDonald Islands",
        nameFull: "The Territory of Heard Island and McDonald Islands",
        region: [
            WorldRegion.Antarctica
        ],
        code: ISOCountryCode.HeardIslandAndMcdonaldIslands,
        code3: ISOCountryCode3.HeardIslandAndMcdonaldIslands,
        dialCode: "+0",
        languages: [],
        domains: [
            ".hm"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Australia
    },
    {
        name: "Vatican",
        nameFull: "The Holy See",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
        ],
        code: ISOCountryCode.Vatican,
        code3: ISOCountryCode3.Vatican,
        dialCode: "+379",
        languages: [
            ISOLanguageCode.Latin,
            ISOLanguageCode.Italian,
        ],
        domains: [
            ".va"
        ],
        sovereign: false
    },
    {
        name: "Honduras",
        nameFull: "The Republic of Honduras",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        code: ISOCountryCode.Honduras,
        code3: ISOCountryCode3.Honduras,
        dialCode: "+504",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishHonduras,
        ],
        domains: [
            ".hn"
        ],
        sovereign: true
    },
    {
        name: "Hong Kong",
        nameFull: "The Hong Kong Special Administrative Region of China",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.HongKong,
        code3: ISOCountryCode3.HongKong,
        dialCode: "+852",
        languages: [
            ISOLanguageCode.Chinese,
            ISOLanguageCode.ChineseHongKong,
        ],
        domains: [
            ".hk"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.China
    },
    {
        name: "Hungary",
        nameFull: "Hungary",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Hungary,
        code3: ISOCountryCode3.Hungary,
        dialCode: "+36",
        languages: [
            ISOLanguageCode.Hungarian,
        ],
        domains: [
            ".hu"
        ],
        sovereign: true
    },
    {
        name: "Iceland",
        nameFull: "Iceland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
        ],
        code: ISOCountryCode.Iceland,
        code3: ISOCountryCode3.Iceland,
        dialCode: "+354",
        languages: [
            ISOLanguageCode.Icelandic,
        ],
        domains: [
            ".is"
        ],
        sovereign: true
    },
    {
        name: "India",
        nameFull: "The Republic of India",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.India,
        code3: ISOCountryCode3.India,
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
        sovereign: true
    },
    {
        name: "Indonesia",
        nameFull: "The Republic of Indonesia",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Indonesia,
        code3: ISOCountryCode3.Indonesia,
        dialCode: "+62",
        languages: [
            ISOLanguageCode.Indonesian,
        ],
        domains: [
            ".id"
        ],
        sovereign: true
    },
    {
        name: "Iran",
        nameFull: "The Islamic Republic of Iran",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Iran,
        code3: ISOCountryCode3.Iran,
        dialCode: "+98",
        languages: [
            ISOLanguageCode.Persian,
        ],
        domains: [
            ".ir"
        ],
        sovereign: true
    },
    {
        name: "Iraq",
        nameFull: "The Republic of Iraq",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Iraq,
        code3: ISOCountryCode3.Iraq,
        dialCode: "+964",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicIraq,
        ],
        domains: [
            ".iq"
        ],
        sovereign: true
    },
    {
        name: "Ireland",
        nameFull: "Ireland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Ireland,
        code3: ISOCountryCode3.Ireland,
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
        sovereign: true
    },
    {
        name: "Isle of Man",
        nameFull: "The Isle of Man",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
        ],
        code: ISOCountryCode.IsleOfMan,
        code3: ISOCountryCode3.IsleOfMan,
        dialCode: ["+44 1624", "+44 7524", "+44 7624", "+44 7924"],
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".im"
        ],
        sovereign: false,
    },
    {
        name: "Israel",
        nameFull: "The State of Israel",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Israel,
        code3: ISOCountryCode3.Israel,
        dialCode: "+972",
        languages: [
            ISOLanguageCode.Hebrew,
        ],
        domains: [
            ".il"
        ],
        sovereign: true
    },
    {
        name: "Italy",
        nameFull: "The Italian Republic",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Italy,
        code3: ISOCountryCode3.Italy,
        dialCode: "+39",
        languages: [
            ISOLanguageCode.Italian,
            ISOLanguageCode.ItalianItaly,
        ],
        domains: [
            ".it"
        ],
        sovereign: true
    },
    {
        name: "Jamaica",
        nameFull: "Jamaica",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Jamaica,
        code3: ISOCountryCode3.Jamaica,
        dialCode: ["+1 658", "+1 876"],
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishJamaica,
        ],
        domains: [
            ".jm"
        ],
        sovereign: true
    },
    {
        name: "Japan",
        nameFull: "Japan",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Japan,
        code3: ISOCountryCode3.Japan,
        dialCode: "+81",
        languages: [
            ISOLanguageCode.Japanese,
        ],
        domains: [
            ".jp"
        ],
        sovereign: true
    },
    {
        name: "Jersey",
        nameFull: "The Bailiwick of Jersey",
        region: [
            WorldRegion.Europe
        ],
        code: ISOCountryCode.Jersey,
        code3: ISOCountryCode3.Jersey,
        dialCode: "+44 1534",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".je"
        ],
        sovereign: false,
    },
    {
        name: "Jordan",
        nameFull: "The Hashemite Kingdom of Jordan",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Jordan,
        code3: ISOCountryCode3.Jordan,
        dialCode: "+962",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicJordan,
        ],
        domains: [
            ".jo"
        ],
        sovereign: true
    },
    {
        name: "Kazakhstan",
        nameFull: "The Republic of Kazakhstan",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Kazakhstan,
        code3: ISOCountryCode3.Kazakhstan,
        dialCode: ["+7 6", "+7 7"],
        languages: [
            ISOLanguageCode.Kazakh,
            ISOLanguageCode.Russian,
        ],
        domains: [
            ".kz"
        ],
        sovereign: true
    },
    {
        name: "Kenya",
        nameFull: "The Republic of Kenya",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Kenya,
        code3: ISOCountryCode3.Kenya,
        dialCode: "+254",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishAfrica,
            ISOLanguageCode.Swahili,
        ],
        domains: [
            ".ke"
        ],
        sovereign: true
    },
    {
        name: "Kiribati",
        nameFull: "The Republic of Kiribati",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Kiribati,
        code3: ISOCountryCode3.Kiribati,
        dialCode: "+686",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".ki"
        ],
        sovereign: true
    },
    {
        name: "North Korea",
        nameFull: "The Democratic People's Republic of Korea",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.NorthKorea,
        code3: ISOCountryCode3.NorthKorea,
        dialCode: "+850",
        languages: [
            ISOLanguageCode.Korean,
        ],
        domains: [
            ".kp"
        ],
        sovereign: true
    },
    {
        name: "South Korea",
        nameFull: "The Republic of Korea",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.SouthKorea,
        code3: ISOCountryCode3.SouthKorea,
        dialCode: "+82",
        languages: [
            ISOLanguageCode.Korean,
        ],
        domains: [
            ".kr"
        ],
        sovereign: true
    },
    {
        name: "Kosovo",
        nameFull: "Republic of Kosovo",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        code: ISOCountryCode.Kosovo,
        code3: ISOCountryCode3.Kosovo,
        dialCode: "+383",
        languages: [
            ISOLanguageCode.Albanian,
            ISOLanguageCode.Serbian,
        ],
        domains: [
            ".xk"
        ],
        sovereign: true
    },
    {
        name: "Kuwait",
        nameFull: "The State of Kuwait",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Kuwait,
        code3: ISOCountryCode3.Kuwait,
        dialCode: "+965",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicKuwait,
        ],
        domains: [
            ".kw"
        ],
        sovereign: true
    },
    {
        name: "Kyrgyzstan",
        nameFull: "The Kyrgyz Republic",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Kyrgyzstan,
        code3: ISOCountryCode3.Kyrgyzstan,
        dialCode: "+996",
        languages: [
            ISOLanguageCode.Kyrgyz,
            ISOLanguageCode.Russian,
        ],
        domains: [
            ".kg"
        ],
        sovereign: true
    },
    {
        name: "Laos",
        nameFull: "The Lao People's Democratic Republic",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Laos,
        code3: ISOCountryCode3.Laos,
        dialCode: "+859",
        languages: [
            ISOLanguageCode.Lao,
        ],
        domains: [
            ".la"
        ],
        sovereign: true
    },
    {
        name: "Latvia",
        nameFull: "The Republic of Latvia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Latvia,
        code3: ISOCountryCode3.Latvia,
        dialCode: "+371",
        languages: [
            ISOLanguageCode.Latvian,
        ],
        domains: [
            ".lv"
        ],
        sovereign: true
    },
    {
        name: "Lebanon",
        nameFull: "The Lebanese Republic",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Lebanon,
        code3: ISOCountryCode3.Lebanon,
        dialCode: "+961",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicLebanon,
        ],
        domains: [
            ".lb"
        ],
        sovereign: true
    },
    {
        name: "Lesotho",
        nameFull: "The Kingdom of Lesotho",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Lesotho,
        code3: ISOCountryCode3.Lesotho,
        dialCode: "+266",
        languages: [
            ISOLanguageCode.Sotho,
            ISOLanguageCode.English,
        ],
        domains: [
            ".ls"
        ],
        sovereign: true
    },
    {
        name: "Liberia",
        nameFull: "The Republic of Liberia",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Liberia,
        code3: ISOCountryCode3.Liberia,
        dialCode: "+231",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".lr"
        ],
        sovereign: true
    },
    {
        name: "Libya",
        nameFull: "The State of Libya",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Libya,
        code3: ISOCountryCode3.Libya,
        dialCode: "+218",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicLibya,
        ],
        domains: [
            ".ly"
        ],
        sovereign: true
    },
    {
        name: "Liechtenstein",
        nameFull: "The Principality of Liechtenstein",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
        ],
        code: ISOCountryCode.Liechtenstein,
        code3: ISOCountryCode3.Liechtenstein,
        dialCode: "+423",
        languages: [
            ISOLanguageCode.German,
            ISOLanguageCode.GermanLiechtenstein,
        ],
        domains: [
            ".li"
        ],
        sovereign: true
    },
    {
        name: "Lithuania",
        nameFull: "The Republic of Lithuania",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
        ],
        code: ISOCountryCode.Lithuania,
        code3: ISOCountryCode3.Lithuania,
        dialCode: "+370",
        languages: [
            ISOLanguageCode.Lithuanian,
        ],
        domains: [
            ".lt"
        ],
        sovereign: true
    },
    {
        name: "Luxembourg",
        nameFull: "The Grand Duchy of Luxembourg",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Luxembourg,
        code3: ISOCountryCode3.Luxembourg,
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
        sovereign: true
    },
    {
        name: "Macau",
        nameFull: "The Macao Special Administrative Region of China",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Macau,
        code3: ISOCountryCode3.Macau,
        dialCode: "+853",
        languages: [
            ISOLanguageCode.Chinese,
            ISOLanguageCode.ChineseMacau,
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".mo"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.China
    },
    {
        name: "North Macedonia",
        nameFull: "The Republic of North Macedonia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
        ],
        code: ISOCountryCode.NorthMacedonia,
        code3: ISOCountryCode3.NorthMacedonia,
        dialCode: "+389",
        languages: [
            ISOLanguageCode.Macedonian,
            ISOLanguageCode.Albanian,
        ],
        domains: [
            ".mk"
        ],
        sovereign: true
    },
    {
        name: "Madagascar",
        nameFull: "The Republic of Madagascar",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Madagascar,
        code3: ISOCountryCode3.Madagascar,
        dialCode: "+261",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".mg"
        ],
        sovereign: true
    },
    {
        name: "Malawi",
        nameFull: "The Republic of Malawi",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Malawi,
        code3: ISOCountryCode3.Malawi,
        dialCode: "+265",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".mw"
        ],
        sovereign: true
    },
    {
        name: "Malaysia",
        nameFull: "Malaysia",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Malaysia,
        code3: ISOCountryCode3.Malaysia,
        dialCode: "+60",
        languages: [
            ISOLanguageCode.Malay,
            ISOLanguageCode.MalayMalaysia,
        ],
        domains: [
            ".my"
        ],
        sovereign: true
    },
    {
        name: "Maldives",
        nameFull: "The Republic of Maldives",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Maldives,
        code3: ISOCountryCode3.Maldives,
        dialCode: "+960",
        languages: [
            ISOLanguageCode.Maldivian,
        ],
        domains: [
            ".mv"
        ],
        sovereign: true
    },
    {
        name: "Mali",
        nameFull: "The Republic of Mali",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Mali,
        code3: ISOCountryCode3.Mali,
        dialCode: "+223",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchMali,
        ],
        domains: [
            ".ml"
        ],
        sovereign: true
    },
    {
        name: "Malta",
        nameFull: "The Republic of Malta",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Malta,
        code3: ISOCountryCode3.Malta,
        dialCode: "+356",
        languages: [
            ISOLanguageCode.Maltese,
            ISOLanguageCode.English,
        ],
        domains: [
            ".mt"
        ],
        sovereign: true
    },
    {
        name: "Marshall Islands",
        nameFull: "The Republic of the Marshall Islands",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.MarshallIslands,
        code3: ISOCountryCode3.MarshallIslands,
        dialCode: "+692",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".mh"
        ],
        sovereign: true
    },
    {
        name: "Martinique",
        nameFull: "Martinique",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Martinique,
        code3: ISOCountryCode3.Martinique,
        dialCode: "+596",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".mq"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.France
    },
    {
        name: "Mauritania",
        nameFull: "The Islamic Republic of Mauritania",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Mauritania,
        code3: ISOCountryCode3.Mauritania,
        dialCode: "+222",
        languages: [
            ISOLanguageCode.Arabic,
        ],
        domains: [
            ".mr"
        ],
        sovereign: true
    },
    {
        name: "Mauritius",
        nameFull: "The Republic of Mauritius",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Mauritius,
        code3: ISOCountryCode3.Mauritius,
        dialCode: "+230",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".mu"
        ],
        sovereign: true
    },
    {
        name: "Mayotte",
        nameFull: "The Department of Mayotte",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Mayotte,
        code3: ISOCountryCode3.Mayotte,
        dialCode: ["+262 269", "+262 639"],
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".yt"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.France
    },
    {
        name: "Mexico",
        nameFull: "The United Mexican States",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        code: ISOCountryCode.Mexico,
        code3: ISOCountryCode3.Mexico,
        dialCode: "+52",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishMexico,
        ],
        domains: [
            ".mx"
        ],
        sovereign: true
    },
    {
        name: "Micronesia",
        nameFull: "The Federated States of Micronesia",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Micronesia,
        code3: ISOCountryCode3.Micronesia,
        dialCode: "+691",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".fm"
        ],
        sovereign: true
    },
    {
        name: "Moldova",
        nameFull: "The Republic of Moldova",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        code: ISOCountryCode.Moldova,
        code3: ISOCountryCode3.Moldova,
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
        sovereign: true
    },
    {
        name: "Monaco",
        nameFull: "The Principality of Monaco",
        region: [
            WorldRegion.Europe,
        WorldRegion.EuropeSouthern,
        ],
        code: ISOCountryCode.Monaco,
        code3: ISOCountryCode3.Monaco,
        dialCode: "+377",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchMonaco,
        ],
        domains: [
            ".mc"
        ],
        sovereign: true
    },
    {
        name: "Mongolia",
        nameFull: "Mongolia",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Mongolia,
        code3: ISOCountryCode3.Mongolia,
        dialCode: "+976",
        languages: [
            ISOLanguageCode.Mongolian,
        ],
        domains: [
            ".mn"
        ],
        sovereign: true
    },
    {
        name: "Montenegro",
        nameFull: "Montenegro",
        region: [
            WorldRegion.Europe,
        WorldRegion.EuropeSouthern,
        ],
        code: ISOCountryCode.Montenegro,
        code3: ISOCountryCode3.Montenegro,
        dialCode: "+382",
        languages: [
            ISOLanguageCode.Serbian,
        ],
        domains: [
            ".me"
        ],
        sovereign: true
    },
    {
        name: "Montserrat",
        nameFull: "Montserrat",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.Montserrat,
        code3: ISOCountryCode3.Montserrat,
        dialCode: "+1 664",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".ms"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom
    },
    {
        name: "Morocco",
        nameFull: "The Kingdom of Morocco",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Morocco,
        code3: ISOCountryCode3.Morocco,
        dialCode: "+212",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicMorocco,
        ],
        domains: [
            ".ma"
        ],
        sovereign: true
    },
    {
        name: "Mozambique",
        nameFull: "The Republic of Mozambique",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Mozambique,
        code3: ISOCountryCode3.Mozambique,
        dialCode: "+258",
        languages: [
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".mz"
        ],
        sovereign: true
    },
    {
        name: "Myanmar",
        nameFull: "The Republic of the Union of Myanmar",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Myanmar,
        code3: ISOCountryCode3.Myanmar,
        dialCode: "+95",
        languages: [
            ISOLanguageCode.Burmese,
        ],
        domains: [
            ".mm"
        ],
        sovereign: true
    },
    {
        name: "Namibia",
        nameFull: "The Republic of Namibia",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Namibia,
        code3: ISOCountryCode3.Namibia,
        dialCode: "+264",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".na"
        ],
        sovereign: true
    },
    {
        name: "Nauru",
        nameFull: "The Republic of Nauru",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Nauru,
        code3: ISOCountryCode3.Nauru,
        dialCode: "+674",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".nr"
        ],
        sovereign: true
    },
    {
        name: "Nepal",
        nameFull: "The Federal Democratic Republic of Nepal",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Nepal,
        code3: ISOCountryCode3.Nepal,
        dialCode: "+977",
        languages: [
            ISOLanguageCode.Nepali,
        ],
        domains: [
            ".np"
        ],
        sovereign: true
    },
    {
        name: "Netherlands",
        nameFull: "The Kingdom of the Netherlands",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Netherlands,
        code3: ISOCountryCode3.Netherlands,
        dialCode: "+31",
        languages: [
            ISOLanguageCode.Dutch,
            ISOLanguageCode.DutchNetherlands,
        ],
        domains: [
            ".nl"
        ],
        sovereign: true
    },
    {
        name: "New Caledonia",
        nameFull: "New Caledonia",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.NewCaledonia,
        code3: ISOCountryCode3.NewCaledonia,
        dialCode: "+687",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".nc"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.France
    },
    {
        name: "New Zealand",
        nameFull: "New Zealand",
        region: [
            WorldRegion.Australia,
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.NewZealand,
        code3: ISOCountryCode3.NewZealand,
        dialCode: "+64",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishNewZealand,
            ISOLanguageCode.Maori,
        ],
        domains: [
            ".nz"
        ],
        sovereign: true
    },
    {
        name: "Nicaragua",
        nameFull: "The Republic of Nicaragua",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        code: ISOCountryCode.Nicaragua,
        code3: ISOCountryCode3.Nicaragua,
        dialCode: "+505",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishNicaragua,
        ],
        domains: [
            ".ni"
        ],
        sovereign: true
    },
    {
        name: "Niger",
        nameFull: "The Republic of the Niger",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Niger,
        code3: ISOCountryCode3.Niger,
        dialCode: "+227",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".ne"
        ],
        sovereign: true
    },
    {
        name: "Nigeria",
        nameFull: "The Federal Republic of Nigeria",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Nigeria,
        code3: ISOCountryCode3.Nigeria,
        dialCode: "+234",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.Igbo,
        ],
        domains: [
            ".ng"
        ],
        sovereign: true
    },
    {
        name: "Niue",
        nameFull: "Niue",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Niue,
        code3: ISOCountryCode3.Niue,
        dialCode: "+683",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishNewZealand,
        ],
        domains: [
            ".nu"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.NewZealand
    },
    {
        name: "Norfolk Island",
        nameFull: "The Territory of Norfolk Island",
        region: [
            WorldRegion.Australia
        ],
        code: ISOCountryCode.NorfolkIsland,
        code3: ISOCountryCode3.NorfolkIsland,
        dialCode: "+672 3",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.English,
        ],
        domains: [
            ".nf"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Australia
    },
    {
        name: "Northern Ireland",
        nameFull: "Northern Ireland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.MainlandUnitedKingdom
        ],
        code: ISOCountryCode.NorthernIreland,
        code3: null,
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
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
    },
    {
        name: "Northern Mariana Islands",
        nameFull: "The Commonwealth of the Northern Mariana Islands",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.NorthernMarianaIslands,
        code3: ISOCountryCode3.NorthernMarianaIslands,
        dialCode: "+1 670",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishUnitedStatesOfAmerica,
        ],
        domains: [
            ".mp"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedStatesOfAmerica
    },
    {
        name: "Norway",
        nameFull: "The Kingdom of Norway",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.Scandinavia,
        ],
        code: ISOCountryCode.Norway,
        code3: ISOCountryCode3.Norway,
        dialCode: "+47",
        languages: [
            ISOLanguageCode.Norwegian,
        ],
        domains: [
            ".no"
        ],
        sovereign: true
    },
    {
        name: "Oman",
        nameFull: "The Sultanate of Oman",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Oman,
        code3: ISOCountryCode3.Oman,
        dialCode: "+968",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicOman,
        ],
        domains: [
            ".om"
        ],
        sovereign: true
    },
    {
        name: "Pakistan",
        nameFull: "The Islamic Republic of Pakistan",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Pakistan,
        code3: ISOCountryCode3.Pakistan,
        dialCode: "+92",
        languages: [
            ISOLanguageCode.Urdu,
            ISOLanguageCode.English,
            ISOLanguageCode.Punjabi,
        ],
        domains: [
            ".pk"
        ],
        sovereign: true
    },
    {
        name: "Palau",
        nameFull: "The Republic of Palau",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Palau,
        code3: ISOCountryCode3.Palau,
        dialCode: "+680",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".pw"
        ],
        sovereign: true
    },
    {
        name: "Palestine",
        nameFull: "The State of Palestine",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Palestine,
        code3: ISOCountryCode3.Palestine,
        dialCode: "+970",
        languages: [
            ISOLanguageCode.Arabic,
        ],
        domains: [
            ".ps"
        ],
        sovereign: false
    },
    {
        name: "Panama",
        nameFull: "The Republic of Panamá",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        code: ISOCountryCode.Panama,
        code3: ISOCountryCode3.Panama,
        dialCode: "+507",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishPanama,
        ],
        domains: [
            ".pa"
        ],
        sovereign: true
    },
    {
        name: "Papua New Guinea",
        nameFull: "The Independent State of Papua New Guinea",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.PapuaNewGuinea,
        code3: ISOCountryCode3.PapuaNewGuinea,
        dialCode: "+675",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".pg"
        ],
        sovereign: true
    },
    {
        name: "Paraguay",
        nameFull: "The Republic of Paraguay",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.Paraguay,
        code3: ISOCountryCode3.Paraguay,
        dialCode: "+595",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.Guarani,
        ],
        domains: [
            ".py"
        ],
        sovereign: true
    },
    {
        name: "Peru",
        nameFull: "The Republic of Perú",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.Peru,
        code3: ISOCountryCode3.Peru,
        dialCode: "+51",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishPeru,
        ],
        domains: [
            ".pe"
        ],
        sovereign: true
    },
    {
        name: "Philippines",
        nameFull: "The Republic of the Philippines",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Philippines,
        code3: ISOCountryCode3.Philippines,
        dialCode: "+63",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishPhilippines,
        ],
        domains: [
            ".ph"
        ],
        sovereign: true
    },
    {
        name: "Pitcairn",
        nameFull: "The Pitcairn, Henderson, Ducie and Oeno Islands",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Pitcairn,
        code3: ISOCountryCode3.Pitcairn,
        dialCode: "+64",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".pn"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom
    },
    {
        name: "Poland",
        nameFull: "The Republic of Poland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Poland,
        code3: ISOCountryCode3.Poland,
        dialCode: "+48",
        languages: [
            ISOLanguageCode.Polish,
        ],
        domains: [
            ".pl"
        ],
        sovereign: true
    },
    {
        name: "Portugal",
        nameFull: "The Portuguese Republic",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Portugal,
        code3: ISOCountryCode3.Portugal,
        dialCode: "+351",
        languages: [
            ISOLanguageCode.Portuguese,
            ISOLanguageCode.PortuguesePortugal,
        ],
        domains: [
            ".pt"
        ],
        sovereign: true
    },
    {
        name: "Puerto Rico",
        nameFull: "The Commonwealth of Puerto Rico",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.PuertoRico,
        code3: ISOCountryCode3.PuertoRico,
        dialCode: ["+1 787", "+1 939"],
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishPuertoRico,
        ],
        domains: [
            ".pr"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedStatesOfAmerica
    },
    {
        name: "Qatar",
        nameFull: "The State of Qatar",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Qatar,
        code3: ISOCountryCode3.Qatar,
        dialCode: "+974",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicQatar,
        ],
        domains: [
            ".qa"
        ],
        sovereign: true
    },
    {
        name: "Réunion",
        nameFull: "Réunion",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Reunion,
        code3: ISOCountryCode3.Reunion,
        dialCode: "+262",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".re"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.France
    },
    {
        name: "Romania",
        nameFull: "Romania",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Romania,
        code3: ISOCountryCode3.Romania,
        dialCode: "+40",
        languages: [
            ISOLanguageCode.Romanian,
        ],
        domains: [
            ".ro"
        ],
        sovereign: true
    },
    {
        name: "Russian Federation",
        nameFull: "The Russian Federation",
        region: [
            WorldRegion.Europe,
            WorldRegion.Asia,
            WorldRegion.EuropeEastern,
        ],
        code: ISOCountryCode.RussianFederation,
        code3: ISOCountryCode3.RussianFederation,
        dialCode: "+7",
        languages: [
            ISOLanguageCode.Russian,
        ],
        domains: [
            ".ru"
        ],
        sovereign: true
    },
    {
        name: "Rwanda",
        nameFull: "The Republic of Rwanda",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Rwanda,
        code3: ISOCountryCode3.Rwanda,
        dialCode: "+250",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.French,
            ISOLanguageCode.Swahili,
        ],
        domains: [
            ".rw"
        ],
        sovereign: true
    },
    {
        name: "Saint Barthélemy",
        nameFull: "The Collectivity of Saint-Barthélemy",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.SaintBarthelemy,
        code3: ISOCountryCode3.SaintBarthelemy,
        dialCode: "+590",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".bl"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.France
    },
    {
        name: "Saint Helena, Ascension Island, Tristan da Cunha",
        nameFull: "Saint Helena, Ascension and Tristan da Cunha",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.SaintHelenaAscensionIslandTristanDaCunha,
        code3: ISOCountryCode3.SaintHelenaAscensionIslandTristanDaCunha,
        dialCode: "+290",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".sh"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom
    },
    {
        name: "Saint Kitts and Nevis",
        nameFull: "Saint Kitts and Nevis",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.SaintKittsAndNevis,
        code3: ISOCountryCode3.SaintKittsAndNevis,
        dialCode: "+1 869",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".kn"
        ],
        sovereign: true
    },
    {
        name: "Saint Lucia",
        nameFull: "Saint Lucia",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.SaintLucia,
        code3: ISOCountryCode3.SaintLucia,
        dialCode: "+1 758",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".lc"
        ],
        sovereign: true
    },
    {
        name: "Saint Martin",
        nameFull: "The Collectivity of Saint-Martin",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.SaintMartin,
        code3: ISOCountryCode3.SaintMartin,
        dialCode: "+590",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".mf"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.France
    },
    {
        name: "Saint Pierre and Miquelon",
        nameFull: "The Overseas Collectivity of Saint-Pierre and Miquelon",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        code: ISOCountryCode.SaintPierreAndMiquelon,
        code3: ISOCountryCode3.SaintPierreAndMiquelon,
        dialCode: "+508",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".pm"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.France
    },
    {
        name: "Saint Vincent and the Grenadines",
        nameFull: "Saint Vincent and the Grenadines",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.SaintVincentAndTheGrenadines,
        code3: ISOCountryCode3.SaintVincentAndTheGrenadines,
        dialCode: "+1 784",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".vc"
        ],
        sovereign: true
    },
    {
        name: "Samoa",
        nameFull: "The Independent State of Samoa",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Samoa,
        code3: ISOCountryCode3.Samoa,
        dialCode: "+685",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.Samoan,
        ],
        domains: [
            ".ws"
        ],
        sovereign: true
    },
    {
        name: "San Marino",
        nameFull: "The Republic of San Marino",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
        ],
        code: ISOCountryCode.SanMarino,
        code3: ISOCountryCode3.SanMarino,
        dialCode: "+378",
        languages: [
            ISOLanguageCode.Italian,
        ],
        domains: [
            ".sm"
        ],
        sovereign: true
    },
    {
        name: "Sao Tome and Principe",
        nameFull: "The Democratic Republic of São Tomé and Príncipe",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.SaoTomeAndPrincipe,
        code3: ISOCountryCode3.SaoTomeAndPrincipe,
        dialCode: "+239",
        languages: [
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".st"
        ],
        sovereign: true
    },
    {
        name: "Saudi Arabia",
        nameFull: "The Kingdom of Saudi Arabia",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.SaudiArabia,
        code3: ISOCountryCode3.SaudiArabia,
        dialCode: "+966",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicSaudiArabia,
        ],
        domains: [
            ".sa"
        ],
        sovereign: true
    },
    {
        name: "Scotland",
        nameFull: "Scotland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.MainlandUnitedKingdom
        ],
        code: ISOCountryCode.Scotland,
        code3: null,
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
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
    },
    {
        name: "Senegal",
        nameFull: "The Republic of Senegal",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Senegal,
        code3: ISOCountryCode3.Senegal,
        dialCode: "+221",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchSenegal,
        ],
        domains: [
            ".sn"
        ],
        sovereign: true
    },
    {
        name: "Serbia",
        nameFull: "The Republic of Serbia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        code: ISOCountryCode.Serbia,
        code3: ISOCountryCode3.Serbia,
        dialCode: "+381",
        languages: [
            ISOLanguageCode.Serbian,
        ],
        domains: [
            ".rs"
        ],
        sovereign: true
    },
    {
        name: "Seychelles",
        nameFull: "The Republic of Seychelles",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Seychelles,
        code3: ISOCountryCode3.Seychelles,
        dialCode: "+248",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.French,
        ],
        domains: [
            ".sc"
        ],
        sovereign: true
    },
    {
        name: "Sierra Leone",
        nameFull: "The Republic of Sierra Leone",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.SierraLeone,
        code3: ISOCountryCode3.SierraLeone,
        dialCode: "+232",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".sl"
        ],
        sovereign: true
    },
    {
        name: "Singapore",
        nameFull: "The Republic of Singapore",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Singapore,
        code3: ISOCountryCode3.Singapore,
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
        sovereign: true
    },
    {
        name: "Sint Maarten",
        nameFull: "Sint Maarten",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.SintMaarten,
        code3: ISOCountryCode3.SintMaarten,
        dialCode: "+1 721",
        languages: [
            ISOLanguageCode.Dutch,
            ISOLanguageCode.DutchNetherlands,
        ],
        domains: [
            ".sx"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Netherlands
    },
    {
        name: "Slovakia",
        nameFull: "The Slovak Republic",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Slovakia,
        code3: ISOCountryCode3.Slovakia,
        dialCode: "+421",
        languages: [
            ISOLanguageCode.Slovak,
        ],
        domains: [
            ".sk"
        ],
        sovereign: true
    },
    {
        name: "Slovenia",
        nameFull: "The Republic of Slovenia",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Slovenia,
        code3: ISOCountryCode3.Slovenia,
        dialCode: "+386",
        languages: [
            ISOLanguageCode.Slovenian,
        ],
        domains: [
            ".si"
        ],
        sovereign: true
    },
    {
        name: "Solomon Islands",
        nameFull: "The Solomon Islands",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.SolomonIslands,
        code3: ISOCountryCode3.SolomonIslands,
        dialCode: "+677",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".sb"
        ],
        sovereign: true
    },
    {
        name: "Somalia",
        nameFull: "The Federal Republic of Somalia",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Somalia,
        code3: ISOCountryCode3.Somalia,
        dialCode: "+252",
        languages: [
            ISOLanguageCode.Arabic,
        ],
        domains: [
            ".so"
        ],
        sovereign: true
    },
    {
        name: "South Africa",
        nameFull: "The Republic of South Africa",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.SouthAfrica,
        code3: ISOCountryCode3.SouthAfrica,
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
        sovereign: true
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        nameFull: "South Georgia and the South Sandwich Islands",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.SouthGeorgiaAndTheSouthSandwichIslands,
        code3: ISOCountryCode3.SouthGeorgiaAndTheSouthSandwichIslands,
        dialCode: "+500",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".gs"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom
    },
    {
        name: "South Sudan",
        nameFull: "The Republic of South Sudan",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.SouthSudan,
        code3: ISOCountryCode3.SouthSudan,
        dialCode: "+211",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".ss"
        ],
        sovereign: true
    },
    {
        name: "Spain",
        nameFull: "The Kingdom of Spain",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeSouthern,
            WorldRegion.EuropeanUnion,
        ],
        code: ISOCountryCode.Spain,
        code3: ISOCountryCode3.Spain,
        dialCode: "+34",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishSpain,
        ],
        domains: [
            ".es"
        ],
        sovereign: true
    },
    {
        name: "Sri Lanka",
        nameFull: "The Democratic Socialist Republic of Sri Lanka",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.SriLanka,
        code3: ISOCountryCode3.SriLanka,
        dialCode: "+94",
        languages: [
            ISOLanguageCode.Sinhalese,
            ISOLanguageCode.Tamil,
        ],
        domains: [
            ".lk"
        ],
        sovereign: true
    },
    {
        name: "Sudan",
        nameFull: "The Republic of the Sudan",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Sudan,
        code3: ISOCountryCode3.Sudan,
        dialCode: "+249",
        languages: [
            ISOLanguageCode.Arabic,
        ],
        domains: [
            ".sd"
        ],
        sovereign: true
    },
    {
        name: "Suriname",
        nameFull: "The Republic of Suriname",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.Suriname,
        code3: ISOCountryCode3.Suriname,
        dialCode: "+597",
        languages: [
            ISOLanguageCode.Dutch,
        ],
        domains: [
            ".sr"
        ],
        sovereign: true
    },
    {
        name: "Svalbard, Jan Mayen",
        nameFull: "Svalbard and Jan Mayen",
        region: [
            WorldRegion.Europe
        ],
        code: ISOCountryCode.SvalbardJanMayen,
        code3: ISOCountryCode3.SvalbardJanMayen,
        dialCode: "+47 79",
        languages: [
            ISOLanguageCode.Norwegian,
        ],
        domains: [
            ".no",
            ".sj"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.Norway
    },
    {
        name: "Sweden",
        nameFull: "The Kingdom of Sweden",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.EuropeanUnion,
            WorldRegion.Scandinavia,
        ],
        code: ISOCountryCode.Sweden,
        code3: ISOCountryCode3.Sweden,
        dialCode: "+46",
        languages: [
            ISOLanguageCode.Swedish,
            ISOLanguageCode.SwedishSweden,
        ],
        domains: [
            ".se"
        ],
        sovereign: true
    },
    {
        name: "Switzerland",
        nameFull: "The Swiss Confederation",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeWestern,
        ],
        code: ISOCountryCode.Switzerland,
        code3: ISOCountryCode3.Switzerland,
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
        sovereign: true
    },
    {
        name: "Syria",
        nameFull: "The Syrian Arab Republic",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Syria,
        code3: ISOCountryCode3.Syria,
        dialCode: "+963",
        languages: [
            ISOLanguageCode.Syriac,
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicSyria,
        ],
        domains: [
            ".sy"
        ],
        sovereign: true
    },
    {
        name: "Taiwan",
        nameFull: "The Republic of China",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Taiwan,
        code3: ISOCountryCode3.Taiwan,
        dialCode: "+886",
        languages: [
            ISOLanguageCode.Chinese,
            ISOLanguageCode.ChineseTaiwan,
        ],
        domains: [
            ".tw"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.China
    },
    {
        name: "Tajikistan",
        nameFull: "The Republic of Tajikistan",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Tajikistan,
        code3: ISOCountryCode3.Tajikistan,
        dialCode: "+992",
        languages: [
            ISOLanguageCode.Tajik,
        ],
        domains: [
            ".tj"
        ],
        sovereign: true
    },
    {
        name: "Tanzania",
        nameFull: "The United Republic of Tanzania",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Tanzania,
        code3: ISOCountryCode3.Tanzania,
        dialCode: "+255",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".tz"
        ],
        sovereign: true
    },
    {
        name: "Thailand",
        nameFull: "The Kingdom of Thailand",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Thailand,
        code3: ISOCountryCode3.Thailand,
        dialCode: "+66",
        languages: [
            ISOLanguageCode.Thai,
        ],
        domains: [
            ".th"
        ],
        sovereign: true
    },
    {
        name: "Timor-Leste",
        nameFull: "The Democratic Republic of Timor-Leste",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.TimorLeste,
        code3: ISOCountryCode3.TimorLeste,
        dialCode: "+670",
        languages: [
            ISOLanguageCode.Portuguese,
        ],
        domains: [
            ".tl"
        ],
        sovereign: true
    },
    {
        name: "Togo",
        nameFull: "The Togolese Republic",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Togo,
        code3: ISOCountryCode3.Togo,
        dialCode: "+228",
        languages: [
            ISOLanguageCode.French,
        ],
        domains: [
            ".tg"
        ],
        sovereign: true
    },
    {
        name: "Tokelau",
        nameFull: "Tokelau",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Tokelau,
        code3: ISOCountryCode3.Tokelau,
        dialCode: "+690",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".tk"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.NewZealand
    },
    {
        name: "Tonga",
        nameFull: "The Kingdom of Tonga",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Tonga,
        code3: ISOCountryCode3.Tonga,
        dialCode: "+676",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".to"
        ],
        sovereign: true
    },
    {
        name: "Trinidad and Tobago",
        nameFull: "The Republic of Trinidad and Tobago",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.TrinidadAndTobago,
        code3: ISOCountryCode3.TrinidadAndTobago,
        dialCode: "+1 868",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishTrinidadAndTobago,
        ],
        domains: [
            ".tt"
        ],
        sovereign: true
    },
    {
        name: "Tunisia",
        nameFull: "The Republic of Tunisia",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Tunisia,
        code3: ISOCountryCode3.Tunisia,
        dialCode: "+216",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicTunisia,
        ],
        domains: [
            ".tn"
        ],
        sovereign: true
    },
    {
        name: "Turkey",
        nameFull: "The Republic of Türkiye",
        region: [
            WorldRegion.Europe,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Turkey,
        code3: ISOCountryCode3.Turkey,
        dialCode: "+90",
        languages: [
            ISOLanguageCode.Turkish,
        ],
        domains: [
            ".tr"
        ],
        sovereign: true
    },
    {
        name: "Turkmenistan",
        nameFull: "Turkmenistan",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Turkmenistan,
        code3: ISOCountryCode3.Turkmenistan,
        dialCode: "+993",
        languages: [
            ISOLanguageCode.Turkmen,
        ],
        domains: [
            ".tm"
        ],
        sovereign: true
    },
    {
        name: "Turks and Caicos Islands",
        nameFull: "The Turks and Caicos Islands",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.TurksAndCaicosIslands,
        code3: ISOCountryCode3.TurksAndCaicosIslands,
        dialCode: "+1 649",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
            ISOLanguageCode.EnglishCaribbean,
        ],
        domains: [
            ".tc"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom
    },
    {
        name: "Tuvalu",
        nameFull: "Tuvalu",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Tuvalu,
        code3: ISOCountryCode3.Tuvalu,
        dialCode: "+688",
        languages: [
            ISOLanguageCode.Tuvalan,
        ],
        domains: [
            ".tv"
        ],
        sovereign: true
    },
    {
        name: "Uganda",
        nameFull: "The Republic of Uganda",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Uganda,
        code3: ISOCountryCode3.Uganda,
        dialCode: "+256",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.Swahili,
        ],
        domains: [
            ".ug"
        ],
        sovereign: true
    },
    {
        name: "Ukraine",
        nameFull: "Ukraine",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeEastern,
        ],
        code: ISOCountryCode.Ukraine,
        code3: ISOCountryCode3.Ukraine,
        dialCode: "+380",
        languages: [
            ISOLanguageCode.Ukrainian,
        ],
        domains: [
            ".ua"
        ],
        sovereign: true
    },
    {
        name: "United Arab Emirates",
        nameFull: "The United Arab Emirates",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.UnitedArabEmirates,
        code3: ISOCountryCode3.UnitedArabEmirates,
        dialCode: "+971",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicUnitedArabEmirates,
        ],
        domains: [
            ".ae"
        ],
        sovereign: true
    },
    {
        name: "United Kingdom",
        nameFull: "The United Kingdom of Great Britain and Northern Ireland",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
        ],
        code: ISOCountryCode.UnitedKingdom,
        code3: ISOCountryCode3.UnitedKingdom,
        dialCode: "+44",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".gb",
            ".uk"
        ],
        sovereign: true
    },
    {
        name: "United Nations",
        nameFull: "United Nations",
        region: [],
        code: ISOCountryCode.UnitedNations,
        code3: null,
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
        sovereign: false,
    },
    {
        name: "United States Minor Outlying Islands",
        nameFull: "Baker Island, Howland Island, Jarvis Island, Johnston Atoll, Kingman Reef, Midway Atoll, Navassa Island, Palmyra Atoll, and Wake Island",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.UnitedStatesMinorOutlyingIslands,
        code3: ISOCountryCode3.UnitedStatesMinorOutlyingIslands,
        dialCode: "+1",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishUnitedStatesOfAmerica,
        ],
        domains: [
            ".us"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedStatesOfAmerica
    },
    {
        name: "United States of America",
        nameFull: "The United States of America",
        region: [
            WorldRegion.America,
            WorldRegion.NorthAmerica
        ],
        code: ISOCountryCode.UnitedStatesOfAmerica,
        code3: ISOCountryCode3.UnitedStatesOfAmerica,
        dialCode: "+1",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishUnitedStatesOfAmerica,
        ],
        domains: [
            ".us"
        ],
        sovereign: true
    },
    {
        name: "Uruguay",
        nameFull: "The Oriental Republic of Uruguay",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica
        ],
        code: ISOCountryCode.Uruguay,
        code3: ISOCountryCode3.Uruguay,
        dialCode: "+598",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishUruguay,
        ],
        domains: [
            ".uy"
        ],
        sovereign: true
    },
    {
        name: "Uzbekistan",
        nameFull: "The Republic of Uzbekistan",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Uzbekistan,
        code3: ISOCountryCode3.Uzbekistan,
        dialCode: "+998",
        languages: [
            ISOLanguageCode.Uzbek,
        ],
        domains: [
            ".uz"
        ],
        sovereign: true
    },
    {
        name: "Vanuatu",
        nameFull: "The Republic of Vanuatu",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.Vanuatu,
        code3: ISOCountryCode3.Vanuatu,
        dialCode: "+678",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.French,
        ],
        domains: [
            ".vu"
        ],
        sovereign: true
    },
    {
        name: "Venezuela",
        nameFull: "The Bolivarian Republic of Venezuela",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Venezuela,
        code3: ISOCountryCode3.Venezuela,
        dialCode: "+58",
        languages: [
            ISOLanguageCode.Spanish,
            ISOLanguageCode.SpanishVenezuela,
        ],
        domains: [
            ".ve"
        ],
        sovereign: true
    },
    {
        name: "Vietnam",
        nameFull: "The Socialist Republic of Viet Nam",
        region: [
            WorldRegion.Asia
        ],
        code: ISOCountryCode.Vietnam,
        code3: ISOCountryCode3.Vietnam,
        dialCode: "+84",
        languages: [
            ISOLanguageCode.Vietnamese,
        ],
        domains: [
            ".vn"
        ],
        sovereign: true
    },
    {
        name: "Virgin Islands (British)",
        nameFull: "The Virgin Islands",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.VirginIslands,
        code3: ISOCountryCode3.VirginIslands,
        dialCode: "+1 284",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishGreatBritain,
        ],
        domains: [
            ".vg"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom
    },
    {
        name: "Virgin Islands (U.S.)",
        nameFull: "The Virgin Islands of the United States",
        region: [
            WorldRegion.America,
            WorldRegion.SouthAmerica,
            WorldRegion.Caribbean
        ],
        code: ISOCountryCode.VirginIslandsUS,
        code3: ISOCountryCode3.VirginIslandsUS,
        dialCode: "+1 340",
        languages: [
            ISOLanguageCode.English,
            ISOLanguageCode.EnglishUnitedStatesOfAmerica,
        ],
        domains: [
            ".vi"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedStatesOfAmerica
    },
    {
        name: "Wales",
        nameFull: "Wales",
        region: [
            WorldRegion.Europe,
            WorldRegion.EuropeNorthern,
            WorldRegion.MainlandUnitedKingdom
        ],
        code: ISOCountryCode.Wales,
        code3: null,
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
        sovereign: false,
        territoryOf: ISOCountryCode.UnitedKingdom,
    },
    {
        name: "Wallis and Futuna",
        nameFull: "The Territory of the Wallis and Futuna Islands",
        region: [
            WorldRegion.Oceania
        ],
        code: ISOCountryCode.WallisAndFutuna,
        code3: ISOCountryCode3.WallisAndFutuna,
        dialCode: "+681",
        languages: [
            ISOLanguageCode.French,
            ISOLanguageCode.FrenchFrance,
        ],
        domains: [
            ".wf"
        ],
        sovereign: false,
        territoryOf: ISOCountryCode.France
    },
    {
        name: "Yemen",
        nameFull: "The Republic of Yemen",
        region: [
            WorldRegion.Asia,
            WorldRegion.MiddleEast
        ],
        code: ISOCountryCode.Yemen,
        code3: ISOCountryCode3.Yemen,
        dialCode: "+967",
        languages: [
            ISOLanguageCode.Arabic,
            ISOLanguageCode.ArabicYemen,
        ],
        domains: [
            ".ye"
        ],
        sovereign: true
    },
    {
        name: "Zambia",
        nameFull: "The Republic of Zambia",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Zambia,
        code3: ISOCountryCode3.Zambia,
        dialCode: "+260",
        languages: [
            ISOLanguageCode.English,
        ],
        domains: [
            ".zm"
        ],
        sovereign: true
    },
    {
        name: "Zimbabwe",
        nameFull: "The Republic of Zimbabwe",
        region: [
            WorldRegion.Africa
        ],
        code: ISOCountryCode.Zimbabwe,
        code3: ISOCountryCode3.Zimbabwe,
        dialCode: "+263",
        languages: [
            ISOLanguageCode.EnglishZimbabwe,
        ],
        domains: [
            ".zw"
        ],
        sovereign: true
    }
];