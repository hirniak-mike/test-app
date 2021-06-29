import { makeAutoObservable } from 'mobx';

import { productsStore } from './productsStore';

export class RootStore {
  constructor() {
    makeAutoObservable(this);
  };

  productsStore = productsStore;

};

export const rootStore = new RootStore();