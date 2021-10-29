import ILocalStorageClient from './ILocalStorageClient';

class LocalStorageClient implements ILocalStorageClient {
  private key: string;
  constructor(key: string) {
    this.key = key;
  }

  getItem<Value>(): Value | null {
    const res = localStorage.getItem(this.key);
    if (res != null) {
      try {
        return JSON.parse(res) as Value;
      } catch {
        return res as unknown as Value;
      }
    } else {
      return null;
    }
  }

  setItem<Value>(value: Value): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }
}

export default LocalStorageClient;
