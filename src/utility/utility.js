import IceCream from "../assets/images/icecream.png";

export const foodDefaultImage = (onErrorEvent) =>
  (onErrorEvent.target.src = IceCream);
