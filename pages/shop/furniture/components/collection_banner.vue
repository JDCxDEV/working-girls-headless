<template>
  <div>
    <!-- <div class="title2 section-t-space red-section">
      <div class="container-fluid">
        <div class="row d-flex justify-content-center ">
          <div class="col-md-3 col-sm-4 sideline red-landing-text">
            Gorgeous designs<br>Sensual fabrics
          </div>
          <div class="col-md-3 col-sm-4 sideline red-landing-text">
            Many styles and colors<br>Petite to Plus sizes
          </div>
          <div class="col-md-3 col-sm-4 red-landing-text">
            Affordable quality<br>Free delivery
          </div>
        </div>
      </div>
    </div> -->
    <div class="banner-furniture ratio_45">
    <div class="title2 section-t-space" style="padding-top: 30px;">
      <div class="title1 mt-5">
        <h2 class="title-inner1 v2" style="margin-top: -50px;"></h2>
        <h2 class="title-inner1" style="margin-top: -20px;">Our Styles</h2>
      </div>
    </div>
      <div class="container">
        <div class="row partition3 text-center">
          <div class="col-md-3 border" v-for="(item, index) in items" :key="index"> 
            <a :href="item.link">
              <div class="collection-banner p-right text-center">
                <div class="img-part" style="position: relative;"> 
                  <div class="collection-img"  :style="{'background-image': setBackground(item.imagepath)}"></div>
                </div>
                <div class="contain-banner banner-3">
                  <div>
                    <!-- <h4>{{item.subtitle}}</h4> -->
                  </div>
                </div>
              </div>
            </a>
             <h3 class="mt-2 text-danger"><b>{{item.title}}</b></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      items: [
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/H3373-2OK.jpg',
          title: 'Stockings & Legwear',
          link: 'collection/stockings',
          subtitle: 'save 30%'
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/R70334__2_hero.jpg',
          title: 'Teddies',
          subtitle: 'save 55%',
          link: 'collection/teddy',
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/20180726155777017701.jpg',
          title: 'Corsets & Bustiers',
          subtitle: 'save 55%',
          link: 'collection/babydoll-chemise',
        },        
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/R80068-1P-1-5.jpg',
          title: "PJ's & Wraps",
          subtitle: 'save 60%',
          link: 'collection/pjs-and-wraps',
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/R80588-2-3.jpg',
          title: 'Long Sleeve Lace',
          subtitle: 'save 60%',
          link: 'collection/long-sleeves-lace',
        },
        {
          imagepath: 'https://mysecretdrawer.com/au/wp-content/uploads/sites/13/2022/09/R80734-red-Main-scaled.jpg',
          title: 'Babydolls & Chemise',
          subtitle: 'save 60%',
          link: 'collection/babydoll-chemise',
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/P5138-4.jpg',
          title: 'Panties',
          subtitle: 'save 60%',
          link: 'collection/panties',
        },
        {
          imagepath: 'https://mysecretdrawer.com/au/wp-content/uploads/sites/13/2022/09/H3370-MAIN-scaled.jpg',
          title: 'Body Stockings',
          subtitle: 'save 60%',
          link: 'collection/bodystockings',
        },
        {
          imagepath: 'https://mysecretdrawer.com/au/wp-content/uploads/sites/13/2022/09/R80385-MAIN-scaled.jpg',
          title: 'Leather Look',
          subtitle: 'save 60%',
          link: 'collection/leather-lingerie',
        },
        {
          imagepath: 'https://mysecretdrawer.com/au/wp-content/uploads/sites/13/2022/09/DY3258-MAIN-scaled.jpg',
          title: 'Beach Wear',
          subtitle: 'save 60%',
          link: 'collection/beach-wear',
          
        },
        {
          imagepath: 'https://mysecretdrawer.com/au/wp-content/uploads/sites/13/2022/09/R80614-MAIN-1-scaled.jpg',
          title: 'Bra Sets',
          subtitle: 'save 60%',
          link: 'collection/bra-sets',
        },
        {
          imagepath: 'https://mysecretdrawer.com/au/wp-content/uploads/sites/13/2022/09/R80465-MAIN-scaled.jpg',
          title: 'Gartered Lingerie	',
          subtitle: 'save 60%',
          link: 'collection/gartered-lingerie',
        },
      ]
    }
  },
  methods : {
    setBackground(image) {
      return `url(${image})`;  
    }
  }
}
</script>

<style>
.collection-img {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
}

.red-section {
  padding-top: 40px;
  padding-bottom: 40px;
  background: url('https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/woman-lying-in-bed.jpg');
  color: white;
  font-size: 25px;
  font-weight: 900;
}

.sideline {
  border: 2px solid rgb(255, 255, 255); border-width: 0px 3px 0 0px;
}

.red-landing-text {
  font-size: 20px;;
}
</style>
