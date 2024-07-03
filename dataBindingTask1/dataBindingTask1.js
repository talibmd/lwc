import { LightningElement } from 'lwc';

export default class DataBindingTask1 extends LightningElement {
    JSfname='Talib';
    handleButton()
    {
        alert('Name: '+JSfname);
    }
    Student={
        Name:'Alim',
        class: 7,
        salary:'1000000'
    }
    
}