import React, { useState } from 'react';
import Title from '../components/Title';
import MenuItems from '../components/MenuItems';
import Categories from '../components/Categories';
import portfolios from '../components/allportfolios';

function PortfoliosPage() {
    const [menuItems, setMenuItems] = useState(portfolios);
    const [categories, setCategories] = useState(null);

    return (
      <div className="PortfoliosPage">
        <div className="title">
          <Title span="portfolios" title="portfolios" />
        </div>
        <div className="portfolios-data">
          <Categories />
          <div className="portfolios">
            <div className="container">
              <div className="row">
                {menuItems.map((item) => {
                  return (
                    <div className="col-md-5" key={item.id}>
                      <MenuItems
                        title={item.title}
                        image={item.image}
                        link1={item.link1}
                        link2={item.link2}
                        icon1={item.icon1}
                        icon2={item.icon2}
                        key={item.id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PortfoliosPage
