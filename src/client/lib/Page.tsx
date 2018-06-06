import { Component } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { match } from 'react-router-dom'
export interface PageProps<Params> extends RouteConfigComponentProps<Params> {

}

export class Page<Params = {}, P = {}, S = {}, SS = {}> extends Component<P & PageProps<Params>, S, SS> {}
