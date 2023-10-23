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
  public onDeleted: EventEmitter<number> = new EventEmitter();

  onDeletedCharacter(index: number): void {
    //TODO: Emitir el ID
    this.onDeleted.emit(index)

  }
}
