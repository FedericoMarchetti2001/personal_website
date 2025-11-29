import { useMDXComponent } from 'next-contentlayer/hooks';
import {
  Box,
  Heading,
  Text,
  Link,
  Code,
  ListItem,
  Image,
  Divider,
  UnorderedList,
  OrderedList,
} from '@chakra-ui/react';
import { MotionBox } from '@/components/motion/MotionBox';

const CustomComponents = {
  h1: (props: any) => { return <Heading as="h1" size="2xl" my={4} {...props} /> },
  h2: (props: any) => { return <Heading as="h2" size="xl" my={4} {...props} /> },
  h3: (props: any) => { return <Heading as="h3" size="lg" my={4} {...props} /> },
  h4: (props: any) => { return <Heading as="h4" size="md" my={4} {...props} /> },
  p: (props: any) => { return <Text my={3} fontSize="lg" lineHeight="tall" {...props} /> },
  a: (props: any) => { return <Link color="brand.primary.500" {...props} /> },
  ul: (props: any) => { return <UnorderedList pl={5} my={3} {...props} /> },
  ol: (props: any) => { return <OrderedList pl={5} my={3} {...props} /> },
  li: (props: any) => { return <ListItem {...props} /> },
  blockquote: (props: any) => {
    return (
        <Box as="blockquote" p={3} my={4} borderLeft="4px solid" borderColor="brand.secondary.400" bg="gray.700" color="white" {...props} />
    )
  },
  img: (props: any) => { return <Image my={4} borderRadius="md" alt={props.alt || ''} {...props} /> },
  hr: (props: any) => { return <Divider my={8} {...props} /> },
  pre: (props: any) => { return <Box as="pre" my={4} p={4} borderRadius="md" overflowX="auto" bg="gray.800" color="white" {...props} /> },
  code: (props: any) => { return <Code fontSize="md" {...props} /> },
  // Custom components for animation examples
  MotionBox,
};

interface MdxRendererProps {
  code: string;
}

export const MdxRenderer: React.FC<MdxRendererProps> = ({ code }) => {
  const Component = useMDXComponent(code);
  return <Component components={CustomComponents} />;
};