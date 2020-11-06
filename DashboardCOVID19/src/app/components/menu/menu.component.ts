import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Country } from 'src/app/models/covid-info.model';
import { GeolocationModel } from 'src/app/models/geolocation.model';
import { CovidService } from 'src/app/services/covid.service';
import { GeoipService } from 'src/app/services/geoip.service';
import { ModalCountryComponent } from '../modal-country/modal-country.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  countries: Country[];
  selectedCountry: Country;
  @Output()
  changeCountryEvent = new EventEmitter<Country>();

  constructor(
    public dialog: MatDialog,
    public geoipService: GeoipService) {}


  ngOnInit(): void {
    this.getListCountry();

    this.geoipService.getInfoCountry().subscribe((response: GeolocationModel) => {
      this.selectedCountry = this.countries.find((country) => { return country.name === response.country_name});
      this.changeCountryEvent.emit(this.selectedCountry);
    });
  }

  openDialogSelectCountry(): void {
    const dialogRef = this.dialog.open(ModalCountryComponent, {
      width: '250px',
      data: this.countries
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedCountry = result;
        this.changeCountryEvent.emit(this.selectedCountry);
      }
    });
  }

  getListCountry() {
    this.geoipService.getListCountries().subscribe(response => {
      this.countries = response;
    });
  }
}
