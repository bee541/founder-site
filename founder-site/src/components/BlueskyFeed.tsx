import { BskyAgent } from '@atproto/api';

interface BlueskyPost {
  text: string;
  createdAt: string;
  uri: string;
}

async function getBlueskyPosts(): Promise<BlueskyPost[]> {
  try {
    const agent = new BskyAgent({
      service: 'https://bsky.social',
    });

    // Use a public read-only approach — no auth needed for public posts
    // In production, you'd use an app password or session
    const handle = 'lisanne.bsky.social'; // TODO: confirm Lisa's Bluesky handle
    const { data: profile } = await agent.getProfile({ actor: handle });

    const { data: feed } = await agent.getAuthorFeed({
      actor: profile.did,
      limit: 5,
    });

    return feed.feed
      .filter((item) => item.reason === null) // only original posts, not reposts
      .map((item) => ({
        text: item.post.record.text,
        createdAt: item.post.record.createdAt,
        uri: item.post.uri,
      }));
  } catch (error) {
    console.error('Failed to fetch Bluesky posts:', error);
    return [];
  }
}

export default async function BlueskyFeed() {
  const posts = await getBlueskyPosts();

  if (posts.length === 0) {
    return (
      <div className="text-zinc-500 dark:text-zinc-400 italic">
        No recent posts found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post, i) => (
        <article key={i} className="border-b border-zinc-200 dark:border-zinc-800 pb-6 last:border-0">
          <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed whitespace-pre-wrap">
            {post.text}
          </p>
          <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
