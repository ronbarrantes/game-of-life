export const appendMultiple =
  (parent: HTMLElement) =>
    (...children: Array<HTMLElement>): void => {
      children.forEach(child => parent.appendChild(child))
    }

