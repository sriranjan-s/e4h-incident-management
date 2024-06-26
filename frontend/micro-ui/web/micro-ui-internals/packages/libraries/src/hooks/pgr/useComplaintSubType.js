import React, { useEffect, useState } from "react";

const useComplaintSubType = (complaintType, t) => {
  const [subTypeMenu, setSubTypeMenu] = useState([]);

  useEffect(() => {
    (async () => {
      if (complaintType) {
        console.log("Digit.ULBService.getCurrentTenantId()")
        const menu = await Digit.GetServiceDefinitions.getSubMenu(Digit.ULBService.getCurrentTenantId(), complaintType, t);
        setSubTypeMenu(menu);
      }
    })();
  }, [complaintType]);

  return subTypeMenu;
};

export default useComplaintSubType;
