import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/Device';
import { DeviceServiceService } from 'src/app/services/deviceService/device-service.service';
import { ConfigureDataGenerationDialogComponent } from '../configure-data-generation-dialog/configure-data-generation-dialog.component';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.css']
})
export class ListDevicesComponent implements OnInit {
  device:Device = new Device();
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
  openAddDeviceDialog(deviceId: number): void {
    const dialogRef = this.dialog.open(ConfigureDataGenerationDialogComponent, {
      width: '800px',
     height:'600px',
    
      
      data: {deviceId:deviceId} // You can pass data to the dialog if needed
    });

    dialogRef.afterClosed().subscribe(result => {
       //Handle dialog closed event if needed
 });
  }

}
