import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary form-related modules
import { Device } from 'src/app/models/Device';
import { DeviceServiceService } from 'src/app/services/deviceService/device-service.service';

@Component({
  selector: 'app-add-device-dialog',
  templateUrl: './add-device-dialog.component.html',
  styleUrls: ['./add-device-dialog.component.scss']
})
export class AddDeviceDialogComponent implements OnInit {
  deviceForm!: FormGroup;
  attributes: { [key: string]: string } = {};
  device:Device=new Device();
  constructor(private formBuilder: FormBuilder , private deviceService : DeviceServiceService) { }

  ngOnInit(): void {
    this.deviceForm = this.formBuilder.group({
      key: ['', Validators.required],
      value: ['', Validators.required]
    });
  }
  getAttributeKeys(): string[] {
    return this.attributes ? Object.keys(this.attributes) : [];
  }
  
  addAttribute(): void {
    if (this.deviceForm.valid) {
      const key = this.deviceForm.get('key')?.value;
      const value = this.deviceForm.get('value')?.value;
      
      // Add the new attribute to the map
      this.attributes[key] = value;

      // Reset the form
      this.deviceForm.reset();
    } else {
      // Handle form validation errors
    }
    this.device.attributes = this.attributes;
    console.log(this.device.attributes);
  }

  removeAttribute(key: string): void {
    delete this.attributes[key];
  }


  createDevice(): void {
    this.device.attributes = this.attributes;
    this.deviceService.createDevice(this.device).subscribe(
      (response) => {
        console.log('Device created:', response);
        // Optionally, perform any other actions upon successful creation
      },
      (error) => {
        console.error('Error creating device:', error);
        // Handle error appropriately
      }
    );
  }
}