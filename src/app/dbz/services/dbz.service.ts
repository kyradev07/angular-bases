import { Injectable } from '@angular/core';
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 500000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 450000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 50000
    },
    {
      id: uuid(),
      name: 'Mr. Satan',
      power: 10
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Bulma',
      power: 100
    }
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((character: Character) => character.id !== id);
  }
}
