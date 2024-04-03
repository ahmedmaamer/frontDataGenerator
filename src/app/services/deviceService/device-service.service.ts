import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from 'src/app/models/Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceServiceService {


  constructor(private httpclt:HttpClient){

  }
  getAllDevice():Observable<Device[]>
  {
    return this.httpclt.get<Device[]>("http://localhost:8080/get_devices")
  }
  deleteDevice(id:number):Observable<Object> {
    return this.httpclt.delete(`http://localhost:8080/delete_device/${id}`)
  }
  createDevice(device:Device):Observable<Object>{
    return this.httpclt.post(`http://localhost:8080/create_device`,device)
  }
   getDeviceById(id:number):Observable<Device>{
    return this.httpclt.get<Device>(`http://localhost:8080/get_device_by_id/${id}`);
   }
   updateDevice(id:number,device:Device):Observable<Object>{
    return this.httpclt.put(`http://localhost:8002/update_device/${id}`,device)
   }}
