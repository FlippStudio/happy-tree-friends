import Social from "./Social";
import discord from "../public/images/socials/discord.svg";
import twitter from "../public/images/socials/tt.svg";
import instagram from "../public/images/socials/instagram.svg";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const socials = [
  {
    id: 1,
    url: discord
  },
  {
    id: 2,
    url: twitter
  },
  {
    id: 3,
    url: instagram
  },
]

const Socials = ({ c }) => {
  return (
    <Box sx={{ flexGrow: 0 }} className={c}>
      <Stack direction="row" spacing={0}>
        {socials.map((social) => (
          <Social imageUrl={social.url} key={social.id} />
        ))}
      </Stack>
    </Box>
  );
};

export default Socials;