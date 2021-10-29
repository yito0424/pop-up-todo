interface ILocalStorageClient {
  getItem<Value>(): Value | null;
  setItem<Value>(value: Value): void;
}

export default ILocalStorageClient;
