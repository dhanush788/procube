import React, { useState } from 'react';
import Landing9 from '../component/hero/Landing9';
import Footer from '../component/hero/Footer';
import NextUp from '../component/NextUp';
import Navbar from '../component/hero/Navbar';
import Insight1 from '../component/insight/Insight1';
import Insightview from '../component/insight/Insightview';


function InsightSlug() {


    return (
        <div className=' text-white bg-[#121212]' >
            <Navbar />
            <Insightview />
            <Insight1 Heading={'More Insights'} filterShow={false}/>
            <NextUp Heading={'Careers'} />
            <Footer />
        </div>

    );
}

export default InsightSlug;
