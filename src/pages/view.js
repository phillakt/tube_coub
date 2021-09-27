import React from "react";
import { connect } from "react-redux";

import "../ui/range/index.scss";

import { getCurrentCoubFetch } from "../actions/actionsCoubs";
import {
  getCoubsCurrentGenreFetch,
  getMoreCoubsCurrentGenreFetch,
  getDataGenreFetch,
} from "../actions/actionsGenres";

import Masonry from "react-masonry-css";
import Filter from "../components/sections/home/filter/filter";

import { Helmet } from "react-helmet";

class ViewCoubs extends React.Component {
  constructor(props) {
    super(props);

    this.Player = React.createRef();
    this.Controls = React.createRef();

    this.breakpointColumnsObj = {
      default: 5,
      1100: 4,
      700: 2,
      500: 2,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      // 3. Получаем коуб по параметрам url
      this.props.getCurrentCoubDispatch(nextProps.match.params);

      // 4. Скрол к плееру и автовключение
      this.scrollTop(this.Player.current);
    }
  }

  componentDidMount() {
    // 1. Получаем видео по id категории
    this.props.getCoubsCurrentGenreDispatch(this.props.match.params.id_genre);

    // 2. Получаем данные по жанру
    this.props.getDataGenreDispatch(this.props.match.params.id_genre);

    // 3. Получаем коуб по параметрам url
    this.props.getCurrentCoubDispatch(this.props.match.params);

    const player = this.Player.current;
    // const controls = this.Controls.current;
    player.volume = 0.5;

    this.scrollTop(player);
  }

  play() {
    const player = this.Player.current;
    player.play();
  }

  pause() {
    const player = this.Player.current;
    player.pause();
  }

  reload() {
    const player = this.Player.current;
    player.pause();
    player.currentTime = 0;
    player.play();
  }

  muted() {
    const player = this.Player.current;

    if (player.muted) {
      player.muted = false;
    } else {
      player.muted = true;
    }
  }

  stop() {
    const player = this.Player.current;
    player.pause();
    player.currentTime = 0;
  }

  volume(volumeVal) {
    const player = this.Player.current;
    player.volume = volumeVal;
  }

  scrollTop(player) {
    window.scroll({ top: 0 });
    const readySt = setInterval(() => {
      if (player.readyState === 4) {
        player.play();

        clearInterval(readySt);
      }
    }, 300);

    // function scrollTopAnime() {
    //   const mobileWidth = 567;

    //   if (window.innerWidth <= mobileWidth) {
    //     // Быстрый подъем экрана для мобильных устройств
    //     window.scroll({ top: 0 });

    //     const readySt = setInterval(() => {
    //       if (player.readyState === 4) {
    //         player.play();

    //         clearInterval(readySt);
    //       }
    //     }, 300);

    //   } else {
    //     if (window.pageYOffset > 0) {
    //       window.scrollBy({ top: -150 });
    //       requestAnimationFrame(scrollTopAnime);

    //     } else {

    //       const readySt = setInterval(() => {
    //         if (player.readyState === 4) {
    //           player.play();

    //           clearInterval(readySt);
    //         }
    //       }, 300);
    //     }
    //   }
    // }
    // requestAnimationFrame(scrollTopAnime);
  }

  onWheelDownStopVideo() {
    const player = this.Player.current;

    const mobileWidth = 567;

    if (window.innerWidth <= mobileWidth) {
      if (window.pageYOffset >= 400) {
        player.pause();
      }
    } else {
      if (window.pageYOffset >= 300) {
        player.pause();
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="section section--head"
          onWheel={() => {
            this.onWheelDownStopVideo();
          }}
          onTouchMove={() => {
            this.onWheelDownStopVideo();
          }}
        >
          <div className="container">
            {/* article */}
            <div className="article">
              <div className="row">
                <div className="col-12">
                  {/* video player */}
                  <div className="player-wrap">
                    {/* article content */}
                    <div className="article__content">
                      <h1>{this.props.coubs.getCurrentCoub.title}</h1>
                    </div>
                    {/* end article content */}

                    <div className="player-box">
                      <video
                        id="player"
                        duration="true"
                        loop={true}
                        ref={this.Player}
                        src={this.props.coubs.getCurrentCoub.original_url_video}
                      ></video>

                      <div
                        className="player-wrap__controls"
                        ref={this.Controls}
                      >
                        <div className="player-btns">
                          <button
                            className="play"
                            onClick={() => {
                              this.play();
                            }}
                          >
                            <svg
                              version="1.1"
                              width={512}
                              height={512}
                              x={0}
                              y={0}
                              viewBox="0 0 24 24"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g
                                  xmlns="http://www.w3.org/2000/svg"
                                  clipRule="evenodd"
                                  fill="rgb(0,0,0)"
                                  fillRule="evenodd"
                                >
                                  <path
                                    d="m9.765 6.576c-.15414-.09633-.34841-.10143-.50738-.01332-.15898.08811-.25762.25556-.25762.43732v10c0 .1818.09864.3492.25762.4373.15897.0881.35324.083.50738-.0133l8-5c.1462-.0914.235-.2516.235-.424s-.0888-.3326-.235-.424zm6.7916 5.424-6.5566 4.0979v-8.19578z"
                                    fill="#ffffff"
                                    data-original="#000000"
                                    style={{}}
                                  />
                                  <path
                                    d="m12 1.5c-5.79899 0-10.5 4.70101-10.5 10.5 0 5.799 4.70101 10.5 10.5 10.5 5.799 0 10.5-4.701 10.5-10.5 0-5.79899-4.701-10.5-10.5-10.5zm-9.5 10.5c0-5.24671 4.25329-9.5 9.5-9.5 5.2467 0 9.5 4.25329 9.5 9.5 0 5.2467-4.2533 9.5-9.5 9.5-5.24671 0-9.5-4.2533-9.5-9.5z"
                                    fill="#ffffff"
                                    data-original="#000000"
                                    style={{}}
                                  />
                                </g>
                              </g>
                            </svg>
                          </button>

                          <button
                            className="pause"
                            onClick={() => {
                              this.pause();
                            }}
                          >
                            <svg
                              version="1.1"
                              width={512}
                              height={512}
                              x={0}
                              y={0}
                              viewBox="0 0 24 24"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="rgb(0,0,0)"
                                >
                                  <path
                                    d="m10 8.5c0-.27614-.22386-.5-.5-.5s-.5.22386-.5.5v7c0 .2761.22386.5.5.5s.5-.2239.5-.5z"
                                    fill="#ffffff"
                                    data-original="#000000"
                                    style={{}}
                                  />
                                  <path
                                    d="m14.5 8c.2761 0 .5.22386.5.5v7c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-7c0-.27614.2239-.5.5-.5z"
                                    fill="#ffffff"
                                    data-original="#000000"
                                    style={{}}
                                  />
                                  <path
                                    clipRule="evenodd"
                                    d="m12 1.5c-5.79899 0-10.5 4.70101-10.5 10.5 0 5.799 4.70101 10.5 10.5 10.5 5.799 0 10.5-4.701 10.5-10.5 0-5.79899-4.701-10.5-10.5-10.5zm-9.5 10.5c0-5.24671 4.25329-9.5 9.5-9.5 5.2467 0 9.5 4.25329 9.5 9.5 0 5.2467-4.2533 9.5-9.5 9.5-5.24671 0-9.5-4.2533-9.5-9.5z"
                                    fillRule="evenodd"
                                    fill="#ffffff"
                                    data-original="#000000"
                                    style={{}}
                                  />
                                </g>
                              </g>
                            </svg>
                          </button>

                          <button
                            className="stop"
                            onClick={() => {
                              this.stop();
                            }}
                          >
                            <svg
                              version="1.1"
                              width={512}
                              height={512}
                              x={0}
                              y={0}
                              viewBox="0 0 24 24"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g
                                  xmlns="http://www.w3.org/2000/svg"
                                  clipRule="evenodd"
                                  fill="rgb(0,0,0)"
                                  fillRule="evenodd"
                                >
                                  <path
                                    d="m10 7.5c-1.38071 0-2.5 1.11929-2.5 2.5v4c0 1.3807 1.11929 2.5 2.5 2.5h4c1.3807 0 2.5-1.1193 2.5-2.5v-4c0-1.38071-1.1193-2.5-2.5-2.5zm-1.5 2.5c0-.82843.67157-1.5 1.5-1.5h4c.8284 0 1.5.67157 1.5 1.5v4c0 .8284-.6716 1.5-1.5 1.5h-4c-.82843 0-1.5-.6716-1.5-1.5z"
                                    fill="#ffffff"
                                    data-original="#000000"
                                    style={{}}
                                  />
                                  <path
                                    d="m12 1.5c-5.79899 0-10.5 4.70101-10.5 10.5 0 5.799 4.70101 10.5 10.5 10.5 5.799 0 10.5-4.701 10.5-10.5 0-5.79899-4.701-10.5-10.5-10.5zm-9.5 10.5c0-5.24671 4.25329-9.5 9.5-9.5 5.2467 0 9.5 4.25329 9.5 9.5 0 5.2467-4.2533 9.5-9.5 9.5-5.24671 0-9.5-4.2533-9.5-9.5z"
                                    fill="#ffffff"
                                    data-original="#000000"
                                    style={{}}
                                  />
                                </g>
                              </g>
                            </svg>
                          </button>

                          <button
                            className="reload"
                            onClick={() => {
                              this.reload();
                            }}
                          >
                            <svg
                              version="1.1"
                              width={512}
                              height={512}
                              x={0}
                              y={0}
                              viewBox="0 0 24 24"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="rgb(0,0,0)"
                                >
                                  <path
                                    d="m16.4511 5.78427c.1191.24912.0137.54765-.2354.6668l-1.5367.73497c2.2065.67942 3.821 2.66237 3.821 5.03136 0 2.9382-2.4836 5.2826-5.5 5.2826-.2761 0-.5-.2239-.5-.5s.2239-.5.5-.5c2.5065 0 4.5-1.9381 4.5-4.2826 0-2.0667-1.5491-3.81763-3.6331-4.20354l1.0762 2.05884c.1279.2447.0333.5468-.2115.6748-.2447.1279-.5468.0332-.6747-.2115l-1.5-2.86959c-.0629-.12025-.0742-.26089-.0313-.38963s.1363-.23452.2587-.29306l3-1.43479c.2491-.11914.5476-.01378.6668.23534z"
                                    fill="#ffffff"
                                    data-original="#000000"
                                    style={{}}
                                  />
                                  <path
                                    d="m7.78427 17.5489c-.24911.1192-.35448.4177-.23534.6668.11915.2491.41768.3545.6668.2354l2.99997-1.4348c.1224-.0586.2158-.1643.2587-.2931.0429-.1287.0316-.2694-.0313-.3896l-1.49999-2.8696c-.12792-.2447-.43001-.3394-.67474-.2115-.24472.128-.33941.4301-.21148.6748l1.07621 2.0588c-2.08399-.3859-3.6331-2.1368-3.6331-4.2035 0-2.3445 1.99354-4.2826 4.5-4.2826.2761 0 .5-.22386.5-.5s-.2239-.5-.5-.5c-3.01639 0-5.5 2.34439-5.5 5.2826 0 2.369 1.6145 4.3519 3.82102 5.0314z"
                                    fill="#ffffff"
                                    data-original="#000000"
                                    style={{}}
                                  />
                                  <path
                                    clipRule="evenodd"
                                    d="m1.5 12c0-5.79899 4.70101-10.5 10.5-10.5 5.799 0 10.5 4.70101 10.5 10.5 0 5.799-4.701 10.5-10.5 10.5-5.79899 0-10.5-4.701-10.5-10.5zm10.5-9.5c-5.24671 0-9.5 4.25329-9.5 9.5 0 5.2467 4.25329 9.5 9.5 9.5 5.2467 0 9.5-4.2533 9.5-9.5 0-5.24671-4.2533-9.5-9.5-9.5z"
                                    fillRule="evenodd"
                                    fill="#ffffff"
                                    data-original="#000000"
                                    style={{}}
                                  />
                                </g>
                              </g>
                            </svg>
                          </button>

                          {/* Muted method for Player */}
                          {/* <button
                            className="muted"
                            onClick={() => {
                              this.muted();
                            }}
                          >

                            <svg
                              version="1.1"
                              width={512}
                              height={512}
                              x={0}
                              y={0}
                              viewBox="0 0 24 24"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="rgb(0,0,0)"
                                >
                                  <path
                                    clipRule="evenodd"
                                    d="m14.5 3c0-.1844-.1015-.35383-.2641-.44084-.1625-.08701-.3598-.07747-.5132.02482l-5.10945 3.40626c-.21477.14318-.40305.31657-.56072.51249-.01727-.00181-.03479-.00273-.05253-.00273h-4c-1.38071 0-2.5 1.11929-2.5 2.5v6c0 1.3807 1.11929 2.5 2.5 2.5h4c.01774 0 .03526-.0009.05253-.0027.15767.1959.34595.3693.56072.5125l5.10945 3.4062c.1534.1023.3507.1118.5132.0248.1626-.087.2641-.2564.2641-.4408zm-6 12.9296c0 .5016.25065.9699.66795 1.2481l4.33205 2.888v-16.13144l-4.33205 2.88803c-.4173.2782-.66795.74655-.66795 1.24808zm-1-8.4296h-3.5c-.82843 0-1.5.67157-1.5 1.5v6c0 .8284.67157 1.5 1.5 1.5h3.5z"
                                    fillRule="evenodd"
                                    fill="#ffffff"
                                    data-original="#000000"
                                  />
                                  <path
                                    d="m17.5251 9.52518c.1953-.19526.5119-.19526.7071 0l1.7678 1.76772 1.7678-1.76776c.1952-.19526.5118-.19526.7071 0 .1952.19527.1952.51186 0 .70716l-1.7678 1.7677 1.7678 1.7678c.1952.1953.1952.5119 0 .7071-.1953.1953-.5119.1953-.7071 0l-1.7678-1.7678-1.7678 1.7678c-.1952.1953-.5118.1953-.7071 0-.1952-.1953-.1952-.5119 0-.7071l1.7678-1.7678-1.7678-1.7677c-.1952-.1953-.1952-.51185 0-.70712z"
                                    fill="#ffffff"
                                    data-original="#000000"
                                  />
                                </g>
                              </g>
                            </svg>
                          
                          </button> */}
                        </div>

                        <div className="volume">
                          <input
                            type="range"
                            step="0.1"
                            min={0}
                            max={1}
                            defaultValue={0.5}
                            className="input-volume"
                            onChange={(e) => {
                              this.volume(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end video player */}
                </div>
              </div>
            </div>
            {/* end article */}
          </div>
        </section>

        <section
          className="section"
          onWheel={() => {
            this.onWheelDownStopVideo();
          }}
          onTouchMove={() => {
            this.onWheelDownStopVideo();
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="section__title">
                  {this.props.coubs.getDataGenre.title}
                </h2>
                <Masonry
                  breakpointCols={this.breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {/* Коубы по категории */}
                  {this.props.coubs.getCoubsCurrentGenre
                    ? this.props.coubs.getCoubsCurrentGenre.map((item, i) => {
                        const genre = {
                          id: item.parent_id,
                          slug: item.slug,
                        };

                        return (
                          <Filter
                            key={item.slug}
                            filterCoubFromGenres={item}
                            genre={genre}
                          />
                        );
                      })
                    : null}
                </Masonry>
              </div>
            </div>

            {this.props.coubs.getMoreCoubsCurrentGenre.bntMoreCoubView ? (
              <div className="row">
                <div className="col-12">
                  <button
                    className="catalog__more"
                    type="button"
                    onClick={() => {
                      let idGenre =
                        this.props.coubs.getMoreCoubsCurrentGenre.idGenre;

                      let step = this.props.coubs.getMoreCoubsCurrentGenre.step;

                      this.props.getMoreCoubsCurrentGenreDispatch(
                        idGenre,
                        step ? step : 1
                      );
                    }}
                  >
                    Dобавки
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (props) => {
  return props;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentCoubDispatch: (param) => {
      dispatch(getCurrentCoubFetch(param));
    },
    getCoubsCurrentGenreDispatch: (idGenre) => {
      dispatch(getCoubsCurrentGenreFetch(idGenre));
    },
    getDataGenreDispatch: (idGenre) => {
      dispatch(getDataGenreFetch(idGenre));
    },
    getMoreCoubsCurrentGenreDispatch: (idGenre, step) => {
      dispatch(getMoreCoubsCurrentGenreFetch(idGenre, step));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCoubs);
