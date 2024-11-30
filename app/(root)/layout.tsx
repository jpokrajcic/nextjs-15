import React, {ReactNode} from "react";

import DesktopNavbar from "@/components/navigation/navbar/DesktopNavbar";

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
      <DesktopNavbar />
      {children}
    </main>
  );
};

export default RootLayout;
