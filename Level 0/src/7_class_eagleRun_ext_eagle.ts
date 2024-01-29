import { Eagle } from "./6_class_eagle_ext_animal";
export class EagleRun extends Eagle {
  constructor(name: string, age: number) {
    // Memanggil constructor dari class induk (Eagle) dengan menyertakan nilai yang diperlukan
    super(name, age);
  }

  runEagle(speed: number): string {
    return this.run(speed);
  }
}
