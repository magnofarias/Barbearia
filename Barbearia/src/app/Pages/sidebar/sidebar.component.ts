import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';


@Component({
  selector: 'app-sidebar',
  imports: [PanelMenu],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  items: MenuItem[]=[];

  ngOnInit() {
      this.items = [
          { 
              label: 'Cadastros',
              icon: 'pi pi-file',
              items: [
                  {
                      label: 'Produtos Perifericos'
                  },
                  {
                      label: 'Barbeiros',
                      icon: 'pi pi-user-plus',
                    
                  }
              ]
          },
          {
              label: 'Histórico',
              icon: 'pi pi-book',
              items: [
                  {
                      label: 'Histórico Financeiro',
                      icon: 'pi pi-calculator'
                  },
                  {
                      label: 'Histórico Barbeiros',
                      icon: 'pi pi-cloud-download'
                  },
                  
                  {
                    label: 'Histórico Produtos',
                    icon: 'pi pi-cloud-download'
                },

              ]
          },
          {
              label: 'Agendamentos',
              icon: 'pi pi-address-book',
              items: [
                  {
                      label: 'Cliente',
                      icon: 'pi pi-mobile'
                  }
              ]
          }
      ]
  }
}

