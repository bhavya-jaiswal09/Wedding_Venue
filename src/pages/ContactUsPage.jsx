import PageHero from '../components/primitives/PageHero';
import ContactMinimalSection from '../components/sections/ContactMinimalSection';
import { pageConfigs } from '../data/pageConfigs';
import usePageSeo from '../hooks/usePageSeo';

function ContactUsPage() {
  const config = pageConfigs.contact;
  usePageSeo(config.seo);

  return (
    <>
      <PageHero hero={config.hero} />
      <ContactMinimalSection sectionId="direct-contact" formId="inquiry-form" />
    </>
  );
}

export default ContactUsPage;
