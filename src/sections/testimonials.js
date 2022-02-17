/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { rgba } from 'polished';
import quote from 'assets/images/icons/quote.png';
import uber from 'assets/images/logos/uber.png';
import google from 'assets/images/logos/google.png';
import paypal from 'assets/images/logos/paypal.png';
import microsoft from 'assets/images/logos/microsoft.png';
import dribbble from 'assets/images/logos/dribbble.png';

const data = [
  {
    id: 1,
    logo: uber,
    author: 'By Denny Albuz, M&A Integrations, Uber',
    quote: `Being online, it allows you to connect to your bank account so that you can perform reconciliations with just a click. It also allows you to upload documents so that you can keep a separate copy online for easy retrieval. The UI is very user-friendly, that allows even a person without much knowledge on the system to be able to use it without issues. `,
  },
  {
    id: 2,
    logo: google,
    author: 'By Amelia McKenna, Senior Accountant, Google',
    quote: `Seamless data transition and easy to use. Great for startups. SU Online will provide all the solutions you need as a startup. It's easy to use and can be leveraged for work-from-home/remote work. Training is very quick for an accounting/finance professional with exposure to other software. `,
  },
  {
    id: 3,
    logo: paypal,
    author: 'By Flint Huxley, M&A Integrations, Paypal',
    quote: `With Startup Online, we can have all of our financials in one service. It is easy to create and monitor various accounts. Tracking expenses is a breeze, too, as you can easily print out reports and statements for any account on Startup Online. `,
  },
  {
    id: 4,
    logo: microsoft,
    author: 'By Izabella Lopez, Finance Manager, Microsoft',
    quote: `Startup is a very powerful system; it can do just about everything at an acceptable level. I have yet to come across an accounting need that Startup can't handle for us. `,
  },
  {
    id: 5,
    logo: dribbble,
    author: 'By Axel Ross, Financial Analyst, Dribbble',
    quote: `What I like best about Startup Online is the ease of use, real-time updates, and integration with our organization's financial institutions. I and our finance manager are able to be logged in and co-work on any issues. Over the past year, I have learned so much about Startup Online and its various uses for our organization and highly recommend this resource especially to nonprofits.`,
  },
];

const Testimonials = () => {
  return (
    <Box as="section" id="testimonials" sx={styles.section}>
      <Container>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          tabPosition="bottom"
        >
          {data?.map((item) => (
            <TabPane key={item.id} tab={<Image src={item.logo} alt="logo" />}>
              <Box as="blockquote">
                {item.quote}
                <Text as="span" sx={styles.author}>
                  {item.author}
                </Text>
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [7, null, null, 9, null, 10, 11],
    pb: [9, null, null, 10, 11],
  },
  tabs: {
    border: 0,
    flexDirection: ['column-reverse', null, null, null, null, 'column'],
    '.rc-tabs-nav': {
      mt: [8, null, null, 9, 11],
    },
    '.rc-tabs-nav-wrap': {
      borderTop: `1px solid ${rgba('#01070D', 0.1)}`,
      justifyContent: 'center',
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      // m: ['0 45px'],
    },
    '.rc-tabs-tab-btn': {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
      outline: 0,
      img: {
        outline: 0,
        maxWidth: [50, 65, null, 110, '80%', '100%'],
        m: ['0 auto'],
      },
    },
    '.rc-tabs-nav-list': {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      pt: [4, null, null, 7, 9],
    },
    '.rc-tabs-tabpane': {
      outline: 0,
      blockquote: {
        fontFamily: 'heading',
        fontWeight: 400,
        fontSize: [2, null, null, 3, 4, 6],
        lineHeight: [1.87, null, null, 2.08],
        position: 'relative',
        maxWidth: 846,
        margin: '0px auto',
        pt: ['12px', null, null, '17px', '13px'],
        pl: [35, 35, 35, 10, 11],
        ':before': {
          background: `url(${quote}) no-repeat`,
          content: `''`,
          position: 'absolute',
          width: 128,
          height: 43,
          left: ['-31px', null, null, '-16px', '-7px', 0],
          top: ['1px', '1px', '1px', 0],
          backgroundSize: ['75%', null, null, '100%'],
        },
      },
      span: {
        color: '#7E8896',
        fontFamily: 'body',
        display: 'flex',
        fontWeight: 500,
        fontSize: [0, 1, 1, 2],
        lineHeight: 2.5,
        mt: [1, null, null, 3],
      },
    },
    '.rc-tabs-ink-bar': {
      top: 0,
      height: 2,
      backgroundColor: '#A17857',
      borderRadius: 5,
    },
  },
};
