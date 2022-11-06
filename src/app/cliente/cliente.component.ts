import { Component, OnInit } from '@angular/core';
import { AspiClienteService } from '../services/aspi-cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(
    private apliCliente: AspiClienteService
  ) { 
    apliCliente.getClientes().subscribe( response => {
      console.log(response);
    })
  }

  ngOnInit(): void {
  }

}
