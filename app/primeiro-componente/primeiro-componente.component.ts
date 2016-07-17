import { Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'primeiro-componente-selector',
    templateUrl: 'primeiro-componente.component.html'
})
export class PrimeiroComponenteComponent {
    nome: string ;
    constructor() {
        this.nome = "Josemalyson";
     }
}