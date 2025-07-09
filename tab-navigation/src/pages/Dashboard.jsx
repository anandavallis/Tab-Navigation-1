import { Tabs, Tab, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ProfileTab from "./ProfileTab";
import SettingsTab from "./SettingsTab";
import ActivityTab from "./ActivityTab";

const Dashboard = () => {
  const navigate = useNavigate();
  const { tabName } = useParams();

  const handleChange = (event, newValue) => {
    navigate(`/dashboard/${newValue}`);
  };

  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      <Tabs value={tabName} onChange={handleChange}>
        <Tab label="Profile" value="profile" />
        <Tab label="Settings" value="settings" />
        <Tab label="Activity" value="activity" />
      </Tabs>

      <Box sx={{ marginTop: "20px" }}>
        {tabName === "profile" && <ProfileTab />}
        {tabName === "settings" && <SettingsTab />}
        {tabName === "activity" && <ActivityTab />}
      </Box>
    </Box>
  );
};

export default Dashboard;
