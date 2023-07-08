mano = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
bruh = ['♥','♣','♠','♦']

nasci = mano[Math.floor(Math.random() * mano.length)]
arro = bruh[Math.floor(Math.random() * bruh.length)]

cau = document.getElementById('kart1').innerHTML = nasci
ovo = document.getElementById('kart6').innerHTML = nasci
ko = document.getElementById('kartao').innerHTML = arro