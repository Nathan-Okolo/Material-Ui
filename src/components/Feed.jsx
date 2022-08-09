import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";
import foods from "../database";

function createPost(food) {
  return (
    <Post
      key={food.id}
      logo={food.logo}
      imageUrl={food.imageUrl}
      title={food.title}
      date={food.date}
      avaterLogo={food.avaterLogo}
      imgName={food.imgName}
      cardContent={food.cardContent}
      paragraph1={food.paragraph1}
      paragraph2={food.paragraph2}
      paragraph3={food.paragraph3}
      paragraph4={food.paragraph4}
    />
  );
}

const Feed = () => {
  return (
    <Box bgcolor p={2} flex={4}>
      {foods.map(createPost)}
    </Box>
  );
};

export default Feed;
