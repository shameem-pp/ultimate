import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card'
  import { from } from 'rxjs';

const MATERIALS_ARRAY=[
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTableModule,
  MatCardModule
]

@NgModule({
  exports:[
    MATERIALS_ARRAY
  ],
  imports: [
    MATERIALS_ARRAY
  ]
})
export class MaterialModule { }
