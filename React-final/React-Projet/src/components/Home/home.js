import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import bk1 from '../images/bk1.png'
import bk2 from'../images/bk2.png'
import bk3 from'../images/bk3.png'
import bk4 from'../images/bk4.png'
import bk5 from'../images/bk5.png'
import bk6 from'../images/bk6.png'
import bk7 from'../images/bk7.png'
import bk8 from'../images/bk8.png'
import bk9 from'../images/bk9.png'
import bk10 from'../images/bk10.png'
import pub1 from '../images/pbimg1.jpg'
import pub2 from '../images/pbimg2.png'
import pub3 from '../images/pbimg3.png'
import pub4 from '../images/pbimg4.png'

import"./Home.css"


class Home extends React.Component{
    render(){
        return(
            <div className="container">

                <div className="div2">
<br/> <br/>
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src={pub1} className="sliderimg"/>
                    <img src={pub2} className="sliderimg"/>
                    <img src={pub3} className="sliderimg"/>
                    <img src={pub4} className="sliderimg"/>

                </AliceCarousel>
	    <table className="tb1" >
            <tr>
            
            </tr>
            <p className="slct">NOTRE SÉLECTION</p>
            <hr/>
	        <tr>
            <p>Informatique</p>
            <hr/>

			    <th><a href="/ajout"><img className="home11" src={bk1} alt="logo"/></a></th>
                <th><a href="/ajout"><img className="home11" src={bk3} alt="logo"/></a></th>				
                <th><a href="/ajout"><img className="home11" src={bk4} alt="logo"/></a></th>				

		    </tr>
            <hr/>
            <tr>
            <p>Nouveautés</p>
            <hr/>

				<th><a href="/ajout"><img className="home11" src={bk5} alt="logo"/></a></th>
                <th><a href="/ajout"><img className="home11" src={bk6} alt="logo"/></a></th>				
                <th><a href="/ajout"><img className="home11" src={bk7} alt="logo"/></a></th>	
		    </tr>
            <hr/>

            <tr>
            <p>Santé</p>
            <hr/>

				<th><a href="/ajout"><img className="home11" src={bk8} alt="logo"/></a></th>
                <th><a href="/ajout"><img className="home11" src={bk9} alt="logo"/></a></th>				
                <th><a href="/ajout"><img className="home11" src={bk10} alt="logo"/></a></th>	
		    </tr>
            <tr>
				
		    </tr>
		</table>
	</div>
               
            </div>
           
        )
    }
}
export default Home;