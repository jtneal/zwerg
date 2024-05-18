import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-twitch',
  styles: ``,
  template: `
    <div class="container">
      <a class="anchor" name="twitch"></a>
      <h2>Twitch</h2>
      <div id="twitch-embed"></div>
    </div>
  `,
})
export class TwitchComponent implements OnInit {
  public ngOnInit(): void {
    new Twitch.Embed('twitch-embed', {
      width: '100%',
      height: '680',
      channel: 'iiizwerg',
    });
  }
}
