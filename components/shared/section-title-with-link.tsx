import { FC } from 'react';
import AnchorTwist from '../animations/anchor-tag-twist';

interface SectionTitleWithLinkProps {
  sectionTitle: string;
  link?: {
    title: string;
    href: string;
  };
}

const SectionTitleWithLink: FC<SectionTitleWithLinkProps> = ({
  sectionTitle,
  link,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-midnight-blue text-2xl font-semibold">
        {sectionTitle}
      </h3>
      {link ? (
        <AnchorTwist
          href={link.href}
          className="text-razzmatazz cursor-pointer"
        >
          {link.title}
        </AnchorTwist>
      ) : (
        ''
      )}
    </div>
  );
};

export default SectionTitleWithLink;
