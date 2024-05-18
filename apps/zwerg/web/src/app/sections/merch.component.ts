import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MerchDto } from '@zwerg/common-dtos';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  selector: 'app-merch',
  styles: `
    a {
      display: block;
      text-decoration: none;
    }

    img {
      border: 3px solid transparent;
      border-radius: 1rem;
      transition: border-color 250ms ease-out;
    }

    a:hover img {
      border-color: #894dff;
    }

    h3 {
      font-size: 1.2rem;
      margin-top: 1rem;
      transition: color 250ms ease-out;
    }

    a:hover h3 {
      color: #894dff;
    }

    p {
      margin: 0;
    }
  `,
  template: `
    <div class="container">
      <a class="anchor" name="merch"></a>
      <h2>Merch</h2>
      @if (data$ | async; as data) {
      <div class="row g-4">
        @for (product of data.products; let i = $index; track i) {
        <div class="col-12 col-sm-6 col-md-3">
          <a [href]="product.link" target="_blank">
            <img alt="photo of {{ product.name }}" class="w-100" [src]="product.image" />
            <h3>{{ product.name }}</h3>
            <p>{{ product.price | currency }}</p>
          </a>
        </div>
        }
      </div>
      }
    </div>
  `,
})
export class MerchComponent {
  public data$ = this.http.get<MerchDto>('/api/merch');

  public constructor(private readonly http: HttpClient) {}
}
