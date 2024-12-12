import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchJsonPlaceholder } from '../apis/fetchJsonPlaceholder';

export default function UseSuspenseQuery() {
  const { data } = useSuspenseQuery({
    queryKey: ['useSuspenseQueryKey'],
    queryFn: fetchJsonPlaceholder,
  });

  return (
    <div>
      <p>data fetched by "useSuspenseQuery" : {JSON.stringify(data)}</p>
    </div>
  );
}
