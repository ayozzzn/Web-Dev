import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max 256GB',
      description: 'Флагманский смартфон Apple с титановым корпусом, инновационной камерой и мощным процессором A17 Pro.',
      price: 649990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h81/83559848214558.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h24/83559848247326.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h34/hb6/83559848280094.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-113138420/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 256GB',
      description: 'Премиальный смартфон с поддержкой S Pen, улучшенной камерой с 100x зумом и титановой рамкой.',
      price: 549990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/h5f/84963208691742.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/h5f/84963208691742.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h02/84963208724510.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h97/h33/84963208757278.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h87/h44/84963208790046.png'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-256g-116347556/'
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 13 Pro 8GB/256GB',
      description: 'Стильный смартфон с 200MP камерой, AMOLED дисплеем 120 Гц и быстрой зарядкой 67W.',
      price: 149990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h63/85545932505118.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h63/85545932505118.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/h87/85545932537886.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h53/85545932570654.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h79/hb0/85545932603422.png'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-8-gb-256-gb-116981644/'
    },
    {
      id: 4,
      name: 'Apple MacBook Air 13 M2 8GB/256GB',
      description: 'Тонкий и легкий ноутбук с чипом Apple M2, отличным временем автономной работы и безвентиляторным дизайном.',
      price: 549990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h82/64488694497310.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h82/64488694497310.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h47/h41/64488694530078.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h27/64488694562846.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/hb6/64488694595614.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-102577692/'
    },
    {
      id: 5,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая консоль нового поколения с быстрым SSD, поддержкой 4K и эксклюзивными играми.',
      price: 249990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1c/h2f/85104430022686.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1c/h2f/85104430022686.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/h49/85104430055454.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hae/hd6/85104430088222.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/hcf/85104430120990.png'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114585512/'
    },
    {
      id: 6,
      name: 'Apple Watch Series 9 45mm',
      description: 'Умные часы с дисплеем Always-On, улучшенным чипом S9 и функциями здоровья.',
      price: 199990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h2d/84810812506142.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h2d/84810812506142.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h1b/84810812538910.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h78/hc8/84810812571678.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h2c/hd9/84810812604446.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-45-mm-113398689/'
    },
    {
      id: 7,
      name: 'JBL Charge 5',
      description: 'Портативная колонка с мощным звуком, защитой от воды и возможностью зарядки устройств.',
      price: 59990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h49/h47/64297375580190.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h49/h47/64297375580190.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/h29/64297375612958.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h3a/64297375645726.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb4/hc4/64297375678494.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/jbl-charge-5-104307264/'
    },
    {
      id: 8,
      name: 'Xiaomi Mi Electric Scooter Pro 2',
      description: 'Электросамокат с большим запасом хода, складной конструкцией и надежными тормозами.',
      price: 199990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h65/64333212942366.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h57/h65/64333212942366.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/hb7/64333212975134.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h72/h42/64333213007902.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb9/h9e/64333213040670.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-electric-scooter-pro-2-102217061/'
    },
    {
      id: 9,
      name: 'Dyson V15 Detect Absolute',
      description: 'Беспроводной пылесос с лазерной подсветкой, цифровым мотором и системой фильтрации.',
      price: 399990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/h4b/64316052095006.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/h4b/64316052095006.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h58/h13/64316052127774.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h75/hd1/64316052160542.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h3c/64316052193310.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-106256224/'
    },
    {
      id: 10,
      name: 'Samsung 55" 4K Smart TV UE55AU8000U',
      description: 'Телевизор с 4K разрешением, технологией PurColor и удобным Smart TV интерфейсом.',
      price: 299990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/h7b/64252004040734.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h7b/64252004040734.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/h12/64252004073502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hbb/hb7/64252004106270.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h25/64252004139038.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-ue55au8000u-138-sm-4k-102632548/'
    }
  ];
}
