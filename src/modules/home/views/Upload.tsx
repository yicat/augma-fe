import { Upload } from "antd";
import * as React from "react";
import { lazyInject, UploadState } from "../dependence";

class UploadView extends React.Component {
  @lazyInject(UploadState)
  private readonly stateEx: UploadState;

  public handleUploadChange = () => {
    //
  };

  public render() {
    return (
      <div>
        <Upload
          name="file"
          action="//upload"
          onChange={this.handleUploadChange}
        />
      </div>
    );
  }
}

export default UploadView;
