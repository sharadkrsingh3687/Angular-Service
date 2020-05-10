import { LoggingService} from './logging.service';
import { Injectable , EventEmitter} from '@angular/core';

@Injectable({providedIn: 'root'}) 

/* if you are using Angular 6 or below version, we can use 
* @Injectable()
* the code @Injectable({providerIn: 'root'}) is only used in Angular 6+ version.
*/

export class AccountsService
{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService){
      }

      AddAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});        
        this.loggingService.logStatusChange(status);
      }

      UpdateAccount(id: number, status: string){
         this.accounts[id].status = status;         
        this.loggingService.logStatusChange(status);
      }
      
}