import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUi";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );

        console.log(res.data);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUi />}
    </div>
  );
};

export default HomePage;
