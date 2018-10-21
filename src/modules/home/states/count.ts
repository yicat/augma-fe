import { action, observable } from "mobx";

class Count {
  @observable
  public count = 0;

  @action
  public add() {
    this.count += 1;
  }

  @action
  public abstract() {
    this.count -= 1;
  }
}

export default new Count();
