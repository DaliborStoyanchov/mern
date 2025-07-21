import { useState } from "react";

import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUi";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUi />}
    </div>
  );
};

export default HomePage;
