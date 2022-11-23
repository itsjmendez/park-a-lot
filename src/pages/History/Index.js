import React from 'react';

// const myModal = new bootstrap.Modal(document.getElementById('modalId'), options);

export const History = () => {
  return <div class="container-fluid">
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold pb-5">Reservation History Page</h1>
        <p class="col-md-10 fs-4 text-muted">
          The system keeps a record of your past reservations. Use this page to view or better yet clone them to create a similar reservation with the same details using current dates. If you currently don't have any items here, proceed to make a new reservation using the button below.</p>
        <div class="btn-group btn-lg shadow" role="group" aria-label="Button group name">
          <button type="button" class="btn btn-primary btn-lg px-5">Make a reservation</button>
          <button type="button" class="btn btn-success btn-lg px-5">Learn More about us</button>
        </div>
      </div>
    </div>
    <div class="container-fluid p-5">
      <div class="d-flex justify-content-between p-3">
        <p class="text-muted">View past reservations that you've made.</p>
            <form class="d-flex my-2 my-lg-0">
                <input class="form-control me-sm-5" type="text" placeholder="Search"/>
                <button class="btn btn-light btn-outline-success my-2 my-sm-0 px-5" type="submit">Search</button>
            </form>
      </div>
      <div class="row justify-content-center align-items-center g-2">
        
        {/* Reservation history item */}
        {/* Reservation history item */}
        <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2">
          <div class="card b-0 shadow">
            <div class="row g-0 p-2 ">
              <div class="col-md-12">
                <div class="card-body ">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                  
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                    </div>
                    <div class="col-md-6">
                      <b> From - </b>September 15th 2021 <br/>
                      <b> To - </b>September 20th 2021<br />
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>

                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="btn-group p-3 pt-0 m-0 " role="group" aria-label="Button group name">
              <button type="button" class="btn shadow btn-s btn-primary">
                <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
              <button type="button" class="btn shadow btn-s btn-success" data-bs-toggle="modal" data-bs-target="#modalId">
                <span class="fas fa-info-circle text-" aria-hidden="true"> </span> More info</button>
              <button type="button" class="btn shadow btn-s btn-danger">
                <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
            </div>
          </div>
          
          {/* More info display */}
          <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-m" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                      <b>Duration: <br />
                        From - </b>September 15th 2021
                      <b> To - </b>September 20th 2021<br />
                    </div>
                    <div class="col-lg-6">
                      <b>Parking fee: </b>$52.00<br/>
                      <b>Booking fee: </b>$12.00<br/>
                      <b>Carwash fee: </b>$0<br/>
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>
                </div>
                <div class="btn-group p-3 pt-0 m-0">
                  <button type="button" class="btn shadow btn-sm btn-primary">
                    <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
                  <button type="button" class="btn shadow btn-sm btn-danger">
                    <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation history item */}
        {/* Reservation history item */}
        <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2">
          <div class="card b-0 shadow">
            <div class="row g-0 p-2 ">
              <div class="col-md-12">
                <div class="card-body ">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                  
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                    </div>
                    <div class="col-md-6">
                      <b> From - </b>September 15th 2021 <br/>
                      <b> To - </b>September 20th 2021<br />
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>

                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="btn-group p-3 pt-0 m-0 " role="group" aria-label="Button group name">
              <button type="button" class="btn shadow btn-s btn-primary">
                <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
              <button type="button" class="btn shadow btn-s btn-success" data-bs-toggle="modal" data-bs-target="#modalId">
                <span class="fas fa-info-circle text-" aria-hidden="true"> </span> More info</button>
              <button type="button" class="btn shadow btn-s btn-danger">
                <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
            </div>
          </div>
          
          {/* More info display */}
          <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-m" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                      <b>Duration: <br />
                        From - </b>September 15th 2021
                      <b> To - </b>September 20th 2021<br />
                    </div>
                    <div class="col-lg-6">
                      <b>Parking fee: </b>$52.00<br/>
                      <b>Booking fee: </b>$12.00<br/>
                      <b>Carwash fee: </b>$0<br/>
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>
                </div>
                <div class="btn-group p-3 pt-0 m-0">
                  <button type="button" class="btn shadow btn-sm btn-primary">
                    <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
                  <button type="button" class="btn shadow btn-sm btn-danger">
                    <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reservation history item */}
        {/* Reservation history item */}
        <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2">
          <div class="card b-0 shadow">
            <div class="row g-0 p-2 ">
              <div class="col-md-12">
                <div class="card-body ">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                  
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                    </div>
                    <div class="col-md-6">
                      <b> From - </b>September 15th 2021 <br/>
                      <b> To - </b>September 20th 2021<br />
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>

                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="btn-group p-3 pt-0 m-0 " role="group" aria-label="Button group name">
              <button type="button" class="btn shadow btn-s btn-primary">
                <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
              <button type="button" class="btn shadow btn-s btn-success" data-bs-toggle="modal" data-bs-target="#modalId">
                <span class="fas fa-info-circle text-" aria-hidden="true"> </span> More info</button>
              <button type="button" class="btn shadow btn-s btn-danger">
                <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
            </div>
          </div>
          
          {/* More info display */}
          <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-m" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                      <b>Duration: <br />
                        From - </b>September 15th 2021
                      <b> To - </b>September 20th 2021<br />
                    </div>
                    <div class="col-lg-6">
                      <b>Parking fee: </b>$52.00<br/>
                      <b>Booking fee: </b>$12.00<br/>
                      <b>Carwash fee: </b>$0<br/>
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>
                </div>
                <div class="btn-group p-3 pt-0 m-0">
                  <button type="button" class="btn shadow btn-sm btn-primary">
                    <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
                  <button type="button" class="btn shadow btn-sm btn-danger">
                    <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation history item */}
        {/* Reservation history item */}
        <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2">
          <div class="card b-0 shadow">
            <div class="row g-0 p-2 ">
              <div class="col-md-12">
                <div class="card-body ">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                  
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                    </div>
                    <div class="col-md-6">
                      <b> From - </b>September 15th 2021 <br/>
                      <b> To - </b>September 20th 2021<br />
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>

                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="btn-group p-3 pt-0 m-0 " role="group" aria-label="Button group name">
              <button type="button" class="btn shadow btn-s btn-primary">
                <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
              <button type="button" class="btn shadow btn-s btn-success" data-bs-toggle="modal" data-bs-target="#modalId">
                <span class="fas fa-info-circle text-" aria-hidden="true"> </span> More info</button>
              <button type="button" class="btn shadow btn-s btn-danger">
                <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
            </div>
          </div>
          
          {/* More info display */}
          <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-m" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                      <b>Duration: <br />
                        From - </b>September 15th 2021
                      <b> To - </b>September 20th 2021<br />
                    </div>
                    <div class="col-lg-6">
                      <b>Parking fee: </b>$52.00<br/>
                      <b>Booking fee: </b>$12.00<br/>
                      <b>Carwash fee: </b>$0<br/>
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>
                </div>
                <div class="btn-group p-3 pt-0 m-0">
                  <button type="button" class="btn shadow btn-sm btn-primary">
                    <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
                  <button type="button" class="btn shadow btn-sm btn-danger">
                    <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reservation history item */}
        {/* Reservation history item */}
        <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2">
          <div class="card b-0 shadow">
            <div class="row g-0 p-2 ">
              <div class="col-md-12">
                <div class="card-body ">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                  
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                    </div>
                    <div class="col-md-6">
                      <b> From - </b>September 15th 2021 <br/>
                      <b> To - </b>September 20th 2021<br />
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>

                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="btn-group p-3 pt-0 m-0 " role="group" aria-label="Button group name">
              <button type="button" class="btn shadow btn-s btn-primary">
                <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
              <button type="button" class="btn shadow btn-s btn-success" data-bs-toggle="modal" data-bs-target="#modalId">
                <span class="fas fa-info-circle text-" aria-hidden="true"> </span> More info</button>
              <button type="button" class="btn shadow btn-s btn-danger">
                <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
            </div>
          </div>
          
          {/* More info display */}
          <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-m" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                      <b>Duration: <br />
                        From - </b>September 15th 2021
                      <b> To - </b>September 20th 2021<br />
                    </div>
                    <div class="col-lg-6">
                      <b>Parking fee: </b>$52.00<br/>
                      <b>Booking fee: </b>$12.00<br/>
                      <b>Carwash fee: </b>$0<br/>
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>
                </div>
                <div class="btn-group p-3 pt-0 m-0">
                  <button type="button" class="btn shadow btn-sm btn-primary">
                    <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
                  <button type="button" class="btn shadow btn-sm btn-danger">
                    <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation history item */}
        {/* Reservation history item */}
        <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2">
          <div class="card b-0 shadow">
            <div class="row g-0 p-2 ">
              <div class="col-md-12">
                <div class="card-body ">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                  
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                    </div>
                    <div class="col-md-6">
                      <b> From - </b>September 15th 2021 <br/>
                      <b> To - </b>September 20th 2021<br />
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>

                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="btn-group p-3 pt-0 m-0 " role="group" aria-label="Button group name">
              <button type="button" class="btn shadow btn-s btn-primary">
                <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
              <button type="button" class="btn shadow btn-s btn-success" data-bs-toggle="modal" data-bs-target="#modalId">
                <span class="fas fa-info-circle text-" aria-hidden="true"> </span> More info</button>
              <button type="button" class="btn shadow btn-s btn-danger">
                <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
            </div>
          </div>
          
          {/* More info display */}
          <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-m" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                      <b>Duration: <br />
                        From - </b>September 15th 2021
                      <b> To - </b>September 20th 2021<br />
                    </div>
                    <div class="col-lg-6">
                      <b>Parking fee: </b>$52.00<br/>
                      <b>Booking fee: </b>$12.00<br/>
                      <b>Carwash fee: </b>$0<br/>
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>
                </div>
                <div class="btn-group p-3 pt-0 m-0">
                  <button type="button" class="btn shadow btn-sm btn-primary">
                    <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
                  <button type="button" class="btn shadow btn-sm btn-danger">
                    <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reservation history item */}
        {/* Reservation history item */}
        <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2">
          <div class="card b-0 shadow">
            <div class="row g-0 p-2 ">
              <div class="col-md-12">
                <div class="card-body ">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                  
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                    </div>
                    <div class="col-md-6">
                      <b> From - </b>September 15th 2021 <br/>
                      <b> To - </b>September 20th 2021<br />
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>

                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="btn-group p-3 pt-0 m-0 " role="group" aria-label="Button group name">
              <button type="button" class="btn shadow btn-s btn-primary">
                <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
              <button type="button" class="btn shadow btn-s btn-success" data-bs-toggle="modal" data-bs-target="#modalId">
                <span class="fas fa-info-circle text-" aria-hidden="true"> </span> More info</button>
              <button type="button" class="btn shadow btn-s btn-danger">
                <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
            </div>
          </div>
          
          {/* More info display */}
          <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-m" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                      <b>Duration: <br />
                        From - </b>September 15th 2021
                      <b> To - </b>September 20th 2021<br />
                    </div>
                    <div class="col-lg-6">
                      <b>Parking fee: </b>$52.00<br/>
                      <b>Booking fee: </b>$12.00<br/>
                      <b>Carwash fee: </b>$0<br/>
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>
                </div>
                <div class="btn-group p-3 pt-0 m-0">
                  <button type="button" class="btn shadow btn-sm btn-primary">
                    <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
                  <button type="button" class="btn shadow btn-sm btn-danger">
                    <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation history item */}
        {/* Reservation history item */}
        <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2">
          <div class="card b-0 shadow">
            <div class="row g-0 p-2 ">
              <div class="col-md-12">
                <div class="card-body ">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                  
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                    </div>
                    <div class="col-md-6">
                      <b> From - </b>September 15th 2021 <br/>
                      <b> To - </b>September 20th 2021<br />
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>

                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="btn-group p-3 pt-0 m-0 " role="group" aria-label="Button group name">
              <button type="button" class="btn shadow btn-s btn-primary">
                <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
              <button type="button" class="btn shadow btn-s btn-success" data-bs-toggle="modal" data-bs-target="#modalId">
                <span class="fas fa-info-circle text-" aria-hidden="true"> </span> More info</button>
              <button type="button" class="btn shadow btn-s btn-danger">
                <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
            </div>
          </div>
          
          {/* More info display */}
          <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-m" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                      <b>Duration: <br />
                        From - </b>September 15th 2021
                      <b> To - </b>September 20th 2021<br />
                    </div>
                    <div class="col-lg-6">
                      <b>Parking fee: </b>$52.00<br/>
                      <b>Booking fee: </b>$12.00<br/>
                      <b>Carwash fee: </b>$0<br/>
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>
                </div>
                <div class="btn-group p-3 pt-0 m-0">
                  <button type="button" class="btn shadow btn-sm btn-primary">
                    <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
                  <button type="button" class="btn shadow btn-sm btn-danger">
                    <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reservation history item */}
        {/* Reservation history item */}
        <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2">
          <div class="card b-0 shadow">
            <div class="row g-0 p-2 ">
              <div class="col-md-12">
                <div class="card-body ">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                  
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                    </div>
                    <div class="col-md-6">
                      <b> From - </b>September 15th 2021 <br/>
                      <b> To - </b>September 20th 2021<br />
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>

                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="btn-group p-3 pt-0 m-0 " role="group" aria-label="Button group name">
              <button type="button" class="btn shadow btn-s btn-primary">
                <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
              <button type="button" class="btn shadow btn-s btn-success" data-bs-toggle="modal" data-bs-target="#modalId">
                <span class="fas fa-info-circle text-" aria-hidden="true"> </span> More info</button>
              <button type="button" class="btn shadow btn-s btn-danger">
                <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
            </div>
          </div>
          
          {/* More info display */}
          <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-m" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                      <b>Duration: <br />
                        From - </b>September 15th 2021
                      <b> To - </b>September 20th 2021<br />
                    </div>
                    <div class="col-lg-6">
                      <b>Parking fee: </b>$52.00<br/>
                      <b>Booking fee: </b>$12.00<br/>
                      <b>Carwash fee: </b>$0<br/>
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>
                </div>
                <div class="btn-group p-3 pt-0 m-0">
                  <button type="button" class="btn shadow btn-sm btn-primary">
                    <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
                  <button type="button" class="btn shadow btn-sm btn-danger">
                    <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation history item */}
        {/* Reservation history item */}
        <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2">
          <div class="card b-0 shadow">
            <div class="row g-0 p-2 ">
              <div class="col-md-12">
                <div class="card-body ">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                  
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                    </div>
                    <div class="col-md-6">
                      <b> From - </b>September 15th 2021 <br/>
                      <b> To - </b>September 20th 2021<br />
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>

                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="btn-group p-3 pt-0 m-0 " role="group" aria-label="Button group name">
              <button type="button" class="btn shadow btn-s btn-primary">
                <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
              <button type="button" class="btn shadow btn-s btn-success" data-bs-toggle="modal" data-bs-target="#modalId">
                <span class="fas fa-info-circle text-" aria-hidden="true"> </span> More info</button>
              <button type="button" class="btn shadow btn-s btn-danger">
                <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
            </div>
          </div>
          
          {/* More info display */}
          <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-m" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                      <b>Duration: <br />
                        From - </b>September 15th 2021
                      <b> To - </b>September 20th 2021<br />
                    </div>
                    <div class="col-lg-6">
                      <b>Parking fee: </b>$52.00<br/>
                      <b>Booking fee: </b>$12.00<br/>
                      <b>Carwash fee: </b>$0<br/>
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>
                </div>
                <div class="btn-group p-3 pt-0 m-0">
                  <button type="button" class="btn shadow btn-sm btn-primary">
                    <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
                  <button type="button" class="btn shadow btn-sm btn-danger">
                    <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reservation history item */}
        {/* Reservation history item */}
        <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2">
          <div class="card b-0 shadow">
            <div class="row g-0 p-2 ">
              <div class="col-md-12">
                <div class="card-body ">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                  
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                    </div>
                    <div class="col-md-6">
                      <b> From - </b>September 15th 2021 <br/>
                      <b> To - </b>September 20th 2021<br />
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>

                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="btn-group p-3 pt-0 m-0 " role="group" aria-label="Button group name">
              <button type="button" class="btn shadow btn-s btn-primary">
                <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
              <button type="button" class="btn shadow btn-s btn-success" data-bs-toggle="modal" data-bs-target="#modalId">
                <span class="fas fa-info-circle text-" aria-hidden="true"> </span> More info</button>
              <button type="button" class="btn shadow btn-s btn-danger">
                <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
            </div>
          </div>
          
          {/* More info display */}
          <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-m" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                      <b>Duration: <br />
                        From - </b>September 15th 2021
                      <b> To - </b>September 20th 2021<br />
                    </div>
                    <div class="col-lg-6">
                      <b>Parking fee: </b>$52.00<br/>
                      <b>Booking fee: </b>$12.00<br/>
                      <b>Carwash fee: </b>$0<br/>
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>
                </div>
                <div class="btn-group p-3 pt-0 m-0">
                  <button type="button" class="btn shadow btn-sm btn-primary">
                    <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
                  <button type="button" class="btn shadow btn-sm btn-danger">
                    <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation history item */}
        {/* Reservation history item */}
        <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2">
          <div class="card b-0 shadow">
            <div class="row g-0 p-2 ">
              <div class="col-md-12">
                <div class="card-body ">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                  
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                    </div>
                    <div class="col-md-6">
                      <b> From - </b>September 15th 2021 <br/>
                      <b> To - </b>September 20th 2021<br />
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>

                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="btn-group p-3 pt-0 m-0 " role="group" aria-label="Button group name">
              <button type="button" class="btn shadow btn-s btn-primary">
                <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
              <button type="button" class="btn shadow btn-s btn-success" data-bs-toggle="modal" data-bs-target="#modalId">
                <span class="fas fa-info-circle text-" aria-hidden="true"> </span> More info</button>
              <button type="button" class="btn shadow btn-s btn-danger">
                <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
            </div>
          </div>
          
          {/* More info display */}
          <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-m" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="card-title">
                    <span class="fas fa-calendar-alt text-muted" aria-hidden="true"> </span> <b>September 15th 2021 - 1450HRS</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-6">
                        <b>Floor: </b>F4<br/>
                        <b>Parking slot: </b>121<br/>
                      <b>Duration: <br />
                        From - </b>September 15th 2021
                      <b> To - </b>September 20th 2021<br />
                    </div>
                    <div class="col-lg-6">
                      <b>Parking fee: </b>$52.00<br/>
                      <b>Booking fee: </b>$12.00<br/>
                      <b>Carwash fee: </b>$0<br/>
                      <b>Total amount : </b>$62.00<br/>
                    </div>
                  </div>
                </div>
                <div class="btn-group p-3 pt-0 m-0">
                  <button type="button" class="btn shadow btn-sm btn-primary">
                    <span class="fas fa-copy text-" aria-hidden="true"> </span> Create clone</button>
                  <button type="button" class="btn shadow btn-sm btn-danger">
                    <span class="fas fa-trash-alt text-" aria-hidden="true"> </span> Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End of items */}
        

      </div>
    </div>


  </div>;
};




// document.getElementById("demo").innerHTML = historyItemsOutput;