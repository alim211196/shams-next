import React from 'react'

const Faq = () => {
  return (
    <section className="faqSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq__content">
                <div className="sectionTitle">
                  <h2 className="title">Fequently asked questions</h2>
                </div>
                <div className="faq__wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Morem ipsum dolor sit amet, consectetur adipiscing elit.Morem ipsum dolor sit amet, consectetur adipiscing elit.Morem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                          Why choose us for your education?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseTwo">
                          Why choose us for your education?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapseTwo">
                          Why choose us for your education?
                        </button>
                      </h2>
                      <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Faq;