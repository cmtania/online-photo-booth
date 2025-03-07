
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { 
      path: "", 
      loadChildren: () => 
        import("./modules/layout/layout.module").then(m => m.LayoutModule)
    },
    {
      path: "",
      redirectTo: "",
      pathMatch: "full"
    } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
