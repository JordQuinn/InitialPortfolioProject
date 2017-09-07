import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="contact" class="container">
          <div id="main">
              <div id="banner-wrapper">
                <div id="banner" class="container">
                  <p>Contact Me:</p>
                </div>
              </div>
              <div id="wrapper">
                <div id="featured-wrapper">
                  <div id="featured" class="container">
                    <div class="column1"> <span class="icon icon-key"></span>
                      <div class="title">
                        <h2>Jordan Michele Quinn</h2><br></br>
                      </div>

                    </div>
                    <div class="column2"> <span class="icon icon-legal"></span>
                      <div class="title">
                        <h2>Phone:  702 306 1457</h2>
                      </div>

                    </div>
                    <div class="column3"> <span class="icon icon-unlock"></span>
                      <div class="title">
                        <h2><a href="mailto:jordanmichelequinn@gmail.com"> jordanmichelequinn@gmail.com</a></h2>
                      </div>
                    </div>
                    <div class="column4"> <span class="icon icon-wrench"></span>
                      <div class="title">
                        <h2>Facebook:  <a href="http://www.facebook.com/jordanq">Jordan Quinn</a></h2>
                      </div>
                      <div>
                        <div class="column5"> <span class="icon icon-wrench"></span>
                          <div class="title">
                            <h2>GitHub:  <a href="https://github.com/JordQuinn">JordQuinn</a></h2>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Contact;
