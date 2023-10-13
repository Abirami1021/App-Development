import React, { Component } from 'react';
import '../assets/css/Diet.css';
import Navigation from './Navbar';

class Diet extends Component {
  render() {
    return (
      <div className="diet">
        <div className="menu">
          <div className="conte">
            <h1 className="dd">DIET MENU FOR ELDER CARE</h1>
            <div className="cont">
              <div className="meals">
                {/* Use a wrapper for the meal items */}
                <div className="meal">
                  <h2>BREAKFAST</h2>
                  <ul>
                    <li>Scrambled eggs with spinach and cherry tomatoes</li>
                    <li>Whole-grain toast</li>
                    <li>Fresh fruit salad (berries, melon, and grapes)</li>
                  </ul>
                </div>
                <div className="luu">
                  <h2>LUNCH</h2>
                  <ul>
                    <li>Mixed greens salad with a light balsamic viaigrette dressing</li>
                    <li>Steamed broccoli and carrots</li>
                    <li>Sliced fresh peaches with a dollop of low-fat yogurt</li>
                  </ul>
                </div>
                <div className="din">
                  <h2>DINNER</h2>
                  <ul>
                    <li>Soft whole-grain dinner roll with margine or butter</li>
                    <li>Mashed sweet potatoes</li>
                    <li>Sliced fresh strawberries with a dollop of low-fat whipped cream</li>
                  </ul>
                </div>
                {/* Repeat the structure for other meals */}
                
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Diet;