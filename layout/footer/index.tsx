import { FC } from 'react';
import { MdMoreTime, MdOutlineAddIcCall } from 'react-icons/md';
import AnchorTwist from '../../components/animations/anchor-tag-twist';

const Footer: FC = () => {
  return (
    <footer>
      <div className=" bg-midnight-blue">
        <div className="xl:container mx-auto xl:px-2 px-8 py-5 text-gray-50">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
            <div className="flex flex-col">
              <h5 className="text-lg font-semibold mb-2">Company</h5>
              <AnchorTwist href={'/'}>
                <small>About Us</small>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <small>Partner With Us</small>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <small>Contact Us</small>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <small>Career</small>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <small>Terms & Conditions</small>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <small>Privacy Policy</small>
              </AnchorTwist>
            </div>
            <div className=" flex flex-col">
              <h5 className="text-lg font-semibold mb-2">Services</h5>
              <AnchorTwist href={'/'}>
                <small>Consult a Doctor</small>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <small>Order Medicines Online</small>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <small>Instant Consultation</small>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <small>Book Appointment</small>
              </AnchorTwist>
            </div>
            <div className=" flex flex-col">
              <h5 className="text-lg font-semibold mb-2">Categories</h5>
              <AnchorTwist href={'/'}>
                <small>Body care</small>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <small>Hair Care</small>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <small>Skin Care</small>
              </AnchorTwist>
            </div>
            <div className=" flex flex-col">
              <h5 className="text-lg font-semibold mb-2">Company</h5>
              <div className="flex items-center mb-3">
                <small className="bg-razzmatazz rounded-full p-1">
                  <MdOutlineAddIcCall className="" />
                </small>
                <small className="ml-2">9900990099</small>
              </div>

              <h6 className="mb-1 font-semibold">Available all days</h6>
              <div className="flex items-center">
                <small className="bg-razzmatazz rounded-full p-1">
                  <MdMoreTime className="" />
                </small>
                <small className="ml-2">9:00 AM - 7:00 PM</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-zodiac py-2 text-center text-gray-50">
        <small>© 2021 GetMedGo.com. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
