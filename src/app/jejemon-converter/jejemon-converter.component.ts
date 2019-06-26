import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-jejemon-converter',
  templateUrl: './jejemon-converter.component.html',
  styleUrls: ['./jejemon-converter.component.css']
})
export class JejemonConverterComponent implements OnInit {
  toJejemon: string;
  finalJejemon: string = '';
  jejeImageUrl: any = null;
  isLoading: boolean = false;

  constructor() { }

  ngOnInit() { }

  convertToJejemon() {
    if (this.toJejemon) {
      var splitText = this.toJejemon.split(' ');
    
      splitText.forEach((value: any, index1: any) => {
        var splitValue = value.split('');
        splitValue.forEach((element: any, index2: any) => {
          var jeje = this.jejeLetterChanger(element);
          if (index2 % 2 == 0) {
            splitValue[index2] =  jeje.toLowerCase();
          } else {
            splitValue[index2] = jeje.toUpperCase();
          }
        });
        splitText[index1] = splitValue.join('');
      });
        this.finalJejemon = splitText.join(' ');
    } else {
      // alert('INPUT SAD DHA OYYYYYYYYYYYYYYYYYYYY');
      console.log("gi atay. ga tuo gurog walay alert ay")
    }
  }

  jejeLetterChanger(value: any) {
    var toConvert = value;
    if (toConvert.toLowerCase() === 'e') {
      return '3';
    } else if (toConvert.toLowerCase() === 'o') {
      return '0';
    } else if (toConvert.toLowerCase() === 'a') {
      return '4';
    } else if (toConvert.toLowerCase() === 'i') {
      return '1';
    } else if (toConvert.toLowerCase() === 'b') {
      return '|3';
    } else if (toConvert.toLowerCase() === 'g') {
      return '6';
    }
     else {
      return toConvert;
    }
  }

  jejemonLoader() {
    var piste = interval(300);
    piste.subscribe((value: any) => {
      if (value++ < 7) {
        this.jejeImageUrl = `/assets/jeje-images/${value}.jpg`;
        this.isLoading = true;
        console.log(this.jejeImageUrl);
      } else {
        this.isLoading = false;
      }
    })
  }

}
