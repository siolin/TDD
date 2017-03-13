import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

import { FallbackDispatcher } from 'ng2-webcam';

@Component({
  selector: 'signature',
  templateUrl: './signature.component.html'
})
export class SignatureComponent implements  AfterViewInit {

  @ViewChild(SignaturePad) public signaturePad: SignaturePad;

  public options: {
    audio: boolean;
    video: boolean;
    width: number;
    height: number;
    cameraType: string // or 'back'
    // fallbackMode: string;
    // fallbackSrc: string;
    // fallbackQuality: number;
  };

  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    backgroundColor: '#eee',
    canvasWidth: 350,
    canvasHeight: 175,
    penColor: 'black'
  };

  public stream: any;
  public flashPlayer: any;

  constructor() {
    this.options = {
      audio: false,
      video: true,
      width: 500,
      height: 500,
      cameraType: 'front' // or 'back'
      // fallbackMode: 'callback',
      // fallbackSrc: '/node_modules/ng2-webcam/lib/fallback/jscam_canvas_only.swf',
      // fallbackQuality: 85
    };
  }

  public ngAfterViewInit() {
    // this.signaturePad is now available
    // this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  public drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    // console.log(this.signaturePad.toDataURL());
  }

  public drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  // public onSuccess(flashplayer: MediaStream | FallbackDispatcher) {
    // if (this.stream instanceof FallbackDispatcher) {
    //   this.flashPlayer = <FallbackDispatcher>this.stream;
    //   this.onFallback();
    // }
  // };

  public onSuccess(stream: MediaStream) {
    console.log(stream);
  }

  public onError(err) {
    console.log(err);
  };

  // public onFallback(): void {
  //   const self = this;
  //   const canvas = <any>document.getElementsByTagName('canvas')[0];
  //   if (canvas) {
  //     const ctx = canvas.getContext('2d');
  //     const size = self.flashPlayer.getCameraSize();
  //     const w = size.width;
  //     const h = size.height;
  //     const externData = {
  //       imgData: ctx.getImageData(0, 0, w, h),
  //       pos: 0
  //     };

  //     canvas.width = w;
  //     canvas.height = h;
  //     ctx.clearRect(0, 0, w, h);

  //     FallbackDispatcher.implementExternal({
  //       onSave: (data) => {
  //         try {
  //           let col = data.split(';');
  //           let tmp = null;

  //           for (let i = 0; i < w; i++) {
  //             tmp = parseInt(col[i], 10);
  //             externData.imgData.data[externData.pos + 0] = (tmp >> 16) & 0xff;
  //             externData.imgData.data[externData.pos + 1] = (tmp >> 8) & 0xff;
  //             externData.imgData.data[externData.pos + 2] = tmp & 0xff;
  //             externData.imgData.data[externData.pos + 3] = 0xff;
  //             externData.pos += 4;
  //           }

  //           if (externData.pos >= 4 * w * h) {
  //             ctx.putImageData(externData.imgData, 0, 0);
  //             externData.pos = 0;
  //           }
  //         } catch (e) {
  //           console.error(e);
  //         }
  //       },
  //       debug: (tag, message) => {
  //         console.log(tag, message);
  //       },
  //       onCapture: () => {
  //         self.flashPlayer.save();
  //       },
  //       onTick: (time) => {
  //         // do nothing
  //       }
  //     });
  //   }
  // }
}
