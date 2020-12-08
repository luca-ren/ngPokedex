import { Pokemon } from '../pokemon';
import { POKEMONS } from '../shared/list.pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.compoment.html',
  styleUrls: ['../app.component.scss']
})
export class listPokemonComponent implements OnInit {

  pokemons ?: Pokemon[];

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon): void {
    alert('Vous avez séléctionné: ' + pokemon.name);
  }
}


