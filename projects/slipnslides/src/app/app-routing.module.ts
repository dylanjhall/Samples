import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) },
  { path: '', loadChildren: () => import('./view-slide/view-slide.module').then(m => m.ViewSlideModule) },
  { path: '**', redirectTo: 'edit' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}