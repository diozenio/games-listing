import { URLSearchParams } from "@/core/domain/types/searchParams";
import { getSearchParams } from "@/core/utils/getSearchParams";
import GamesListPage from "@/ui/pages/games/list";

export default function Home({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const { page, pageSize, query } = getSearchParams(searchParams);
  return <GamesListPage page={page} pageSize={pageSize} query={query} />;
}
