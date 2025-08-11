import Heading from '../global/Heading'
import { contactInfo } from '../../data'
import ContactDetails from './ContactDetails'
import { Form, useNavigation } from 'react-router-dom'
import FormInput from '../form/FormInput'

const Contact = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <section id="contact" className="py-12 section m-auto bg-base-100">
      <Heading sectionTitle="contact" sectionSubtitle="Get in Touch" />
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="md:w-1/2">
          {contactInfo.map((details) => {
            return <ContactDetails key={details.id} details={details} />
          })}
        </div>
        <form
          name="portfolio-contact"
          method="post"
          className="md:w-1/2 bg-base-200 rounded-md px-6 pt-6 pb-9"
        >
          <input type="hidden" name="form-name" value="portfolio-contact" />
          <h3 className="text-center mb-6  text-2xl font-bold text-primary tracking-wider">
            Let's work together!
          </h3>
          <div className="flex flex-col gap-5 lg:flex-row ">
            <FormInput type="text" name="name" id="name" placeholder="Name" />
            <FormInput
              name="email"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <textarea
            className="block w-full p-3 my-5 bg-base-300 border border-base-300 focus:border-primary focus:outline-none  "
            placeholder="Message"
            name="message"
            id="message"
            cols="30"
            rows="5"
            required
          />
          <button
            type="submit"
            className="w-full hover:bg-primary hover:text-white  border border-primary p-3 text-primary rounded-full cursor-pointer"
          >
            {isSubmitting ? 'SENDING...' : ' SEND MESSAGE'}
          </button>
        </form>
      </div>
    </section>
  )
}
export default Contact
