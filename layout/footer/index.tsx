import { FC } from 'react';
import { MdMoreTime, MdOutlineAddIcCall } from 'react-icons/md';
import AnchorTwist from '../../components/animations/anchor-tag-twist';

const Footer: FC = () => {
  return (
    <footer>
      <div className=" bg-midnight-blue ">
        <div className="xl:container mx-auto xl:px-2 px-8 py-5 text-gray-50">
          <div className="grid md:grid-cols-4 grid-cols-2  gap-10">
            <div className="flex flex-col">
              <h5 className="text-lg font-semibold mb-2">Company</h5>
              <AnchorTwist href={'/'}>
                <span className="opacity-60">About Us</span>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <span className="opacity-60">Partner With Us</span>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <span className="opacity-60">Contact Us</span>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <span className="opacity-60">Career</span>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <span className="opacity-60">Terms & Conditions</span>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <span className="opacity-60">Privacy Policy</span>
              </AnchorTwist>
            </div>
            <div className=" flex flex-col">
              <h5 className="text-lg font-semibold mb-2">Services</h5>
              <AnchorTwist href={'/'}>
                <span className="opacity-60">Consult a Doctor</span>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <span className="opacity-60">Order Medicines Online</span>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <span className="opacity-60">Instant Consultation</span>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <span className="opacity-60">Book Appointment</span>
              </AnchorTwist>
            </div>
            <div className=" flex flex-col">
              <h5 className="text-lg font-semibold mb-2">Categories</h5>
              <AnchorTwist href={'/'}>
                <span className="opacity-60">Body care</span>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <span className="opacity-60">Hair Care</span>
              </AnchorTwist>

              <AnchorTwist href={'/'}>
                <span className="opacity-60">Skin Care</span>
              </AnchorTwist>
            </div>
            <div className=" flex flex-col">
              <h5 className="text-lg font-semibold mb-2">Company</h5>
              <div className="flex items-center mb-3">
                <span className="bg-razzmatazz rounded-full p-1">
                  <MdOutlineAddIcCall className="" />
                </span>
                <span className="ml-2">9900990099</span>
              </div>

              <h6 className="mb-1 font-semibold">Available all days</h6>
              <div className="flex items-center">
                <span className="bg-razzmatazz rounded-full p-1">
                  <MdMoreTime className="" />
                </span>
                <span className="ml-2">9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-zodiac py-4 text-center text-gray-50">
        <span>© 2021 GetMedGo.com. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
