import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-about',
  styles: `
    .container {
      margin-bottom: -56px;
      position: relative;
      top: -56px;

      @media (min-width: 768px) {
        margin-bottom: -72px;
        position: relative;
        top: -72px;
      }
    }

    img {
      border-radius: 1rem;
      width: 100%;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-top: 1rem;
      text-align: center;
      text-transform: uppercase;

      @media (min-width: 768px) {
        text-align: left;
      }

      @media (min-width: 992px) {
        font-size: 3rem;
      }

      @media (min-width: 1200px) {
        font-size: 4rem;
      }
    }

    p {
      font-size: 1.5rem;
    }
  `,
  template: `
    <div class="container">
      <a class="anchor" name="about"></a>
      <section class="row">
        <article class="col-12 col-md-6">
          <img alt="photo of zwerg holding a twitch pillow" src="/assets/images/zwerg-photo.jpg" />
        </article>
        <article class="col-12 col-md-6">
          <h2>Meet Zwerg</h2>
          <p>
            Hai, my name is Zwerg. I've been playing games since I was young, Zelda is one of my favorite. I have a love
            for animals, food, and video games. Fun fact, I'm German and speak it fluently but live in the states now.
          </p>
          <p>
            Welcome to my website!! Here we mostly play Destiny and sometimes some story games. We eat lots of snacks
            and enjoy chatting, I like to spread my positivity and have a good time!
          </p>
          <p>😁😆😂🤣😭🥰</p>
          <p>
            With Love,
            <br />
            ❤️ Zwerg ❤️
          </p>
        </article>
      </section>
    </div>
  `,
})
export class AboutComponent {}
