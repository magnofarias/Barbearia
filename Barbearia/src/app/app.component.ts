import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { CadastrobarbeiroComponent } from './Pages/cadastrobarbeiro/cadastrobarbeiro.component';
import { CadastroclienteComponent } from './Pages/cadastrocliente/cadastrocliente.component';
import { CadastroprodutosComponent } from './Pages/cadastroprodutos/cadastroprodutos.component';
import { HistoricoclienteComponent } from './Pages/historicocliente/historicocliente.component';
import { HistoricofinanceiroComponent } from './Pages/historicofinanceiro/historicofinanceiro.component';
import { LoginComponent } from './Pages/login/login.component';
import { HistoricoprodutosComponent } from './Pages/historicoprodutos/historicoprodutos.component';


@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, PanelMenuModule, SidebarComponent, CadastrobarbeiroComponent, 
            CadastroclienteComponent, CadastroprodutosComponent, HistoricoclienteComponent, HistoricofinanceiroComponent,
           LoginComponent, HistoricoprodutosComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Barbearia';
}
