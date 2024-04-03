import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from 'src/app/models/Device';
import { DeviceServiceService } from 'src/app/services/deviceService/device-service.service';

@Component({
  selector: 'app-update-device',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent {
  id!:number;
  device!:Device;
  constructor(private deviceService:DeviceServiceService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.device=new Device;
    this.id=this.route.snapshot.params['id'];

   this.deviceService.getDeviceById(this.id).subscribe(data =>{
    this.device=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.deviceService.updateDevice(this.id,this.device).subscribe(data=>{
    this.goToDeviceList();
 }, error => console.log(error));
  }
  
  goToDeviceList(){
    this.router.navigate(['/listDevices'])
  }
}
