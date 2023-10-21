import cardModel from "../models/card";

const getBasic = async () => {
  return [
    'CATTER-MELON',
    'CATTER-MELON',
    'CATTER-MELON',
    'CATTER-MELON',
    'TACOCAT',
    'TACOCAT',
    'TACOCAT',
    'TACOCAT',
    'BEARDCAT',
    'BEARDCAT',
    'BEARDCAT',
    'BEARDCAT',
    'HAIRY-POTATO-CAT',
    'HAIRY-POTATO-CAT',
    'HAIRY-POTATO-CAT',
    'HAIRY-POTATO-CAT',
    'RAINBOW-RALPHING-CAT',
    'RAINBOW-RALPHING-CAT',
    'RAINBOW-RALPHING-CAT',
    'RAINBOW-RALPHING-CAT',
    'NOPE',
    'NOPE',
    'NOPE',
    'NOPE',
    'NOPE',
    'FAVOR',
    'FAVOR',
    'FAVOR',
    'FAVOR',
    'SHUFFLE',
    'SHUFFLE',
    'SHUFFLE',
    'SHUFFLE',
    'SKIP',
    'SKIP',
    'SKIP',
    'SKIP',
    'ATTACK',
    'ATTACK',
    'ATTACK',
    'ATTACK',
  ]
};

const getListCardBasic = async () => {
  const listBasic = getBasic();
  return await cardModel.find({
    _id: {
      $in: listBasic,
    },
  });
};

export { getBasic, getListCardBasic };
