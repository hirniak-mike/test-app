import { makeAutoObservable, runInAction } from 'mobx';
import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';

import { sortByText, sortByNum } from '../Utils/sortBy';

export class ProductsStore {
  constructor() {
    makeAutoObservable(this);
  };

  isLoadedProducts = false;
  products = [];

  isSaving = false;
  product = {};

  sortBy = 'name_asc';
  sortTypes = { key: 'name', asc: true };

  errorText = 'Oooops, something went wrong';

  getCollection = () => firebase.firestore().collection('products');

  getProducts = () => {
    this.getCollection().get().then((item) => {
      runInAction(() => {
        const items = item.docs.map((doc) => doc.data());
        this.products = items;
        this.sortProducts();
        if (!this.isLoadedProducts) this.isLoadedProducts = true;
      })
    }).catch(() => alert(this.errorText));
  };

  setSortType = (key) => {
    this.sortBy = key;
    switch (key) {
      case 'name_asc':
        this.sortTypes = { key: 'name', asc: true };
        break;
      case 'name_desc':
        this.sortTypes = { key: 'name', asc: false };
        break;
      case 'count_asc':
        this.sortTypes = { key: 'count', asc: true };
        break;
      case 'count_desc':
        this.sortTypes = { key: 'count', asc: false };
        break;
      default: this.sortTypes = { key: 'name', asc: true };
    };
  };

  sortProducts = () => {
    switch (this.sortTypes.key) {
      case 'name':
        this.products = sortByText(this.products, this.sortTypes.key, this.sortTypes.asc);
        break;
      case 'count':
        this.products = sortByNum(this.products, this.sortTypes.key, this.sortTypes.asc);
        break;
      default: this.products = sortByText(this.products, 'name', true);
    };
  };

  getProduct = (id) => {
    this.getCollection().doc(id).get().then((item) => {
      runInAction(() => {
        this.product = { ...item.data() };
      })
    }).catch(() => alert(this.errorText));
  };

  saveProduct = (data, callback) => {
    this.isSaving = true;
    const id = uuidv4();
    this.getCollection().doc(id).set({ ...data, 'id': id, comments: [] }).then(() => {
      this.isSaving = false;
      callback();
      this.getProducts();
    }).catch(() => alert(this.errorText));
  };

  deleteProduct = (id) => {
    this.getCollection().doc(id).delete().then(() => {
      this.getProducts();
    }).catch(() => alert(this.errorText));
  };

  addComment = (id, data) => {
    this.getCollection().doc(id).update({ comments: firebase.firestore.FieldValue.arrayUnion(data) }).then(() => {
      this.getProduct(id);
    }).catch(() => alert(this.errorText));
  };

  removeComment = (id, com_obj) => {
    this.getCollection().doc(id).update({ comments: firebase.firestore.FieldValue.arrayRemove(com_obj) }).then(() => {
      this.getProduct(id);
    }).catch(() => alert(this.errorText));
  };

  editProduct = (id, data, callback) => {
    this.isSaving = true;
    this.getCollection().doc(id).update({ ...data }).then(() => {
      this.isSaving = false;
      callback();
      this.getProduct(id);
    }).catch(() => alert(this.errorText));
  };

  refreshProduct = () => this.product = {};
};

export const productsStore = new ProductsStore();