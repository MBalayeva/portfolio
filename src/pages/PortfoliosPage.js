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
            {menuItems.map((item) => {
              return (
                <MenuItems
                  title={item.title}
                  image={item.image}
                  link1={item.link1}
                  link2={item.link2}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default PortfoliosPage
