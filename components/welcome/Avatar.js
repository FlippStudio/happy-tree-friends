import { Avatar, AvatarGroup } from '@mui/material'
import Image from "next/dist/client/image";
import a1 from '../../public/images/avatar/1.jpg'
import a2 from '../../public/images/avatar/2.jpg'
import a3 from '../../public/images/avatar/3.jpg'
import a4 from '../../public/images/avatar/4.jpg'
import a5 from '../../public/images/avatar/5.jpg'
import classes from "../../styles/home/Welcome.module.css";

const users = [
  {
    id: 1,
    name: "Remy Sharp",
    url: a1,
  },
  {
    id: 2,
    name: "Travis Howard",
    url: a2,
  },
  {
    id: 3,
    name: "Cindy Baker",
    url: a3,
  },
  {
    id: 4,
    name: "Agnes Walker",
    url: a4,
  },
  {
    id: 5,
    name: "Trevor Henderson",
    url: a5,
  },
];

const AvatarGr = () => {
  return (
    <AvatarGroup max={5}>
      {users.map((user) => (
        <Avatar alt={user.name} className={classes.avatar} key={user.id}>
          <Image src={user.url} alt={user.name} />
        </Avatar>
      ))}
    </AvatarGroup>
  );
};

export default AvatarGr;
