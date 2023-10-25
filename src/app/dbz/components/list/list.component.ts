import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 100
  }]

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter();

  onDeletedCharacter(id: string): void {
    //TODO: Emitir el ID
    this.onDeleted.emit(id)

  }
}
