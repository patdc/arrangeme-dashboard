import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CadenzaButtonDirective } from './button.directive';

@NgModule({
  imports: [CommonModule],
  exports: [CadenzaButtonDirective],
  declarations: [CadenzaButtonDirective],
  providers: [],
})
export class CadenzaButtonModule {}
