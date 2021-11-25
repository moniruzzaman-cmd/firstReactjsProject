import React from 'react';
import SectionCenter from './SectionCenter/SectionCenter';
import SectionLeft from './SectionParts/SectionLeft';
import  './MainSection.css';


const MainSection = () => {
    return (
        <div className="Sectionbody">
            <SectionLeft />
            <SectionCenter />
            
            
        </div>
    );
};

export default MainSection;