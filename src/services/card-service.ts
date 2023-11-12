import cardModel from "../models/card";

const getBasic = () => {
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
  const listUniqueCard = [...new Set(listBasic)]
  return await cardModel.find({
    code: {
      $in: listUniqueCard,
    },
  });
};

const getListCardExceptBasic = async () => {
  const listBasic = getBasic();
  const listUniqueCard = [...new Set(listBasic)];
  listUniqueCard.push('EXPLODING-KITTEN');
  listUniqueCard.push('DEFUSE');
  return await cardModel.find({
    code: {
      $not: {
        $in: listUniqueCard,
      }
    },
  });
};

const getListCard = async (listCard: string[]) => {
  const listUniqueCard = [...new Set(listCard)]
  return await cardModel.find({
    code: {
      $in: listUniqueCard,
    },
  });
};

export { getBasic, getListCardBasic, getListCardExceptBasic, getListCard };
