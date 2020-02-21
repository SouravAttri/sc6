import React from "react"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import PostCard from "./PostCard"
import FeaturedCard from "./FeaturedCard"

const Sidebar = ({ banners, posts, featured }) => (
  <aside>
    {banners.map(banner => (
      <div key={banner.imageUrl}>
        <OutboundLink href={banner.competitionUrl} target="_blank">
          <img src={banner.imageUrl} alt={banner.alt} />
        </OutboundLink>
      </div>
    ))}
    {posts.map(post => (
      <PostCard key={post.slug} post={post} />
    ))}
    {featured.map(comp => (
      <FeaturedCard key={comp.slug} competition={comp} />
    ))}
  </aside>
)

Sidebar.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      competitionUrl: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default Sidebar
