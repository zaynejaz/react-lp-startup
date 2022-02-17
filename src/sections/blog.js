/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/images/blog/1.png';
import thumb2 from 'assets/images/blog/2.png';
import thumb3 from 'assets/images/blog/3.png';
import thumb4 from 'assets/images/blog/4.png';

const data = [
  {
    id: 1,
    slug: '#how-to',
    thumbnail: thumb1,
    showDescription: true,
    title: `Make tax time smoother with automations`,
    description: `The busyness and excitement of the holidays can quickly turn into an overwhelming tax season. `,
  },
  {
    id: 2,
    slug: '#how-to',
    thumbnail: null,
    showDescription: false,
    title: `Get Paid Upfront: New invoice financing`,
    description: `More than 60% of small business owners say they’ve experienced cash flow challenges.`,
  },
  {
    id: 3,
    slug: '#how-to',
    thumbnail: thumb3,
    showDescription: false,
    title: `4 reasons why modern business education is the answer`,
    description: `Whether you’re employed or running your own business, succeeding in the business world requires a combination of different skills.`,
  },
  {
    id: 4,
    slug: '#how-to',
    thumbnail: thumb2,
    showDescription: true,
    title: `How to stay secure while embracing hybrid work`,
    description: `If your business supports remote work or thinking about switching to a hybrid model, you need to think about security.`,
  },
  {
    id: 5,
    slug: '#how-to',
    thumbnail: thumb4,
    showDescription: false,
    title: `6 financial lessons small business owners can learn from unexpected industries`,
    description: `Discovering the best ways to handle finances is an ongoing process for any business owner.`,
  },
];

const masonryOptions = { originTop: true };

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Startup Blog"
          description="Powering Your Prosperity – One Post at a Time"
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [8, null, null, 9, null, 11],
    pb: [8, null, null, 9, null, 11],
    position: 'relative',
  },
  heading: {
    mb: [6, 6, 7, 11],
  },
};
