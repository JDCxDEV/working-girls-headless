<template>
    <div>
      <Header />
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-4 mt-5">
              <h2 class="text-danger">Our Model Sizes</h2>
            </div>
          </div>
            <div class="row mt-3">
              <div class="col-md-3 text-center">
                <img src="https://344800.smushcdn.com/915356/wp-content/uploads/sites/13/2019/06/model-01.png?lossy=0&strip=1&webp=1" class="img-fluid"></img>
              </div>
                <div class="col-md-8">
                    <h3 class="text-danger">Cassie's measurements</h3>
                    <b-table striped hover bordered :items="model_sizes_cassie"></b-table>
                    <h3 class="mt-2 text-danger"><strong>Bust:</strong></h3>
                    <ul class="list-group">
                      <li>- This is NOT your bra size!</li>
                      <li>- Wear an unpadded bra (your dress will have a built-in bra)</li>
                      <li>- Relax arms at sides</li>
                      <li>- Pull tape across the fullest part of the bust</li>
                    </ul>
                    <h3 class="mt-2 text-danger"><strong>Waist:</strong></h3>
                    <ul class="list-group">
                      <li>– Bend to one side to find the natural crease of your waist</li>
                      <li>– This is the slimmest part of the waist</li>
                      <li>– Measure across at this point</li>
                      <li>– Keep tape slightly loose to allow for breathing room</li>
                    </ul>
                    <h3 class="mt-2 text-danger"><strong>Hips:</strong></h3>
                    <ul class="list-group">
                      <li>– Stand with feet together</li>
                      <li>– Measure around the fullest part of the hips and rear</li>
                      <li>– Tape should brush across both hipbones</li>
                    </ul>
                </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-3 text-center">
                <img src="https://344800.smushcdn.com/915356/wp-content/uploads/sites/13/2019/06/model-06.png?lossy=0&strip=1&webp=1" class="img-fluid"></img>
              </div>
                <div class="col-md-8">
                    <h3 class="text-danger">Jade's Measurements</h3>
                    <b-table striped hover bordered :items="model_sizes_jade"></b-table>
                    <h3 class="mt-2 text-danger"><strong>Bust:</strong></h3>
                    <ul class="list-group">
                      <li>- This is NOT your bra size!</li>
                      <li>– Wear an unpadded bra (your dress will have a built-in bra)</li>
                      <li>- Relax arms at sides</li>
                      <li>- Pull tape across the fullest part of the bust</li>
                    </ul>
                    <h3 class="mt-2 text-danger"><strong>Waist:</strong></h3>
                    <ul class="list-group">
                      <li>– Bend to one side to find the natural crease of your waist</li>
                      <li>– This is the slimmest part of the waist</li>
                      <li>– Measure across at this point</li>
                      <li>– Keep tape slightly loose to allow for breathing room</li>
                    </ul>
                    <h3 class="mt-2 text-danger"><strong>Hips:</strong></h3>
                    <ul class="list-group">
                      <li>– Stand with feet together</li>
                      <li>– Measure around the fullest part of the hips and rear</li>
                      <li>– Tape should brush across both hipbones</li>
                    </ul>
                </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-3 text-center">
                <img src="https://344800.smushcdn.com/915356/wp-content/uploads/sites/13/2019/06/model-10.png?lossy=0&strip=1&webp=1" class="img-fluid">
              </div>
                <div class="col-md-8">
                    <h3 class="text-danger">Kayla's Measurements</h3>
                    <b-table striped hover bordered :items="model_sizes_kayla"></b-table>
                    <h3 class="mt-2 text-danger"><strong>Bust:</strong></h3>
                    <ul class="list-group">
                      <li>- This is NOT your bra size!</li>
                      <li>– Wear an unpadded bra (your dress will have a built-in bra)</li>
                      <li>- Relax arms at sides</li>
                      <li>- Pull tape across the fullest part of the bust</li>
                    </ul>
                    <h3 class="mt-2 text-danger"><strong>Waist:</strong></h3>
                    <ul class="list-group">
                      <li>– Bend to one side to find the natural crease of your waist</li>
                      <li>– This is the slimmest part of the waist</li>
                      <li>– Measure across at this point</li>
                      <li>– Keep tape slightly loose to allow for breathing room</li>
                    </ul>
                    <h3 class="mt-2 text-danger"><strong>Hips:</strong></h3>
                    <ul class="list-group">
                      <li>– Stand with feet together</li>
                      <li>– Measure around the fullest part of the hips and rear</li>
                      <li>– Tape should brush across both hipbones</li>
                    </ul>
                </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-3 text-center">
                <img src="https://344800.smushcdn.com/915356/wp-content/uploads/sites/13/2019/06/model-08.png?lossy=0&strip=1&webp=1" class="img-fluid">
              </div>
                <div class="col-md-8">
                    <h3 class="text-danger">Anya's Measurements</h3>
                    <b-table striped hover bordered :items="model_sizes_anya"></b-table>
                    <h3 class="mt-2 text-danger"><strong>Bust:</strong></h3>
                    <ul class="list-group">
                      <li>- This is NOT your bra size!</li>
                      <li>– Wear an unpadded bra (your dress will have a built-in bra)</li>
                      <li>- Relax arms at sides</li>
                      <li>- Pull tape across the fullest part of the bust</li>
                    </ul>
                    <h3 class="mt-2 text-danger"><strong>Waist:</strong></h3>
                    <ul class="list-group">
                      <li>– Bend to one side to find the natural crease of your waist</li>
                      <li>– This is the slimmest part of the waist</li>
                      <li>– Measure across at this point</li>
                      <li>– Keep tape slightly loose to allow for breathing room</li>
                    </ul>
                    <h3 class="mt-2 text-danger"><strong>Hips:</strong></h3>
                    <ul class="list-group">
                      <li>– Stand with feet together</li>
                      <li>– Measure around the fullest part of the hips and rear</li>
                      <li>– Tape should brush across both hipbones</li>
                    </ul>
                </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-3 text-center">
                <img src="https://344800.smushcdn.com/915356/wp-content/uploads/sites/13/2019/06/model-09.png?lossy=0&strip=1&webp=1" class="img-fluid">
              </div>
                <div class="col-md-8">
                    <h3 class="text-danger">Nikki's Measurements</h3>
                    <b-table striped hover bordered :items="model_sizes_niki"></b-table>
                    <h3 class="mt-2 text-danger"><strong>Bust:</strong></h3>
                    <ul class="list-group">
                      <li>- This is NOT your bra size!</li>
                      <li>– Wear an unpadded bra (your dress will have a built-in bra)</li>
                      <li>- Relax arms at sides</li>
                      <li>- Pull tape across the fullest part of the bust</li>
                    </ul>
                    <h3 class="mt-2 text-danger"><strong>Waist:</strong></h3>
                    <ul class="list-group">
                      <li>– Bend to one side to find the natural crease of your waist</li>
                      <li>– This is the slimmest part of the waist</li>
                      <li>– Measure across at this point</li>
                      <li>– Keep tape slightly loose to allow for breathing room</li>
                    </ul>
                    <h3 class="mt-2 text-danger"><strong>Hips:</strong></h3>
                    <ul class="list-group">
                      <li>– Stand with feet together</li>
                      <li>– Measure around the fullest part of the hips and rear</li>
                      <li>– Tape should brush across both hipbones</li>
                    </ul>
                </div>
            </div>
        </div>
      <Footer />
    </div>
  </template>
  <script>
  import Header from '../../components/header/header2'
  import Footer from '../../components/footer/footer1'

  export default {
    components: {
      Header,
      Footer
    },
    data() {
      return {
        model_sizes_cassie: [				
            { 'weight_(kg/lbs)': '108/235', 'height_(cm/in)': '172/68', 'bust_(cm/in)': '110/43', 'waist_(cm/in)' : '88/35', 'hips_(cm/in)' : '113/45' , 'our_size' : '3XL'},
        ],
        model_sizes_jade: [				
            { 'weight_(kg/lbs)': '51/112', 'height_(cm/in)': '169/66', 'bust_(cm/in)': '96/38', 'waist_(cm/in)' : '68/27', 'hips_(cm/in)' : '98/38' , 'our_size' : 'M-L'},
        ],
        model_sizes_kayla: [				
            { 'weight_(kg/lbs)': '58/128', 'height_(cm/in)': '180/71', 'bust_(cm/in)': '86/34', 'waist_(cm/in)' : '71/31', 'hips_(cm/in)' : '92/36' , 'our_size' : 'M-L'},
        ],
        model_sizes_anya: [				
            { 'weight_(kg/lbs)': '48/106', 'height_(cm/in)': '173/68', 'bust_(cm/in)': '89/35', 'waist_(cm/in)' : '69/27', 'hips_(cm/in)' : '89/35' , 'our_size' : 'M-L'},
        ],
        model_sizes_niki: [				
            { 'weight_(kg/lbs)': '50/110', 'height_(cm/in)': '170/67', 'bust_(cm/in)': '92/36', 'waist_(cm/in)' : '63/25', 'hips_(cm/in)' : '93/37' , 'our_size' : 'M-L'},
        ],
      }
    }
  }
  </script>
  