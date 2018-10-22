import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";

import { UploadService } from "./services";
import { UploadState } from "./states";
export * from "./states";

const container = new Container();
container.bind(UploadService).toSelf();
container.bind(UploadState).toSelf();

const { lazyInject } = getDecorators(container);
export { lazyInject };
