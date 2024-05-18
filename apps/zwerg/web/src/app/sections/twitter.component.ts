import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-twitter',
  styles: ``,
  template: `
    <div class="container">
      <a class="anchor" name="twitter"></a>
      <h2>Twitter</h2>
      <!-- prettier-ignore -->
      <a class="twitter-timeline" data-width="100%" data-height="1000" data-theme="light" href="https://twitter.com/iiizwerg?ref_src=twsrc%5Etfw">Tweets by iiizwerg</a>
    </div>
  `,
})
export class TwitterComponent {}
