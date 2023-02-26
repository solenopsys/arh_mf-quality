import {NgModule} from '@angular/core';
import {BootstrapComponent} from "@solenopsys/ui-templates";
import {IMPORTS_CONF, PROVIDERS_CONF, ROUTES} from "./conf";
import {createNgxs} from "@solenopsys/lib-storage";
import {environment} from "../environments/environment";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([...ROUTES]),
    ...IMPORTS_CONF, ...createNgxs(!environment.production)
  ],
  providers: [...PROVIDERS_CONF],
  bootstrap: [BootstrapComponent],
})
export class AppModule {
}


