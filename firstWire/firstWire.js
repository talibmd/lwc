import { LightningElement,wire } from 'lwc';
import fetchAcList from '@salesforce/apex/firstWireClass.acccList';

export default class FirstWire extends LightningElement {
    @wire(fetchAcList)
    accList;
}