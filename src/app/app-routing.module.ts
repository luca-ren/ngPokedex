import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailPokemonComponent} from './pokemons/detail-pokemon/detail-pokemon.component';
import {listPokemonComponent} from './pokemons/list-pokemon.component';

const routes: Routes = [
  {path: 'pokemon', component: listPokemonComponent },
  {path: 'pokemon/:id', component: DetailPokemonComponent },
  {path: '', redirectTo: 'pokemon', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
