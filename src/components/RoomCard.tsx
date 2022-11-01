import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const RoomCard: React.FC<Props> = (props: Props) => {
  return (
    <Link href="/room/sampleId">
      <Box className="relative cursor-pointer rounded border hover:opacity-80">
        <span className="absolute -right-1 -top-1 z-10 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-available opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full  bg-available"></span>
        </span>
        <Box className="relative h-64 w-64 ">
          <Image className="rounded-t" src="/sample.jpg" fill alt="" />
        </Box>
        <Flex className="h-10 items-center justify-center">
          <Text>大会議室</Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default RoomCard;
