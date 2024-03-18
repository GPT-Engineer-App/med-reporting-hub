import React from "react";
import { Box, Flex, Text, Input, Icon, VStack, HStack, Heading, Grid, Button } from "@chakra-ui/react";
import { FaPlus, FaHome, FaCog, FaBell, FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" h="100vh">
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" h="5vh" bg="cyan.400" px={4}>
        <Text fontSize="36px" fontWeight="bold" color="white">
          SMARTLIBRARY
        </Text>
        <Flex align="center">
          <Input placeholder="Search..." w="15%" h="70%" rounded="md" mr={4} />
          <Icon as={FaPlus} color="cyan.400" w={8} h={8} />
        </Flex>
      </Flex>

      <Flex h="95vh">
        {/* Left Sidebar */}
        <VStack as="aside" w="10%" h="full" bg="cyan.400" align="center" justify="center" spacing={8}>
          <Icon as={FaHome} color="white" w={6} h={6} />
          <Icon as={FaCog} color="white" w={6} h={6} />
          <Icon as={FaBell} color="white" w={6} h={6} />
          <Icon as={FaBars} color="white" w={6} h={6} />
        </VStack>

        {/* Main Content */}
        <Flex as="main" w="90%" h="full" bg="blue.50">
          {/* Left Column */}
          <VStack w="25%" p={4} spacing={4}>
            <VStack align="stretch" spacing={2}>
              <Heading size="md">Radiology Reporting</Heading>
              <HStack spacing={2}>
                <Box borderWidth={1} borderColor="blue.200" p={2}>
                  CT Stroke
                </Box>
                <Box borderWidth={1} borderColor="blue.200" p={2}>
                  MRI Headache
                </Box>
              </HStack>
            </VStack>
            <VStack align="stretch" spacing={2}>
              <Heading size="md">Pathology Cancer Reporting</Heading>
              <HStack spacing={2}>
                <Box borderWidth={1} borderColor="blue.200" p={2}>
                  Breast Cancer
                </Box>
                <Box borderWidth={1} borderColor="blue.200" p={2}>
                  Lung Cancer
                </Box>
              </HStack>
            </VStack>
          </VStack>

          {/* Right Column */}
          <Grid w="75%" p={4} templateColumns="repeat(2, 1fr)" gap={4}>
            <Box>
              <Heading size="sm">NEURORADIOLOGY</Heading>
              <Text>CT Brain Tumor</Text>
              <Text>MRI Spine</Text>
              <Button size="sm" colorScheme="blue" alignSelf="flex-end" mt={2}>
                &gt; OPEN
              </Button>
            </Box>
            <Box>
              <Heading size="sm">ONCOLOGY</Heading>
              <Text>CT Pancreatic Cancer</Text>
              <Button size="sm" colorScheme="blue" alignSelf="flex-end" mt={2}>
                &gt; OPEN
              </Button>
            </Box>
            <Box>
              <Heading size="sm">MSK</Heading>
              <Text>MRI Knee</Text>
              <Text>CT Ankle Fracture</Text>
              <Button size="sm" colorScheme="blue" alignSelf="flex-end" mt={2}>
                &gt; OPEN
              </Button>
            </Box>
            <Box>
              <Heading size="sm">CARDIOVASCULAR</Heading>
              <Text>CT Coronary Angiogram</Text>
              <Button size="sm" colorScheme="blue" alignSelf="flex-end" mt={2}>
                &gt; OPEN
              </Button>
            </Box>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
