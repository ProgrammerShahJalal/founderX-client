import { Button } from "@nextui-org/button";
import Container from "../../UI/Container";
import Link from "next/link";
import { getRecentPosts } from "@/src/services/RecentPosts";

const RecentPosts = async () => {
  const { data: posts } = await getRecentPosts();
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recent Posts</h2>
        <p className="text-center">Check out our latest articles</p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {posts?.map((post) => (
          <p>{post.title}</p>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          className="rounded-md bg-default-900 text-default mb-3"
          size="md"
        >
          <Link href={"found-items"}>See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPosts;
