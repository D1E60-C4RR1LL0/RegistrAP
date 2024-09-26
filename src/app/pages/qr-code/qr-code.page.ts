import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  showQr: boolean = false; 

  constructor() { }

  ngOnInit() {
  }

  toggleQr() {
    this.showQr = !this.showQr; 
  }
}
