import React from "react";
import { myData } from "./userProfileData";
import UserInfoComp from "./UserInfo";

function DynamicUserInfoComp() {
  return (
    <>
      {myData.map((myVar) => {
        return (
          <UserInfoComp
            address={myVar.address}
            account={myVar.account}
            risk_appetite={myVar.risk_appetite}
            addr_ip={myVar.addr_ip}
            accountNum={myVar.accountNum_ip}
            risk_app_ip={myVar.risk_app_ip}
          />
        );
      })}
    </>
  );
}

export default DynamicUserInfoComp;
