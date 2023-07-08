import { Button, Flex, Heading, Image, Text, Stack, useBreakpointValue, Box, Link } from '@chakra-ui/react';

import { signIn, signUp, requireNextAuth } from '@roq/nextjs';

import Head from 'next/head';
import { HelpBox } from 'components/help-box';

function HomePage() {
  return (
    <>
      <Head>
        <title>{`ajaykedar`}</title>

        <meta
          name="description"
          content="अजयकेदार - मानव संसाधन प्रक्रियाओं को सुव्यवस्थित करने और कर्मचारी अनुभव को बेहतर बनाने का आपका साझेदार। केंद्रीकृत डेटा प्रबंधन, समय ट्रैकिंग, प्रदर्शन मूल्यांकन और सहभागिता उपकरण के साथ, हम उत्पादकता और संगठनात्मक सफलता को बढ़ावा देते हैं।"
        />
      </Head>

      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack position="relative" spacing={6} w={'full'} maxW={'lg'}>
            <HelpBox />
            <Image src="/roq.svg" alt="Logo" w="150px" mb="8" />
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text as={'span'}>Explore</Text>{' '}
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'cyan.400',
                  zIndex: -1,
                }}
              >
                {`ajaykedar`}
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              {`अजयकेदार - मानव संसाधन प्रक्रियाओं को सुव्यवस्थित करने और कर्मचारी अनुभव को बेहतर बनाने का आपका साझेदार। केंद्रीकृत डेटा प्रबंधन, समय ट्रैकिंग, प्रदर्शन मूल्यांकन और सहभागिता उपकरण के साथ, हम उत्पादकता और संगठनात्मक सफलता को बढ़ावा देते हैं।`}
            </Text>
            <Stack direction="column" spacing={4} className="roles-container">
              <Stack className="owner-roles-container" direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  rounded={'full'}
                  bg={'cyan.500'}
                  color={'white'}
                  _hover={{
                    bg: 'cyan.700',
                  }}
                  onClick={() => signUp('business-owner')}
                >
                  Create Account
                </Button>
                <Button rounded={'full'} onClick={() => signIn('business-owner')}>
                  Login
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Flex>
        <Flex position="relative" flex={1}>
          <Image
            src={
              'https://images.unsplash.com/photo-1543286386-2e659306cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjA3NjB8MHwxfHNlYXJjaHwxfHxodW1hbiUyMHJlc291cmNlcyUyQ3Byb2R1Y3Rpdml0eXxlbnwwfHx8fDE2ODg4MjIyNzF8MA&ixlib=rb-4.0.3&q=80&w=1080'
            }
            alt={'Login Image'}
            objectFit={'cover'}
          />
          <Box position="absolute" top="0" backgroundColor="rgba(0,0,0,0.6)" width="100%" py="2">
            <Text align="center" fontSize="sm" color="white">
              Photo by{' '}
              <Link
                href="https://unsplash.com/@isaacmsmith?utm_source=roq-generator&utm_medium=referral"
                isExternal
                color="teal.200"
              >{`Isaac Smith`}</Link>{' '}
              on{' '}
              <Link
                href="https://unsplash.com/?utm_source=roq-generator&utm_medium=referral"
                isExternal
                color="teal.200"
              >
                Unsplash
              </Link>
            </Text>
          </Box>
        </Flex>
      </Stack>
    </>
  );
}

export default requireNextAuth({
  redirectIfAuthenticated: true,
  redirectTo: '/users',
})(HomePage);
