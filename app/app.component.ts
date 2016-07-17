import { Component } from '@angular/core';

import {PrimeiroComponenteComponent} from './primeiro-componente/primeiro-componente.component';
import {ListaComponent} from './lista-compras/lista.component';

@Component({
  selector: 'my-app',
  template: `
        <primeiro-componente-selector></primeiro-componente-selector>
        <lista></lista>
    `,
    directives: [PrimeiroComponenteComponent,ListaComponent]

})
export class AppComponent { }
