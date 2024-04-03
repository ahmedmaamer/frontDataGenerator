import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdkStepperModule } from '@angular/cdk/stepper'; // Import CdkStepperModule

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper'; // Import MatStepperModule

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddDeviceDialogComponent } from './Device_management/add-device-dialog/add-device-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { 
	IgxStepperModule,
	IgxIconModule,
	IgxButtonModule,
	IgxButtonGroupModule,
	IgxInputGroupModule,
	IgxRadioModule
 } from "igniteui-angular";
import { ListDevicesComponent } from './Data_generation/list-devices/list-devices.component';
import { ConfigureDataGenerationDialogComponent } from './Data_generation/configure-data-generation-dialog/configure-data-generation-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    AddDeviceDialogComponent,
    ListDevicesComponent,
    ConfigureDataGenerationDialogComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule ,
    MatStepperModule ,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    IgxStepperModule,
	IgxIconModule,
	IgxButtonModule,
	IgxButtonGroupModule,
	IgxInputGroupModule,
	IgxRadioModule,
  CdkStepperModule // Add CdkStepperModule to imports array

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
