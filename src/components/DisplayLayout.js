import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/default.css';

class DisplayLayout extends Component {
  render() {
    return (
          <div id="main">
              <div id="banner-wrapper">
              	<div id="banner" class="container">
              		<p>This is the Portfolio assignment</p>
              	</div>
              </div>
              <div id="wrapper">
              	<div id="featured-wrapper">
              		<div id="featured" class="container">
              			<div class="column1"> <span class="icon icon-key"></span>
              				<div class="title">
              					<h2>Space Pigs Living in Caravan Parks</h2>
              				</div>
              				<p>In posuere eleifend odio. Quisque semper augue mattis wisi. Pellentesque viverra vulputate enim. Aliquam erat volutpat.</p>
              			</div>
              			<div class="column2"> <span class="icon icon-legal"></span>
              				<div class="title">
              					<h2>Feeding Habits and Missing Pets</h2>
              				</div>
              				<p>In posuere eleifend odio. Quisque semper augue mattis wisi. Pellentesque viverra vulputate enim. Aliquam erat volutpat.</p>
              			</div>


              		</div>
              		<div id="extra" class="container">
              			<h2>Environmental Impacts of Space Pigs living in Urban Areas</h2>
              			<span>Quisque dictum integer nisl risus, sagittis convallis, rutrum id, congue, and nibh</span>
                  </div>

              		<div id="extra2" class="container">
              			<div id="ebox1">
              				<div class="title">
              					<h2>Press the Button!</h2>
                        <Link to = './portfolio'>
                        <button id = "pressit">Do it!!</button></Link>
              				</div>
              			</div>

              			<div id="ebox2">
              				<div class="title">
              					<h2>Don't Press this Button!</h2>
              				</div>
              				<Link to = './turnOn'>
                      <button id = "dontpress" className = "button-big">Don't do it!!</button></Link>

              			</div>
              		</div>
              	</div>
              </div>
            </div>

        );
      }
    }

        export default DisplayLayout
