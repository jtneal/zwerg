import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-sponsors',
  styles: `
    ////////////////////////////////////////////////////////////////////////////
    // MOBILE
    ////////////////////////////////////////////////////////////////////////////

    .sponsor-card {
      display: flex;
      flex-wrap: wrap;
      margin-top: 2rem;
      text-decoration: none;
      transition: box-shadow 250ms ease-out;

      &:hover {
        box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
      }

      img {
        width: 100%;
      }

      .sponsor-content {
        background-color: rgba(0, 0, 0, 0.5);
        flex: 1 1 auto;
        padding: 1rem;
      }

      h4 {
        font-size: 1rem;
        margin-bottom: 1rem;
      }

      p {
        margin: 0;
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    // TABLET
    ////////////////////////////////////////////////////////////////////////////

    @media (min-width: 768px) {
      .sponsor-card {
        align-items: stretch;
        flex-wrap: nowrap;

        &:nth-child(even) {
          flex-direction: row-reverse;
        }

        img {
          height: 195px;
          width: 320px;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }

    @media (min-width: 992px) {
      .sponsor-card {
        p {
          font-size: 1rem;
        }
      }
    }
  `,
  template: `
    <div class="container">
      <a class="anchor" name="sponsor"></a>
      <a class="sponsor-card" href="https://rogueenergy.com/?ref=zwerg" target="_blank">
        <img alt="Rogue marketing banner" src="/assets/images/rogue-energy.jpg" />
        <div class="sponsor-content">
          <h3>Rogue Energy Partner</h3>
          <h4>World's Best Gaming Energy Drink</h4>
          <p>
            Rogue has numerous different flavors and is great for a healthy boost of energy that you can even try for
            free. You can use my code ZWERG at checkout for a 20% off your order by clicking on the picture.
          </p>
        </div>
      </a>
      <a
        class="sponsor-card"
        href="https://secretlab.co/?rfsn=7420343.51bfc91&utm_source=refersion&utm_medium=affiliate&utm_campaign=7420343.51bfc91"
        target="_blank"
      >
        <img alt="Secret Lab marketing banner" src="/assets/images/secret-lab.jpg" />
        <div class="sponsor-content">
          <h3>Secret Lab Affiliate</h3>
          <h4>Gaming Chairs & Gaming Desk</h4>
          <p>
            If you are in need of a new chair and would like to support iiizwerg, I am affiliated with SecretLab. If you
            have any questions feel free to ask!
          </p>
        </div>
      </a>
    </div>
  `,
})
export class SponsorsComponent {}
