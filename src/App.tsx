import { useQuery } from "urql";
import { GetUsersDocument } from "./graphql/generated";

import DisplayUsers from "./components/DisplayUsers";

function App() {
  const [results] = useQuery({
    query: GetUsersDocument,
  });

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
        {results?.data?.users.map((user, i) => (
          <DisplayUsers user={user} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
