import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ButtonsDemo extends LightningElement {
    infoButton(){
        const event = new ShowToastEvent({
            title:'Jankari',
            message:'ye jankari toast hai!',
            variant:'Info',
            mode:'Dismissable'
        });
        this.dispatchEvent(event);
    }
    warningButton(){
        const event = new ShowToastEvent({
            title:'Khatra',
            message:'aage baht khatra hai ji!',
            variant:'Warning',
            mode:'Pester'
        });
        this.dispatchEvent(event);
    }
    errorButton(){
        const event = new ShowToastEvent({
            title:'Bahut bada error',
            message:'kaaji! bewakuf ho ka?',
            variant:'Error',
            mode:'Sticky'
        });
        this.dispatchEvent(event);
    }
    successButton(){
        const event = new ShowToastEvent({
            title:'Pass ba ho pura!',
            message:'Maza aa gail',
            variant:'Success'
        });
        this.dispatchEvent(event);
    }
}