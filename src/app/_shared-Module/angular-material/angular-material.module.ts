import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatToolbarModule, MatPaginatorModule, MatIconModule, MatRadioModule, MatSidenavModule, MatTableModule, MatListModule, MatGridListModule, MatSortModule, MatCardModule, MatDialogModule, MatInputModule, MatNativeDateModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule } from '../../../../node_modules/@angular/material';
import { AvatarModule } from '../../../../node_modules/ngx-avatar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatToolbarModule,
    MatPaginatorModule,
    AvatarModule,
    MatIconModule,
    MatRadioModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatSortModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatTabsModule
  ],
  exports: [
    CommonModule,
    MatSelectModule,
    MatToolbarModule,
    MatPaginatorModule,
    AvatarModule,
    MatIconModule,
    MatRadioModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatSortModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatTabsModule,
    MatDividerModule
  ]
})
export class AngularMaterialModule { }
