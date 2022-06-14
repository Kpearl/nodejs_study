type stringNumberFunc = (string, number) => void
let f: stringNumberFunc = function (a: string, b: number): void {}
let g: stringNumberFunc = function (a: string, b?: number): void {}
let h: stringNumberFunc = function () {}

h()
