import Heading from './Heading'
import Slider from 'react-slick'
import SingleReview from './SingleReview'
import { useLoaderData } from 'react-router-dom'

const Reviews = () => {
  const { response } = useLoaderData()
  const contentItems = response.items.map((content) => {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
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
    <section id="reviews" className="pt-14 pb-14 section m-auto bg-base-200 ">
      <Heading sectionTitle="reviews" sectionSubtitle="Clients Feedback" />
      <Slider {...settings}>
        {reviews.map((review) => {
          return <SingleReview key={review.id} {...review} />
        })}
      </Slider>
    </section>
  )
}
export default Reviews
