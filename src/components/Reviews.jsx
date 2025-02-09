import Heading from './Heading'
import Slider from 'react-slick'
import SingleReview from './SingleReview'

const Reviews = ({ response }) => {
  const contentItems = response?.items.map((content) => {
    const { about, name, rating, image, review } = content.fields
    const id = content.sys.id
    const img = image?.fields?.file?.url
    return {
      id,
      about,
      name,
      rating,
      review,
      img,
    }
  })
  const reviews = contentItems.filter((items) => items.about !== undefined)

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnFocus: true,
    centerMode: true,
    arrows: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1284,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }
  return (
    <section id="reviews" className="pt-10 pb-24 section m-auto bg-base-200 ">
      <Heading sectionTitle="reviews" />
      <Slider {...settings}>
        {reviews.map((review) => {
          return <SingleReview key={review.id} {...review} />
        })}
      </Slider>
    </section>
  )
}
export default Reviews
