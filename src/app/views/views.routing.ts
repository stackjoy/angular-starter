import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path: '', component: ViewsComponent, children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }

    ]
  },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
