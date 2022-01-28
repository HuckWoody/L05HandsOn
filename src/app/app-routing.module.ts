import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'toc', loadChildren: './toc/toc.module#TocPageModule' },
  { path: 'chapter1', loadChildren: './chapters/chapter1/chapter1.module#Chapter1PageModule' },
  { path: 'chapter2', loadChildren: './chapters/chapter2/chapter2.module#Chapter2PageModule' },
  { path: 'c1p1', loadChildren: './chapters/chapter1/c1p1/c1p1.module#C1p1PageModule' },
  { path: 'c1p2', loadChildren: './chapters/chapter1/c1p2/c1p2.module#C1p2PageModule' },
  { path: 'c2p1', loadChildren: './chapters/chapter2/c2p1/c2p1.module#C2p1PageModule' },
  { path: 'c2c2', loadChildren: './chapters/chapter2/c2c2/c2c2.module#C2c2PageModule' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
