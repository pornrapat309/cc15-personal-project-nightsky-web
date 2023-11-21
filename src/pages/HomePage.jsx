import PostList from "../features/post/PostList";

export default function HomePage() {
  return (
    <div className="max-w-xl mx-auto px-8 py-6 flex flex-col">
      <PostList />
    </div>
  );
}
