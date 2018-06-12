import { React, RouteConfigComponentProps, match } from '@lib'

export interface PageProps<Params> extends RouteConfigComponentProps<Params> { }

/**
 * Cria uma página
 */
export class Page<
  Params = {}, Props = {}, State = {}, SS = {}
  > extends React.Component<Props & PageProps<Params>, State, SS> { }
