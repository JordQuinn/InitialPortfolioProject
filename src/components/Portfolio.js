import React, {Component} from 'react';

class Portfolio extends Component {
  render() {
    return (
      <div id="main">
          <div id="banner-wrapper">
            <div id="banner" class="container">
              <p>This is the Portfolio Page of the Portfolio assignment</p>
            </div>
          </div>
          <div id="wrapper">
            <div id="featured-wrapper">
              <div id="featured" class="container">
                <div class="column1"> <span class="icon icon-key"></span>
                  <div class="title">
                    <h2>Maecenas lectus sapien</h2>
                  </div>
                  <p>In posuere eleifend odio. Quisque semper augue mattis wisi. Pellentesque viverra vulputate enim. Aliquam erat volutpat.</p>
                </div>
                <div class="column2"> <span class="icon icon-legal"></span>
                  <div class="title">
                    <h2>Praesent scelerisque</h2>
                  </div>
                  <p>In posuere eleifend odio. Quisque semper augue mattis wisi. Pellentesque viverra vulputate enim. Aliquam erat volutpat.</p>
                </div>
                <div class="column3"> <span class="icon icon-unlock"></span>
                  <div class="title">
                    <h2>Fusce ultrices fringilla</h2>
                  </div>
                  <p>In posuere eleifend odio. Quisque semper augue mattis wisi. Pellentesque viverra vulputate enim. Aliquam erat volutpat.</p>
                </div>
                <div class="column4"> <span class="icon icon-wrench"></span>
                  <div class="title">
                    <h2>Etiam posuere augue</h2>
                  </div>
                  <p>In posuere eleifend odio. Quisque semper augue mattis wisi. Pellentesque viverra vulputate enim. Aliquam erat volutpat.</p>
                </div>
              </div>
              <div id="extra" class="container">
                <h2>Maecenas vitae orci vitae tellus feugiat eleifend</h2>
                <span>Quisque dictum integer nisl risus, sagittis convallis, rutrum id, congue, and nibh</span>
              </div>

              <div id="extra2" class="container">
                <div id="ebox1">
                  <div class="title">
                    <h2>Fusce ultrices fringilla</h2>
                    <span class="byline">Integer sit amet pede vel arcu aliquet pretium</span>
                  </div>
                  <p>Integer nisl risus, sagittis convallis, rutrum id, elementum congue, nibh. Suspendisse dictum porta lectus. Donec placerat odio vel elit. Nullam ante orci, pellentesque eget, tempus quis, ultrices in, est. Sed vel tellus. Curabitur sem urna, consequat vel, suscipit in, mattis placerat, nulla. Sed ac leo. Pellentesque imperdiet.</p>
                  <a href="#" class="button">Etiam posuere</a>
                </div>

                <div id="ebox2">
                  <div class="title">
                    <h2>Donec dictum metus</h2>
                    <span class="byline">Integer sit amet pede vel arcu aliquet pretium</span>
                  </div>
                  <p>Integer nisl risus, sagittis convallis, rutrum id, elementum congue, nibh. Suspendisse dictum porta lectus. Donec placerat odio vel elit. Nullam ante orci, pellentesque eget, tempus quis, ultrices in, est. Sed vel tellus. Curabitur sem urna, consequat vel, suscipit in, mattis placerat, nulla. Sed ac leo. Pellentesque imperdiet.</p>
                  <a href="#" class="button">Etiam posuere</a>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default Portfolio
