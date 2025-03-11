import { Routes } from '@angular/router';
import { CadastroComponent } from './Pages/cadastro/cadastro.component'; 
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Cadastro/Barbeiro', component: CadastroComponent},

];
