import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";

import api from "../lib/axios.ts";
import { LoaderIcon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);

        setNote(res.data);

        console.log(res.data);
      } catch (error: any) {
        console.log("Error in NoteDetailPage", error);
        toast.error("Failed to fetch the note");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div>
      <p>NOTE</p>
    </div>
  );
};

export default NoteDetailPage;
