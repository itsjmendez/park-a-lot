import React from 'react';
import Heroimg00 from "./hero00.jpg";
import Heroimg01 from "./hero01.jpg";
import Heroimg02 from "./hero02.jpg";

export const Home = () => {
  return <div class="container-fluid">

    <div class="m-3 bg-light rounded-3" 
      style={{
        backgroundImage: `url(${Heroimg00})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        paddingBottom: '20% ',
        paddingLeft: '20px',
      }}
    >
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Parking Lot</h1>
        <p class="col-md-8 fs-4">Save the hustle to look for a parking spot on the go.</p>
        <button class="btn btn-primary btn-lg" type="button"
          style={{
          marginTop:'50px'
        }}
        >Learn more about us</button>
      </div>
    </div>
    
    <div class="py-vh-5 w-100 overflow-hidden" id="services"
      style={{
        padding: '100px',
    }}
    >
      <div class="container">
        <div class="row d-flex justify-content-end">
          <div class="col-lg-8" data-aos="fade-down">
            <h2 class="display-6">Why choose us?</h2>
          </div>
        </div>
        <div class="row d-flex align-items-center"
        style={{
          paddingTop: '20px',
        }}
        >
          <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <span class="h5 fw-lighter">01.</span>
            <h3 class="py-5 border-top border-dark">We rented this fancy startup office in an old factory building, only to realise that its exacly what we needed</h3>
            <p>Building the infrustructure, installing customised sensors tailored to our needs and a commited team is all we needed to make it happen.</p>
            {/* <a href="#" class="link-fancy">Learn more</a> */}
          </div>

          <div class="col-md-6 col-lg-4 py-vh-4" data-aos="fade-up" data-aos-delay="400"
          style={{
            paddingTop: '60px',
          }}
          >
            <span class="h5 fw-lighter">02.</span>
            <h3 class="py-5 border-top border-dark">Automated booking platform to enable you to plan ahead of time regardless of where you are.</h3>
            <p>Making it easier and safer for you to book and to be guaranteed of a secure parking spot while you handle your business or enjor your self.</p>
            {/* <a href="#" class="link-fancy">Learn more</a> */}
          </div>

          <div class="col-md-6 col-lg-4 py-vh-6 " data-aos="fade-up" data-aos-delay="600"
            style={{
              paddingTop: '100px',
          }}
          >
            <span class="h5 fw-lighter">03.</span>
            <h3 class="py-5 border-top border-dark">Wide range of payment platforms.</h3>
            <p>Wide range of payment platforms to choose from. </p>
            {/* <a href="#" class="link-fancy">Learn more</a> */}
          </div>
        </div>

      </div>
    </div>


    <div class="py-vh-4 bg-gray-100 w-100 overflow-hidden bg-light" id="aboutus"
      style={{
      padding: '100px',
    }}
    >
      <div class="container">

        <div class="row d-flex justify-content-between align-items-center">
          <div class="col-lg-6">
            <div class="row gx-5 d-flex">
              <div class="col-md-11">
                <div class="shadow ratio ratio-16x9 rounded bg-cover bp-center align-self-end" data-aos="fade-right"
                  style={{
                    backgroundImage: `URL(${Heroimg01})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
                </div>
              </div>
              <div class="col-md-5 offset-md-1">
                <div class="shadow ratio ratio-1x1 rounded bg-cover mt-5 bp-center float-end" data-aos="fade-up"
                  style={{
                    backgroundImage: `URL(${Heroimg02})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
                </div>
              </div>
              <div class="col-md-6">
                <div class="col-12 shadow ratio rounded bg-cover mt-5 bp-center" data-aos="fade-left"
                  style={{
                    backgroundImage: `URL(${Heroimg00})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <h3 class="py-5 border-top border-dark" data-aos="fade-left">Parking is the act of stopping and disengaging a vehicle and leaving it unoccupied. Parking on one or both sides of a road is often permitted, though sometimes with restrictions. S.</h3>
            <p class="text-muted" data-aos="fade-left" data-aos-delay="200">Some buildings have parking facilities for use of the buildings' users.
            </p>
            <p>
              <div class="d-grid gap-2">
                <button type="button" name="" id="" class="btn btn-primary">More Info</button>
              </div>
              {/* <a href="#" class="link-fancy link-dark" data-aos="fade-left" data-aos-delay="400">Learn more
              </a> */}
            </p>
          </div>
        </div>

      </div>
    </div>

    <div class="py-vh-5 w-100 overflow-hidden " id="numbers"
      style={{
      padding: '100px',
      // paddingBottom: '100px',
    }}>
      <div class="container">
        <div class="row d-flex justify-content-between align-items-center">
          <div class="col-lg-5">
            <h3 class="py-5 border-top border-dark" data-aos="fade-right">Our magic numbers</h3>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-12">
                <h2 class="display-6 mb-5" data-aos="fade-down">There are some important numbers for us. They are just
                  numbers without any meaning, but we just love them.</h2>
              </div>
              <div class="col-lg-6" data-aos="fade-up">
                <div class="display-1 fw-bold py-4">99.9%</div>
                <p class="text-black-50">We've adopted Internet of Things an computer systems to automate all parking activities including booking, payement. .</p>
              </div>
              <div class="col-lg-6" data-aos="fade-up">
                <div class="display-1 fw-bold py-4">+300</div>
                <p class="text-black-50">The number of our clients grows daily. We uphold professionalism and trust to our them and always guarantee the best.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="container py-vh-4 w-100 overflow-hidden"
      style={{
      padding: '100px',
    }}
    >
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-lg-5">
          <h3 class="py-5 border-top border-dark" data-aos="fade-right">What our clients say</h3>
        </div>
        <div class="col-md-7" data-aos="fade-left">
          <blockquote>
            <div class="fs-4 my-3 fw-light pt-4 border-bottom pb-3">“I´am the CEO of this company. So maybe you think "he will tell us something super awesome about it only". But no. Its a really awesome to work with bright and open minded people. We work as on eunit to ensure proper and efficient service to out clients.”</div>
            {/* <img src="img/webp/person11.webp" width="64" height="64" class="img-fluid rounded-circle me-3" alt=""
              data-aos="fade"> */}
            <span><span class="fw-bold">John Doe,</span>
              CEO of Stride Ltd.</span>
          </blockquote>
        </div>

      </div>
    </div>


  </div>;
};