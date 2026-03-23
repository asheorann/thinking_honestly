import { getSearchableQuestions } from "@/lib/search";
import SearchClient from "./SearchClient";

export default function SearchPage() {
  const questions = getSearchableQuestions();
  return <SearchClient questions={questions} />;
}
