import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-charity',
  styles: `
    ////////////////////////////////////////////////////////////////////////////
    // MOBILE
    ////////////////////////////////////////////////////////////////////////////

    article {
      margin-top: 2rem;
    }

    .charity-card {
      background-color: rgba(0, 0, 0, 0.5);
      display: block;
      text-decoration: none;
      transition: box-shadow 250ms ease-out;

      &:hover {
        box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
      }

      img {
        width: 100%;
      }

      .charity-content {
        padding: 1rem;
      }

      h3 {
        margin: 0;
      }

      h4 {
        font-size: 1rem;
        margin-bottom: 1rem;
        margin-top: 0;
      }

      h5 {
        font-size: 1rem;
        margin-bottom: 1rem;

        strong {
          color: #894dff;
          font-weight: 700;
        }
      }

      p {
        margin: 0;
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    // TABLET
    ////////////////////////////////////////////////////////////////////////////

    @media (min-width: 576px) {
      section {
        .charity-card {
          height: 100%;
        }

        h3 {
          font-size: 1.5rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }

    @media (min-width: 768px) {
      .charity-card {
        p {
          font-size: 1rem;
        }
      }
    }
  `,
  template: `
    <div class="container">
      <a class="anchor" name="charity"></a>
      <h2>Charity</h2>
      <section class="row g-4">
        <article class="col-12 col-sm-6 col-xl-3">
          <a class="charity-card" href="https://gamersoutreach.org" target="_blank">
            <img alt="Logo for Gamers Outreach" src="/assets/images/gamers-outreach.jpg" />
            <div class="charity-content">
              <h3>Gamers Outreach</h3>
              <h4>Helping Others Level Up</h4>
              <h5>
                Total Raised:
                <strong>$23,948.11</strong>
              </h5>
              <p>
                I have been taking part in supporting Gamers Outreach for over two years now! They are an incredible
                charity that helps provide video games to children's hospitals. They are constantly branching out to new
                hospitals and making kids happy to play video games.
              </p>
            </div>
          </a>
        </article>
        <article class="col-12 col-sm-6 col-xl-3">
          <a class="charity-card" href="https://bungiefoundation.org" target="_blank">
            <img alt="Logo for Bungie Foundation" src="/assets/images/bungie-foundation.jpg" />
            <div class="charity-content">
              <h3>Bungie Foundation</h3>
              <h4>Healing With Entertainment</h4>
              <h5>
                Total Raised:
                <strong>$900.00</strong>
              </h5>
              <p>
                The Bungie Foundation's annual Game 2 Give fundraising campaign is one of my favorite times of the year!
                They are a people-focused organization that builds and empowers our community to improve the health and
                wellbeing of children, uplift the rights of all individuals and communities, and provide aid in times of
                crises.
              </p>
            </div>
          </a>
        </article>
        <article class="col-12 col-sm-6 col-xl-3">
          <a class="charity-card" href="https://www.hftd.org" target="_blank">
            <img alt="Logo for Hope For The Day" src="/assets/images/hope-for-the-day.jpg" />
            <div class="charity-content">
              <h3>Hope For The Day</h3>
              <h4>It's Ok Not To Be Ok</h4>
              <h5>
                Total Raised:
                <strong>$5,000.00</strong>
              </h5>
              <p>
                Hope for the Day (H.F.T.D) is a non-profit movement empowering the conversation on proactive suicide
                prevention and mental health education. Through outreach, education, and action, they help equip people
                with the right tools to be proactive in their communities.
              </p>
            </div>
          </a>
        </article>
        <article class="col-12 col-sm-6 col-xl-3">
          <a class="charity-card" href="https://tiltify.com/paws-your-game" target="_blank">
            <img alt="Logo for Paws Your Game" src="/assets/images/paws-your-game.jpg" />
            <div class="charity-content">
              <h3>Paws Your Game</h3>
              <h4>Saving those without a voice</h4>
              <h5>
                Total Raised:
                <strong>$1,010.00</strong>
              </h5>
              <p>
                I absolutely
                <strong>LOVE</strong>
                helping animals. That's why Paws Your Game is one of my favorite charities to raise money for. They are
                a 501(c)(3) nonprofit animal advocacy group whose mission is to help raise awareness, funds, and other
                resources for both private and municipal animal shelters, rescues, and sanctuaries.
              </p>
            </div>
          </a>
        </article>
      </section>
    </div>
  `,
})
export class CharityComponent {}
