import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';

function Card(property) {
  const { provided, innerRef } = property;

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className="card"
      {...provided.draggableProps}
      //{...provided.dragHandleProps}
      ref={innerRef}
    >
      <Image
        src={property.imageUrl}
        alt={property.imageAlt}
        objectFit="cover"
        boxSize="200px"
      />

      <Box p="2">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        ></Box>
      </Box>
    </Box>
  );
}

export default Card;
