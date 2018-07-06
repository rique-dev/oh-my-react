import { RootState } from '@state/index'

import {
  connect as originalConnect,
  MapDispatchToPropsParam,
  MapStateToPropsParam,
  MergeProps,
  Options,
} from 'react-redux'

type InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> = <
  TComponent extends React.ComponentType<TInjectedProps & any>
>(
  component: TComponent,
) => TComponent

interface Connect {
  <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}>(
    mapStateToProps?: MapStateToPropsParam<TStateProps, TOwnProps, RootState>,
    mapDispatchToProps?: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
  ): InferableComponentEnhancerWithProps<
    TStateProps & TDispatchProps,
    TOwnProps
  >

  <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}>(
    mapStateToProps?: MapStateToPropsParam<TStateProps, TOwnProps, RootState>,
    mapDispatchToProps?: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps?: MergeProps<
      TStateProps,
      TDispatchProps,
      TOwnProps,
      TMergedProps
    >,
    options?: Options<TStateProps, TOwnProps, TMergedProps>,
  ): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>
}

export const connectState = originalConnect as Connect
