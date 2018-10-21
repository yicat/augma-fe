import { injectable } from "inversify";

export interface IStateHome {
  toCount(): void;
}

@injectable()
export class Home implements IStateHome {
  public toCount() {
    // 跳转页面
    alert(1);
  }
}
