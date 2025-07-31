import { Link } from "react-router";

const NoteCard = ({ note }) => {
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-2xl transition-all duration-200 border-solid border-t-2 border-[#DB924C] p-4"
    >
      NoteCard
    </Link>
  );
};

export default NoteCard;
