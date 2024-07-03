import { LightningElement,track,wire } from 'lwc';
import searchAcc from '@salesforce/apex/TaskWireDemo1Class.searchAccounts';
export default class TaskWireDemo1 extends LightningElement {
    
    @track
    searchText;

    @track
    ResultList;

    @track
    errorList;


    searchAccount(event)
    {
        console.log('iside method on button click');
        
        searchAcc({txt:event.target.value}).then(result => {
            console.log('inside then');
            this.ResultList=result;
        }).catch(error => 
            {
                console.log('inside error');
                this.errorList=error;
            }
        );
    }
}