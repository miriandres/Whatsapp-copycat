import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss']
})
export class CamaraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  // const video : any = document.getElementById('video');
  // const canvas : any = document.getElementById('canvas');
  // const snap : any = document.getElementById("snap");
  // const errorMsgElement : any = document.querySelector('span#errorMsg');

  // const constraints = {
  //   audio: false,
  //   video: {
  //     width: 1280, height: 720
  //   }
  // };

  // // Access webcam
  // async function init() {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia(constraints);
  //     handleSuccess(stream);
  //   } catch (e) {
  //     errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
  //   }
  // }

  // // Success
  // function handleSuccess(stream) {
  //   window.stream = stream;
  //   video.srcObject = stream;
  // }

  // // Load init
  // init();

  // // Draw image
  // var context = canvas.getContext('2d');
  // snap.addEventListener("click", function() {
  //         context.drawImage(video, 0, 0, 640, 480);
  // });
  }

}
