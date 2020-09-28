import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className='home__section'>
            <Card
                src="https://www.eventmarketer.com/wp-content/uploads/2020/04/airbnb_experiences_sheep-2020.jpeg"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://www.idoyall.com/wp-content/uploads/2020/08/coldwater-gardens-modern-treehouse-stay-2.jpg"
                title="Unique vacation homes"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire Findastay homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="4 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in Atlanta"
                description="Enjoy the amazing sights of Atlanta with this stunning penthouse"
                price="$350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/night"
            />

            </div>
            
            
            
        </div>
        
    )
}

export default Home
