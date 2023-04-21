import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Recipe} from "../app/core/data/recipe/recipe.model";
import {IMG_PATH} from "../app/core/data/consts/img-path";

@Injectable({
  providedIn: 'root'
})
export class RecipesDatabaseService implements InMemoryDbService {
  createDb() {
    const recipes: Recipe[] = [
      {
        id: 1,
        name: 'Жареная курица',
        description: 'Курица, обжареная в духовке',
        img: `${IMG_PATH}/fillet.jpg`,
        ingredients: [
          {id: 101, name: 'Филе куриное', grams: 1000},
          {id: 102, name: 'Соль', grams: 5},
          {id: 103, name: 'Перец', grams: 5},
          {id: 104, name: 'Паприка молотая', grams: 5},
          {id: 105, name: 'Масло подсолнечное', grams: 30},
        ],
        kcal: 300
      },
      {
        id: 2,
        name: 'Макароны с сыром',
        description: 'Любимые макарошки Макколея Калкина',
        img: `${IMG_PATH}/pasta-with-cheese.jpeg`,
        ingredients: [
          {id: 101, name: 'Макароны', grams: 100},
          {id: 102, name: 'Пармезан', grams: 50},
          {id: 103, name: 'Вода', grams: 500},
        ],
        kcal: 150
      },
      {
        id: 3,
        name: 'Жульен',
        description: 'Курица в сливочном соусе с грибами и луком',
        img: `${IMG_PATH}/julien.jpeg`,
        ingredients: [
          {id: 101, name: 'Куриное филе', grams: 500},
          {id: 102, name: 'Шампиньоны', grams: 300},
          {id: 103, name: 'Лук репчатый', grams: 300},
          {id: 104, name: 'Сливки', grams: 500},
          {id: 105, name: 'Масло подсолнечное', grams: 50},
          {id: 102, name: 'Соль', grams: 10},
          {id: 103, name: 'Перец', grams: 10},
        ],
        kcal: 240
      },
      {
        id: 4,
        name: 'Жульен',
        description: 'Курица в сливочном соусе с грибами и луком',
        img: '',
        ingredients: [
          {id: 101, name: 'Куриное филе', grams: 500},
          {id: 102, name: 'Шампиньоны', grams: 300},
          {id: 103, name: 'Лук репчатый', grams: 300},
          {id: 104, name: 'Сливки', grams: 500},
          {id: 105, name: 'Масло подсолнечное', grams: 50},
          {id: 102, name: 'Соль', grams: 10},
          {id: 103, name: 'Перец', grams: 10},
        ],
        kcal: 240
      },
    ];
    return {recipes};
  }
}
