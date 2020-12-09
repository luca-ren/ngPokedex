import { Pokemon } from '../pokemon';
import { POKEMONS } from '../shared/list.pokemon';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
  }
  selectPokemon(pokemon: Pokemon): void {
    alert('Vous avez séléctionné: ' + pokemon.name);
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}


