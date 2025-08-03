import { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUi";
import NoteCard from "../components/NoteCard";
import axiosInstance from "../lib/axios";

type Notes = { title: string; id: number };

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState<Notes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axiosInstance.get("");

        setNotes(res.data.slice(0, 3));

        setIsRateLimited(false);

        console.log(res.data.slice(0, 3));
      } catch (error) {
        console.log("Error fetching notes");

        if (error instanceof Error) {
          console.log(error.message);
        }
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
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {isLoading && (
          <div className="text-center text-primary py-10">LOADING NOTES...</div>
        )}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note, index) => (
              <NoteCard key={index} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
