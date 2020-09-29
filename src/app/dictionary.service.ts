import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private data: Map<string, string> = new Map<string, string>();

  constructor() {
    this.data.set('hello', 'Xin chào.');
  }

  public trans(key: string): string {
    key = key.toLowerCase();
    return this.data.get(key);
  }

  public getData(): Map<string, string> {
    return this.data;
  }

  public set(key: string, value: string) {
    return this.data.set(key, value);
  }
}
