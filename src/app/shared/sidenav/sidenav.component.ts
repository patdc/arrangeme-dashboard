import { Component, OnInit } from '@angular/core';
import { faChevronDown, faHammer, faHome, faLightbulb, faMusic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  openSidebar: boolean = true;

  faHome = faHome
  faLightBulb = faLightbulb
  faChevronDown = faChevronDown;
  faHammer = faHammer;
  faMusic = faMusic;

  menuSidebar = [
    {
      link_name: 'Dashboard',
      link: '/dashboard',
      icon: faHome,
      sub_menu: [],
    },
    {
      link_name: 'Inspirações',
      link: null,
      icon: faLightbulb,
      sub_menu: [
        {
          link_name: 'Trends',
          link: '/trends',
        },
      ],
    },

    {
      link_name: 'Canais Dark',
      link: null,
      icon: faHome,
      sub_menu: [
        {
          link_name: 'Piano tutorials',
          link: '/dark-channel',
        },
        {
          link_name: 'Sheet Music',
          link: '/dark-channel-sm',
        },

      ],
    },
    {
      link_name: 'Utilitários',
      link: 'null',
      icon: faHammer,
      sub_menu: [
        {
          link_name: 'Edição de Partituras',
          link: '/utils',
        },
        {
          link_name: 'Design/Produtividade',
          link: '/utils-design',
        },
      ],
    },
  
   
  ];

  constructor() {}

  ngOnInit() {
  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }


}
