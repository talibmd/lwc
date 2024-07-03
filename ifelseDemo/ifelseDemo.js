import { LightningElement } from 'lwc';

export default class IfelseDemo extends LightningElement {
    ageJS;
    eligible=false;
    notEligible=false;
    evaluate(event)
    {
       this.ageJS= event.target.value;

       if(this.ageJS>0 && this.ageJS<130)
        {
            this.eligible=true;
            this.notEligible=true;
        }
        else if(this.ageJS=''|| this.ageJS>130)
            {
                this.eligible=false;
                this.notEligible=true;
            }
        
            
    }

}