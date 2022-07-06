import { Component, VERSION } from '@angular/core';
import { ContactDataService } from './services/contact-data.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor(private contactDataService: ContactDataService) {};
}

