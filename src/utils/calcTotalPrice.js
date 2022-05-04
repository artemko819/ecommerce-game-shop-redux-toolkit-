export const calcTotalPrice = items => items.reduce((acc, game) => {
    return acc += game.price
  }, 0)