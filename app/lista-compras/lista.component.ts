import { Component} from '@angular/core';

import {Item} from './Item';

@Component({
    moduleId: module.id,
    selector: 'lista',
    templateUrl: 'lista.component.html'
})

export class ListaComponent{

    items = Array<Item>();
    
    constructor() { 
        
        this.getListarItems();
       
    }

    getListarItems(){
        this.items.push(new Item("J7","SmartPhone"));
        this.items.push(new Item("TV Samsung","SmartTv"));
        this.items.push(new Item("Sony 1234","NoteBook"));
    }
}