import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  faCircleInfo, faSearch, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.scss'],
})
export class UtilsComponent implements OnInit {
  faSquareArrowUpRight = faSquareArrowUpRight;
  faSearch = faSearch;
  faCircleInfo = faCircleInfo;

  searchForm = new FormGroup({
    query: new FormControl('')
  });
  
  utils = [
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

  encodeForURL(query) {
    let encoded = encodeURIComponent(query);
    encoded = encoded.replace(/%20/g, '+');
    return 'q=' + encoded;
  }

  onSubmit() {
    const query = this.searchForm.value.query;
    window.open(`https://www.arrangeme.com/search?q=${encodeURIComponent(query)}&sort=arrangements_desc`, '_blank')
  }
}



// Canva
// www.canva.com/

// FontPair
// www.fontpair.co/

// FontJoy
// www.fontjoy.com/

// Typespiration
// www.typespiration.com/

// Typotheque
// www.typotheque.com/

// FemmeBot
// www.femmebot.github.io/

// Typ.io
// www.typ.io/

// Mix Font
// www.mixfont.com/

// Designs.ai
// www.designs.ai/fonts/

// TypeWolf
// www.typewolf.com/

// Type Connection
// www.typeconnection.com/

// Fontspring
// www.fontspring.com/

// Adobe Fonts
// www.fonts.adobe.com/

// Just My Type
// www.justmytype.co/

// Fonts in Use
// www.fontsinuse.com/

// Hello Happy
// www.hellohappy.org/

// Monotype
// www.monotype.com/fonts

// Figma Google Fonts
// www.figma.com/google-fonts/

// Type-scale
// www.type-scale.com/

// Modular Scale
// www.modularscale.com/

// Archetype App
// www.archetypeapp.com/

// Classic Typetester
// www.classic.typetester.org/