import { LightningElement } from 'lwc';

export default class FirstVelocityLWC extends LightningElement {
    firstNameJS;
    lastNameJS;
    handleEvent(event)
    {
        if(event.target.name=='firstName')
            {
                this.firstNameJS=event.target.value;
            }
        else if(event.target.name=='lastName')
            {
                this.lastNameJS=event.target.value;
            }    
           
    }
    handleClick()
    {
        alert('firstName :'+this.firstNameJS); 
    }
  
}