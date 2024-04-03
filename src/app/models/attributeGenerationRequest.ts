export class AttributeGenerationRequest {
    attributeName!: string;
    dataType!: string;
    minValue!: number;
    maxValue!: number;
    stringLength!: number;
    dataPoints!: number;
    generationMethod!: string;
    specifiedValues!: number[];
    specifiedDates!: string[];
    firstDate!: Date;
    lastDate!: Date;
    ranges!: { first: number, second: number }[];
    dateGenerationMethod!: string;
    stringGenerationMethod!: string;
    specifiedStringValues!: string[];
    pattern!: string;
}