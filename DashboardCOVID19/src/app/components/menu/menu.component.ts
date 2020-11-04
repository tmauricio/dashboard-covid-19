import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GeolocationModel } from 'src/app/models/geolocation.model';
import { GeoipService } from 'src/app/services/geoip.service';
import { ModalCountryComponent } from '../modal-country/modal-country.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  selectedCountry: String;

  

  constructor(
    public dialog: MatDialog,
    public geoipService: GeoipService) {
    
  }

  ngOnInit(): void {
    this.geoipService.getInfoCountry().subscribe((response: GeolocationModel) => {
      console.log("Respuesta del servicio", response);
      this.selectedCountry = response.country_name;
    });

    

    setTimeout(() => {
      
    }, 1000)
  }

  openDialogSelectCountry(): void {
    const dialogRef = this.dialog.open(ModalCountryComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedCountry = result;
    });
  }
}
