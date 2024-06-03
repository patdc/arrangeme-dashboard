import { Component, OnInit } from '@angular/core';
import {  faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.scss'],
})
export class UtilsComponent implements OnInit {
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
        title: 'Plugins para Sibelius - Oficial',
        description: 'Plugins oficiais do Sibelius',
        link: 'https://www.sibelius.com/download/plugins/index.html',
        label: 'Acessar'
    },
    {
        title: 'Plugins para Sibelius - TMT',
        description: 'Plugins feitos pelo The Music Transcriber',
        link: 'https://themusictranscriber.com/product-category/sibelius-plugins/',
        label: 'Acessar'
    },
    {
        title: 'Noteperformer - VST',
        description: 'VST de orquestra para Sibelius',
        link: 'https://www.noteperformer.com/',
        label: 'Acessar'
    },
    {
        title: 'Pianoteq - VST',
        description: 'VST de instrumentos de tecla e harpa',
        link: 'https://www.modartt.com/',
        label: 'Acessar'
    },
    {
        title: 'Formatos de papel',
        description: 'Utilitário com informações sobre formatos de papel',
        link: 'https://papersizes.io/?ref=designeresourc.es',
        label: 'Acessar'
    },

  ];

  fontesDePartitura = [
    {
      title: 'Elbsound Studio',
      description: 'Fontes de partitura - Elbsound Studio',
      link: 'https://elbsound.studio/elbsound-music-font-package-for-finale.php',
      label: 'Acessar'
  },
    {
      title: 'Notation Central',
      description: 'Fontes de partitura - Elbsound Studio',
      link: 'https://www.notationcentral.com/product-category/fonts/music-fonts/',
      label: 'Acessar'
  },
  ]


  constructor() {}

  ngOnInit(): void {}
}
