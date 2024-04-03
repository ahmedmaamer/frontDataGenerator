// device.service.spec.ts (Unit Test for Service)

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Device } from 'src/app/models/Device';
import { DeviceServiceService } from './device-service.service';

describe('DeviceServiceService', () => {
  let service: DeviceServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeviceServiceService] // Update service provider
    });
    service = TestBed.inject(DeviceServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch devices from API', () => {
    const mockDevices: Device[] = [
      { deviceId: 1, deviceType: 'Type 1', latitude: 123, longitude: 456, temperature: 25, humidity: 50 },
      { deviceId: 2, deviceType: 'Type 2', latitude: 789, longitude: 321, temperature: 22, humidity: 60 }
    ];
    service.getAllDevice().subscribe(devices => {
      expect(devices).toEqual(mockDevices);
    });

    const req = httpMock.expectOne('http://localhost:8002/get_all_device'); // Update URL
    expect(req.request.method).toBe('GET');
    req.flush(mockDevices);
    httpMock.verify();
  });

  // Write similar tests for other methods like deleteDevice, createDevice, getDeviceById, and updateDevice
});
