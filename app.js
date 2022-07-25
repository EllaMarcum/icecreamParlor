console.log('iceCream time');
const iceCream = [{
  name: 'cookies w grandma',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1
}, {
  name: 'Basic bish',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1
}, {
  name: 'Strawberry Shortcake',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2
},
{
  name: 'razzleberry deluxe',
  image: 'https://www.bing.com/images/search?view=detailV2&ccid=%2fKzJE1re&id=5C2225FC6ECEBD62A81B92F57210475E2FB00FF0&thid=OIP._KzJE1remBPmqDDK1u0nRQHaFW&mediaurl=https%3a%2f%2fthumbs.dreamstime.com%2fz%2fraspberry-ice-cream-scoop-chopped-nuts-white-chocolate-raspberry-ice-cream-scoop-chopped-nuts-white-chocolate-129831530.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.fcacc9135ade9813e6a830cad6ed2745%3frik%3d8A%252bwL15HEHL1kg%26pid%3dImgRaw%26r%3d0&exph=1156&expw=1600&q=fancy+raspberry+icecream&simid=608037863362527559&FORM=IRPRST&ck=70F30293CA5C74B6E33D55BBCA1F7FF3&selectedIndex=153',
  price: 15,


},
{
  name: 'Gucci Swirl',
  image: 'https://th.bing.com/th?q=Fancy+Ice+Cream+Parlor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=strict&t=1&mw=247',
  price: 100000,


},
]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2
}, {
  name: 'Waffle Raft',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,


},
{
  name: 'cup',
  image: 'https://th.bing.com/th/id/R.c0116c3b571f17fbfb99a488b0e5e820?rik=pCSw4i39N5MbcA&riu=http%3a%2f%2fcdn.notonthehighstreet.com%2ffs%2ff3%2f4b%2f7952-ab51-4932-b573-936dbda1b848%2foriginal_set-of-ice-cream-sweet-cups-with-wooden-spoons.jpg&ehk=qeCG%2fl%2fex65eTawI%2bvrQjrqhvKJTLvtWRBXHE%2bEb3C0%3d&risl=&pid=ImgRaw&r=0',
  price: 1


},

]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1
},
{
  name: 'Pure Gold Drizzzle',
  image: 'https://s3.amazonaws.com/indiafoodnetwork/wp-content/uploads/2019/05/20164110/31.jpg',
  price: 2000,

}
]

const cart = {
  iceCream: [],
  toppings: [],
  vessel: {}
}

function drawToppings() {
  let template = ''
  toppings.forEach(v => template += `
  test
  
  `)

  let toppingsElm = document.getElementById('Toppings')
  console.log(toppingsElm);
  // @ts-ignore
  toppingsElm.innerHTML = template


}

function drawIceCream() {
  let template = ''
  iceCream.forEach(v => template += )

  let iceCreamElm = document.getElementById('iceCream')
  console.log(iceCreamElm);

  IceCreamElm.innerHTML = template

}

function drawVessel() {
  let template = ''
  vessel.forEach(v => template +=>)

  let vesselElm = document.getElementById('vessel')
  console.log(vesselElm);
  // @ts-ignore
  vesselElm.innerHTML = template

}

drawVessel()

drawIceCream()

drawToppings()