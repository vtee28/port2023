import React, { useState } from 'react';
import './Body.css';
import THL from './THL';
import NBK from './NBK';

const Work = (props) => {

    const [showNBKPage, setShowNBKPage] = useState(false);

    const btnShowNBKPageHandler = () => {
        setShowNBKPage(true);
    }

    const btnShowTHLPageHandler = () => {
        setShowNBKPage(false);
    }


    if (!showNBKPage) {

        return (
            <>
                <THL onShowNBKPage={btnShowNBKPageHandler} />
            </>
        );

    }
    
  {

        return (
            <>
                <NBK onShowTHLPage={btnShowTHLPageHandler}/>
            </>
        );

    }

};

export default Work;