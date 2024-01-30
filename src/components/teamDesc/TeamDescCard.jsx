import "./TeamDescStyle.css"
const TeamDescCard = ({teamImgSrc,teamName,teamDetails,teamPhone,teamEmail,teamPosition}) => {
  return (
    <div className="col-lg-6 Desc-Card gap-4 pb-5 pb-lg-0">
        <img src={teamImgSrc} alt="Team Profile" className="" />
        <div className="team-details">
            <h4 className="fs-2">{teamName}</h4>
            <span className="text-secondary">{teamPosition}</span>
            <h6 className="mt-3">Contact Details</h6>
            <p className="text-secondary mt-2">{teamDetails}</p>
            <p className="text-secondary mt-3">Call: <span>{teamPhone}</span></p>
            <p className="text-secondary">Email: <span>{teamEmail}</span></p>
        </div>
    </div>
  )
}

export default TeamDescCard