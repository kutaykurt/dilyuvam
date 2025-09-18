import SP_Intro from "./Intro";
import SP_AskingPrice from "./AskingPrice";
import SP_QuantitiesSizes from "./QuantitiesSizes";
import SP_ComparisonsDiscounts from "./ComparisonsDiscounts";
import SP_PaymentCheckout from "./PaymentCheckout";
import SP_Quiz from "./Quiz";

const shoppingPrices = {
  slug: "shopping-prices",
  title: "Shopping & Preise",
  tr: "Alışveriş & Fiyatlar",
  group: "Kommunikation",
  subsections: [
    { slug: "intro", tr: "Giriş", title: "Einleitung", Component: SP_Intro },
    {
      slug: "asking-price",
      tr: "Fiyat sorma",
      title: "Preise fragen",
      Component: SP_AskingPrice,
    },
    {
      slug: "quantities-sizes",
      tr: "Miktar & beden",
      title: "Mengen & Größen",
      Component: SP_QuantitiesSizes,
    },
    {
      slug: "comparisons-discounts",
      tr: "Karşılaştır/ind.",
      title: "Vergleichen & Rabatte",
      Component: SP_ComparisonsDiscounts,
    },
    {
      slug: "payment-checkout",
      tr: "Ödeme & kasa",
      title: "Bezahlen & Kasse",
      Component: SP_PaymentCheckout,
    },
  ],
  QuizComponent: SP_Quiz,
};

export default shoppingPrices;
