import axios from "axios";
import { injectable } from "inversify";

@injectable()
export class UploadService {
  public upload(file: any) {
    const formData = new FormData();
    formData.append("image", file);
    axios.post("/api/uploadImage", formData, {
      baseURL: "http://localhost:5000",
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }

  public async genData(type: string) {
    switch (type) {
      case "description":
        return axios.get("http://localhost:5000/api/description");
      case "poem":
        return axios.get("http://localhost:5000/api/poem");
      case "message":
        return axios.get("http://localhost:5000/api/message");
    }

    return { data: "类型错误" };
  }
}
