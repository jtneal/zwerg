import { Component } from '@angular/core';
import { LinkService } from '../link.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-footer',
  styles: `
    ////////////////////////////////////////////////////////////////////////////
    // MOBILE
    ////////////////////////////////////////////////////////////////////////////

    footer {
      margin-top: 1rem;
      text-align: center;
    }

    img {
      max-width: 100%;
      padding: 1rem 0;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem 2rem;
      justify-content: center;
    }

    .footer-links {
      font-size: 1.2rem;
      padding-top: 0.1rem;

      a {
        font-weight: 500;
        text-decoration: none;
        transition: color 250ms ease-out;

        &:hover {
          color: #894dff;
        }
      }
    }

    i {
      font-size: 1.5rem;
    }

    .footer-social a {
      i {
        transition: color 250ms ease-out;
      }

      &:hover i {
        color: #894dff;
      }
    }

    .footer-social a:hover i {
      color: #894dff;
    }

    .copyright {
      color: #aaa;
      font-size: 0.85rem;
      margin-bottom: 0;
      margin-top: 2rem;
      padding-bottom: 1.5rem;

      a {
        color: #fff;
        text-decoration: none;
        transition: color 250ms ease-out;

        &:hover {
          color: #894dff;
        }
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    // TABLET
    ////////////////////////////////////////////////////////////////////////////

    @media (min-width: 768px) {
      nav {
        display: flex;
        justify-content: space-between;
      }

      ul {
        justify-content: initial;
      }
    }

    @media (min-width: 992px) {
      
    }
  `,
  template: `
    <footer class="container">
      <a class="logo" href="#top">
        <img alt="iiizwerg colorful polar bear logo" src="/assets/images/iiizwerg-polar-bear-colorized.png" />
      </a>
      <hr />
      <nav>
        <ul class="list-unstyled footer-links">
          @for (link of service.links; let i = $index; track i) {
          <li>
            <a [href]="link.link">{{ link.name }}</a>
          </li>
          }
        </ul>
        <ul class="list-unstyled footer-social">
          @for (social of service.socials; let i = $index; track i) {
          <li>
            <a [href]="social.link" target="_blank"><i class="bi bi-{{ social.icon }}"></i></a>
          </li>
          }
        </ul>
      </nav>
      <p class="copyright">
        Copyright &copy; {{ year }}
        <a href="mailto:iiizwerg3@gmail.com">iiizwerg.</a>
        All Rights Reserved
        <span class="separator">&nbsp;|&nbsp;</span>
        Website by
        <a href="https://necosoftwaresolutions.com" target="_blank">Neco Software Solutions</a>
      </p>
    </footer>
  `,
})
export class FooterComponent {
  public year = new Date().getFullYear();

  public constructor(public readonly service: LinkService) {}
}
