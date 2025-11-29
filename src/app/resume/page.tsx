'use client';

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Badge, Divider, Icon, Button, Link as ChakraLink } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getResumeData } from '@/lib/resume';

export default function ResumePage() {
  const resume = getResumeData();

  return (
    <>
      <Navbar />
      <Box minH="100vh" pt={24} pb={12}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            {/* Header */}
            <VStack spacing={6} textAlign="center">
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontFamily="heading"
                bgGradient="linear(to-r, primary.500, accent.500)"
                bgClip="text"
              >
                {resume.name}
              </Heading>
              <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" color="gray.500">
                {resume.title}
              </Text>
              
              {/* Contact Links */}
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <ChakraLink href={resume.links.github} isExternal>
                  <Button leftIcon={<Icon as={FaGithub} />} variant="ghost" size="sm">
                    GitHub
                  </Button>
                </ChakraLink>
                <ChakraLink href={resume.links.linkedin} isExternal>
                  <Button leftIcon={<Icon as={FaLinkedin} />} variant="ghost" size="sm">
                    LinkedIn
                  </Button>
                </ChakraLink>
                <ChakraLink href={`mailto:${resume.links.email}`}>
                  <Button leftIcon={<Icon as={FaEnvelope} />} variant="ghost" size="sm">
                    Email
                  </Button>
                </ChakraLink>
                <Button
                  as="a"
                  href="/Federico_Marchetti_Resume.pdf"
                  download
                  leftIcon={<Icon as={FaDownload} />}
                  variant="primary"
                  size="sm"
                >
                  Download PDF
                </Button>
              </HStack>
            </VStack>

            {/* Summary */}
            <Box>
              <Heading as="h2" size="lg" mb={4} fontFamily="heading">
                Summary
              </Heading>
              <Text fontSize="md" color="gray.400" lineHeight="tall">
                {resume.summary}
              </Text>
            </Box>

            <Divider />

            {/* Two Column Layout for Desktop */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
              {/* Left Column */}
              <VStack spacing={8} align="stretch">
                {/* Experience */}
                <Box>
                  <Heading as="h2" size="lg" mb={6} fontFamily="heading">
                    Experience
                  </Heading>
                  <VStack spacing={6} align="stretch">
                    {resume.experience.map((exp, index) => (
                      <Box
                        key={index}
                        p={6}
                        bg="whiteAlpha.50"
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="whiteAlpha.100"
                      >
                        <VStack align="start" spacing={3}>
                          <Heading as="h3" size="md" fontFamily="heading">
                            {exp.title}
                          </Heading>
                          <Text fontWeight="semibold" color="primary.400">
                            {exp.company} • {exp.location}
                          </Text>
                          <Text fontSize="sm" color="gray.500">
                            {exp.period}
                          </Text>
                          <VStack align="start" spacing={2} pl={4}>
                            {exp.description.map((item, i) => (
                              <Text key={i} fontSize="sm" color="gray.400">
                                • {item}
                              </Text>
                            ))}
                          </VStack>
                          <HStack wrap="wrap" spacing={2} pt={2}>
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                colorScheme="teal"
                                fontSize="xs"
                                px={2}
                                py={1}
                                borderRadius="md"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </HStack>
                        </VStack>
                      </Box>
                    ))}
                  </VStack>
                </Box>

                {/* Education */}
                <Box>
                  <Heading as="h2" size="lg" mb={6} fontFamily="heading">
                    Education
                  </Heading>
                  <VStack spacing={4} align="stretch">
                    {resume.education.map((edu, index) => (
                      <Box
                        key={index}
                        p={6}
                        bg="whiteAlpha.50"
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="whiteAlpha.100"
                      >
                        <VStack align="start" spacing={2}>
                          <Heading as="h3" size="sm" fontFamily="heading">
                            {edu.degree}
                          </Heading>
                          <Text fontWeight="semibold" color="primary.400">
                            {edu.institution}
                          </Text>
                          <Text fontSize="sm" color="gray.500">
                            {edu.location} • {edu.period}
                          </Text>
                          {edu.description && (
                            <Text fontSize="sm" color="gray.400">
                              {edu.description}
                            </Text>
                          )}
                        </VStack>
                      </Box>
                    ))}
                  </VStack>
                </Box>
              </VStack>

              {/* Right Column */}
              <VStack spacing={8} align="stretch">
                {/* Skills */}
                <Box>
                  <Heading as="h2" size="lg" mb={6} fontFamily="heading">
                    Skills
                  </Heading>
                  <VStack spacing={4} align="stretch">
                    {resume.skills.map((skillCategory) => (
                      <Box key={skillCategory.category}>
                        <Heading as="h3" size="sm" mb={3} color="primary.400">
                          {skillCategory.category}
                        </Heading>
                        <HStack wrap="wrap" spacing={2}>
                          {skillCategory.items.map((skill) => (
                            <Badge
                              key={skill}
                              colorScheme="purple"
                              fontSize="xs"
                              px={2}
                              py={1}
                              borderRadius="md"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </HStack>
                      </Box>
                    ))}
                  </VStack>
                </Box>

                {/* Certifications */}
                <Box>
                  <Heading as="h2" size="lg" mb={6} fontFamily="heading">
                    Certifications
                  </Heading>
                  <VStack spacing={4} align="stretch">
                    {resume.certifications.map((cert, index) => (
                      <Box
                        key={index}
                        p={4}
                        bg="whiteAlpha.50"
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="whiteAlpha.100"
                      >
                        <VStack align="start" spacing={2}>
                          <HStack justify="space-between" w="full">
                            <Heading as="h3" size="sm" fontFamily="heading">
                              {cert.name}
                            </Heading>
                            {cert.credentialUrl && (
                              <ChakraLink href={cert.credentialUrl} isExternal>
                                <Icon as={FaExternalLinkAlt} boxSize={4} color="primary.400" />
                              </ChakraLink>
                            )}
                          </HStack>
                          <Text fontSize="sm" color="gray.400">
                            {cert.issuer}
                          </Text>
                          <Text fontSize="xs" color="gray.500">
                            {cert.date}
                          </Text>
                        </VStack>
                      </Box>
                    ))}
                  </VStack>
                </Box>

                {/* Languages */}
                <Box>
                  <Heading as="h2" size="lg" mb={6} fontFamily="heading">
                    Languages
                  </Heading>
                  <SimpleGrid columns={2} spacing={4}>
                    {resume.languages.map((lang) => (
                      <Box
                        key={lang.name}
                        p={4}
                        bg="whiteAlpha.50"
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="whiteAlpha.100"
                        textAlign="center"
                      >
                        <Text fontWeight="semibold">{lang.name}</Text>
                        <Text fontSize="sm" color="gray.400">
                          {lang.proficiency}
                        </Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
