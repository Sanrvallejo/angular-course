import { Component, Input, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {

  // componente hijo dentro de dragonball-super
  //recibe un input obligatorio del padre
  characters = input.required<Character[]>();

  listName = input.required<string>();

}
