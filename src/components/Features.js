import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <h3>{item.title}</h3>
          {item.image ?
            <div className="has-text-centered">
              <div
                style={{
                  width: '240px',
                  height: '160px',
                  display: 'inline-block',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
          : null}
          <p>{item.text}</p>
          <ul>
            <li>
              <b>URL</b>: <a href={item.url} target="_blank">{item.url}</a>
            </li>
            <li>
              <b>Date</b>: {item.date}
            </li>
            <li>
              <b>Category</b>: {item.category}
            </li>
          </ul>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
