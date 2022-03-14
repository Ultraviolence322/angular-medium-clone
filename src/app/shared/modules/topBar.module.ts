import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TopBarComponent } from "./components/top-bar/top-bar.component";

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule { }