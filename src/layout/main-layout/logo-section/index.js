import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonBase } from '@mui/material';

import config from '../../../config';
import { openMenu } from '../../../redux/reducers/customization.reducer';
import { AssetUtils } from '../../../utils/assets.utils';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch(openMenu({ id: defaultId }))} component={Link} to={config.defaultPath}>
      <center>
        <img src={AssetUtils.brand.blackLogo} alt='brand-logo' width="130px"  />
      </center>
      
    </ButtonBase>
  );
};

export default LogoSection;
