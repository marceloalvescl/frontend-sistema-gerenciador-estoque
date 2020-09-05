import { MegaMenuItem } from 'primeng/api';

export const MENU_ITEMS: MegaMenuItem[] = [
  {
    label: 'Categorias', icon: 'pi pi-fw pi-video',
    items: [
        [
            {
                label: 'Listar', routerLink: 'categorias'
            }

        ]
    ]
  },
  {
    label: 'Produtos', icon: 'pi pi-fw pi-video',
    items: [
        [
            {
                label: 'Listar'
            }
        ]
    ]
  },
  {
    label: 'Estoque', icon: 'pi pi-fw pi-video',
    items: [
        [
            {
                label: 'Listar'
            }
        ]
    ]
  }
]
