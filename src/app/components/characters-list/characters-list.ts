import { Component } from '@angular/core';
import {Characters} from '../../shared/models/characters';

@Component({
  selector: 'app-characters-list',
  imports: [],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  protected newCharacter: Characters = {
    id: 1,
    firstName: 'Xavier',
    lastName: 'ESTANOVE',
    fullName: 'Xavier ESTANOVE',
    title: 'Maitre',
    family: 'Dynastie des temps',
    image: '',
    imageUrl: '0'
  }

  protected newCharacterFromApi: Characters [] = [
    {
    id: 1,
    firstName: 'Xavier',
    lastName: 'ESTANOVE',
    fullName: 'Xavier ESTANOVE',
    title: 'Maitre',
    family: 'Dynastie des temps',
    image: '',
    imageUrl: '0'
  },
    {
      id: 2,
      firstName: 'Test',
      lastName: 'TEST',
      fullName: 'Test TEST',
      title: 'Maitre TEST',
      family: 'Dynastie des Maitre1',
      image: '',
      imageUrl: '0'
    },
    {
      id: 3,
      firstName: 'Test1',
      lastName: 'TEST',
      fullName: 'Test1 TEST',
      title: 'Maitre TEST',
      family: 'Dynastie des Maitre2',
      image: '',
      imageUrl: '0'
    },
    {
      id: 3,
      firstName: 'Test2',
      lastName: 'TEST',
      fullName: 'Test2 TEST',
      title: 'Maitre TEST',
      family: 'Dynastie des Maitre3',
      image: '',
      imageUrl: '0'
    }
  ]

}


