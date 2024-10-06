import img1 from "~/assets/images/card1.png";
import img2 from "~/assets/images/card2.png";
import img3 from "~/assets/images/card3.png";
import img4 from "~/assets/images/card4.png";
import img5 from "~/assets/images/card5.png";
import img6 from "~/assets/images/card6.png";
import img7 from "~/assets/images/card7.png";

const cards = [
  {
    id: 1,
    img: img1,
    name: "Korzinka.uz",
    text: "В четверг скидки на рыбу",
    stock: "4%",
    type: "Супермаркеты",
  },
  {
    id: 2,
    img: img2,
    name: "MANGO",
    text: "Акция 1+1",
    stock: "3%",
    type: "Магазины брендовой одежды",
  },
  {
    id: 3,
    img: img3,
    name: "TEXNOMART",
    text: "До — 60% на бытовую технику в ТЦ «Samarkan",
    stock: "2%",
    type: "Магазины электроники и бытов",
  },
  {
    id: 4,
    img: img4,
    name: "Makro",
    text: "При покупке CIF пачка губок Salixan БЕСПЛАТHO",
    stock: "5%",
    type: "Супермаркеты",
  },
  {
    id: 5,
    img: img5,
    name: "Gosty",
    text: "Каждый вторник — 20% на все меню",
    stock: "6%",
    type: "Рестораны",
    term: "До 29 февраля",
  },
  {
    id: 6,
    img: img6,
    name: "Shosh",
    text: "Скидки на еду и напитки",
    stock: "3.5%",
    type: "Кафе",
    term: "До 31 февраля",
  },
  {
    id: 7,
    img: img7,
    name: "Petrovich",
    text: "Ланч по выгодной цене и 2% кешбэк по промокоду",
    stock: "3.5%",
    type: "Рестораны",
    term: "До 26 февраля",
  },
];

const faq = [
  {
    id: 1,
    question: "Какие компании представлены на сайте?",
    answer: "Здесь будет текст о компаниях, которые представлены на сайте.",
  },
  {
    id: 2,
    question: "Как я могу быть в курсе новых скидок и акций на сайте?",
    answer:
      "Чтобы быть в курсе новых скидок и акций на сайте, вы можете подписаться на наш телеграм-канал или следить за новостями.Мы регулярно отправляем информацию о новых предложениях и акциях нашим подписчикам, чтобы они всегда могли быть в курсе последних скидок и эксклюзивных предложений.Также можно регулярно посещать сайт и проверять разделы с акциями и скидками",
  },
  {
    id: 3,
    question: "Могу ли я поделиться найденными скидками и акциями с друзьями?",
    answer:
      "Да, вы можете поделиться скидками и акциями через социальные сети или мессенджеры.",
  },
];

export { cards, faq };
