import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-tiktok',
  styles: ``,
  template: `
    <div class="container">
      <a class="anchor" name="tiktok"></a>
      <h2>TikTok</h2>
      <!-- prettier-ignore -->
      <blockquote class="tiktok-embed mx-auto" cite="https://www.tiktok.com/@iiizwerg" data-unique-id="iiizwerg" data-embed-from="embed_page" data-embed-type="creator" style="border-radius: 1rem; max-width:780px; min-width:288px;"> <section> <a target="_blank" href="https://www.tiktok.com/@iiizwerg?refer=creator_embed">&#64;iiizwerg</a> </section> </blockquote>
    </div>
  `,
})
export class TikTokComponent {}
