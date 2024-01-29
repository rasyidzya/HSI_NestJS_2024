import { Animal } from "./4_class_animal_construct";
export class Rabbit extends Animal {
  constructor(name: string, age: number) {
    // Memanggil constructor dari class induk (Animal) dengan menyertakan nilai yang diperlukan
    super(name, age, true);
  }

  eat(): string {
    return `${this.name} yang berumur ${this.age} tahun sedang makan!`;
  }
}
