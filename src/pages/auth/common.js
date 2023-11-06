import { Link, Typography, Stack } from '@mui/material';
import { AssetUtils } from "../../utils/assets.utils"

export const AuthHeader = () => (
  <>
    <img src={AssetUtils.brand.blackLogo} alt='brand-logo' height="70px" />
  </>
)

export const AuthFooter = () => (
  <>
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="subtitle2" component={Link} href="https://berrydashboard.io" target="_blank" underline="hover">
        berrydashboard.io
      </Typography>
      <Typography variant="subtitle2" component={Link} href="https://codedthemes.com" target="_blank" underline="hover">
        &copy; codedthemes.com
      </Typography>
    </Stack>
  </>
);
