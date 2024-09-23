import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  showQr: boolean = false;  // Variable que controla la visibilidad del QR

  constructor() { }

  ngOnInit() {
  }

  // Método que alterna la visibilidad del QR
  toggleQr() {
    this.showQr = !this.showQr;  // Alternar entre true y false
  }
}
