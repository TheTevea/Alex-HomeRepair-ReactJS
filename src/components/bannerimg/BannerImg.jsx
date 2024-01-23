
const BannerImg = ({imgSrc,imgSize}) => {

  return (
    <div className="left mb-5 mx-4 overflow-hidden position-relative">
      <img className="w-100 mt-5 ms-5" src={imgSrc} alt="About Image" style={{objectFit: "cover",height: imgSize }} />
      <div className="bg-white p-3 text-center position-absolute top-0 start-0">
        <div className="tag">
          <h1 className="text-light fs-1 fw-bold ">25</h1>
          <h4 className="text-light fs-1">Years</h4>
          <p className="text-light fs-5 fw-bolder">Experience</p>
        </div>
      </div>
    </div>
  );
};

export default BannerImg;
