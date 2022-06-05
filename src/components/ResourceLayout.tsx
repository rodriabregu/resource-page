import {
  Box,
  Text,
  Center,
  Flex,
  Link,
  Tag,
  useColorMode,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

interface ResourceData {
  name: string;
  link: string;
}

const ResourceLayout = ({
  title,
  data,
}: {
  title: string;
  data: ResourceData[];
}) => {
  const { colorMode } = useColorMode();
  const settingColor = colorMode === 'light' ? 'rgba(25,0,0,0.1)' : '#27272a';
  return (
    <Box
      m={'2'}
      ml={{ base: '0', md: '2' }}
      mr={{ base: '0', md: '2' }}
      p={'2'}
      bg={settingColor}
      borderRadius={'4'}
      w={'100'}
      id={title}
    >
      <Center>
        <Tag>{title}</Tag>
      </Center>
      <Flex m={'2'} flexDir={'column'}>
        {data.map((item, index) => (
          <Box key={index}>
            <Link href={item.link} target={'_blank'}>
              <Text
                m={'1'}
                borderRadius={'4'}
                noOfLines={1}
                w={{ base: '100%', md: '80' }}
                _hover={{
                  backgroundColor:
                    colorMode === 'light' ? '#DBDBDB' : 'rgba(5,0,0,0.1)',
                }}
              >
                <LinkIcon /> {item.name}
              </Text>
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ResourceLayout;
