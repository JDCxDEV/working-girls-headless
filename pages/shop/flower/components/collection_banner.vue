<template>
  <div>
    <section class="banner-padding pb-0">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <a href="#">
              <div class="collection-banner p-left text-center">
                <div class="img-part">
                  <img :src="imagepath_1" class="img-fluid" alt />
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      imagepath_1: require('@/assets/images/custom/banner/landing.jpg'),
      imagepath_2: require('@/assets/images/flower/sub-banner1.jpg'),
      title: 'Fresh flower',
      subtitle: 'save 60%'
    }
  }
}
</script>
