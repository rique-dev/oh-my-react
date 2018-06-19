import { RouteConfigComponentProps } from '@lib'
import { React } from '.'

export interface PageProps<Params> extends RouteConfigComponentProps<Params> {}

/**
 * Cria uma página
 */
export class Page<
  Params = {},
  Props = {},
  State = {},
  SS = {}
> extends React.Component<Props & PageProps<Params>, State, SS> {}
