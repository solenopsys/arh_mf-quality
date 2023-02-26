import {NgModule} from "@angular/core";
import {IMPORTS_CONF, PROVIDERS_CONF, ROUTES} from "./conf";
import {createNgxs} from "@solenopsys/fl-storage";
import {environment} from "../environments/environment";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([...ROUTES]),
    ...IMPORTS_CONF,
    ...createNgxs(!environment.production),
  ],
  providers: [...PROVIDERS_CONF],
})
export class RemoteEntryModule {}
