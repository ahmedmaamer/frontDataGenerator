import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeviceComponent } from './Device_management/add-device/add-device.component';
import { UpdateDeviceComponent } from './Device_management/update-device/update-device.component';
import { DeviceListComponent } from './Device_management/device-list/device-list.component';
import { ListDevicesComponent } from './Data_generation/list-devices/list-devices.component';

const routes: Routes = [

  
  {path:"addDevice", component:AddDeviceComponent},
  {path:"updateDevice/:id", component:UpdateDeviceComponent},
  {path:"listDevices", component:DeviceListComponent},
  {path:"deviceList", component:ListDevicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
