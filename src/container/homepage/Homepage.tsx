import { Box, Grid } from "@mui/joy";
import { PrimaryBox } from "../../common/box/BoxStyle";
import { HeadingText, Text } from "../../common/text/TextStyle";
import {
  PrimaryButton,
  OutlinedActionButton,
  SecondaryButton,
} from "../../common/button/ButtonStyle";
import { useNavigate } from "react-router";
import { route } from "../../route/route";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      justifyContent={"center"}
      height={"100vh"}
      alignItems={"center"}
    >
      <Grid xs={11} md={6}>
        <PrimaryBox mt={"100px"}>
          <Box p={"40px"}>
            <HeadingText size="sm">Card Title</HeadingText>
            <Text size="md">
              Styling example 
            </Text>
          </Box>
          <hr />
          <Box py={"10px"} px={"40px"} gap={"40px"} display={"flex"}>
            <PrimaryButton>Primary Button</PrimaryButton>
            <OutlinedActionButton>Outlined Button</OutlinedActionButton>
            <SecondaryButton onClick={() => navigate(route.login)}>
              Go To Login
            </SecondaryButton>
          </Box>
        </PrimaryBox>
      </Grid>
    </Grid>
  );
};

export default Homepage;
