import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailComponent } from './detail.component';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  const mockCountryData = {
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
    },
    "translations": {
        "ara": {
            "official": "جمهورية جنوب أفريقيا",
            "common": "جنوب أفريقيا"
        },
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
};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DetailComponent,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        NoopAnimationsModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;

    component.countryData = mockCountryData;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct country name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('South Africa');
  });

  it('should display the correct capital list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Pretoria, Bloemfontein, Cape Town');
  });

  it('should call goBack() when the button is clicked', () => {
    spyOn(component, 'goBack');
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    expect(component.goBack).toHaveBeenCalled();
  });

  it('should render flag image correctly', () => {
    const img = fixture.debugElement.query(By.css('img')).nativeElement as HTMLImageElement;
    expect(img.src).toContain(mockCountryData.flags.png);
    expect(img.alt).toContain('flag of South Africa');
  });
});
