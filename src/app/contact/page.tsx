'use client';

import { useState } from 'react';
import { Box, Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast, useColorMode } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { fadeIn, slideUp } from '@/components/motion/variants';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { colorMode } = useColorMode();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: 'Thank you for reaching out. I\'ll get back to you soon.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or email me directly.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <Box minH="100vh" pt={24} pb={12}>
        <Container maxW="container.md">
          <MotionVStack
            spacing={12}
            align="stretch"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <VStack spacing={4} textAlign="center">
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontFamily="heading"
                bgGradient="linear(to-r, primary.500, accent.500)"
                bgClip="text"
              >
                Get In Touch
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.500"
                maxW="2xl"
              >
                Have a project in mind or just want to say hi? I'd love to hear from you!
              </Text>
            </VStack>

            {/* Contact Form */}
            <MotionBox
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              p={8}
              bg={colorMode === 'dark' ? 'whiteAlpha.50' : 'white'}
              borderRadius="xl"
              borderWidth="1px"
              borderColor={colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100'}
              variants={slideUp}
            >
              <VStack spacing={6}>
                {/* Name Field */}
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register('name')}
                    size="lg"
                    focusBorderColor="primary.500"
                  />
                  {errors.name && (
                    <Text color="red.500" fontSize="sm" mt={1}>
                      {errors.name.message}
                    </Text>
                  )}
                </FormControl>

                {/* Email Field */}
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register('email')}
                    size="lg"
                    focusBorderColor="primary.500"
                  />
                  {errors.email && (
                    <Text color="red.500" fontSize="sm" mt={1}>
                      {errors.email.message}
                    </Text>
                  )}
                </FormControl>

                {/* Message Field */}
                <FormControl isInvalid={!!errors.message}>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    {...register('message')}
                    size="lg"
                    rows={6}
                    focusBorderColor="primary.500"
                  />
                  {errors.message && (
                    <Text color="red.500" fontSize="sm" mt={1}>
                      {errors.message.message}
                    </Text>
                  )}
                </FormControl>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  w="full"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                >
                  Send Message
                </Button>
              </VStack>
            </MotionBox>

            {/* Alternative Contact Info */}
            <Box textAlign="center">
              <Text fontSize="sm" color="gray.500">
                Or email me directly at{' '}
                <Text
                  as="a"
                  href="mailto:federico.marchetti@example.com"
                  color="primary.500"
                  fontWeight="semibold"
                  _hover={{ textDecoration: 'underline' }}
                >
                  federico.marchetti@example.com
                </Text>
              </Text>
            </Box>
          </MotionVStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
