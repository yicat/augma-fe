import { injectable } from "inversify";
import { observable } from "mobx";

import { UploadService } from "../services";

@injectable()
export class UploadState {
  @observable
  public data: string = "";

  private srv: UploadService;

  constructor(srv: UploadService) {
    this.srv = srv;
  }

  public uploadImage(data: string) {
    this.srv.upload(data);
  }
}
