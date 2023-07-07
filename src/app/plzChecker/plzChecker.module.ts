import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { PlzCheckerComponent } from './plzChecker.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlzCheckerComponent
  ],
  imports: [
    // Other imports
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    PlzCheckerComponent
  ]
  // Other module configurations
})
export class PlzCheckerModule { }