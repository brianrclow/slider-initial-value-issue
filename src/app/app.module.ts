import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SlidersComponent } from "./sliders/sliders.component";
import { NativeScriptMaterialSliderModule } from "@nativescript-community/ui-material-slider/angular";
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptMaterialSliderModule,
  ],
  declarations: [AppComponent, SlidersComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
