import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-twitter',
  styles: `
    .mx-auto {
      max-width: 780px;
    }
  `,
  template: `
    <div class="container">
      <a class="anchor" name="twitter"></a>
      <h2>Twitter</h2>
      <!-- prettier-ignore -->
      <div class="mx-auto text-center">
        <a href="https://twitter.com/iiizwerg?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-text="Add your message here!" data-related="iiizwerg" data-show-screen-name="false" data-dnt="true" data-show-count="false">Follow</a>
        <a href="https://twitter.com/intent/tweet?screen_name=iiizwerg&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-size="large" data-text="Add your message here!" data-related="iiizwerg" data-dnt="true" data-show-count="false">Tweet</a>
        <br />
        <a class="twitter-timeline" data-chrome="nofooter transparent" data-width="780" data-height="780" data-dnt="true" data-theme="dark" data-link-color="#894dff" href="https://twitter.com/iiizwerg?ref_src=twsrc%5Etfw">Tweets by iiizwerg</a>
      </div>
    </div>
  `,
})
export class TwitterComponent {}
