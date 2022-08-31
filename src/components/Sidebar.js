import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

const Sidebar = ({ mode, setMode }) => {
  const navList = [
    {
      id: 1,
      name: "Homepage",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      name: "Pages",
      icon: <AutoStoriesIcon />,
    },
    {
      id: 3,
      name: "Groups",
      icon: <PeopleIcon />,
    },
    {
      id: 4,
      name: "Marketplace",
      icon: <StorefrontIcon />,
    },
    {
      id: 5,
      name: "Friends",
      icon: <PersonIcon />,
    },
    {
      id: 6,
      name: "Setting",
      icon: <SettingsSuggestIcon />,
    },
    {
      id: 7,
      name: "Profile",
      icon: <AccountBoxIcon />,
    },
  ];
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <List>
          {navList.map((item) => (
            <ListItem disablePadding key={item.id}>
              <ListItemButton component="a" href="/">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <SettingsBrightnessIcon />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

// /* <ListItem disablePadding>
//             <ListItemButton component="a" href="/">
//               <ListItemIcon>
//                 <HomeIcon />
//               </ListItemIcon>
//               <ListItemText primary="Homepage" />
//             </ListItemButton>
//           </ListItem>

//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#home">
//               <ListItemIcon>
//                 <AutoStoriesIcon />
//               </ListItemIcon>
//               <ListItemText primary="Pages" />
//             </ListItemButton>
//           </ListItem>

//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#home">
//               <ListItemIcon>
//                 <PeopleIcon />
//               </ListItemIcon>
//               <ListItemText primary="Groups" />
//             </ListItemButton>
//           </ListItem>

//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#home">
//               <ListItemIcon>
//                 <StorefrontIcon />
//               </ListItemIcon>
//               <ListItemText primary="Marketplace" />
//             </ListItemButton>
//           </ListItem>

//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#home">
//               <ListItemIcon>
//                 <PersonIcon />
//               </ListItemIcon>
//               <ListItemText primary="Friends" />
//             </ListItemButton>
//           </ListItem>

//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#home">
//               <ListItemIcon>
//                 <SettingsSuggestIcon />
//               </ListItemIcon>
//               <ListItemText primary="Setting" />
//             </ListItemButton>
//           </ListItem>

//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#home">
//               <ListItemIcon>
//                 <AccountBoxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Profile" />
//             </ListItemButton>
//           </ListItem>

//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#home">
//               <ListItemIcon>
//                 <SettingsBrightnessIcon />
//               </ListItemIcon>
//               <Switch
//                 onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
//               />
//             </ListItemButton>
//           </ListItem>
