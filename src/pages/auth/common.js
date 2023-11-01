import { AssetUtils } from "../../utils/assets.utils"

export const AuthHeader = () => {
  
  return (
    <>
      <div className="login-logo">
        <a href="../../index2.html">
          <img src={AssetUtils.brand.blackLogo} alt='brand-logo' height="70px" />
        </a>
      </div>
    </>
  )
}

export const AuthFooter = () => {
  return (
    <>
      <br />
      <br />
      <center>
        <div className="login-footer">
          Copyright © 2023 <a href="https://einfobytes/com">Einfobytes</a>
        </div>
      </center>
    </>
  )
}