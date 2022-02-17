/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/service-apps.png';
import icon5 from 'assets/images/icons/service-support.png';
import icon6 from 'assets/images/icons/service-cloud.png';
import icon7 from 'assets/images/icons/service-access.png';
import icon8 from 'assets/images/icons/service-reports.png';
import icon9 from 'assets/images/icons/service-invoices.png';

const data = [
  {
    id: 1,
    icon: icon4,
    moreLink: '#learn-more',
    title: 'Free iOS and Android Apps',
    description: `At home, in the office or on the go - take your business anywhere.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: '#learn-more',
    title: 'Free support',
    description: `Our team is ready and waiting to help online and on the phone. `,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: '#learn-more',
    title: 'Secure cloud storage',
    description: `Bank-level security keeps your data stored safely in the cloud. `,
  },
  {
    id: 4,
    icon: icon7,
    moreLink: '#learn-more',
    title: 'Accountant access',
    description: `Invite your accountant or bookkeeper to share your books. `,
  },
  {
    id: 5,
    icon: icon8,
    moreLink: '#learn-more',
    title: 'Reports and dashboards',
    description: `See how your business is doing with customizable reports.`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: '#learn-more',
    title: 'Unlimited invoices',
    description: `Send unlimited invoices and let nothing stand between you and your money.`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="All our plans include"
          description="See how Startup Online can work for your business."
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
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
