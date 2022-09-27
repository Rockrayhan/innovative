import React from 'react';
import banner from '../../images/banner.jpg';
import banner2 from '../../images/banner2.jpg';
import moving_img from '../../images/moving_img.png';
import './Banner.css';
import CountUp from 'react-countup';
import Typewriter from 'typewriter-effect';

const Banner = () => {

    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        height: `100vh`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',


    }
    const fontStyle = {
        // color: 'white',
        // padding: "70px 0",
        // textAlign:" center",
        // marginTop:'200px',


    }

    return (
        <div style={bannerStyle}>


            <div className="row container">
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                    <h4 className='inno-font'>
                        Welcome To
                    </h4>
                    <h1 className='inno-font banner-header'>
                        <Typewriter
                            options={{
                                strings: ['Innovative Health Care'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p>All kinds of Medical Equipment Importer and Supplier. </p>

                    <img className='moving_img mt-5 img-fluid' src={moving_img} alt="" />

                    <div className='mt-5 '>
                        <div className="row d-flex justify-content-between ms-5">
                            <div className="col-4 banner-div inno-font">
                                <h1>
                                    <CountUp delay={2} end={200} />
                                    +
                                </h1>
                                <p>
                                    Clients
                                </p>
                            </div>
                            <div className="col-4 banner-div inno-font">
                                <h1>
                                    <CountUp delay={2} end={98} />
                                    %
                                </h1>
                                <p>
                                    Satisfaction Rate
                                </p>
                            </div>
                            <div className="col-4 banner-div inno-font">
                                <h1>
                                    <CountUp delay={1} end={15} />
                                    +
                                </h1>
                                <p>
                                    Years Of Service
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">

                </div>
            </div>

        </div>
    );
};

export default Banner;