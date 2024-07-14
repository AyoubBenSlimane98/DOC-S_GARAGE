import { ElementType } from 'react';

export interface ProductProps {
  id: number;
  title: string;
  priceBefore: string;
  priceAfter: string;
  imgUrl: string;
}
export type CardChooseProps = {
  Icon: ElementType;
  isActive?: boolean;
  title: string;
};
export const products: ProductProps[] = [
  {
    id: 1,
    title: '17"Rim Black',
    priceBefore: '0.00',
    priceAfter: '20.00',
    imgUrl:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2022/06/Wheel.H03.2k-600x600.jpg',
  },
  {
    id: 2,
    title: 'Car Charger',
    priceBefore: '20.00',
    priceAfter: '18.00',
    imgUrl:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2022/06/USB-Car-Charger.H03.2k.jpg',
  },
  {
    id: 3,
    title: '16"Rim Gun Metal',
    priceBefore: '0.00',
    priceAfter: '18.00',
    imgUrl:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2022/06/Tire-With-Rim.H03.2k-600x600.jpg',
  },
  {
    id: 4,
    title: 'Car Jack',
    priceBefore: '3.00',
    priceAfter: '2.00',
    imgUrl:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2022/06/Stylized-Jack.H03.2k-600x600.jpg',
  },
  {
    id: 5,
    title: '185/55 Tire',
    priceBefore: '0.00',
    priceAfter: '20.00',
    imgUrl:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2022/06/Radial-Car-Tire.H03.2k-600x600.jpg',
  },
  {
    id: 6,
    title: 'Suspension Set',
    priceBefore: '0.00',
    priceAfter: '26.00',
    imgUrl:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2022/06/Wheel-and-Suspension.H03.2k-600x600.jpg',
  },
  {
    id: 7,
    title: '16" Rim Silver',
    priceBefore: '24.00',
    priceAfter: '20.00',
    imgUrl:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2022/06/Radar-Car-Tire.H03.2k-600x600.jpg',
  },
  {
    id: 8,
    title: 'Car Lightbar',
    priceBefore: '0.00',
    priceAfter: '25.00',
    imgUrl:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2022/06/Police-Car-Lightbar.H03.2k-600x600.jpg',
  },
];
export interface logos {
  image: string;
}
export const images: logos[] = [
  {
    image:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2024/01/Asset-3-1-1-1.png',
  },
  {
    image:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2024/01/Asset-4-1-2-1.png',
  },
  {
    image:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2024/01/Asset-5-1-2-1.png',
  },
  {
    image:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2024/01/Asset-6-1-2-1.png',
  },
  {
    image:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2024/01/Asset-7-1-1-1.png',
  },
  {
    image:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2024/01/Asset-10-1.png',
  },
  {
    image:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2024/01/Asset-9-3-1.png',
  },
  {
    image:
      'https://demo.iacpatterns.com/docsgarage/wp-content/uploads/sites/117/2024/01/Asset-2-1-1-1.png',
  },
];
