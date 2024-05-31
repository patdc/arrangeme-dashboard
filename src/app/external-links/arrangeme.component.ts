// iframe-view.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'arrangeme',
  template: `
    <div>
      <iframe [src]="safeUrl" width="100%" height="100%"></iframe>
    </div>
  `
})
export class ArrangeMeComponent implements OnInit {
  url: string = 'https://www.arrangeme.com/search';
  safeUrl: SafeResourceUrl | undefined;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.url = params['url'];
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    });
  }
}
