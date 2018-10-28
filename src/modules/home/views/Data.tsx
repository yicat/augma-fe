import { Button, Radio } from "antd";
import { observer } from "mobx-react";
import * as React from "react";

import { DataState, lazyInject } from "../dependence";
import * as cls from "./Data.module.less";

@observer
export default class DataView extends React.Component {
  private fileDOM: HTMLInputElement | null;

  @lazyInject(DataState)
  private stateEx: DataState;

  constructor(props: any) {
    super(props);
    this.state = { file: null };
  }

  public handleOpenUploadModal = () => {
    this.fileDOM!.click();
  };

  public handleUploadFile = () => {
    this.stateEx.uploadImage(this.fileDOM!.files![0]);
  };

  public handleChangeType = (e: any) => {
    this.stateEx.changeType(e.target.value);
  };

  public handleGen = () => {
    this.stateEx.genData();
  };

  public render() {
    return (
      <div className={cls.container}>
        <div className={cls.innerContainer}>
          <div className={cls.title}>九歌</div>
          <div className={cls.board}>
            <div className={cls.imageBox}>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={this.handleUploadFile}
                ref={dom => (this.fileDOM = dom)}
              />
              <div className={cls.imageHead}>
                <Button type="primary" onClick={this.handleOpenUploadModal}>
                  上传图片
                </Button>
              </div>
              <div className={cls.imageContent}>
                <div className={cls.imageContainer}>
                  {this.stateEx.imgURL == null ? (
                    "请选择一张图片"
                  ) : (
                    <img
                      src={this.stateEx.imgURL}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className={cls.dataBox}>
              <div className={cls.dataHead}>
                <Radio.Group
                  value={this.stateEx.type}
                  buttonStyle="solid"
                  onChange={this.handleChangeType}
                >
                  <Radio.Button value="description">文本描述</Radio.Button>
                  <Radio.Button value="poem">古诗</Radio.Button>
                  <Radio.Button value="message">名言</Radio.Button>
                </Radio.Group>
                <Button onClick={this.handleGen}>生成</Button>
              </div>
              <div className={cls.dataContent}>
                <div className={cls.dataContainer}>
                  {this.stateEx.value == null
                    ? "请点击生成按钮生成内容"
                    : this.stateEx.value}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
