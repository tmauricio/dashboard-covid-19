import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from 'src/app/models/covid-info.model';



@Component({
  selector: 'app-modal-country',
  templateUrl: './modal-country.component.html',
  styleUrls: ['./modal-country.component.css']
})
export class ModalCountryComponent implements OnInit {

  selectedCountry: Country;
  countries: string[];

  constructor(
    public dialogRef: MatDialogRef<ModalCountryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) { }

  ngOnInit(): void {
    this.countries = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
