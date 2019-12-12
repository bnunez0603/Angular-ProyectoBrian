import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { SucursalesComponent } from './sucursales/sucursales.component';


const routes: Routes = [
  { path: '', component: PanelComponent, pathMatch: 'full'},
  { path: 'clientes', component: ClientesComponent},
  { path: 'empleados', component: EmpleadosComponent},
  { path: 'habitaciones', component: HabitacionesComponent},
  { path: 'sucursales', component: SucursalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
