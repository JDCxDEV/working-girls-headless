<template>
    <div>
      <Header />
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-12 text-center">
                    <h3 class="text-danger"> My Secret Drawer creates beautiful lingerie for the beautiful you!</h3>
                    <p>
                        <br> Use our size guide to find the size that perfectly hugs your curves, boosts your assets and makes you look and feel your sexiest.<br>

                        <br> You may also find it helpful to see the measurements of our various models <a class="text-danger" href="/our-models-sizes">here…</a><br>

                        <br> If you find that you are ‘between’ sizes – for example, a 2XL top but a 3XL bottom, we recommend you buy the larger size to ensure maximum comfort.<br>
                    </p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-12 text-center">
                    <h3 class="text-danger">SIZE CHART</h3>
                    <b-table striped hover bordered :items="items_size_chart"></b-table>
                </div>
                <div class="col-md-12 text-center">
                    <h3 class="text-danger">HOSIERY</h3>
                    <b-table striped hover bordered :items="items_hosiery"></b-table>
                </div>
            </div>
            <div class="row text-center">
              <div class="col-md-12">
                <h5 class="mb-4 mt-4">We take great care to make sure our sizing is accurate. We strongly recommend you take the same care when ordering so that you are not disappointed.</h5>
                <img src="https://344800.smushcdn.com/915356/wp-content/uploads/sites/13/elementor/thumbs/msd-heart-1-pgfml373rtqrv8jjq1hw7tgwy1gz5mee1w439c3if4.png?lossy=0&strip=1&webp=1">
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
        items_size_chart: [				
          { our_size: 'Free Size (S-L)', bust: '81 – 96 cm', waist: '61 – 76 cm', hips: '86 – 101 cm', 'USA_/_CAN' : '4 – 8', 'AUS_/_UK': '8 – 12', europe: '36 – 40'},
          { our_size: '', bust: '32″ – 38″', waist: '24″ – 30″', hips: '34″ – 40″', 'USA_/_CAN' : '', 'AUS_/_UK': '', europe: ''},
          { our_size: 'S / M', bust: '81 – 91 cm″', waist: '61 – 71 cm', hips: '86 – 96 cm', 'USA_/_CAN' : '4 – 6', 'AUS_/_UK': '8 – 10', europe: '36 – 38'},
          { our_size: '', bust: '32″ – 36″', waist: '24″ – 28″', hips: '34″ – 38″', 'USA_/_CAN' : '', 'AUS_/_UK': '', europe: ''},
          { our_size: 'L / XL', bust: '91 – 101 cm', waist: '71 – 81 cm', hips: '96 – 106 cm', 'USA_/_CAN' : '8 – 10', 'AUS_/_UK': '12 – 14', europe: '40 – 42'},
          { our_size: '', bust: '36″ – 40″', waist: '28″ – 32″', hips: '38″ – 42″', 'USA_/_CAN' : '', 'AUS_/_UK': '', europe: ''},
          { our_size: '2XL / 3XL', bust: '101 – 111 cm', waist: '81 – 91 cm', hips: '106 – 116 cm', 'USA_/_CAN' : '12 – 14', 'AUS_/_UK': '16 – 18', europe: '44 – 46'},
          { our_size: '', bust: '40″ - 44″', waist: '32″ – 36″', hips: '42″ – 46″', 'USA_/_CAN' : '', 'AUS_/_UK': '', europe: ''},
          { our_size: '4XL / 5XL', bust: '111 – 121 cm', waist: '91 – 101 cm', hips: '116 – 126 cm', 'USA_/_CAN' : '16 – 18', 'AUS_/_UK': '20 – 22', europe: '48 – 50'},
          { our_size: '', bust: '44″ – 48″', waist: '36″ – 40″', hips: '46″ – 50″', 'USA_/_CAN' : '', 'AUS_/_UK': '', europe: ''},
          { our_size: '6XL / 7XL', bust: '121 – 131 cm', waist: '101 – 111 cm', hips: '126 – 136 cm', 'USA_/_CAN' : '20 – 22', 'AUS_/_UK': '24 – 26', europe: '52 – 54'},
          { our_size: '', bust: '48″ – 52″', waist: '40″- 44″', hips: '50″ – 54″', 'USA_/_CAN' : '', 'AUS_/_UK': '', europe: ''},
        ],
        items_hosiery: [				
            { size: 'AVERAGE (S/M)', 'height_(CM)': '152-162 (5′ – 5’4″)', 'weight_(KG)': '45-60 (95-125lbs)' },
            { size: 'TALL (M/L)', 'height_(CM)': '162-180 (5’4″ – 5’10”)', 'weight_(KG)': '55-75 (120-165lbs)' },
        ],
      }
    }
  }
  </script>
  