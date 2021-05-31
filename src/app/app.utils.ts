export function getBigString(fillWith: string): string {
  return Array.from({ length: 100000 }, () => fillWith).join();
}
