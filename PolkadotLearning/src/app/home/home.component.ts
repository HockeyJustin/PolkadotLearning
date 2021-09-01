import { Component, OnInit } from '@angular/core';
import { ApiPromise, WsProvider } from '@polkadot/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    // Construct
    // const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    // const api = ApiPromise.create({ provider: wsProvider });
    // // Do something
    // api.then((res) =>{
    //   let x = res.genesisHash.toHex();
    //   console.log(x);
    // });
  }

}
