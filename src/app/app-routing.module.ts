import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { SlidersComponent } from "./sliders/sliders.component";

const routes: Routes = [
  { path: "", redirectTo: "/sliders", pathMatch: "full" },
  { path: "sliders", component: SlidersComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
