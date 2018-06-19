declare module 'react-imported-component' {
  import {
    ComponentClass,
    ComponentType,
    PureComponent,
    ReactNode,
    StatelessComponent,
  } from 'react'

  interface DefaultImportedComponent<P> {
    default: ComponentType<P>
  }

  type DefaultComponent<P> = ComponentType<P> | DefaultImportedComponent<P>

  interface LoadableComponentState {
    state: 'loading' | 'done' | 'error'
    AsyncComponent: any
  }

  interface ComponentOptions<P> {
    LoadingComponent?: ComponentType<any>
    ErrorComponent?: ComponentType<any>
    exportPicker?(a: any): any
    onError?(a: any): any
    render?: (
      component: ComponentType<P>,
      state: LoadableComponentState,
      props: P,
    ) => ReactNode
  }

  type HOC = <P>(
    loader: () => Promise<DefaultComponent<P>>,
    options?: ComponentOptions<P>,
  ) => ComponentType<P>

  const importedComponent: HOC

  interface ImportedComponents {
    [index: number]: () => Promise<DefaultComponent<any>>
  }

  export default importedComponent

  export function printDrainHydrateMarks(): string
  export function drainHydrateMarks(): string[]
  export function rehydrateMarks(marks?: string[]): Promise<void>
  export function whenComponentsReady(): Promise<void>
  export function dryRender(renderFunction: () => any): Promise<void>
  export function assignImportedComponents(
    importedComponents: ImportedComponents,
  ): void
}
