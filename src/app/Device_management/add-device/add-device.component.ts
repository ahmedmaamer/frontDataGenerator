import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/Device';
import { DeviceServiceService } from 'src/app/services/deviceService/device-service.service';

@Component({
  selector: 'app-add-device',
  standalone: true,
  imports: [ CommonModule,
    FormsModule],
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent {
  id!:number
  device:Device= new Device();
  
  constructor(private deviceService : DeviceServiceService,private router:Router){}
  ngOnInit():void {

  }
  saveDevice(){
    this.deviceService.createDevice(this.device).subscribe(data =>{
      console.log(data);
      this.goToListDevices();
      },
      error =>console.log(error));
  }

  goToListDevices(){
    this.router.navigate(['/listDevices'])
  }

  onSubmit(){
    console.log(this.device);
    this.saveDevice();
  };

}
