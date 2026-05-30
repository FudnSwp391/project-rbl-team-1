import { TRENDING_POSTS } from '../communityMockData'
import CommunityStreakWidget from './CommunityStreakWidget'
import CommunityStatsGrid from './CommunityStatsGrid'

export default function CommunityLoggedInSidebar() {
  return (
    <aside className="community-aside">
      <CommunityStreakWidget />
      <CommunityStatsGrid />
      <div className="community-trending">
        <h4>Bài viết nổi bật</h4>
        <ul>
          {TRENDING_POSTS.map((title) => (
            <li key={title}>
              <a href="#">{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
