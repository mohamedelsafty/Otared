import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SuggestionsRoutingModule } from "./suggestions-routing.module";
import { SuggestionsFormComponent } from "./components/suggestions-form/suggestions-form.component";
import { SuggestionsSucsessDialogComponent } from "./components/suggestions-sucsess-dialog/suggestions-sucsess-dialog.component";
import {
  MatSidenavModule,
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  MatProgressSpinnerModule,
} from "@angular/material";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [SuggestionsFormComponent, SuggestionsSucsessDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    SuggestionsRoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
})
export class SuggestionsModule {}
