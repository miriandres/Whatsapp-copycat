import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss']
})
export class CamaraComponent implements OnInit {

  @ViewChild('video', {static : true})  videoRef  : ElementRef;
  get video(): HTMLVideoElement {
    return this.videoRef.nativeElement
  }
  @ViewChild('canvas', {static : true}) canvasRef : ElementRef;
  get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement
  }

  constraints : Object = {
    audio: false,
    video: {
      width: 1280, height: 720
    }
  };

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupCamera();
  }

  setupCamera(): void {
    navigator.mediaDevices.getUserMedia(this.constraints
    ).then(stream =>{
      this.video.srcObject = stream;
    })
  }

  takeScreenshot(): void {
    let context = this.canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, 340, 180);

    setTimeout(() => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }, 1500);
  }
}
