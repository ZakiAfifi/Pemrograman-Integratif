alert('Program Sederhana Angka Positif dan Negatif')
  let angka = parseInt(prompt('Masukan Angka'))

  if (angka >= 0) {
    alert('Ini Angka Positif');
  } else if( angka == 0){
    alert('Ini Angka 0');
  } else if (angka < 0) {
    alert('Ini Angka Negatif');
  } else {
    alert('Ini Bukan Angka');
  }
