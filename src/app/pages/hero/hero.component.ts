import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [LowerCasePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name = signal('Ironman');
  age = signal(45);

  //señal computada
  heroDescription = computed(() => `${this.name()} - ${this.age()}`);

  //otra señak computada con más lógica en su implementación
  capitalizedName = computed(() => {
    const capitalized = this.name().toUpperCase();
    return capitalized;
  });

  getHeroDescription() {
    return `${this.name()} tiene ${this.age()}`;
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
