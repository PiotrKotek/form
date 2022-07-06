import { Component, OnInit } from '@angular/core';
import { ContactDataService } from '../services/contact-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private contactDataService: ContactDataService
  ) {}

  ngOnInit() {
  }

  get persons() {
    return this.contactDataService.getPerson()
  }

}