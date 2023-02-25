import {RouterModule, Routes} from "@angular/router";
import {FuiTemplatesModule, TABLE_PAGE} from "@solenopsys/uimatrix-templates";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {UtilsGlobalsModule} from "@solenopsys/lib-globals";
import {FuiGridModule} from "@solenopsys/uimatrix-lists";
import {CommonModule} from "@angular/common";
import {BUGS, SCOPES, TODOS} from "./tables.config";

export const ROUTES: Routes = [
  {path: '', redirectTo: 'bugs',pathMatch:'full'},
  TABLE_PAGE(':table'),
];

export const IMPORTS_CONF = [
  BrowserModule,
  FormsModule,
  RouterModule,
  UtilsGlobalsModule,
  FuiTemplatesModule,
  FuiGridModule,
  CommonModule,
  UtilsGlobalsModule,
]

export const TABLES_CONFS = {
  bugs: BUGS,
  todos: TODOS,
  scopes: SCOPES,
};

export const PROVIDERS_CONF = [
  {provide: 'tables', useValue: TABLES_CONFS},
  {provide: 'assets_dir', useValue: "/fm/modules/richteri/quality"},
  {provide: 'mod_name', useValue: "quality"}
]
