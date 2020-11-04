import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Country {
  code: string;
  name: string;
  languaje: string;
}

@Component({
  selector: 'app-modal-country',
  templateUrl: './modal-country.component.html',
  styleUrls: ['./modal-country.component.css']
})
export class ModalCountryComponent implements OnInit {

  selectedCountry: String;
  
  countries: Country[] = [
    {code: 'ar', name: 'Argentina', languaje: 'español' },
    {code: 'es', name: 'España',  languaje: 'español' },
    {code: 'fr', name: 'Francia',  languaje: 'frances' },
    {code: 'it', name: 'Italia',  languaje: 'italiano' },
  ];

  constructor(
    public dialogRef: MatDialogRef<ModalCountryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Country) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
