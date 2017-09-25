export interface Subject {
  registerObserver(f: (t: number, h: number, p: number) => void): void
  removeObserver(f: (t: number, h: number, p: number) => void): void
  notifyObservers(): void
}

export interface DisplayElement {
  display(): void
}
