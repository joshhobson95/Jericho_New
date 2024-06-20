import React from 'react'
import ffc3 from '../../Assets/ffc3.png'
import arches from '../../Assets/arch.jpg'
import { Helmet } from 'react-helmet'
import FrequentForm from './Form/FrequentForm'
import OldForm from './Form/OldForm'
import Script from './Form/script'

import './FFC.css'

function FFC() {


  return (
    <div className='ffc'>
<Helmet>
        <title>Frequent Flower Club - Jericho Nursery</title>
        <meta name="description" content="Join the Frequent Flower Club at Jericho Nursery and enjoy exclusive benefits, discounts, and special offers on a wide variety of flowers and plants. Enhance your gardening experience and save with our loyalty program." />
        <meta property="og:title" content="Frequent Flower Club - Exclusive Benefits and Discounts" />
        <meta property="og:description" content="Join the Frequent Flower Club at Jericho Nursery and enjoy exclusive benefits, discounts, and special offers on a wide variety of flowers and plants. Enhance your gardening experience and save with our loyalty program." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/SEO_photos/swgarden.jpg" />
        <meta property="og:type" content="website" />
</Helmet>


<img className='ffc_iconf' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/Nice%2010(2).png' />
<img className='ffc_iconf1' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/Nice%2010(1).png' />
<img className='ffc_iconf2' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/Nice%2010.png' />

        <div className='ffc_welcome'>
            <h1>Frequent Flower Club</h1>
                <p>
                    A new and imporved points system, with all the same connectedness you know and love
               </p>
        </div>


            <div className='ffc_body'>

                        <div className='ffc_body_top'>
                        <h1>Welcome to Jericho's Frequent Flower Club</h1>

                        <div className='ffc_introduction'>
                            <img className='jericho_ffc_flower' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/main-Flower' alt='Jericho FFC homepage'/>
                            <div className='ffc_intro_paragraph'>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  convallis justo sed sagittis facilisis. Donec dignissim ullamcorper  pulvinar. Proin dolor arcu, malesuada at ligula id, laoreet accumsan  leo. Maecenas ornare augue vitae est tempor, in auctor quam condimentum.  Proin ac tempor erat. Phasellus sed luctus lectus. Nunc porta ut neque  vel malesuada. Nullam a elit tortor. Etiam libero sapien, faucibus in  massa et, consequat sagittis ante. Proin a neque odio. In est ligula,  tincidunt non nibh eget, tincidunt laoreet dolor. Aenean in elementum  ligula. </p>
                            </div>
                <div className='ffc_grid-wrapper'>
                        <div className="ffc_grid-container">
                        <div className="ffc_grid-item">
                            <img src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/+100.png" alt="Icon 1" className="ffc_icon" />
                            <span>Earn points for purchases</span>
                        </div>
                        <div className="ffc_grid-item">
                            <img src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/5%25.png" alt="Icon 2" className="ffc_icon" />
                            <span>Redeem Points for discounts</span>
                        </div>
                        <div className="ffc_grid-item">
                            <img src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/Thumbsup.png" alt="Icon 3" className="ffc_icon" />
                            <span>Get Points for interacting with our socials</span>
                        </div>
                        <div className="ffc_grid-item">
                            <img src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/VIP.png" alt="Icon 4" className="ffc_icon" />
                            <span>Become a Jericho VIP</span>
                        </div>
                        </div>
                </div>


                        <div className='ffc_sign_up'>
                                <button>Sign Up</button>
                        </div>




                    </div>





                        </div>


            </div>






</div>
  )
}

export default FFC;