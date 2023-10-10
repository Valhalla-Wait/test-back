//Обход бинарного дерева
const binTree = {
    value: 10,
    left: {
        value: 12,
        right: {
            value: 1,
            left: {
                value: 12,
            },
        },
        left: {
            value: 2,
            left: {
                value: 4,
            },
        },
    },
}

const sumTree = (tree) => {
   let count = tree.value

    if(tree.right) {
        count += sumTree(tree.right)   
    }
    if(tree.left) {
        count +=sumTree(tree.left)
    }
    return count
}

const sum = sumTree(binTree, 0)
console.log(sum)

//Добавление фнкции задержки для прототипа функции
Function.prototype.delay = function (delay) {
    return (...args) => {
        const func = this
        setTimeout(() => func(...args), delay)
    }
}

const hello = (srt) => console.log(srt)

const someFnWithDelay = hello.delay(6000)

console.log(someFnWithDelay('some help'))

//Работа с  классами и обьектами, и их контекстами