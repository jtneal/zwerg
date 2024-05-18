import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-contact',
  styles: `
    .contact-card {
      background-color: rgba(0, 0, 0, 0.5);
      height: 162px;
      overflow: hidden;
      padding: 0.75rem 1rem 1rem 3.5rem;
      position: relative;

      i {
        left: 1rem;
        font-size: 1.5rem;
        position: absolute;
        top: 0.5rem;
      }

      h3 {
        font-size: 1.5rem;

        @media (min-width: 576px) {
          font-size: 1.4rem;
        }

        @media (min-width: 768px) {
          font-size: 1.5rem;
        }
      }

      p {
        font-size: 0.9rem;
        margin: 1rem 0 0.5rem;

        @media (min-width: 375px) {
          font-size: 1rem;
        }

        @media (min-width: 576px) {
          font-size: 0.9rem;
        }

        @media (min-width: 768px) {
          font-size: 1rem;
        }
      }

      a {
        text-decoration: none;
        transition: color 250ms ease-out;

        &:hover {
          color: #894dff;
        }
      }
    }
  `,
  template: `
    <div class="container">
      <a class="anchor" name="contact"></a>
      <h2>Contact</h2>
      <section class="row g-4">
        <article class="col-12 col-sm-6 col-xl-3">
          <div class="contact-card">
            <i class="bi bi-envelope-paper-fill"></i>
            <h3>Mailing Address</h3>
            <p>
              iiizwerg
              <br />
              3500 Posner Blvd # 1108
              <br />
              Davenport, FL 33837-3640
            </p>
          </div>
        </article>
        <article class="col-12 col-sm-6 col-xl-3">
          <div class="contact-card">
            <i class="bi bi-envelope-at-fill"></i>
            <h3>Business Email</h3>
            <p>
              For business only:
              <br />
              <br />
              <a href="mailto:iiizwerg3@gmail.com" target="_blank">iiizwerg3&#64;gmail.com</a>
            </p>
          </div>
        </article>
        <article class="col-12 col-sm-6 col-xl-3">
          <div class="contact-card">
            <i class="bi bi-discord"></i>
            <h3>Discord</h3>
            <p>
              Join my discord!!
              <br />
              <br />
              <a href="https://discord.gg/iiizwerg" target="_blank">discord.gg/iiizwerg</a>
            </p>
          </div>
        </article>
        <article class="col-12 col-sm-6 col-xl-3">
          <div class="contact-card">
            <i class="bi bi-twitter-x"></i>
            <h3>Twitter / X</h3>
            <p>
              Follow me on Twitter:
              <br />
              <br />
              <a href="https://x.com/iiizwerg" target="_blank">x.com/iiizwerg</a>
            </p>
          </div>
        </article>
      </section>
    </div>
  `,
})
export class ContactComponent {}
