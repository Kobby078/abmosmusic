import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './ArtistsCard.css'
import data from '../../db/slider'
import { sliderSettings } from '../../pages/Artists/common'


const ArtistCard = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
            </div>

            <Swiper {...sliderSettings}>

                <SliderButtons />
              {
                data.map((card, i) => (
                  <SwiperSlide key={i}>
                    <div className="flexColStart r-card">
                      <img src={card.image} alt="Residence" />

                      <span className="flexColStart arCardText">
                        <span className="primaryText">{card.name}</span>
                        <span className="secondaryText">{card.role}</span>
                      </span>
                    </div>
                  </SwiperSlide>
                ))
              }

            </Swiper>

        </div>
    </section>
  )
}

export default ArtistCard;


const SliderButtons = () => {
  const swiper = useSwiper();
  
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}