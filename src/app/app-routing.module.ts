import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldComponent } from './mat-form-field/mat-form-field.component';
import { MatFormField2Component } from './mat-form-field2/mat-form-field2.component';
import { MatFormField3Component } from './mat-form-field3/mat-form-field3.component';
import { MatFormField4Component } from './mat-form-field4/mat-form-field4.component';
import { MatFormField5Component } from './mat-form-field5/mat-form-field5.component';

const routes: Routes = [
  { path: 'mat-form-field', component: MatFormFieldComponent },
  { path: 'mat-form-field2', component: MatFormField2Component },
  { path: 'mat-form-field3', component: MatFormField3Component },
  { path: 'mat-form-field4', component: MatFormField4Component },
  { path: 'mat-form-field5', component: MatFormField5Component },
  { path: '**', component: MatFormFieldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
