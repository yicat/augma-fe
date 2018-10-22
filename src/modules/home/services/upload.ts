import { injectable } from "inversify";

@injectable()
export class UploadService {
  public upload(data: any) {
    fetch("/upload", data);
  }
}
