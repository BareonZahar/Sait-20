
const zagadka = ['медведь','слон','работа']
const vopros = ['Любит мед,спит зимой','Он крупнейший из ныне существующих наземных животных','Куда мы ходим каждый день']
let zagad = []
let secret = []
const baraban = [400,600,300,150,200,500,350,250,150,50,400,300,350,200,100,450]
let mon = 0
let soda = 0
let hod = 0

$(document).ready(start)
function start() {
    let r = Math.floor(Math.random() * 3)
    zagad = zagadka[r].split('')
    console.log(zagad)
         for (let i=0; i<zagad.length; i++) {
    secret.push('*')
        }
               console.log(secret)
    $('#vopros').text(vopros[r])
    $('#slova').text(secret.join(' '))
}

$('#but').click(ugaday)
function  ugaday() {
    let bukva = $('#rew').val()
    soda++
    for ([w] in zagad) {
        if (bukva === zagad[w]) {
            console.log('est')
            secret[w] = bukva
        }
        //  $('#hod').text('Ход=' + hod)
    }
    $('#slova').text(secret.join(' '))
    console.log(zagad)
    console.log(secret)

   // function prov() {
      //  if (bukva === bukva.toUpperCase()) {
        //    $('#zag').text('Вводите маленькие буквы')
       // }
      //  else {
       //     return (uga)
      //  }
  $('#but').click(uga)
        function uga() {
            let bukva = $('#rew').val()
            let index = zagad.indexOf(bukva)
            if (index === -1) {
                document.getElementById('perehod').style.opacity = '1'
                document.getElementById('konteyner').style.opacity = '1'

                if (index === -1) {
                    document.getElementById('restar').style.opacity = '1'
                    $('#restar').click(res)
                    $('#star').prop('disabled', true)
                    $('#but').prop('disabled', true)
                    $('#rew').prop('disabled', true)
                    $('#ogur').prop('disabled', true)
                    $('#ogh').prop('disabled', true)
                    $('#kolp').prop('disabled', true)

                    function res() {
                        location.reload()
                    }
                }

            }
        }

    proverka()
}
function  proverka(){
     if (secret.indexOf('*') === -1){
         console.log('win')
         $('#but').prop('disabled',true)//заблокировать кнопку после выйграша
         $('#rew').prop('disabled',true)
         document.getElementById('vygraki').style.opacity = '1'
          document.getElementById('restar').style.opacity = '1'
         $('#star').prop('disabled',true)
           $('#ogur').prop('disabled',true)
                   $('#ogh').prop('disabled',true)
                   $('#kolp').prop('disabled',true)
           $('#restar').click(res)
           function res(){
                      location.reload()
                  }
     }
}

         $('#but').prop('disabled',true)
         $('#rew').prop('disabled',true)
let das = 0
$('#star').click(ydaga)
function ydaga() {
      hod++
    let m = Math.floor(Math.random() * 16)
   mon = baraban[m]
    das += mon
    console.log(das)
    $('#ogki').text(das)
    $('#rew').val('')
     $('#but').prop('disabled',false)
         $('#rew').prop('disabled',false)
     $('#star').prop('disabled',true)

     if ($('#cryg').classList !=='jump'){
        $('#cryg').addClass('jump')
    }
    setTimeout(
        function (){
        $('#cryg').removeClass( 'jump')
        },1000 )
    $('#but').click(t)
    function t(){
          $('#rew').prop('disabled',true)
         $('#star').prop('disabled',false)
         $('#but').prop('disabled',true)
    }
}
 $('#ogur').click(fr)
 function fr() {
     if (das === 500 || das >= 500) {
         das = das - 500
          $('#ogki').text(das)
      document.getElementById('smem').style.opacity = '1'
         document.getElementById('smeh').style.opacity = '0'
         $('#ogur').prop('disabled',true)
     }
 }
$('#ogh').click(fw)
 function fw() {
     if (das === 300 || das >= 300) {
           das = das - 300
          $('#ogki').text(das)
         document.getElementById('smew').style.opacity = '1'
         document.getElementById('smer').style.opacity = '0'
         $('#ogh').prop('disabled',true)
     }
 }
$('#kolp').click(fs)
 function fs() {
     if (das === 200 || das >= 200) {
           das = das - 200
          $('#ogki').text(das)
         document.getElementById('smeq').style.opacity = '1'
         document.getElementById('smet').style.opacity = '0'
         $('#kolp').prop('disabled',true)
     }
 }
/*let str = 'LoReM IsPuM';
let str1 = 'АаЯя';
let a = str[0].charCodeAt(); // 76
let a1 = str1[1].charCodeAt(); // 97

for (i = 0; i < str.length; i++) {
  if (str.charCodeAt[i] < a || str.charCodeAt[i] > a1) {
    str.replace(/str/g, str[i].toLowerCase());
  } else {
    str1.replace(/str/g, str[i].toUpperCase());
  }
}

alert(str);

*/


