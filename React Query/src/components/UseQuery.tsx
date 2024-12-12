import { useQuery } from '@tanstack/react-query';
import { fetchJsonPlaceholder } from '../apis/fetchJsonPlaceholder';

export default function UseQuery() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['useQueryKey'],
    queryFn: fetchJsonPlaceholder,
  });

  if (isPending) return <div>isPending...</div>;
  if (isError) return <div>Error fetching data with useQuery!</div>;
  return (
    <div>
      <p>data fetched by "useQuery" : {JSON.stringify(data)}</p>
    </div>
  );
}
