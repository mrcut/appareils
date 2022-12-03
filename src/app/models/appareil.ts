export class Appareil {
  id!: string;
  name: string;
  description!: string[];
  isOn: boolean;

  constructor(name: string) {
    this.name = name;
    this.isOn = false;
  }
}
