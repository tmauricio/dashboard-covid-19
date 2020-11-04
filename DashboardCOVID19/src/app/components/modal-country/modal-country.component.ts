import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Country {
  code: string;
  name: string;
}

@Component({
  selector: 'app-modal-country',
  templateUrl: './modal-country.component.html',
  styleUrls: ['./modal-country.component.css']
})
export class ModalCountryComponent implements OnInit {

  selectedCountry: String;
  
  countries: Country[] = [
    {code: 'ar', name: 'Argentina'},
    {code: 'es', name: 'España'},
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
