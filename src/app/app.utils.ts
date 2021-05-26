export function getBigString(fillWith: string): string {
  return Array.from({ length: 80000 }, () => fillWith).join();
}
