import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  name = signal('Ironman');
  age = signal(45);

  getHeroDescription() {
    return `${this.name()} tiene ${this.age()}`
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(value: number) {
    this.age.set(value);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }


}
