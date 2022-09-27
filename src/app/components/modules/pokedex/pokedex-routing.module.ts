import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';
import { ListComponent } from './pages/list/list.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonResolver } from '../../../services/resolvers/pokemon.resolver';

const routes : Routes = [
  {
    path : '',
    children : [
      {
        path : 'pokedex',
        component : PokedexComponent
      },
      {
        path : 'add',
        component : AddComponent
      },
      {
        path : 'find',
        component : FindComponent
      },
      {
        path : 'list',
        component : ListComponent
      },
      {
        path : 'pokemon/:id',
        component : PokemonComponent,
        
      }
    ]
  }

]


@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class PokedexRoutingModule { }
