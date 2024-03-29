import React, { useState } from "react";
import Card from "./Card";
import '../index.css';

const Board = (props) => {
    const cardData = [
        { image: '/images/arbo.jpg', name: 'Fullerton Arboretum', location: 'Fullerton', link: 'https://arboretum.fullerton.edu/' },
        { image: '/images/irvine.jpg', name: 'Irvine Regional Park', location: 'Irvine', link: 'https://ocparks.com/irvinepark' },
        { image: '/images/hb.jpg', name: 'Huntington Beach Central Park', location: 'Huntington Beach', link: 'https://huntingtonbeachca.gov/residents/parks_facilities/parks/huntington-beach-central-park.cfm'},
        { image: '/images/joshua.jpg', name: 'Joshua Tree National Park', location: 'Twentynine Palms', link: 'https://www.cityofirvine.org/orange-county-great-park' },
        { image: '/images/yosemite.jpg', name: 'Yosemite National Park', location: 'Yosemite', link: 'https://www.nps.gov/yose/index.htm' },
        { image: '/images/death.jpg', name: 'Death Valley National Park', location: 'Las Vegas', link: 'https://www.nps.gov/deva/index.htm' },
        { image: '/images/brookhurst.jpg', name: 'Brookhurst Park', location: 'Anaheim', link: 'https://www.anaheim.net/facilities/facility/details/brookhurstpark-99'},
        { image: '/images/channel.jpg', name: 'Channel Islands National Park', location: 'Channel Islands', link: 'https://www.nps.gov/chis/index.htm' },
        { image: '/images/sequoia.jpg', name: 'Sequoia National Park', location: 'Visalia', link: 'https://www.nps.gov/seki/index.htm' },
        { image: '/images/redwood.jpg', name: 'Redwood National Park', location: 'San Francisco', link: 'https://www.nps.gov/redw/index.htm'}
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
                    />
            ))}
        </div>
    )
}

export default Board;