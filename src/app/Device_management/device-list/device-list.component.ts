import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/Device';
import { DeviceServiceService } from 'src/app/services/deviceService/device-service.service';
import { CommonModule } from '@angular/common';
import { AddDeviceDialogComponent } from '../add-device-dialog/add-device-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent {
  listdevices:Device[]=[]
  constructor(private prodserv:DeviceServiceService,private route:Router,   private dialog: MatDialog // Ensure MatDialog is injected here
  )
  {

  }
  ngOnInit(): void {
    this.prodserv.getAllDevice().subscribe(
      (tab)=>(
        this.listdevices=tab
      )
    )
  }
  openAddDeviceDialog(): void {
    const dialogRef = this.dialog.open(AddDeviceDialogComponent, {
      width: '800px',
      height:'600px',
      
      data: {} // You can pass data to the dialog if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog closed event if needed
    });
  }
  deleteDevice(deviceId:number){
    this.prodserv.deleteDevice(deviceId).subscribe(data => {
      console.log(data);
      this.prodserv.getAllDevice();
    })
    location.reload();
    }
  
    updateDevice(id:number){
      this.route.navigate(['/updateDevice',id])
    }
    goToAddCategorie(){
      this.route.navigate(['/addDevice']);
    }


    deleteProduit(deviceId:number){
      this.prodserv.deleteDevice(deviceId).subscribe(data => {
        console.log(data);
        this.prodserv.getAllDevice();
      })
      location.reload();
      }
}

