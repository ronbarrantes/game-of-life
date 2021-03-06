interface RandomState {
  (size: number): number[][];
}

interface RandomNumber {
  (num?: number): number;
}

interface AppendMultiple {
  (parent: HTMLElement): (...children: HTMLElement[]) => void;
}

export const randomState: RandomState = (size) => {
  const arr = []
  for(let i = 0; i< size; i++){
    arr.push([])
    for(let j = 0; j< size; j++){
      arr[i].push(Math.floor(Math.random() * 2))
    }
  }
  return arr
}

const randomNumber: RandomNumber = (num=255) => Math.floor(Math.random() * num)

export const randomColor = (): string =>
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`

// FIXME: IS THIS RIGHT
export const appendMultiple: AppendMultiple = (parent) =>
  (...children) => children.forEach(child => parent.appendChild(child))
