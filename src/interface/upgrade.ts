

interface Upgrade {
  name: string;
  price: string;
  owned: boolean;
  available: boolean;
  effect: () => any;
}

export default Upgrade;
