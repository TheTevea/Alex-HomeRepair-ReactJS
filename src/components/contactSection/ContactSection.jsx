import AppointmentSection from "../appointment/AppointmentSection"
import HeadTag from "../headtag/HeadTag"
import "./ContactSectionStyle.css"


const ContactSection = () => {
  return (
    <div className="teamDesc-container">
        <div className="container mx-auto px-4">
            <div className="row">
                <div className="col-lg-6 mt-5 pe-5" data-aos="fade-up"
     data-aos-delay="30" data-aos-duration="500" >
                    <div className="map">
                    <iframe className="w-100 " style={{minHeight: "592.5px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15635.874733444616!2d104.92720480000001!3d11.554102749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1706533341944!5m2!1sen!2skh" loading='async'></iframe>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up"
     data-aos-delay="30" data-aos-duration="1500" >
                <AppointmentSection containerClass="pb-5 appointment-container" headColor="text-secondary" titlColor="text-dark" descColor="text-secondary" columnSize="col-lg-12" headPaddSize="px-0" messPaddSize="px-0" inputPaddSize="px-0" buttonSize="w-auto px-4" buttonName="Send Message"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection