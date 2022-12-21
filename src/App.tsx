import { type User } from "./types/types";
import DisplayUsers from "./components/DisplayUsers";
function App() {
  const users: User[] = [
    {
      name: "Prisma Fan",
      messages: [
        {
          body: "Prisma rocks!!",
        },
        {
          body: "Did I mention I love Prisma?",
        },
      ],
    },
  ];

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
        {users.map((user, i) => (
          <DisplayUsers user={user} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
