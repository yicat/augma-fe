import { injectable } from "inversify";
import { action, observable, runInAction } from "mobx";

import { UploadService } from "../services";

@injectable()
export class DataState {
  @observable
  public imgURL: string | null = null;
  @observable
  public type: string = "description";
  @observable
  public value: string | null = null;

  private upload: UploadService;

  constructor(upload: UploadService) {
    this.upload = upload;
  }

  public async uploadImage(file: any) {
    const url = await this.makeThumbnail(file);

    runInAction(() => {
      this.imgURL = url;
    });

    await this.upload.upload(file);

    runInAction(() => {
      this.value = null;
    });
  }

  @action
  public changeType(type: string) {
    this.type = type;
    this.value = null;
  }

  public async genData() {
    const result: any = await this.upload.genData(this.type);
    runInAction(() => {
      this.value = result.data.data;
    });
  }

  private async makeThumbnail(file: any) {
    return new Promise<any>(resolve => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.readAsDataURL(file);
    });
  }
}
