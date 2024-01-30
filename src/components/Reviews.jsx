import Heading from './Heading'
import { reviewsSection } from '../data'
import Slider from 'react-slick'
import SingleReview from './SingleReview'

const Reviews = ({ reviews }) => {
  const { sectionTitle, sectionSubtitle } = reviewsSection
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnFocus: true,
    centerMode: true,
    centerPadding: '165px',
    /* className: 'center',
    centerPadding: '50px', */
  }
  return (
    <section
      id="reviews"
      className="pt-14 pb-14 section m-auto bg-base-200/50 "
    >
      <Heading sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} />
      <Slider {...settings} className="carousel">
        {reviews.map((review) => {
          return <SingleReview key={review.id} {...review} />
        })}
      </Slider>
    </section>
  )
}
export default Reviews
