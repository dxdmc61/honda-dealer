import React, { useState } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import './HondaNavigation.css';
 
const HondaNavigation = () => {
  const [activeTab, setActiveTab] = useState('Sales');
  const tabs = ['Sales', 'Certified', 'Warranty'];
 
  return (
<div className="tab-navigation">
<ul className="tab-list">
        {tabs.map((tab) => (
<li
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
>
            {tab}
</li>
        ))}
</ul>
<div className="tab-content">
<p>{`Content for ${activeTab}`}</p>
</div>
</div>
  );
};
 
export default HondaNavigation;

MapTo('honda/components/hondanavigation');
