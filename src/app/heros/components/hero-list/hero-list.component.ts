import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {

  heroes: string[] = ['Spiderman', 'Thor', 'Hulk', 'Yisus', 'Ironman'];
  deletedHero?: string;

  deleteLastHero(): void {
    this.deletedHero = this.heroes.pop() || '';
  }

}
