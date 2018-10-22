import { createBrowserHistory, History } from "history";
import { injectable } from "inversify";

@injectable()
export class RouterService {
  public history: History;
  constructor() {
    this.history = createBrowserHistory();
  }
}
