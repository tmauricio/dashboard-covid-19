import { Component, OnInit } from '@angular/core';
import { ChucknorrisService } from 'src/app/services/chucknorris.service';
import { NumbersService } from 'src/app/services/numbers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chuckNorrisSentence: string;
  numberSentence: string;
  country: string;

  constructor(
    public chucknorrisService: ChucknorrisService,
    public numbersService: NumbersService) { }

  ngOnInit(): void {
    this.chucknorrisService.getSentence().subscribe(response => {
      this.chuckNorrisSentence = response;
    });

    this.numbersService.getSentence().subscribe(response => {
      this.numberSentence = response;
    });
  }

  changeCountry(country: string) {
    this.country = country;
  }

}
