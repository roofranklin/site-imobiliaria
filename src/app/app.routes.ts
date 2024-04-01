import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomepageComponent } from './paginas/homepage/homepage.component';
import { QuemSomosComponent } from './paginas/quem-somos/quem-somos.component';
import { ContatoComponent } from './paginas/contato/contato.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'quem-somos', component: QuemSomosComponent },
    { path: 'contato', component: ContatoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }


