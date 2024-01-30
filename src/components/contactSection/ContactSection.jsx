import AppointmentSection from "../appointment/AppointmentSection"
import HeadTag from "../headtag/HeadTag"
import "./ContactSectionStyle.css"


const ContactSection = () => {
  return (
    <div className="teamDesc-container">
        <div className="container mx-auto px-4">
            <div className="row">
                <div className="col-md-6 pe-5 mt-5">
                    <div className="map">
                    <iframe className="w-100 " style={{height: "620px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15635.874733444616!2d104.92720480000001!3d11.554102749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1706533341944!5m2!1sen!2skh" ></iframe>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* <HeadTag tagName="CONTACT US" text="If You Have Any Query, Please Contact Us"/>
                    <p className="text-secondary">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done
                        <button className="btn-downl ms-1">Download Now</button>.
                    </p> */}

<AppointmentSection containerClass="pb-5 appointment-container" headColor="text-secondary" titlColor="text-dark" descColor="text-secondary" columnSize="col-lg-12"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection