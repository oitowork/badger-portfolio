import { action, extendObservable } from 'mobx';
import { RouterStore } from 'mobx-router';
import fetch from 'node-fetch';
import { Account } from '../model/account.interface';
import { Price } from '../model/price.interface';

export class RootStore {
  private baseUrl = 'https://api.badger.finance/v2';
  public router: RouterStore<RootStore>;
  public account?: Account;
  public btcPrice?: Price;

  constructor() {
    this.router = new RouterStore<RootStore>(this);

    extendObservable(this, {
      account: this.account,
    });

    // load random test account
    this.loadAccount('0x4e65175f05b4140a0747c29cce997cd4bb7190d4');
    this.loadBTCPrice('0x2260fac5e5542a773aa44fbcfedf7c193bc2c599');
  }

  loadAccount = action(async (address: string): Promise<void> => {
    const res = await fetch(`${this.baseUrl}/accounts/${address}`);
    if (res.ok) {
      this.account = await res.json();
    }
  });

  loadBTCPrice = action(async (currencyaddress: string): Promise<void> => {
    const res = await fetch(`${this.baseUrl}/prices?chain=eth&currency=${currencyaddress}`);
    if (res.ok) {
      this.btcPrice = await res.json();
    }
  });
}

const store = new RootStore();

export default store;
