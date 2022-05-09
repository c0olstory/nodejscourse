import colors  from 'colors';

let err = null
const arr = []

let [ min, max ] = process.argv.slice(2)

min = Number(min)
max = Number(max)

if(isNaN(min) || isNaN(max)) {
  console.log('Аргумент, переданный при запуске, не считается числом')
} else {
  for (let i = min; i <= max; i++) {
    err = false
    test(i)
  }
  
  function test(num) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        err = true
      }
    }
    if(!err) {
      arr.push(num)
      err = false
    }
  }

  if(!arr.length) {
    console.log(`${colors.red('Простых чисел в диапозоне нет')}`)
  } else {
    for (let i = 0; i < arr.length; i++) {
      while(i < 3) {
        switch(i) {
          case 0 :
            console.log(`${colors.green(arr[i])}`)
            break
          case 1 :
            console.log(`${colors.yellow(arr[i])}`)
            break
          case 2 :
            console.log(`${colors.red(arr[i])}`)
            break
        }
        break
      }
    }
  }
}
