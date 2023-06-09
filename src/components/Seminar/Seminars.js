import React, { useEffect, useRef, useState } from "react";
import './Seminars.css'
import SeminarIcon from '../../SVGs/SeminarIcon';
import seminar_pic from '../../Assets/seminar_pic.jpg'
import { Helmet } from "react-helmet";
import SeminarForm from "./SeminarForm";



function Seminars() {

  const revealRef1 = useRef(null); 
  const [isAnimateds, setIsAnimateds] = useState(false); 

  const handleScroll = () => {
    const revealElement = revealRef1.current; 
    if (revealElement) {
      const revealTop = revealElement.getBoundingClientRect().top; 
      const windowHeight = window.innerHeight; 

      if (revealTop < windowHeight) {
          setTimeout(() => {
          setIsAnimateds(true);
          }, 1000)
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <div className='Seminars'>
<Helmet>
        <title>Gardening Workshops - Jericho Nursery</title>
        <meta name="description" content="Join our gardening workshops at Jericho Nursery to enhance your gardening skills, learn new techniques, and connect with fellow gardeners." />
        <meta property="og:title" content="Gardening Workshops - Enhance Your Gardening Skills" />
        <meta property="og:description" content="Join our gardening workshops at Jericho Nursery to enhance your gardening skills, learn new techniques, and connect with fellow gardeners." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/SEO_photos/bowls.jpg" />
        <meta property="og:type" content="website" />
</Helmet>
        <div className='seminars_welcome'>
            <h1>Workshops</h1>
        <p>
        Ignite your passion for gardening at Jericho Nursery's engaging workshops! Join us as we delve into the world of practical plant knowledge and hands-on experience, covering everything from selecting the perfect plants to nurturing them with care.
        </p>
        </div>
        <div className='seminars_body_main'>
            <div className='seminars_body_top'>
                <h1>This Year's Workshops</h1>
                <p>
                Embark on a gardening adventure without breaking the bank! For a limited time, Jericho Nursery is offering their enriching workshops at an affordable price of just $10. As an added bonus, participants will receive a complimentary $10 gift card to the nursery, allowing you to kick-start your gardening journey with a selection of top-quality plants and gardening supplies. Take advantage of this exclusive offer during the off-season, in the fall and early spring, when you can devote ample time to learning and preparing for a bountiful gardening season ahead. Don't miss out on this incredible opportunity to learn, save, and cultivate your green thumb with Jericho Nursery's value-packed workshops!
                </p>
            </div>

    <div className='seminars_body_mid'>
    <div className="reveal-container">
<div className='s_inner_decoy'>
            <div className='s_decoy'>
            </div>
            <div id='movingDiv'>
    <div className={isAnimateds ? "s_visible" : "reveal-content"}><SeminarIcon /></div>
            </div>
    </div>
</div>

           <div className='seminars_list'>
           <div ref={revealRef1}>
          </div>
                <ul>
                    <h3>No Workshops Scheduled Currently</h3>
                    <p>They will resume after Spring</p>
                </ul>
            </div>
            </div>
      

  <div className='seminar_pic_section'>
  </div>

            <img alt='Workshops at Jericho Nursery' src={seminar_pic} className='seminar_pic'/>
            <div className='seminars_body_bottom'>
                <h1> Sign Up For Workshops Below</h1>
        <div className='seminar_form'>
       
      <SeminarForm />


        </div>
            </div>
        </div>
</div>
  )
}

export default Seminars;