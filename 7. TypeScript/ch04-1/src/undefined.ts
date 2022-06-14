interface INameable {
    name: string
}
function getName(o: INameable) {return o.name}

let n = getName(undefined)
console.log(n)
