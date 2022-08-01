import { FC } from 'react';

const QuickLinkCards: FC = () => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-y-4 mb-5">
      <div
        className="bg-pink-900 rounded-lg px-7 text-center py-3 text-gray-50 bg-blend-overlay bg-fixed bg-cover"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1515350540008-a3f566782a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,
        }}
      >
        <h3 className="uppercase text-lg font-semibold mb-2">Buy medicines</h3>
        <div className="mb-2">
          <small className="block">Get medicines delivered to your home.</small>
          <small className="block">same day delivery</small>
        </div>
        <button className="hover:-translate-y-0.5 hover:animate-wiggle mt-2 px-3 py-1 border rounded-lg bg-pink-600 bg-opacity-50 text-sm">
          Order Now
        </button>
      </div>

      <div
        className="bg-gray-800 rounded-lg px-7 text-center py-3 text-gray-50 bg-blend-overlay bg-fixed bg-cover"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1597764690472-ec054f1c8637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)`,
        }}
      >
        <h3 className="uppercase text-lg font-semibold mb-2">
          Instant Consultation
        </h3>
        <div className="mb-2 hf">
          <small className="block">Consult a doctor instantly.</small>

          <small className="block">Get started now</small>
        </div>
        <button className="hover:-translate-y-0.5 hover:animate-wiggle mt-2 px-3 py-1 border rounded-lg bg-pink-600 bg-opacity-50 text-sm">
          Start Now
        </button>
      </div>

      <div
        className="bg-green-900 rounded-lg px-7 text-center py-3 text-gray-50 bg-blend-overlay bg-fixed bg-cover"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,
        }}
      >
        <h3 className="uppercase text-lg font-semibold mb-2">
          Book Appointment
        </h3>
        <div className="mb-3">
          <small className="block">Need a specialized consultation?</small>
          <small className="block">Book an appointment</small>
        </div>
        <button className="hover:-translate-y-0.5 hover:animate-wiggle mt-2 px-3 py-1 border rounded-lg bg-green-500 bg-opacity-50 text-sm">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default QuickLinkCards;
