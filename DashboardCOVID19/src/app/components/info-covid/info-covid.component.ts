import { Component, Input, OnInit } from '@angular/core';
import { CovidInfoModel } from 'src/app/models/covid-info.model';
import { CovidService } from 'src/app/services/covid.service';
import { GeoipService } from 'src/app/services/geoip.service';

@Component({
  selector: 'app-info-covid',
  templateUrl: './info-covid.component.html',
  styleUrls: ['./info-covid.component.css']
})
export class InfoCovidComponent implements OnInit {
  
  @Input()
  country: String;
  infoCovid: CovidInfoModel;

  constructor(public covidService: CovidService) { }

  ngOnInit(): void {
    this.getInfoByCountry();
  }

  getInfoByCountry(): void {
    
    this.covidService.getInfoByCountry(this.country).subscribe((result: CovidInfoModel) => {
      this.infoCovid = result;
    })
  }
}
