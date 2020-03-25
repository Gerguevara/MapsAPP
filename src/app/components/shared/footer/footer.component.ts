import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: ['footer{ margin-bottom:0px;}']
})
export class FooterComponent implements OnInit {



  constructor() {
    const date = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
