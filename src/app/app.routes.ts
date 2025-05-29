import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';
import { CounterPageComponent } from './pages/counter/counter-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent
    },
    {
        path: 'hero',
        component: HeroComponent
    },
    {
        path: '**',
        component: CounterPageComponent
    },
];
