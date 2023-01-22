import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
    console.log(this._storage);
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    if(this._storage) {
      this._storage.set(key, value);
    }
  }

  public async get(key: string): Promise<any> {
     if(this._storage) {
       return await this._storage.get(key);
     }
     return null;
  }
}
