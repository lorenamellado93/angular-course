import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({ providedIn: 'root' })  //Decorador servicio
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 200
  }, {
    id: uuid(),
    name: 'Goku',
    power: 400
  }, {
    id: uuid(),
    name: 'Vegetta',
    power: 1000
  }];

  addCharacter(character: Character): void {

    const newCharacter: Character = {
      ...character,
      id: uuid()
    }

    this.characters.push(newCharacter);

  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
