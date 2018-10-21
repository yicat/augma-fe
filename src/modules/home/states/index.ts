import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";

import { Home, IStateHome } from "./home";

const container = new Container();
container.bind<IStateHome>("home").to(Home);

const { lazyInject } = getDecorators(container);
export { lazyInject, IStateHome };
