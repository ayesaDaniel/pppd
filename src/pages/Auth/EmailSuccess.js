import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const EmailSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reference_id, email, phone, fullName } = location.state || {}; // Retrieve reference_id and other info from state

  let imgSrc = process.env.PUBLIC_URL;

  const handleSubmit = async () => {
    navigate("/signin", {
     state: { reference_id, email, phone, fullName }, // Pass required state to the next page
    });
  }

  return (
    <div
      className="h-screen bg-cover bg-center p-6 px-10 flex items-center justify-center"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/0dcd/a78a/912fe14d2d05a2f86f0e72c8cfd65ebe?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L17Xw22MMfq-gP8sb2UN5WyBGfen-70R9LzL1ylIpAdaLRziJh2BqOdTNcAYAfW8yvr1oc4lfXKjtuynXM6uonFVCccJNSeIEvbQDIXsYJ3rov808Fg5HeSiNRm3m-F1S7hvfC1OyvswVWE62u0wRxox8i9i79zi9CrDHyxZnAeo6Oc68y79JpVQEew-9ZL9chEQ6akbT1sMnWuyZanT-vkEAvMmn-Uq0vD7HwtZ53UG6WOWczHOtIRrbIjCizYcjTdpuPI0p7WAZ2DySgbzRcKRu0B6PDIVvfkMznEB~HxBSe~QCVeRqFTcci3f0O2ghljImH3MzONW0TTFkazrnQ__')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <section className="z-30">
        <div className="gap-12 flex flex-col justify-center items-center p-4 py-6 lg:p-11 bg-white max-w-custom max-h-height rounded-3xl">
          <div className="z-10">
            <img src={`${imgSrc}/img/check_5610944 1.png`} alt="My Image" />
          </div>
          <h2 className="text-2xl font-bold">Success! You're on the List!</h2>
          <p className="text-base font-normal lg:px-20">
            Invite your friends to join the wait and stay tuned—we’ll send you updates as we continue building towards launch.
          </p>

          {/* Pass state to the Sign In route */}
        
            <button className="px-8 py-2 text-white bg-indigo-900 rounded-lg font-bold sm:w-full"
             onClick={handleSubmit}
            >
              Get Started
            </button>
          
        </div>
      </section>
    </div>
  );
};

export default EmailSuccess;
