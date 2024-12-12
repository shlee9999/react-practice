type FetchJsonPlaceholderResponse = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export async function fetchJsonPlaceholder(): Promise<FetchJsonPlaceholderResponse> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos/1124124'
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: FetchJsonPlaceholderResponse = await response.json();
  return data;
}
