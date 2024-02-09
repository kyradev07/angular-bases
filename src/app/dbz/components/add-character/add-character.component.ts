import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  character: Character = {
    id: '',
    name: '',
    power: 0
  };

  addCharacter(): void {
    if (!this.character.name.length) return;
    this.onNewCharacter.emit(this.character);
    this.character = {
      id: '',
      name: '',
      power: 0
    }
  }
}
