import { LightningElement } from 'lwc';

export default class ComrevoGetterProperty extends LightningElement {
    
    Employee={
        Name:'Talib',
        Age:27
    }
    get getEmployeeRank()
    {
        const Rank = this.Employee.Age>=30?'young':'Immature';
        return Rank;
    }
}