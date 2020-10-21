import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuggestionsFormComponent } from './components/suggestions-form/suggestions-form.component';


const routes: Routes = [
  {path: '', component: SuggestionsFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
