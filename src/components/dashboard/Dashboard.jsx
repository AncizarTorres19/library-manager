import { Grid, Paper } from "@mui/material";
import { DashboardTabs } from "../organisms/DashboardTabs";

const Dashboard = () => {
  return (
    <Grid
      container
      component={Paper}
      elevation={3}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ background: '#2f003f', opacity: '.7', width: '100%', height: 'auto'}}
    >
      <DashboardTabs />
    </Grid>
  )
}
export default Dashboard;
