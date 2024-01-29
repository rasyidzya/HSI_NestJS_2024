export function minimal(a: number, b: number): number {
  if (a <= b) {
    return a;
  } else {
    return b;
  }
}

export function minimalWithCheck(a: number, b: number): number {
  const min = Math.min(a, b);
  if (min === b) {
    console.log("Nilai yang dikembalikan adalah b");
  } else if (min === a) {
    console.log("Nilai yang dikembalikan adalah a");
  }
  return min;
}

export function minimalWithCheck2(a: number, b: number): number {
  const min2 = Math.min(a, b);
  if (min2 !== b) {
    console.log("Nilai yang dikembalikan adalah a");
  } else {
    console.log("Nilai yang dikembalikan adalah b");
  }
  return min2;
}
