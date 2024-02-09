import { Component } from '@angular/core';
import { DbzService } from "../services/dbz.service";
import { Character } from "../interfaces/character.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})

export class MainComponent {
  constructor(private dbzService: DbzService) {
  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  deleteCharacterById(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  addCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
