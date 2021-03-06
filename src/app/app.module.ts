import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { listPokemonComponent } from './pokemons/list-pokemon.component';
import { BorderCardDirective } from './shared/directives/border-card.directive';
import { PokemonTypeColorPipe } from './shared/pipes/pokemon-type-color.pipe';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    listPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
