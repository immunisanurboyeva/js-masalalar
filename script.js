
/* ------------------------------------------------------------
                        •🌱 vazifa 1

        Faqat juft sonlarni yangi arrayga ajrating. 

    ------------------------------------------------------------
*/ 

let numbers = [4, 8, 1, 9, 3];

/* 1 - usul */     
        let newNums = []
        numbers.forEach( number => number % 2 === 0 ? newNums.push(number) : console.log('nothing') )
        console.log(newNums);

/* 2 - usul */     
        let number = numbers.filter(number => number % 2 ===0 ); console.log(number);






/* ------------------------------------------------------------
                        • vazifa 2

        Faqat 18 yoshdan katta foydalanuvchilarni chiqaring.

    ------------------------------------------------------------
*/ 
let users = [
    { name: "Ali", age: 17 },
    { name: "Vali", age: 22 },
    { name: "Sami", age: 19 }
];

/* 1 - usul */     
        users.forEach( user => user.age >= 18 ? console.log(user) : console.log('nothing') )
        
/* 2 - usul */     
        let user = users.filter(user => user.age >= 18)
        console.log(user);
        
/* 3 - usul */     
        users.forEach( user => user.age >= 18 ? console.log(user) : console.log('young'))








/* ------------------------------------------------------------
                        •🪴 vazifa 3

        Har bir mahsulotning umumiy summasini hisoblang.

    ------------------------------------------------------------
*/ 

let products = [
    { title: "Olma", price: 5000, quantity: 10 },
    { title: "Banan", price: 12000, quantity: 5 },
    { title: "Anor", price: 15000, quantity: 8 }
];

products.quantity = Number(products.quantity)
products.price = Number(products.price)

/* 1 - usul || mahsulotlarning umumiy summasi */   

            let umumiySumma = +[]
            products.forEach( product => umumiySumma += product.price )

            console.log(umumiySumma);


/* 2 - usul || har bir mahsulotning alohida summasi */

            let harBirSum = []
            
            products.forEach( product =>
                product.forEach( productPrice =>
                    productPrice = productPrice.price * productPrice.quantity
                ))

            console.log(productPrice)


            let BirSum0 = products[0].price*products[0].quantity
            let BirSum1= products[1].price*products[1].quantity
            console.log(BirSum0);
            console.log(BirSum1);