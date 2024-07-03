import { LightningElement } from 'lwc';

export default class Comrvivideo65ConditionalRendering extends LightningElement {
    flag;
    
    isVoter(event)
    {
        /*  
              if(event.target.checked==true)
                {
                    this.flag=true;
                }
            else{
                this.flag=false;
            }    
        }
            Below code is short*/
        this.flag=event.target.checked;
    }
}