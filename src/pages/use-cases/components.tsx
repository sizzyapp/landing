import { Box, Text } from '@chakra-ui/react';
import * as L from 'layout-styled-components';
import NextLink from 'next/link';
import React from 'react';

export const UseCaseCard = ({ post }) => {
  return (
    <NextLink href={`/use-cases/${post.slug}`}>
      <Box
        borderRadius={4}
        cursor="pointer"
        shadow="sm"
        transition="all 100ms linear"
        bg="rgba(0,0,0,0.05)"
        _hover={{
          shadow: 'lg',
          bg: 'rgba(0,0,0,0.05)',
        }}
        p={3}
      >
        <L.Vertical spacing={5}>
          <Text fontWeight="bold" fontSize={18}>
            {post.title}
          </Text>
          <Text fontSize={15} color="gray.600">
            {post.description}
          </Text>
        </L.Vertical>
      </Box>
    </NextLink>
  );
};
