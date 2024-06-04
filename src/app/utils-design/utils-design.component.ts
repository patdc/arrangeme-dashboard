import { Component, OnInit } from '@angular/core';
import {  faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-utils-design',
  templateUrl: './utils-design.component.html',
  styleUrls: ['./utils-design.component.scss'],
})
export class UtilsDesignComponent implements OnInit {
  faSquareArrowUpRight = faSquareArrowUpRight;
  utils = [
    {
        title: 'Canva',
        description: 'Utilitário de Design para criar capas e artes visuais para canal youtube e redes sociais',
        link: '',
        label: 'Acessar'
    },
    {
        title: 'Figma',
        description: 'Utilitário de Design para criar capas e artes visuais para canal youtube e redes sociais',
        link: '',
        label: 'Acessar'
    },
    {
        title: 'Notion',
        description: 'Utilitário de organização para automatizar seu segundo cérebro',
        link: '',
        label: 'Acessar'
    },
    {
        title: 'Google Fonts',
        description: 'Utilitário para baixar fontes seguras',
        link: '',
        label: 'Acessar'
    },
    {
        title: 'Formatos de papel',
        description: 'Utilitário com informações sobre formatos de papel',
        link: 'https://papersizes.io/?ref=designeresourc.es',
        label: 'Acessar'
    },

  ];

  constructor() {}

  ngOnInit(): void {}
}