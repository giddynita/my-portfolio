import Heading from './Heading'
import { reviewsSection } from '../data'
import Slider from 'react-slick'
import SingleReview from './SingleReview'

const Reviews = ({ reviews }) => {
  const { sectionTitle, sectionSubtitle } = reviewsSection
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnFocus: true,
    centerMode: true,
    centerPadding: '200px',
    arrows: false,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '16px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: '64px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '32px',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 1284,
        settings: {
          slidesToShow: 2,
          centerPadding: '135px',
        },
      },
    ],
  }
  return (
    <section
      id="reviews"
      className="pt-14 pb-14 section m-auto bg-base-200/50 "
    >
      <Heading sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} />
      <Slider {...settings} className="">
        {reviews.map((review) => {
          return <SingleReview key={review.id} {...review} />
        })}
      </Slider>
    </section>
  )
}
export default Reviews
