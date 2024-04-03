export class Device {
    deviceId!: number;
    deviceName!: string;
    deviceType!: string;
    deviceStatus!: string;
      attributes: { [key: string]: string } = {}; // Map<AttributeName, AttributeType>
    
  }
  