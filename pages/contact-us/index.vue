<template>
    <div>
      <Header />
        <div class="container">
            <div class="row mt-5 mb-5">
                <div class="col-md-4 text-center">
                    <span class="circle-icons">
                        <i class="fa-4x fa fa-pencil text-white"></i>
                    </span>
                    <h3 class="mt-5 contact-us-title">Drop Us a Line</h3>
                    <p class="contact-us-description">
                        If you have any questions, accolades or (heaven forbid), a complaint, don't hesitate to reach out. We'll typically respond within a few hours. 1
                    </p>
                    <a  class="contact-us-email" href="mailto:help@mysecretdrawer.co">help@mysecretdrawer.co</a>
                </div>
                <div class="col-md-4 text-center">
                    <span class="circle-icons">
                        <i class="fa-4x fa fa-star text-white"></i>
                    </span>
                    <h3 class="mt-5 contact-us-title">Want To Work With Us?</h3>
                    <p class="contact-us-description">
                        We're totally committed to bringing beautiful lingerie into every adult life. Think of it as a throwback to the<br> 'Make Love Not War' era! <br>If you think you'd be a great fit, either as an affiliate, reseller or supplier, get in touch. We're open to all conversations!
                    </p>
                    <a  class="contact-us-email" href="mailto:opportunity@mysecretdrawer.co">opportunity@mysecretdrawer.co</a>
                </div>
                <div class="col-md-4 text-center">
                    <span class="circle-icons">
                        <i class="fa-4x fa fa-venus-mars text-white"></i>
                    </span>
                    <h3 class="mt-5 contact-us-title">Did We Miss Something?</h3>
                    <p class="contact-us-description">
                        We try hard to have beautiful things for every size, skin colour and gender but we're always open to suggestions. Send us a photo of something you'd like in store and we'll try to source it.
                    </p>
                    <a  class="contact-us-email" href="mailto:admin@mysecretdrawer.co">admin@mysecretdrawer.co</a>
                </div>
            </div>
            <div class="row mx-auto">
                <div class="col d-flex justify-content-center">
                    <div class="card" style="width: 50%">
                        <div class="card-body">
                            <h5 class="card-title mb-2">Contact Us</h5>
                            <form>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter name">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="subject">Subject</label>
                                    <input type="text" class="form-control" id="subject" aria-describedby="subject" placeholder="Enter subject">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Message</label>
                                    <textarea type="message" class="form-control" id="message" aria-describedby="emailHelp" placeholder="Enter message"></textarea>
                                </div>
                                <button type="submit" class="btn btn-danger mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
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

      }
    }
  }
  </script>
  
  <style>
    .circle-icons {
        padding: 60px 35px 40px 35px;
        background-color: red;
        border-radius: 100px;
    }
    .contact-us-description {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.6;
    }

    .contact-us-title {
        font-weight: 700;
        margin-top: 60px !important;
    }

    .contact-us-email {
        color:red;
        font-size: 20px;
        font-weight: 600;

    }
  </style>