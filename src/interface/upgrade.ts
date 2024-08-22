

interface IUpgrade {
  name: string;
  price: number;
  owned: boolean;
  available: boolean;
  reqs: boolean;
  required: any;
  check: () => void;
  buy: () => void;
  activate: () => void;
}

export default IUpgrade;
