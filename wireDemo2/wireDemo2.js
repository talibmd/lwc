import { LightningElement,track,wire } from 'lwc';
import opListWire from '@salesforce/apex/fetchOppWire.fetchOpp';

export default class WireDemo2 extends LightningElement {
    
    @track
    trackOpList;

    @track
    trackErrorList;

    @wire(opListWire)
    wireFunction({error,data})
    {
        if(data)
            {
                console.log('Data fetched in property trackOpList');
                this.trackOpList=data;
            }
        else if(error)
            {
                console.log('Error Occured');
                this.trackErrorList=error;
            }    
    }
}