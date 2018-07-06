import * as React from 'react'

const Fragment = React.Fragment

type ComponentConstructor<P> =
  | React.ComponentClass<P>
  | React.StatelessComponent<P>
  | React.Component<P>

export { React, Fragment, ComponentConstructor }

export * from './Page'
