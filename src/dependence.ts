import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";

import { RouterService } from "./services";
export { RouterService };

const container = new Container();
container.bind(RouterService).toSelf();

const { lazyInject } = getDecorators(container);
export { lazyInject, container };
