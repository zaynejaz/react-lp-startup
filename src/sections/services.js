/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service-time.png';
import icon2 from 'assets/images/icons/service-claim.png';
import icon3 from 'assets/images/icons/service-support.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Free up time',
    description: `Sync with your bank and favorite apps, so your books are always accurate and up to date. `,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Claim everything',
    description: `Claim every entitlement at tax time with your expense receipts stored and sorted in Startup. `,
  },
  {
    id: 3,
    icon: icon3,
    title: 'Unlimited support',
    description: `With Startup free and unlimited customer support, help is always just a click away. `,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Powerful accounting tools for small and growing businesses"
          description="Access and manage your books from your computer, laptop, tablet, or smartphone anytime you choose."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
