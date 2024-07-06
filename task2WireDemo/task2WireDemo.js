import { LightningElement } from 'lwc';

export default class Task2WireDemo extends LightningElement {
    age;
    gradeA=false;
    gradeB=false;
    gradeC=false;
    isBlank=false;

    saveText(event)
    {
        this.age = event.target.value;
    }
    searchOpp()
    {
        var jsAge=this.age;
        
        if(jsAge<18 && jsAge>0)
            {
                this.gradeA=true;
                this.gradeB=false;
                this.gradeC=false;
                
            }
        else if(jsAge>18 && jsAge<41)
            {
                this.gradeA=false;
                this.gradeB=true;
                this.gradeC=false;         
            }    
        else if(jsAge==='')
            {
                this.gradeA=false;
                this.gradeB=false;
                this.gradeC=false;    
                this.isBlank=true;
            }
           else if(jsAge>40)
                {
                    this.gradeA=false;
                    this.gradeB=false;
                    this.gradeC=true;          
                }
            else
            {
                this.gradeA=false;
                this.gradeB=false;
                this.gradeC=true;              
            }
    }
}