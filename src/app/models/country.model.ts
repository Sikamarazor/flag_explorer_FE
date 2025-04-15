export interface Country {
    name: CountryName;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Record<string, Currency>;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Record<string, string>;
    translations: Record<string, Translation>;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Record<string, Demonym>;
    flag: string;
    maps: Maps;
    population: number;
    gini: Record<string, number>;
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: FlagImages;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: LatLng;
    postalCode: PostalCode;
  }
  
  export interface CountryName {
    common: string;
    official: string;
    nativeName: Record<string, NativeName>;
  }
  
  export interface NativeName {
    official: string;
    common: string;
  }
  
  export interface Currency {
    name: string;
    symbol: string;
  }
  
  export interface Idd {
    root: string;
    suffixes: string[];
  }
  
  export interface Translation {
    official: string;
    common: string;
  }
  
  export interface Demonym {
    f: string;
    m: string;
  }
  
  export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
  }
  
  export interface Car {
    signs: string[];
    side: string;
  }
  
  export interface FlagImages {
    png: string;
    svg: string;
    alt: string;
  }
  
  export interface CoatOfArms {
    png: string;
    svg: string;
  }
  
  export interface LatLng {
    latlng: number[];
  }
  
  export interface PostalCode {
    format: string;
    regex: string;
  }
  