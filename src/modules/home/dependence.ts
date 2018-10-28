import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";

import * as services from "./services";
import * as states from "./states";

const container = new Container();
container.bind(services.UploadService).toSelf();
container.bind(states.DataState).toSelf();

const { lazyInject } = getDecorators(container);
export { lazyInject };
export * from "./states";
