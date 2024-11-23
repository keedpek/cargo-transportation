//service images
import city from 'assets/city_transportation.png'
import country from 'assets/country_transportation.png'
import loader from 'assets/loader.png'

//price images
import van1 from 'assets/van1.png'
import van15 from 'assets/van15.png'
import van2 from 'assets/van2.png'
import van25 from 'assets/van25.png'
import van3 from 'assets/van3.png'
import van5 from 'assets/van5.png'
import loaderPrice from 'assets/loader_price.png'
import floor from 'assets/floor.png'
import garbage from 'assets/garbage.png'

export const MAIN_ROUTE = '/'

export const TELEPHONE_NUMBER = '+375333747776'
export const EMAIL = 'GRUZOPEREVOZKI@gmail.com'

export const SERVICES = [
  {
    title: 'ГОРОДСКИЕ ПЕРЕВОЗКИ',
    description: 'Идеальное решение для доставки грузов по городу. Мы обеспечиваем быстрые и безопасные перевозки небольших и средних грузов в пределах города и пригорода. Наша команда гарантирует оперативность и внимание к каждому заказу.',
    img: city
  },
  {
    title: 'ПЕРЕВОЗКИ ПО БЕЛАРУСИ',
    description: 'Перевозим грузы на большие расстояния между регионами. Наши водители и транспортные средства подготовлены для длительных поездок, обеспечивая сохранность вашего груза и его своевременную доставку в любую точку страны.',
    img: country
  },
  {
    title: 'ГРУЗЧИКИ',
    description: 'Мы предоставляем услуги профессиональных грузчиков. Наши сотрудники аккуратно и быстро выполнят погрузку и разгрузку ваших вещей, будь то мебель, техника или любые другие грузы.',
    img: loader
  }
]

export const MAIN_PRICES = [
  {
    title: 'БУС ДО 1 ТОННЫ ОБЪЁМ ДО 10 КУБ. МЕТРОВ',
    price1: 'от 60 руб за 2 часa',
    price2: 'от 0,9 руб/км за городом',
    img: van1, 
  },
  {
    title: 'ФУРГОН ДО 1,5 ТОНН ОБЪЁМ 11-15 КУБ. МЕТРОВ',
    price1: 'от 70 руб за 2 часa',
    price2: 'от 1,0 руб/км за городом',
    img: van15,
  },
  {
    title: 'ФУРГОН ДО 2 ТОНН ОБЪЁМ 16-20 КУБ. МЕТРОВ',
    price1: 'от 80 руб за 2 часa',
    price2: 'от 1,2 руб/км за городом',
    img: van2,
  },
  {
    title: 'ФУРГОН ДО 2,5 ТОНН ОБЪЁМ 21-25 КУБ. МЕТРОВ',
    price1: 'от 120 руб за 3 часa',
    price2: 'от 1,3 руб/км за городом',
    img: van25,
  },
  {
    title: 'ФУРГОН ДО 3 ТОНН ОБЪЁМ ДО 26-30 КУБ. МЕТРОВ',
    price1: 'от 150 руб за 3 часa',
    price2: 'от 1,4 руб/км за городом',
    img: van3,
  },
  {
    title: 'ФУРГОН ДО 5 ТОНН ОБЪЁМ ДО 30 КУБ. МЕТРОВ',
    price1: 'от 220 руб за 4 часa',
    price2: 'от 1,8 руб/км за городом',
    img: van5,
  }
];

export const ADD_PRICES = [
  {
    title: 'ГРУЗЧИК',
    price1: 'На полноценные переезды: от 40 руб за 2 часа',
    price2: 'Для мелких работ: от 15 руб за 1 час',
    img: loaderPrice,
  },
  {
    title: 'ПОЭТАЖКА',
    price1: 'от 35 руб/тонна за 1 этаж',
    price2: 'с лифтом - за 2 этажа',
    img: floor,
  },
  {
    title: 'ВЫВОЗ МУСОРА (без грузчика)',
    price1: 'от 50 руб за 1 час',
    price2: 'от 1,6 руб/км за городом',
    img: garbage,
  },
]