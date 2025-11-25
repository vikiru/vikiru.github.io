import { Helmet } from 'react-helmet';

type HelmetMetaProps = {
  title: string;
  description: string;
};

function HelmetMeta({ title, description }: HelmetMetaProps) {
  return (
    <Helmet>
      {/* Title and Description */}
      <title>{title}</title>
      <meta content={description} name="description" />

      {/* Open Graph */}
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={window.location.href} property="og:url" />
      <meta content="website" property="og:type" />

      {/* Twitter */}
      <meta content={title} property="twitter:title" />
      <meta content={description} property="twitter:description" />
    </Helmet>
  );
}

export default HelmetMeta;
