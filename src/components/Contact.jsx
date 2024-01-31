import Heading from './Heading'
import { contactSection } from '../data'
import ContactDetails from './ContactDetails'
import { Form, useNavigation } from 'react-router-dom'

const Contact = () => {
  const { sectionTitle, sectionSubtitle, contactInfo } = contactSection
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <section id="portfolio" className="pt-14 pb-14 section m-auto">
      <Heading sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} />
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="md:w-1/2">
          {contactInfo.map((details) => {
            return <ContactDetails key={details.id} details={details} />
          })}
        </div>
        <Form className="md:w-1/2" method="POST">
          <div className="flex flex-col gap-5 lg:flex-row ">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className=" p-3 lg:w-1/2  border border-base-300 form"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className=" p-3 lg:w-1/2 border border-base-300 form"
              required
            />
          </div>
          <textarea
            className="block w-full p-3 my-5 border border-base-300 form "
            placeholder="Message"
            name="message"
            id="message"
            cols="30"
            rows="5"
            required
          ></textarea>
          <button
            className="w-full bg-primary p-3 text-white cursor-not-allowed hover:text-primary-content"
            disabled
          >
            {isSubmitting ? 'SENDING...' : ' SEND MESSAGE'}
          </button>
        </Form>
      </div>
    </section>
  )
}
export default Contact
