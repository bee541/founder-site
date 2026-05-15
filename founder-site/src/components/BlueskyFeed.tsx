import { BskyAgent } from '@atproto/api';

interface BlueskyPost {
  text: string;
  createdAt: string;
  uri: string;
}

async function getBlueskyPosts(): Promise<BlueskyPost[]> {
  try {
    // TODO: Set your Bluesky handle here
    const handle = 'lisanne.bsky.social';
    const agent = new BskyAgent({
      service: 'https://bsky.social',
    });

    // For public posts, no auth needed. For higher rate limits, use an app password.
    // To use auth: await agent.login({ identifier: handle, password: process.env.BLUESKY_APP_PASSWORD });

    const { data: profile } = await agent.getProfile({ actor: handle });

    const { data: feed } = await agent.getAuthorFeed({
      actor: profile.did,
      limit: 5,
    });

    return feed.feed
      .filter((item) => item.reason === null)
      .map((item) => ({
        text: (item.post.record as { text: string }).text,
        createdAt: (item.post.record as { createdAt: string }).createdAt,
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
      <div className="text-gray-500 dark:text-gray-500 italic">
        No recent posts found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post, i) => (
        <article key={i} className="border-b border-gray-200 dark:border-[#A78BFA]/10 pb-6 last:border-0">
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {post.text}
          </p>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-500">
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
