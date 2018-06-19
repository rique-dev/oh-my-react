import { PageProps, React } from '@lib'
import { Params } from '.'

export default (props: PageProps<Params>) => <div>{props.match.params.id}</div>
