import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { OperationsService } from './operations.service';

describe('OperationsService', () => {
  let service: OperationsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Mock the HttpClient module
      providers: [
        OperationsService
      ]
    });

    service = TestBed.inject(OperationsService);
    httpMock = TestBed.inject(HttpTestingController); // Inject HttpTestingController
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch countries data', () => {
    const mockData = [
      { name: { common: 'South Africa' }, flags: { png: 'flag_url' } },
      { name: { common: 'Brazil' }, flags: { png: 'flag_url' } },
    ];

    // Call the service method
    service.getCountries().subscribe((data) => {
      expect(data).toEqual(mockData); 
    });

    // Expect the correct HTTP request
    const req = httpMock.expectOne(service.baseApiLink + 'all');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);

    httpMock.verify();
  });
});
