import '../CSS/Home.css'
import image from '../assets/Images/2947549.png'

function Home(){
    return(
        <>
            <section id="navigationBar">
                <h1 style={{marginLeft: '200px', marginRight: '300px', fontWeight: '500'}}>FOOD DELIVERY</h1>
                <section id = "navigationItems">
                    <h4><a href = "">Home</a></h4>
                    <h4><a href = "">About</a></h4>
                    <h4><a href = "">Contact</a></h4>
                    <h4><a href = "">Map</a></h4>
                    <h4 style={{marginRight: '100px'}}><a href = "">Admin</a></h4>
                </section>  
            </section>

            <section id="homeSection">
                <section id = "homeText">
                    <h3 style={{color: '#009951', fontSize: '56px', fontWeight: '600'}}>ORDER TASTY</h3>
                    <h3 style={{color: '#009951', fontSize: '56px', marginTop: '-56px', fontWeight: '600'}}>FOOD</h3>
                    <h3 style={{color: 'white', fontSize: '24px', fontWeight: '400'}}>Delivered to you at your door step</h3>
                </section>

                <img src={image} alt="Image" style={{width: '300px', height: 'auto', marginLeft: '250px', marginTop: '50px'}}/>
            </section>

            <button id="order">
                ORDER MORE
            </button>

            <button id="menu">
                SEE MENU
            </button>
            
        </>
    )
}

export default Home