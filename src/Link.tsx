
    import React from 'react'
    import { Link as ReactLink } from 'react-router-dom'

    export function Link({ href, ...props }) {
      return <ReactLink to={href} {...props} />
    }
  