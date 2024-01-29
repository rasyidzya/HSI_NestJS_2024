export function penjumlahanBilangan(
  a: number[],
  b: "ganjil" | "genap"
): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (
      (a[i] % 2 === 0 && b === "genap") ||
      (a[i] % 2 !== 0 && b === "ganjil")
    ) {
      sum += a[i];
    }
  }
  return sum;
}
