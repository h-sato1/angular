import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HogeComponent } from './hoge/hoge.component';
import { FugeComponent } from './fuge/fuge.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  { path: "hoge", component: HogeComponent },
  { path: "fuge", component: FugeComponent },
  { path: "", component: TopComponent },
  { path: "test", loadChildren: () =>
  import('./test/test.module').then(m => m.TestModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
