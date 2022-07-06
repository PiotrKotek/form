import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ContactDataService {

   dataForm: any[]=[];

constructor (

) {};

adData(data) {
 this.dataForm.push(data)
 console.log(this.dataForm)
};

getPerson() {
  return this.dataForm
}

  
}