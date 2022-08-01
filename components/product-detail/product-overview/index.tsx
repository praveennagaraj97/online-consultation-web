import { FC } from 'react';
import Accordian from '../../shared/accordian';

const ProductOverview: FC = () => {
  return (
    <div>
      <div className="border shadow-md rounded-lg my-4 ">
        <Accordian defaultOpenState={true} heading="Description">
          <p className="whitespace-pre-line px-3 py-2">
            {`Dolo-650 Tablet 15's belongs to the group of mild analgesics (pain killer), and antipyretic (fever-reducing agent) used to treat mild to moderate pain including headache, migraine, toothache, menstrual period pain, osteoarthritis pain, musculoskeletal pain, and reducing fever. Pain and fever are caused by the activation of pain receptors due to the release of certain natural chemicals in our body like prostaglandin. 

Dolo-650 Tablet 15's contains 'Paracetamol' which prevents the release of a natural chemical (prostaglandin), causing a sensation of pain, inflammation, and fever. Dolo-650 Tablet 15's also has an antipyretic effect and can reduce body temperature in cases of fever. Dolo-650 Tablet 15's works by resetting the temperature-regulating centre in the brain, thus decreasing temperature in fevers caused due to illness, chemotherapy, or other reasons. 

Dolo-650 Tablet 15's is available as an over-the-counter medication. However, it is always recommended to use it after consulting a doctor. The dose and duration of the medication depend on your condition and its severity. The common side effects of Dolo-650 Tablet 15's include agitation, nervousness, and insomnia. Everyone needs not experience the above side effects as they vary depending on their health, underlying conditions, age, weight and gender. In case of any discomfort, speak with a doctor.

Before starting Dolo-650 Tablet 15's, please inform your doctor if you have any known allergy to paracetamol, heart, kidney or liver problems, or persistent headaches. And also, if prescribed by your doctor, ask if the medication is safe to use during pregnancy and breastfeeding.`}
          </p>
        </Accordian>
      </div>

      <div className="border shadow-md rounded-lg my-4 ">
        <Accordian heading="Key Benefits">
          <p className="whitespace-pre-line px-3 py-2">
            {`Dolo-650 Tablet 15's contains 'Paracetamol' which is a mild analgesic and fever reducer. Dolo-650 Tablet 15's can also be used to treat mild to moderate pain in conditions of headache, toothache, backache, period pain, and muscle pain. It has less gastric irritating properties compared to other pain killers like aspirin and ibuprofen. It is the drug of the first choice for reducing fever suitable for all age groups (from children of 2 months to the elderly).`}
          </p>
        </Accordian>
      </div>

      <div className="border shadow-md rounded-lg my-4 ">
        <Accordian heading="Direction for Use/Dosage">
          <div className="whitespace-pre-line px-3 py-2">
            <p className="font-semibold">{"Uses of Dolo-650 Tablet 15's"}</p>
            <small>Fever, Pain relief.</small>
            <p className="font-semibold mt-2">Medicinal Benefits</p>
            <small>
              {`Dolo-650 Tablet 15's contains 'Paracetamol' which is a mild analgesic and fever reducer. Dolo-650 Tablet 15's can also be used to treat mild to moderate pain in conditions of headache, toothache, backache, period pain, and muscle pain. It has less gastric irritating properties compared to other pain killers like aspirin and ibuprofen. 
              It is the drug of the first choice for reducing fever suitable for all age groups (from children of 2 months to the elderly).`}
            </small>
            <p className="font-semibold mt-2">Directions for Use</p>
            <small>
              {`Swallow the tablet whole with a glass of water before or after the meals. It is recommended to take a tablet after food to avoid any gastrointestinal irritation. Do not chew, crush, or break it. If you cannot swallow the tablet as a whole, you may break the pill into half and take both halves one at a time. Space the doses evenly, and take it at a fixed time for better results.`}
            </small>
          </div>
        </Accordian>
      </div>
    </div>
  );
};

export default ProductOverview;
