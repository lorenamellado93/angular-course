import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 200
  }, {
    name: 'Goku',
    power: 400
  }, {
    name: 'Vegetta',
    power: 1000
  }];

  onNewCharacter(character: Character): void {
    this.characters.push(character);

  }

  onDeletedCharacter(index: number): void {
    this.characters.splice(index, 1)

  }

}
