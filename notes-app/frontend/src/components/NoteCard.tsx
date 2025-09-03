import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils.ts";
import api from "../lib/axios.ts";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }: any) => {
  const handleDelete = async (e: any, id: string) => {
    e.preventDefault();

    console.log(id);

    if (!window.confirm("Are you sure to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);

      setNotes((prev: any) => prev.filter((note: any) => note._id !== id));

      toast.success("Note deleted successfully");
    } catch (error: any) {
      console.log("Error in handleDelete", error);

      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-xl transition-all duration-200 border-solid border-t-2 border-[#605DFF] "
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(note.createdAt)}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button className="btn btn-ghost btn-xs text-error">
              <Trash2Icon
                className="size-4"
                onClick={(e) => handleDelete(e, note._id)}
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
