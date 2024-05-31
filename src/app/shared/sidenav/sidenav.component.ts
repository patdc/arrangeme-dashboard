import { Component, OnInit } from '@angular/core';
import { faChevronDown, faHome, faLightbulb } from '@fortawesome/free-solid-svg-icons';

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
        {
          link_name: 'Canais Dark',
          link: '/canais-dark',
        },
      ],
    },

    {
      link_name: 'Canais Dark',
      link: null,
      icon: faHome,
      sub_menu: [
        {
          link_name: 'UI Face',
          link: '/ui-face',
        },
        {
          link_name: 'Pigments',
          link: '/pigments',
        },
        {
          link_name: 'Box Icons',
          link: '/box-icons',
        },
      ],
    },
    {
      link_name: 'Explore',
      link: '/explore',
      icon: faHome,
      sub_menu: [],
    },
  
   
  ];

  constructor() {}

  ngOnInit() {
    this.menuSidebar.push(
      {
        link_name: '2024',
        link: '/2024',
        icon: faHome,
        sub_menu: [],
      },
    )
  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }
}
