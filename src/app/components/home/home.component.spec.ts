import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Dummy detail component
@Component({
  selector: 'app-detail',
  standalone: true,
  template: '',
})
class MockDetailComponent {
  @Input() countryData: any;
  @Output() triggerEvent = new EventEmitter<any>();
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const mockCountries = [
    {
      "name": {
          "common": "South Africa",
          "official": "Republic of South Africa",
          "nativeName": {
              "afr": {
                  "official": "Republiek van Suid-Afrika",
                  "common": "South Africa"
              },
              "eng": {
                  "official": "Republic of South Africa",
                  "common": "South Africa"
              },
              "nbl": {
                  "official": "IRiphabliki yeSewula Afrika",
                  "common": "Sewula Afrika"
              },
              "nso": {
                  "official": "Rephaboliki ya Afrika-Borwa ",
                  "common": "Afrika-Borwa"
              },
              "sot": {
                  "official": "Rephaboliki ya Afrika Borwa",
                  "common": "Afrika Borwa"
              },
              "ssw": {
                  "official": "IRiphabhulikhi yeNingizimu Afrika",
                  "common": "Ningizimu Afrika"
              },
              "tsn": {
                  "official": "Rephaboliki ya Aforika Borwa",
                  "common": "Aforika Borwa"
              },
              "tso": {
                  "official": "Riphabliki ra Afrika Dzonga",
                  "common": "Afrika Dzonga"
              },
              "ven": {
                  "official": "Riphabuḽiki ya Afurika Tshipembe",
                  "common": "Afurika Tshipembe"
              },
              "xho": {
                  "official": "IRiphabliki yaseMzantsi Afrika",
                  "common": "Mzantsi Afrika"
              },
              "zul": {
                  "official": "IRiphabliki yaseNingizimu Afrika",
                  "common": "Ningizimu Afrika"
              }
          }
      },
      "tld": [
          ".za"
      ],
      "cca2": "ZA",
      "ccn3": "710",
      "cca3": "ZAF",
      "cioc": "RSA",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
          "ZAR": {
              "name": "South African rand",
              "symbol": "R"
          }
      },
      "idd": {
          "root": "+2",
          "suffixes": [
              "7"
          ]
      },
      "capital": [
          "Pretoria",
          "Bloemfontein",
          "Cape Town"
      ],
      "altSpellings": [
          "ZA",
          "RSA",
          "Suid-Afrika",
          "Republic of South Africa"
      ],
      "region": "Africa",
      "subregion": "Southern Africa",
      "languages": {
          "afr": "Afrikaans",
          "eng": "English",
          "nbl": "Southern Ndebele",
          "nso": "Northern Sotho",
          "sot": "Southern Sotho",
          "ssw": "Swazi",
          "tsn": "Tswana",
          "tso": "Tsonga",
          "ven": "Venda",
          "xho": "Xhosa",
          "zul": "Zulu"
      },
      "translations": {
          "ara": {
              "official": "جمهورية جنوب أفريقيا",
              "common": "جنوب أفريقيا"
          },
          "bre": {
              "official": "Republik Suafrika",
              "common": "Suafrika"
          },
          "ces": {
              "official": "Jihoafrická republika",
              "common": "Jihoafrická republika"
          },
          "cym": {
              "official": "Republic of South Africa",
              "common": "South Africa"
          },
          "deu": {
              "official": "Republik Südafrika",
              "common": "Südafrika"
          },
          "est": {
              "official": "Lõuna-Aafrika Vabariik",
              "common": "Lõuna-Aafrika Vabariik"
          },
          "fin": {
              "official": "Etelä-Afrikan tasavalta",
              "common": "Etelä-Afrikka"
          },
          "fra": {
              "official": "République d'Afrique du Sud",
              "common": "Afrique du Sud"
          },
          "hrv": {
              "official": "Južnoafrička Republika",
              "common": "Južna Afrika"
          },
          "hun": {
              "official": "Dél-afrikai Köztársaság",
              "common": "Dél-afrikai Köztársaság"
          },
          "ita": {
              "official": "Repubblica del Sud Africa",
              "common": "Sud Africa"
          },
          "jpn": {
              "official": "南アフリカ共和国",
              "common": "南アフリカ"
          },
          "kor": {
              "official": "남아프리카 공화국",
              "common": "남아프리카"
          },
          "nld": {
              "official": "Republiek Zuid-Afrika",
              "common": "Zuid-Afrika"
          },
          "per": {
              "official": "جمهوری آفریقای جنوبی",
              "common": "آفریقای جنوبی"
          },
          "pol": {
              "official": "Republika Południowej Afryki",
              "common": "Południowa Afryka"
          },
          "por": {
              "official": "República da África do Sul",
              "common": "África do Sul"
          },
          "rus": {
              "official": "Южно-Африканская Республика",
              "common": "Южная Африка"
          },
          "slk": {
              "official": "Juhoafrická republika",
              "common": "Južná Afrika"
          },
          "spa": {
              "official": "República de Sudáfrica",
              "common": "Sudáfrica"
          },
          "srp": {
              "official": "Република Јужна Африка",
              "common": "Јужноафричка Република"
          },
          "swe": {
              "official": "Republiken Sydafrika",
              "common": "Sydafrika"
          },
          "tur": {
              "official": "Güney Afrika Cumhuriyeti",
              "common": "Güney Afrika"
          },
          "urd": {
              "official": "جمہوریہ جنوبی افریقا",
              "common": "جنوبی افریقا"
          },
          "zho": {
              "official": "南非共和国",
              "common": "南非"
          }
      },
      "latlng": [
          -29,
          24
      ],
      "landlocked": false,
      "borders": [
          "BWA",
          "LSO",
          "MOZ",
          "NAM",
          "SWZ",
          "ZWE"
      ],
      "area": 1221037,
      "demonyms": {
          "eng": {
              "f": "South African",
              "m": "South African"
          },
          "fra": {
              "f": "Sud-africaine",
              "m": "Sud-africain"
          }
      },
      "flag": "🇿🇦",
      "maps": {
          "googleMaps": "https://goo.gl/maps/CLCZ1R8Uz1KpYhRv6",
          "openStreetMaps": "https://www.openstreetmap.org/relation/87565"
      },
      "population": 59308690,
      "gini": {
          "2014": 63
      },
      "fifa": "RSA",
      "car": {
          "signs": [
              "ZA"
          ],
          "side": "left"
      },
      "timezones": [
          "UTC+02:00"
      ],
      "continents": [
          "Africa"
      ],
      "flags": {
          "png": "https://flagcdn.com/w320/za.png",
          "svg": "https://flagcdn.com/za.svg",
          "alt": "The flag of South Africa is composed of two equal horizontal bands of red and blue, with a yellow-edged black isosceles triangle superimposed on the hoist side of the field. This triangle has its base centered on the hoist end, spans about two-fifth the width and two-third the height of the field, and is enclosed on its sides by the arms of a white-edged green horizontally oriented Y-shaped band which extends along the boundary of the red and blue bands to the fly end of the field."
      },
      "coatOfArms": {
          "png": "https://mainfacts.com/media/images/coats_of_arms/za.png",
          "svg": "https://mainfacts.com/media/images/coats_of_arms/za.svg"
      },
      "startOfWeek": "monday",
      "capitalInfo": {
          "latlng": [
              -25.7,
              28.22
          ]
      },
      "postalCode": {
          "format": "####",
          "regex": "^(\\d{4})$"
      }
  }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        MockDetailComponent,
        MatCardModule,
        MatPaginatorModule,
        CommonModule,
        NoopAnimationsModule
      ],
      providers: [
        provideHttpClient(),
        provideAnimations()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.pagedCountries = mockCountries;
    component.countriesData = mockCountries;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display country cards', () => {
    const cards = fixture.debugElement.queryAll(By.css('mat-card'));
    expect(cards.length).toBe(mockCountries.length);
  });

  it('should render paginator', () => {
    const paginator = fixture.debugElement.query(By.css('mat-paginator'));
    expect(paginator).toBeTruthy();
  });

  it('should show detail component when showDetail is true', () => {
    component.showDetail = true;
    component.selectedCountry = mockCountries[0];
    fixture.detectChanges();

    const detailComp = fixture.debugElement.query(By.css('app-detail'));
    expect(detailComp).toBeTruthy();
  });
});
