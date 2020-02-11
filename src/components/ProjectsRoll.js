import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Features from './Features'

class ProjectsRoll extends React.Component {
  render() {
    const { data } = this.props
    console.log('DATA', data);
    const { frontmatter } = data.markdownRemark

    return (
      <div className="columns is-multiline">
        <Features gridItems={frontmatter.intro.blurbs} />
      </div>
    )
  }
}

ProjectsRoll.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectsRollQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "project-page" } }) {
          frontmatter {
            intro {
              blurbs {
                image {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                title
                url
                date
                category
                text
              }
              heading
              description
            }
          }
        }
      }
    `}
    render={(data, count) => <ProjectsRoll data={data} count={count} />}
  />
)
