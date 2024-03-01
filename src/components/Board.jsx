import React, { useState } from "react";
import Card from "./Card";

const Board = (props) => {
    const cardData = [
        { image: '/images/arbo.jpg', name: 'Fullerton Arboretum', location: 'Fullerton', link: 'https://arboretum.fullerton.edu/', text: 'Visit!' },
        { image: '/images/irvine.jpg', name: 'Irvine Regional Park', location: 'Irvine', link: 'https://ocparks.com/irvinepark', text: 'Visit!' },
        { image: '/images/hb.jpg', name: 'Huntington Beach Central Park', location: 'Huntington Beach', link: 'https://huntingtonbeachca.gov/residents/parks_facilities/parks/huntington-beach-central-park.cfm', text: 'Visit!'},
        { image: '/images/joshua.jpg', name: 'Joshua Tree National Park', location: 'Twentynine Palms', link: 'https://www.cityofirvine.org/orange-county-great-park', text: 'Visit!' },
        { image: '/images/yosemite.jpg', name: 'Yosemite National Park', location: 'Yosemite', link: 'https://www.nps.gov/yose/index.htm', text: 'Visit!' },
        { image: '/images/death.jpg', name: 'Death Valley National Park', location: 'Las Vegas', link: 'https://www.nps.gov/deva/index.htm', text: 'Visit!' },
        { image: '/images/brookhurst.jpg', name: 'Brookhurst Park', location: 'Anaheim', link: 'https://www.anaheim.net/facilities/facility/details/brookhurstpark-99', text: 'Visit!'},
        { image: '/images/channel.jpg', name: 'Channel Islands National Park', location: 'Channel Islands', link: 'https://www.nps.gov/chis/index.htm', text: 'Visit!' },
        { image: '/images/sequoia.jpg', name: 'Sequoia National Park', location: 'Visalia', link: 'https://www.nps.gov/seki/index.htm', text: 'Visit!' },
        { image: '/images/redwood.jpg', name: 'Redwood National Park', location: 'San Francisco', link: 'https://www.nps.gov/redw/index.htm', text: 'Visit!'}
    ]

    return (
        <div className="board">
            {cardData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        name={card.name}
                        location={card.location}
                        link={card.link}
                        text={card.text}
                    />
            ))}
        </div>
    )
}

export default Board;