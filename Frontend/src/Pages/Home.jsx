import '../CSS/Home.css'
import { useNavigate } from 'react-router-dom';
import image from '../assets/Images/2947549.png'
import { LuUsers } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function orderClick(){
    const loginCard = document.getElementById('loginCard');
    loginCard.scrollIntoView();
}

function loginClick(){
    const navigate = useNavigate();
    navigate('/menu');
}

function Home(){
    return(
        <section id ="homePage">
            <section id="navigationBar">
                <h1 style={{marginLeft: '12vw', marginRight: '25vw', fontWeight: '500'}}>FOOD DELIVERY</h1>
                <section id = "navigationItems">
                    <h4><a href = "">Home</a></h4>
                    <h4><a href = "#aboutSection">About</a></h4>
                    <h4><a href = "#footer">Contact</a></h4>
                    <h4><a href = "">Map</a></h4>
                    <h4 style={{marginRight: '5vw'}}><a href = "">Admin</a></h4>
                </section>  
            </section>

            <section id="homeSection">
                <section id = "homeText">
                    <h3 style={{color: '#009951', fontSize: '56px', fontWeight: '600'}}>ORDER TASTY</h3>
                    <h3 style={{color: '#009951', fontSize: '56px', marginTop: '-8vh', fontWeight: '600'}}>FOOD</h3>
                    <h3 style={{color: 'white', fontSize: '24px', fontWeight: '400'}}>Delivered to you at your door step</h3>
                </section>

                <img src={image} alt="Image" style={{width: '25vw', height: 'auto', marginLeft: '20vw', marginTop: '50px'}}/>
            </section>

            <button id="order" onClick={orderClick}>
                ORDER MORE
            </button>

            <button id="menu" onClick={orderClick}>
                SEE MENU
            </button>

            <section id="aboutSection">
                <h1 style={{marginLeft: '20vw', paddingTop: '8vh', fontWeight: '400', fontSize: '36px'}}>About SK</h1>
                <section id="imageText">
                    <img src={image} alt="Image" style={{width: '22vw', height: 'auto', marginLeft: '15vw', marginTop: '50px'}}/>
                    <p style={{marginRight: '14vw', fontSize: '24px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident omnis ipsum eum corporis asperiores voluptates sed a, ad hic sint ut quo necessitatibus doloribus pariatur voluptatum deleniti, vel ex.</p>
                </section>
            </section>
            
            <section id="loginSection">
                <section id="loginCard">
                    <LuUsers style={{width: '12vw', height: 'auto', color: '#009951'}}/>
                    <h2 style={{fontWeight: '400'}}>Customer</h2>
                    <h2 style={{marginTop: '-2vh', fontWeight: '400'}}>Browse and Order</h2>

                    <h2 style={{fontWeight: '400'}}>Sign in with your mobile number</h2>
                    <input type="text" placeholder='Enter' id="loginText"/>
                    <button id="login" onClick={loginClick}>
                        Sign In
                    </button>
                </section>
            </section>

            <section id="footer">
                <section id="socialMedia" style={{marginLeft: '50px'}}>
                    <h3 style={{fontWeight: '400'}}>FOOD DELIVERY</h3>
                    <FaLinkedin style={{width: '3vw', height: 'auto', marginRight: '1.5vw'}}/>
                    <FaInstagram style={{width: '3vw', height: 'auto', marginRight: '1.5vw'}}/>
                    <FaGithub style={{width: '3vw', height: 'auto'}}/>
                </section>

                <section id="contacts">
                    <h3 style={{fontWeight: '400'}}>CONTACT</h3>
                    <h3 style={{fontWeight: '400'}}>+91 1234567890</h3>
                    <h3 style={{fontWeight: '400'}}>+91 9876543210</h3>
                </section>

                <section id="email">
                    <h3 style={{fontWeight: '400'}}>EMAIL</h3>
                    <h3 style={{fontWeight: '400'}}>nitish@gmail.com</h3>
                    <h3 style={{fontWeight: '400'}}>sathvik@gmail.com</h3>
                </section>
            </section>
            
        </section>
    )
}

export default Home