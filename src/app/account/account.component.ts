import { Component, Input } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

    @Input() account : {name: string, status: string};
    @Input() id: number;

    constructor(private accountsService: AccountsService){
      this.accountsService.statusUpdated.subscribe(
        (status: string) => alert('New Status :' + status)
      )
    }

    onSetTo(status: string){
      this.accountsService.UpdateAccount(this.id, status);
    }


}
