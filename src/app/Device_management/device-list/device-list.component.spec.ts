// device-list.component.spec.ts (Unit Test for Component)

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceListComponent } from './device-list.component';
import { of } from 'rxjs';
import { DeviceServiceService } from 'src/app/services/deviceService/device-service.service';
import { Device } from 'src/app/models/Device';



describe('DeviceListComponent', () => {
  let component: DeviceListComponent;
  let fixture: ComponentFixture<DeviceListComponent>;
  let deviceServiceSpy: jasmine.SpyObj<DeviceServiceService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DeviceService', ['getAllDevices']);
    await TestBed.configureTestingModule({
      declarations: [ DeviceListComponent ],
      providers: [{ provide: DeviceServiceService, useValue: spy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListComponent);
    component = fixture.componentInstance;
    deviceServiceSpy = TestBed.inject(DeviceServiceService) as jasmine.SpyObj<DeviceServiceService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch devices on initialization', () => {
    const devices: Device[] = [
      { deviceId: 1, deviceType: 'Type 1', latitude: 123, longitude: 456, temperature: 25, humidity: 50 },
      { deviceId: 2, deviceType: 'Type 2', latitude: 789, longitude: 321, temperature: 22, humidity: 60 }
    ];
    deviceServiceSpy.getAllDevice.and.returnValue(of(devices));

    component.ngOnInit();

    expect(component.listdevices).toEqual(devices);
  });
});
