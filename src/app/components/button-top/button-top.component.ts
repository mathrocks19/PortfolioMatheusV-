import { Component } from '@angular/core';


@Component({
  selector: 'app-button-top',
  standalone: true,
  imports: [],
  templateUrl: './button-top.component.html',
  styleUrl: './button-top.component.css'
})
export class ButtonTopComponent {

  private audio: HTMLAudioElement;
  isMuted: boolean = false;
  isPlaying: boolean = false;

  constructor() {
    this.audio = new Audio();
    this.audio.src = 'assets/sound/solas.mp3';
    this.audio.loop = true;
    this.audio.volume = 0.2;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
}
