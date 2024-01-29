import { Animal } from "./4_class_animal_construct";

export class Eagle extends Animal {
  // protected speed: number = 220;
  speed: number = 220;

  constructor(name: string, age: number) {
    // Memanggil constructor dari class induk (Animal) dengan menyertakan nilai yang diperlukan
    super(name, age, false);
  }

  fly(): string {
    return `${this.name} yang berumur ${this.age} sedang terbang!`;
  }

  // protected run(speed: number): string {
  run(speed: number): string {
    return `${this.name} Berlari dengan kecepatan ${speed} km/h`;
  }
}
