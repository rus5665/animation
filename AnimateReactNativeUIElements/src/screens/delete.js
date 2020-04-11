let objAvenue = {
  "Тип устройства": "PROP[4019][n0]",
  "Стандарты связи": "PROP[4020][n0]",
  "Операционная система": "PROP[4021][n0]",
  "Тип SIM-карты": "PROP[4022][n0]",
  "Тип корпуса": "PROP[4023][n0]",
  //"Основной дисплей": "PROP[4024][n0]",
  "Соотношение дисплей/корпус": "PROP[4025][n0]",
  "Модель процессора": "PROP[4026][n0]",
  "Частота процессора": "PROP[4027][n0]",
  "Кол-во ядер процессора": "PROP[4028][n0]",
  "Оперативная память": "PROP[4029][n0]",
  "Встроенная память": "PROP[4030][n0]",
  "Слот для карт памяти": "PROP[4031][n0]",
  "AnTuTu Benchmark": "PROP[4032][n0]",
  "Geekbench": "PROP[4033][n0]",
  "Основная камера": "PROP[4035][n0]",
  "Светосила основной камеры": "PROP[4036][n0]",
  "Основная камера (теле)": "PROP[4037][n0]",
  "Светосила теле камеры": "PROP[4038][n0]",
  "Съемка HD (720p)": "PROP[4039][n0]",
  "Съемка Full HD (1080p)": "PROP[4040][n0]",
  "Съемка Ultra HD (4K)": "PROP[4041][n0]",
  "Оптическая стабилизация": "PROP[4042][n0]",
  "Вспышка": "PROP[4043][n0]",
  "Фронтальная камера": "PROP[4044][n0]",
  "Светосила фронтальной камеры": "PROP[4045][n0]",
  "Коммуникации	": "PROP[4046][n0]",
  "aGPS": "PROP[4047][n0]",
  "GPS-модуль": "PROP[4048][n0]",
  "Поддержка ГЛОНАСС": "PROP[4049][n0]",
  "Цифровой компас": "PROP[4050][n0]",
  "Порты подключения": "PROP[4051][n0]",
  "Ввод данных": "PROP[4052][n0]",
  "Дополнительно": "PROP[4053][n0]",
  "Уровень защиты": "PROP[4054][n0]",
  "Тип аккумулятора": "PROP[4055][n0]",
  "Емкость аккумулятора": "PROP[4056][n0]",
  "Время в режиме разговора": "PROP[4057][n0]",
  "Время в режиме интернет-серфинга": "PROP[4058][n0]",
  "Время в режиме плеера": "PROP[4059][n0]",
  "Технология быстрой зарядки": "PROP[4060][n0]",
  "Беспроводная зарядка": "PROP[4061][n0]",
  "Несъемный аккумулятор": "PROP[4062][n0]",
  "Материал рамки/крышки": "PROP[4063][n0]",
  "Задняя крышка": "PROP[4064][n0]",
  "Размеры (ВхШхТ)": "PROP[4065][n0]",
  "Вес": "PROP[4066][n0]",
  "Графический процессор": "PROP[4067][n0]",
  "Режим работы SIM-карт": "PROP[4068][n0]",
  "Макс. объем карты": "PROP[4069][n0]",
  "Расположение mini-Jack": "PROP[4070][n0]",
  "Оптическое увеличение": "PROP[4071][n0]",
  "Кол-во объективов": "PROP[4089][n0]",
  "Основной объектив": "PROP[4082][n0]",
  "Мощность зарядки": "PROP[4083][n0]",
  "Мощность беспроводной зарядки": "PROP[4084][n0]",
  "Время зарядки": "PROP[4085][n0]",
  "Функции и возможности": "PROP[4086][n0]",
  "Количество SIM-карт": "PROP[4087][n0]",
  "Диагональ": "PROP[4090][n0]",
  "Влагозащита": "PROP[4088][n0]",
  "Разрешение экрана": "PROP[4091][n0]",
  "Тип дисплея": "PROP[4092][n0]",
  "Камера (тыловая)": "PROP[4093][n0]",
  "Камера (фронтальная)": "PROP[4094][n0]",
  "Автофокус": "PROP[4095][n0]",
  "4G (LTE)": "PROP[4096][n0]",
  "Bluetooth": "PROP[4097][n0]",
  "Емкость батареи": "PROP[4098][n0]",
  "Материал корпуса": "PROP[4099][n0]"
}

let operativka = {
  '2': '592',
  '3': '593',
  '4': '594',
  '6': '595',
  '8': '596',
  '16': '2086',
  '32': '2087',
}

let objEk = {- Variable.massiv -}
//objEk = JSON.parse(objEk)

//console.log(objEk)

let errors = ''

function posterAvenue(obj) {
  for (key in obj) {
    let ekKey = obj[key]
    let avenueKey = objAvenue[key]
    console.log('input[name="' + avenueKey + '"]')
    ekKey = ekKey.join(', ')
    console.log('ekKey', ekKey)
    let ekran = obj['Основной дисплей']

    //console.log('>>>>>>>>>', ekran)
    //console.log('>>>>key>>>>>', key)

    //////////////////////////////////////////////////////////////

    // ЗАПОЛНЯЕМ свойства Экрана
    if (key === 'Основной дисплей') {

      let allDisplayCharacteristiks = ekKey


      str = allDisplayCharacteristiks.split(', ')// строку разбиваем на массив

      str = str.filter(element => element !== '') //убираем пустые элементы из массива
      //console.log('str', str)

      let diagonal = document.querySelector('input[name="PROP[4090][n0]"]') // присваеваем инпуту номер ячейки на сайте
      if (diagonal !== null && str[0].indexOf('"') !== -1) { // проверяем чтобы свойство было спаршено и содержало двойную кавычку
        diagonal.value = str[0] // заполняем ячейку на сайте
      } //else  {
      //  errors = errors + '[Смартфоны] Диагональ | '
      //  }


      let razreshenie = document.querySelector('input[name="PROP[4091][n0]"]')

      //console.log('str[1]', str[1])
      // console.log('razreshenie', razreshenie)

      if (razreshenie != null && str[1].indexOf('х') !== -1 || str[1].indexOf('x') !== -1) {
        razreshenie.value = str[1]
      } //else {
      // errors = errors + '[Смартфоны] Разрешение экрана | '
      ///   }

      let tipEkrana = document.querySelector('input[name="PROP[4092][n0]"]')
      if (
        tipEkrana !== null &&
        str[3].indexOf('LED') !== -1 ||
        str[3].indexOf('LCD') !== -1 ||
        str[3].indexOf('TFT') !== -1 ||
        str[3].indexOf('IPS') !== -1
      ) {
        tipEkrana.value = str[3]
      }// else {
      //  errors = errors + '[Смартфоны] Тип дисплея| '
      // }
    } // Конец заполнения экрана

    // ЗАПОЛНЯЕМ фильтр Оперативная память



    /////////////////////////////////////////////////////////

    if (key === 'Оперативная память') {



      if (ekKey !== null) {
        let operativka = {
          '2': '592',
          '3': '593',
          '4': '594',
          '6': '595',
          '8': '596',
          '16': '2086',
          '32': '2087',
        }

        let select = document.querySelector('select[name="PROP[340][]"]') // присваеваем инпуту номер ячейки на сайте
        ekKey = ekKey.toString().trim()
        let selectValue = ekKey.split('Г')[0].trim()
        selectValue = selectValue.split('Т')[0].trim()
        selectValue = operativka[selectValue]
        select.value = selectValue // заполняем ячейку на сайте

      } // Конец заполнение оперативки
    }

    /////////////////////////////////////////////////////

    // // ЗАПОЛНЯЕМ фильтр Встроенная память

    if (key === 'Встроенная память') {

      if (ekKey !== null) {
        let vstoennayaPamyat = {
          '4': '601',
          '8': '602',
          '16': '603',
          '32': '604',
          '64': '605',
          '128': '606',
          '256': '607',
          '512': '1033',
          '1': '1034',
          '2': '1045',
        }

        let select = document.querySelector('select[name="PROP[339][]"]') // присваеваем инпуту номер ячейки на сайте
        ekKey = ekKey.toString().trim()
        let selectValue = ekKey.split('Г')[0].trim()
        selectValue = selectValue.split('Т')[0].trim()
        // selectValue = ekKey.split(" ")
        if (selectValue === '1024') {
          selectValue = '1'
        }
        selectValue = vstoennayaPamyat[selectValue]
        select.value = selectValue // заполняем ячейку на сайте

      }
    } // Конец заполнение встроеной

    //////////////////////////////////

    let temp = document.querySelector('input[name="' + avenueKey + '"]')
    if (temp !== null) {
      temp.value = ekKey
    }
  }
}


posterAvenue(objEk)

return errors