import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatFormFieldModule, MatSelectModule, MatInputModule, MatNativeDateModule  } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
//import { HttpClient } from '@angular/common/http'; 
import { HttpClientModule }    from '@angular/common/http';

// components
import { MatFormFieldComponent } from './mat-form-field/mat-form-field.component';
import { MatFormField2Component } from './mat-form-field2/mat-form-field2.component';
import { MatFormField3Component } from './mat-form-field3/mat-form-field3.component';
import { MatFormField4Component } from './mat-form-field4/mat-form-field4.component';
import { MatFormField5Component } from './mat-form-field5/mat-form-field5.component';
import { FFShopService } from './ffshop.service';
import { MatFormField6Component } from './mat-form-field6/mat-form-field6.component';

@NgModule({
  declarations: [
    AppComponent,
    MatFormFieldComponent,
    MatFormField2Component,
    MatFormField3Component,
    MatFormField4Component,
    MatFormField5Component,
    MatFormField6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatRadioModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatBadgeModule,
    MatTabsModule,
    MatGridListModule,
    MatRippleModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    MatDatepickerModule,
    FFShopService,
    // HttpClient
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
