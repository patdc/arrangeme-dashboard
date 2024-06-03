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
      link: '/utils',
      icon: faHammer,
      sub_menu: [],
    },
  
   
  ];

  constructor() {}

  ngOnInit() {
    this.menuSidebar.push(
      {
        link_name: '2024',
        link: '/2024',
        icon: faMusic,
        sub_menu: [],
      },
    )
  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }
}
