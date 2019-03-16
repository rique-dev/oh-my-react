import {
  CardLive,
  CardSlim,
  Grid,
  Paper,
  PaperButton,
  Wrapper,
} from '@components'
import { Header, Sidebar } from '@containers'
import { henryqrm, luiz } from '@images'
import { bind, Fragment, Helmet, Page, React } from '@lib'
import { connectRoot } from '@state/root'
import { HomeParams } from './'
import s from './HomeStyle.scss'

@connectRoot()
export default class HomePage extends Page<HomeParams> {
  @bind
  clickCardSlim(e: React.MouseEvent<HTMLElement>): void {
    this.setState({}) // Envia para redux
  }

  render(): JSX.Element {
    // TODO: @henryqrm replace to state RootProps
    const { sidebar } = this.props as any

    return (
      <Fragment>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Header />
        <Sidebar />
        <PaperButton
          square
          elevation={1}
          isOpen={sidebar.isOpen}
          className={s.paperButtons}
        />
        <Wrapper marginX={72} marginY={24}>
          <Grid className={s.grid__root} container spacing={24}>
            <Grid item xs={12} sm={4} md={4} lg={3} xl={3}>
              <Grid container direction="column" spacing={24}>
                <Grid item>
                  <CardSlim
                    nameIcon="more_vert"
                    handleClick={this.clickCardSlim}
                    title={luiz.alt}
                    subtitle="Sixth grade"
                    infos={['Reports', 'Occurrences', 'Grades']}
                    color="#e4e4e4"
                    bgColor="#4976ab"
                    src={luiz.src}
                    alt={luiz.alt}
                  />
                </Grid>
                <Grid item>
                  <CardSlim
                    nameIcon="more_vert"
                    handleClick={this.clickCardSlim}
                    title={henryqrm.alt}
                    subtitle="Sixth grade"
                    infos={['Reports', 'Occurrences', 'Grades']}
                    color="#e4e4e4"
                    bgColor="#f0940a"
                    src={henryqrm.src}
                    alt={henryqrm.alt}
                  />
                </Grid>
                <Grid item>
                  <Paper>xs=6 sm=3</Paper>
                </Grid>
                <Grid item>
                  <Paper>xs=6 sm=3</Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={9} md={8} lg={9} xl={9}>
              <Grid container direction="column" spacing={24}>
                <Grid item>
                  <Grid container wrap="wrap" spacing={24}>
                    <Grid item xs={6} sm={4} md={4} lg={2} xl={2}>
                      <CardLive
                        nameIcon="chat-bubbles"
                        text="Hello! You have 16 unread
                        chat messages"
                        colorIcon="#ff5252"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={2} xl={2}>
                      <CardLive
                        nameIcon="agenda"
                        text="Today you have: 2 announcements
                        1 personal commitment"
                        colorIcon="#9c27b0"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={2} xl={2}>
                      <CardLive
                        nameIcon="bell-ringing"
                        text="Ready for next 5 classes
                        today?"
                        colorIcon="#3f51b5"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={2} xl={2}>
                      <CardLive
                        nameIcon="checklist"
                        text="Check your 9 pending
                        tasks"
                        colorIcon="#00bcd4"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={2} xl={2}>
                      <CardLive
                        nameIcon="form"
                        text="Please fill out 2 pending
                        forms"
                        colorIcon="#8bc34a"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={2} xl={2}>
                      <CardLive
                        nameIcon="networking"
                        text="You have 5 requests
                        waiting for action"
                        colorIcon="#ffc107"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                      <Paper>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                      <Paper>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                      <Paper>xs=6 sm=3</Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Wrapper>
      </Fragment>
    )
  }
}
