import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharactersList} from './components/characters-list/characters-list';
import {CharacterService} from './shared/services/character';
import {Characters} from './shared/models/characters.model';
import {ContinentsList} from './components/continents-list/continents-list';
import {Continents} from './shared/models/continents.models';
import {ContinentService} from './shared/services/continent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersList, ContinentsList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  // On injecte le service précédemment créé.
  private charactersService = inject(CharacterService);
  private continentsService = inject(ContinentService);
  private cdr = inject(ChangeDetectorRef);

  // On stock tous les personnages dans un tableau.
  protected charactersToGiveToChild!: Characters[];
  protected continentsToGiveToChild!: Continents[];

  // On subscribe() uniquement sur les Observables.
  ngOnInit() {
    this.charactersService.getCharacters().subscribe((charactersFromApi: Characters[]) => {
      this.charactersToGiveToChild = charactersFromApi;
      this.cdr.detectChanges();
    });
      this.continentsService.getContinents().subscribe((continentsFromApi: Continents[]) => {
        this.continentsToGiveToChild = continentsFromApi;
        this.cdr.detectChanges();
      });

    };
  }
