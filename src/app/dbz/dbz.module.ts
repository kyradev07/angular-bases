import { NgModule } from "@angular/core";
import { MainComponent } from "./pages/main.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    MainComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class DbzModule {

}
