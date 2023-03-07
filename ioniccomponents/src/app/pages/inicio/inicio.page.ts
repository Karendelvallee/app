import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {



  componentes: Componente[] = [
    {
      icon: 'apps',
      name: 'action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'earth',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'card',
      name: 'Fab',
      redirectTo: '/fab'
    },

    {
      icon: 'grid',
      name: 'Grid-Rows',
      redirectTo: '/grid'
    },

    {
      icon: 'hammer',
      name: 'inputs-Forms',
      redirectTo: '/input'
    },
    {
      icon: 'albums',
      name: 'Slides',
      redirectTo: '/slides'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
