import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircleIcon from '@mui/icons-material/Circle';
import Stack from '@mui/material/Stack';
export default function ProjectStatus() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      padding={"8px 12px 8px 12px"}
      borderRadius={"8px"}
      sx={{bgcolor:"customGray.main"}}
      dir="rtl"
    >
      <Grid item direction="column" display="flex" alignItems="flex-start">
        <Grid>
            <Typography fontSize={"11px"} color={"customGray.lightText"}>وضعیت پروژه</Typography>
        </Grid>
        <Grid item container direction="row">
            <Stack justifyContent="center" alignItems="center">
                <CircleIcon sx={{color:"statusColor.veryGood",fontSize:"medium",paddingLeft:"10px"}}/>
            </Stack> 
            <Typography fontSize={"13px"}  color={"customGray.darkText"}>نیازمند بازبینی</Typography>
        </Grid>
      </Grid>
      <Grid item direction="column" display="flex" alignItems="flex-start">
        <Grid item>
        <Typography fontSize={"11px"}  color={"customGray.lightText"}>تاریخ ثبت گزارش</Typography>
        </Grid>
        <Grid item>        
            <Typography fontSize={"13px"} color={"customGray.darkText"}>۱۴۰۳/۰۳/۰۴</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
