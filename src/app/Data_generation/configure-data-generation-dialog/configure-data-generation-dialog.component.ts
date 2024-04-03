import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Device } from 'src/app/models/Device';
import { DeviceServiceService } from 'src/app/services/deviceService/device-service.service';

// Define an interface or class to hold attribute details
interface Attribute {
  attributeName: string;
  attributeType: string;
  generationMethod: string;
  minValue?: number;
  maxValue?: number;
  randomList?: string;
  pattern?: string;
  startDate?: string;
  endDate?: string;
  dateList?: string;
}

@Component({
  selector: 'app-configure-data-generation-dialog',
  templateUrl: './configure-data-generation-dialog.component.html',
  styleUrls: ['./configure-data-generation-dialog.component.scss']
})
export class ConfigureDataGenerationDialogComponent implements OnInit {
  device: Device = new Device();
  selectedAttributeName: string = '';
  selectedAttributeType: string = '';
  selectedGenerationMethod: string = '';
  showTypeSelect: boolean = true;
  placeholderOptions: string[] = [];
  attributes: Attribute[] = []; // Array to hold attribute details

  constructor(@Inject(MAT_DIALOG_DATA) public data: { deviceId: number }, private deviceService: DeviceServiceService) { }

  ngOnInit(): void {
    this.deviceService.getDeviceById(this.data.deviceId).subscribe((data) => {
      this.device = data;
    });
    this.addAttribute();

  }

  getAttributeKeys(): string[] {
    return Object.keys(this.device.attributes);
  }

  updateAttributeValue(index: number): void {
    this.attributes[index].attributeType = this.device.attributes[this.attributes[index].attributeName];
    this.showTypeSelect = this.attributes[index].attributeType !== 'boolean';
    // Reset selected generation method and fields when attribute changes
    this.attributes[index].generationMethod = '';
    this.resetGenerationFields(index);
  }

  updateGenerationFields(index: number): void {
    this.resetGenerationFields(index);

    switch (this.attributes[index].generationMethod) {
      case 'Random':
        this.attributes[index].minValue = undefined;
        this.attributes[index].maxValue = undefined;
        break;
      case 'RandomList':
        this.attributes[index].randomList = undefined;
        break;
      case 'Pattern':
        this.attributes[index].pattern = undefined;
        break;
      case 'RangeBetweenTwoDates':
        this.attributes[index].startDate = undefined;
        this.attributes[index].endDate = undefined;
        break;
      case 'ListOfDates':
        this.attributes[index].dateList = undefined;
        break;
      default:
        break;
    }
  }

  resetGenerationFields(index: number): void {
    this.attributes[index].minValue = undefined;
    this.attributes[index].maxValue = undefined;
    this.attributes[index].randomList = undefined;
    this.attributes[index].pattern = undefined;
    this.attributes[index].startDate = undefined;
    this.attributes[index].endDate = undefined;
    this.attributes[index].dateList = undefined;
  }

  addAttribute() {
    // Create a new attribute instance and push it to the attributes array
    const newAttribute: Attribute = {
      attributeName: this.selectedAttributeName,
      attributeType: this.selectedAttributeType,
      generationMethod: this.selectedGenerationMethod,
      minValue: undefined,
      maxValue: undefined,
      randomList: undefined,
      pattern: undefined,
      startDate: undefined,
      endDate: undefined,
      dateList: undefined
    };
    this.attributes.push(newAttribute);
    
    // Clear the fields after adding the attribute
    this.selectedAttributeName = '';
    this.selectedAttributeType = '';
    this.selectedGenerationMethod = '';
  }

  removeAttribute(index: number): void {
    this.attributes.splice(index, 1);
  }

  saveConfiguration() {
    // Logic to save the configuration
  }

  generateData() {
    // Logic to generate data based on the configuration
  }

  
}
