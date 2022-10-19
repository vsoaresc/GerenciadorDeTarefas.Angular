import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar';
import { TarefaService } from './shared';



@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    TarefaService
  ]

})
export class TarefasModule {

  constructor() {}

}
