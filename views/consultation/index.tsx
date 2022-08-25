import { FC, Fragment } from 'react';
import ConsultationTypeCard from '../../components/consultation/consultation-type-card';
import SearchHeader from '../../components/container/search-header';
import ViewContainer from '../../components/container/view-container';
import { ConsultationTypeEntity } from '../../types/response/consultation.response';

export interface ConsultationViewProps {
  types: ConsultationTypeEntity[];
}

const ConsultationView: FC<ConsultationViewProps> = ({ types }) => {
  return (
    <Fragment>
      <SearchHeader />
      <ViewContainer>
        <h1 className="text-xl font-semibold my-5">Consult a Doctor</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-y-6">
          {types.map((type) => {
            return (
              <ConsultationTypeCard
                key={type.id}
                {...type}
                onActionClick={() => {}}
              />
            );
          })}
        </div>
      </ViewContainer>
    </Fragment>
  );
};

export default ConsultationView;
