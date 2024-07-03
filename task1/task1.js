import { LightningElement } from 'lwc';

export default class Task1 extends LightningElement {
    Num1;
    Num2;
    GradePoint;
    percentage;
    assign(event)
    {
        if(event.target.name=='OMarks')
            {
                this.Num1=event.target.value;    
            }
        
        
        else if(event.target.name=='TMarks')
            {
                this.Num2=event.target.value;    
            }
              
    }   
    
    Grade()

    {
        this.percentage=(this.Num1/this.Num2)*100;
        alert(this.percentage+' Percentage');
        this.GradePoint=A;
    }
           
}